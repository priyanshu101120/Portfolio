'use client';

import { useEffect, useRef } from 'react';
import { Damion } from 'next/font/google';

const damion = Damion({ weight: '400', subsets: ['latin'], display: 'swap' });

interface CharcoalTextProps {
  /** Text to draw */
  text?: string;
  /** Pigment colour (hex). Default = portfolio yellow */
  color?: string;
  /** Blur amount on hover, as a fraction of the font size */
  blurRatio?: number;
  /** Max font size in px */
  maxFontSize?: number;
  className?: string;
}

let noiseTable: Float32Array | null = null;
function noiseAt(x: number, y: number): number {
  if (!noiseTable) {
    noiseTable = new Float32Array(65536);
    for (let i = 0; i < noiseTable.length; i++) noiseTable[i] = Math.random();
  }
  x = ((x % 256) + 256) % 256;
  y = ((y % 256) + 256) % 256;
  const x0 = x | 0,
    y0 = y | 0,
    x1 = (x0 + 1) & 255,
    y1 = (y0 + 1) & 255,
    fx = x - x0,
    fy = y - y0;
  const a = noiseTable[y0 * 256 + x0],
    b = noiseTable[y0 * 256 + x1],
    c = noiseTable[y1 * 256 + x0],
    d = noiseTable[y1 * 256 + x1];
  const sx = fx * fx * (3 - 2 * fx),
    sy = fy * fy * (3 - 2 * fy);
  const top = a + (b - a) * sx;
  return top + (c + (d - c) * sx - top) * sy;
}

function boxBlur(src: Float32Array, w: number, h: number, r: number): Float32Array {
  const tmp = new Float32Array(w * h);
  const out = new Float32Array(w * h);
  const n = 2 * r + 1;
  for (let y = 0; y < h; y++) {
    const o = y * w;
    let s = 0;
    for (let k = -r; k <= r; k++) s += src[o + Math.min(w - 1, Math.max(0, k))];
    for (let x = 0; x < w; x++) {
      tmp[o + x] = s / n;
      s += src[o + Math.min(w - 1, x + r + 1)] - src[o + Math.max(0, x - r)];
    }
  }
  for (let x = 0; x < w; x++) {
    let s = 0;
    for (let k = -r; k <= r; k++) s += tmp[Math.min(h - 1, Math.max(0, k)) * w + x];
    for (let y = 0; y < h; y++) {
      out[y * w + x] = s / n;
      s += tmp[Math.min(h - 1, y + r + 1) * w + x] - tmp[Math.max(0, y - r) * w + x];
    }
  }
  return out;
}

