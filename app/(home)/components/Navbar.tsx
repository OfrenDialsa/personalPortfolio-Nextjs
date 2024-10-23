import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function navbar({className}: {className?:string} ) {
  const social = [
    {
      link: "https://github.com/OfrenDialsa",
      label: "GitHub",
      icon: SiGithub,
    },
    {
      link: "https://www.linkedin.com/in/ofren-dialsa-64b6b2239/",
      label: "Linkedin",
      icon: SiLinkedin,
    },
    {
      link: "https://www.instagram.com/ofren_",
      label: "Instagram",
      icon: SiInstagram,
    },
  ];

  return (
    <nav className={cn("py-10 flex justify-between items-center animate-move-down", className)}>
      <h1 className="text-1xl font-bold underline underline-offset-8 decoration-blue-700 -rotate-2">
        Ofren Dialsa🤓
      </h1>
      <div className="flex items-center gap-6 relative">
        {social.map((social, index) => {
          const Icons = social.icon;

          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icons className="w-7 h-7 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
