import type { IconType } from "react-icons";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

interface Social {
  name: string;
  handle: string;
  url: string;
  icon: IconType;
}

export const socials = [
  {
    name: "GitHub",
    handle: "priyanshu101120",
    url: "https://github.com/priyanshu101120",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    handle: "priyanshu-singh-452459360",
    url: "https://www.linkedin.com/in/priyanshu-singh-452459360",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    handle: "aarab.ii",
    url: "https://www.instagram.com/thoughtsfullines",
    icon: FaInstagram,
  },
 
] satisfies Social[];