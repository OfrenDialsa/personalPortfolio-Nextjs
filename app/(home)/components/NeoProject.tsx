"use client";
import { cn } from "@/lib/utils";
import React, { Children } from "react";
import { BentoGrid, BentoGridItem } from "@/components/UI/Bento-grid";
import {
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandVisualStudio,
  IconClipboardCopy,
  IconFileBroken,
  IconHtml,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Title from "./Title";
import Image from "next/image";
import Link from "next/link";
import { SiCss3, SiHtml5, SiJavascript } from "react-icons/si";

export function NeoProject() {
  const items = [
    {
      title: "Simple Calculator",
      description: "Calcucator for everyday use, and it's not an advanced one",
      imageUrl: "/calculator.png",
      Children: "Open Project",
      link: "https://neeerooo.github.io/Simple-calculator/",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconBrandJavascript className="h-6 w-6 text-neutral-500" />,
    },
    {
      title: "Tic Tac Toe",
      imageUrl: "/tictactoe.png",
      description:
        "A simple tic tac toe game as an implemetation of array in javascript.",
      header: <Skeleton />,
      link: "https://neeerooo.github.io/Tic-Tac-Toe/",
      className: "md:col-span-2",
      icon: <IconBrandJavascript className="h-6 w-6 text-neutral-500" />,
    },
    {
      title: "Weather App",
      description: "A complex Weather App using Next.js and Openweather App API.",
      imageUrl: "/WeatherApp.png",
      header: <Skeleton />,
      link: "https://github.com/Neeerooo/Weather-app.git",
      className: "md:col-span-2",
      icon: <IconBrandNextjs className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Library Management System",
      description:
        "Library Management system using C#, Mysql and .Net Framework .",
      imageUrl: "/Library.png",
      header: <Skeleton />,
      link: "https://github.com/Neeerooo/ProjectLibraryManagementSystem_FinalProject.git",
      className: "md:col-span-1",
      icon: <IconBrandVisualStudio className="h-4 w-4 text-neutral-500" />,
    },
    
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects ⚒️"
        ClassName="flex flex-col items-center justify-center mb-10"
      />{" "}
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <Link href={item.link} key={i} className={item.className}>
            <BentoGridItem
              key={i}
              children={item.Children}
              title={item.title}
              description={item.description}
              link={item.link}
              header={item.header}
              className={item.className}
              icon={item.icon}
              imageClassName={item.imageUrl}
              imageUrl={item.imageUrl}
            />
          </Link>
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div>
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  </div>
);
