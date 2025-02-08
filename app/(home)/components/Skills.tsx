"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/UI/Card-hover-effect'
import { SiAndroid, SiCsharp, SiDotnet, SiGithub, SiJavascript, SiJetpackcompose, SiKotlin, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiPython, SiReact, SiTypescript, SiVite } from 'react-icons/si'
import { text } from 'stream/consumers';
import { Icon } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      text:"Jetpack Compose",
      icon:SiJetpackcompose
    },
    {
      text:"Android XML",
      icon:SiAndroid
    },
    {
      text:"React",
      icon:SiReact
    },
    {
      text:"Next.Js",
      icon:SiNextdotjs
    },
    {
      text:"Vite",
      icon:SiVite
    },
    {
      text:"Node.Js",
      icon:SiNodedotjs
    },
    {
      text:".Net",
      icon:SiDotnet
    },
    {
      text:"Kotlin",
      icon:SiKotlin
    },
    {
      text:"Javascript",
      icon:SiJavascript
    },
    {
      text:"Typescript",
      icon:SiTypescript
    },
    {
      text:"Phyton",
      icon:SiPython
    },
    {
      text:"PHP",
      icon:SiPhp
    },
    {
      text:"C#",
      icon:SiCsharp
    },
    {
      text:"Github",
      icon:SiGithub
    },
    {
      text:"MySQL",
      icon:SiMysql
    },
  ]
  
  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title text="Skills 👨‍💻" ClassName='flex flex-col items-center justify-center mt-10'/>
      <HoverEffect items={skills}/>
    </div>
  )
}