function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace('#', '').trim();
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const n = parseInt(h, 16);
  if (Number.isNaN(n)) return [255, 199, 0];
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export default function CharcoalText({
  text = 'Priyanshu',
  color = '#FFC700',
  blurRatio = 0.06,
  maxFontSize = 240,
  className = '',
}: CharcoalTextProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const base = baseRef.current;
    const glow = glowRef.current;
    if (!wrap || !base || !glow) return;
    const bctx = base.getContext('2d');
    const gctx = glow.getContext('2d');
    if (!bctx || !gctx) return;

    const fam = damion.style.fontFamily;
    const fontStr = (px: number) => `400 ${px}px ${fam}`;

    let cancelled = false;
    let lastKey = '';
    let visible = false;
    let io: IntersectionObserver | null = null;
    let ro: ResizeObserver | null = null;
    let timer: ReturnType<typeof setTimeout> | undefined;

    // Layout info from the last draw
    let fsPx = 200;
    let blurMax = 10;
    let radiusMax = 80;
    let pw = 0;
    let ph = 0;
    let ink: Uint8Array | null = null; // alpha map of the texture, used for hit-testing

    // Hover state
    let hovering = false;
    let intensity = 0; // 0 = sharp, 1 = fully blurred
    let px = 0;
    let py = 0; // smoothed pointer position (CSS px, relative to canvas)
    let tx = 0;
    let ty = 0; // target pointer position
    let raf = 0;
    let last = 0;

    const render = () => {
      if (intensity <= 0.001) {
        base.style.maskImage = 'none';
        base.style.webkitMaskImage = 'none';
        glow.style.display = 'none';
        return;
      }
      glow.style.display = 'block';

      const r = intensity * radiusMax;
      const feather = Math.max(16, fsPx * 0.2);

      // Sharp layer: hole where the cursor is
      const holeMask = `radial-gradient(circle at ${px}px ${py}px, transparent ${r}px, #000 ${r + feather}px)`;
      base.style.maskImage = holeMask;
      base.style.webkitMaskImage = holeMask;

      // Blurred layer: visible only inside the cursor circle
      const glowMask = `radial-gradient(circle at ${px}px ${py}px, #000 ${r}px, transparent ${r + feather}px)`;
      glow.style.maskImage = glowMask;
      glow.style.webkitMaskImage = glowMask;
      glow.style.filter = `blur(${(intensity * blurMax).toFixed(2)}px)`;
    };

    const tick = (now: number) => {
      const dt = last ? Math.min(64, now - last) : 16;
      last = now;

      const target = hovering ? 1 : 0;
      // Blur badhne mein 900ms, kam hone mein 500ms
      const step = dt / (hovering ? 900 : 500);
      if (intensity < target) intensity = Math.min(target, intensity + step);
      else if (intensity > target) intensity = Math.max(target, intensity - step);

      // Cursor ke saath smooth movement
      px += (tx - px) * 0.2;
      py += (ty - py) * 0.2;

      render();

      const settled =
        intensity === target && Math.abs(tx - px) < 0.2 && Math.abs(ty - py) < 0.2;
      if (settled) {
        raf = 0;
        last = 0;
      } else {
        raf = requestAnimationFrame(tick);
      }
    };

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const r = base.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const inside = x >= 0 && y >= 0 && x <= r.width && y <= r.height;

      if (!inside) {
        hovering = false;
      } else {
        tx = x;
        ty = y;
        if (intensity === 0) {
          px = x;
          py = y;
        }
        if (ink && pw && ph) {
          const ix = Math.min(pw - 1, Math.floor((x / r.width) * pw));
          const iy = Math.min(ph - 1, Math.floor((y / r.height) * ph));
          // Sirf letters (ink) par hi hover maano
          hovering = ink[iy * pw + ix] > 40;
        } else {
          hovering = false;
        }
      }
      kick();
    };

    const onLeave = () => {
      hovering = false;
      kick();
    };

    const draw = () => {
      const txt = text.trim();
      const D = Math.min(2, window.devicePixelRatio || 1);
      const avail = Math.floor(wrap.clientWidth);
      const key = `${txt}|${color}|${avail}|${D}|${blurRatio}|${maxFontSize}`;
      if (key === lastKey) return;
      lastKey = key;

      bctx.setTransform(1, 0, 0, 1, 0, 0);
      gctx.setTransform(1, 0, 0, 1, 0, 0);
      if (!txt || !avail) {
        base.width = 0;
        base.height = 0;
        glow.width = 0;
        glow.height = 0;
        ink = null;
        return;
      }

      const m = document.createElement('canvas');
      const mx = m.getContext('2d');
      if (!mx) return;
      mx.font = fontStr(300);
      const w0 = mx.measureText(txt).width;
      fsPx = Math.min(avail / (w0 / 300 + 0.6), maxFontSize);
      blurMax = Math.max(4, fsPx * blurRatio);
      radiusMax = fsPx * 0.4;

      const sc = Math.min(D, 1.5);
      const pad = Math.ceil(fsPx * 0.3);
      const tw = Math.ceil((fsPx * w0) / 300 + pad * 2);
      // HEIGHT FIX: pehle fs * 1.7 tha, ab tight bounding box
      const th = Math.ceil(fsPx * 1.42);
      pw = Math.ceil(tw * sc);
      ph = Math.ceil(th * sc);

      m.width = pw;
      m.height = ph;
      mx.font = fontStr(fsPx * sc);
      mx.fillStyle = '#000';
      mx.fillText(txt, pad * sc, fsPx * 1.0 * sc); // baseline ko upar-neeche tune kar sakte hain
      const ad = mx.getImageData(0, 0, pw, ph).data;

      let b: Float32Array = new Float32Array(pw * ph);
      for (let i = 0; i < b.length; i++) b[i] = ad[i * 4 + 3] / 255;
      const br = Math.max(1, Math.round(fsPx * sc * 0.014));
      b = boxBlur(boxBlur(b, pw, ph, br), pw, ph, br);

      const [cr, cg, cb] = hexToRgb(color);
      const tex = document.createElement('canvas');
      tex.width = pw;
      tex.height = ph;
      const tg = tex.getContext('2d');
      if (!tg) return;
      const id = tg.createImageData(pw, ph);
      const o = id.data;
      const inkBuf = new Uint8Array(pw * ph);
      const u = sc;
      const ca = Math.cos(1.05),
        sa = Math.sin(1.05);

      for (let y = 0; y < ph; y++) {
        for (let x = 0; x < pw; x++) {
          const i = y * pw + x;
          const bb = Math.min(1, b[i] * 1.15);
          if (bb < 0.08) continue;
          const lo = noiseAt(x / (14 * u), y / (14 * u));
          const hi = noiseAt(x / (2.4 * u) + 50, y / (2.4 * u));
          const st = noiseAt(
            (x * ca + y * sa) / (9 * u) + 99,
            (-x * sa + y * ca) / (1.2 * u),
          );
          const v =
            bb * (0.62 + 0.45 * lo) * (0.75 + 0.4 * st) +
            (hi - 0.5) * 0.5 +
            (Math.random() - 0.5) * 0.22;
          let a = (v - 0.36) / 0.22;
          a = a < 0 ? 0 : a > 1 ? 1 : a;
          if (a < 0.02) continue;
          const sh = 0.82 + 0.3 * lo;
          const j = i * 4;
          o[j] = Math.min(255, cr * sh);
          o[j + 1] = Math.min(255, cg * sh);
          o[j + 2] = Math.min(255, cb * sh);
          o[j + 3] = a * 255;
          inkBuf[i] = a * 255;
        }
      }
      tg.putImageData(id, 0, 0);
      ink = inkBuf;

      const cw = Math.ceil(tw * D);
      const chh = Math.ceil(th * D);
      for (const c of [base, glow]) {
        c.width = cw;
        c.height = chh;
        c.style.width = `${tw}px`;
        c.style.height = `${th}px`;
      }
      bctx.drawImage(tex, 0, 0, cw, chh);
      gctx.drawImage(tex, 0, 0, cw, chh);

      render();
    };

    Promise.race([
      document.fonts.load(fontStr(100)),
      new Promise((r) => setTimeout(r, 1800)),
    ])
      .catch(() => {})
      .then(() => {
        if (cancelled) return;
        io = new IntersectionObserver(
          (entries) => {
            if (!visible && entries.some((e) => e.isIntersecting)) {
              visible = true;
              draw();
            }
          },
          { rootMargin: '400px 0px' },
        );
        io.observe(wrap);
        ro = new ResizeObserver(() => {
          if (!visible) return;
          clearTimeout(timer);
          timer = setTimeout(draw, 120);
        });
        ro.observe(wrap);
      });

    wrap.addEventListener('pointermove', onMove);
    wrap.addEventListener('pointerleave', onLeave);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      cancelAnimationFrame(raf);
      ro?.disconnect();
      io?.disconnect();
      wrap.removeEventListener('pointermove', onMove);
      wrap.removeEventListener('pointerleave', onLeave);
    };
  }, [text, color, blurRatio, maxFontSize]);

  return (
    <div ref={wrapRef} className={`w-full ${className}`}>
      <span className={`sr-only ${damion.className}`}>{text}</span>
      <div className="relative mx-auto" style={{ width: 'fit-content' }}>
        {/* Sharp text */}
        <canvas ref={baseRef} aria-hidden="true" className="block" />
        {/* Blurred text, sirf cursor ke aas-paas dikhta hai */}
        <canvas
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0"
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
}
