import React from "react";
import { SiCss3, SiHtml5, SiJavascript } from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/UI/direction-aware-hover";
import { BentoGrid } from "@/components/UI/Bento-grid";

export default function Projects() {
  const projects = [
    {
      title: "Calculator",
      tech: [SiHtml5, SiCss3, SiJavascript],
      link: "https://neeerooo.github.io/Simple-calculator/",
      cover: "/calculator.png",
      background: "bg-gray-500",
    },
    {
      title: "Tic Tac Toe",
      tech: [SiHtml5, SiCss3, SiJavascript],
      link: "https://neeerooo.github.io/Tic-Tac-Toe/",
      cover: "/tictactoe.png",
      background: "bg-gray-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects ⚒️"
        ClassName="flex flex-col items-center justify-center -rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-semibold">{project.title}</h1>
                    <div className="flex item-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
