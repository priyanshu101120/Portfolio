interface Name {
  full: string;
  first: string;
  last: string;
}

interface Location {
  city: string;
  state: string;
}

interface Education {
  uni: string;
  degree: string;
  major: string;
  batch: string;
  location: Location;
}


interface Profile {
  name: Name;
  education: Education;

  about: string[];
}

export const profile: Profile = {
  name: {
    full: 'Priyanshu Singh',
    first: 'Priyanshu',
    last: 'Singh',
  },

  education: {
    uni: 'Lovely Professional University - LPU',
    degree: 'BCA (Bachelor of Computer Applications)',
    major: 'AI ',
    batch: '2025 - 2028',
    location: {
      city: 'jalndhar',
      state: 'Punjab',
    },
  },

  about: [
    "I build things, break things, and occasionally fix things that weren't broken in the first place. Somewhere between bad ideas and too much curiosity, good software tends to happen.",
    "I have a dangerous amount of confidence for someone whose first solution is usually 'fuck it, let's see what happens.' Surprisingly, this has worked more often than it should.",
    "I don't have everything figured out, and that's kind of the point. I chase whatever looks interesting, disappear down unnecessary rabbit holes, and somehow come back with either something cool or a very specific lesson on what never to do again.",
    'Still learning. Still shipping. Still pretending console.log was part of the debugging strategy all along.',
  ],
};
