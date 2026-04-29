
import React from "react";

const Loader = () => {
  return (
    <>
      <style>{`
        @keyframes textFill {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
        .fill-text {
          animation: textFill 1.5s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
        <div className="relative inline-block">
          <h1
            className="text-5xl md:text-7xl font-serif tracking-widest select-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.2)",
            }}
          >
            Priyanshu
          </h1>

          <div className="fill-text absolute inset-0 overflow-hidden whitespace-nowrap">
            <h1
              className="text-5xl md:text-7xl font-serif tracking-widest select-none"
              style={{ color: "#FFC700" }}
            >
              Priyanshu
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
