"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/UI/Card-hover-effect'
import { SiCsharp, SiGithub, SiJavascript, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiPython, SiReact, SiVite } from 'react-icons/si'

export default function Skills() {
  const skills = [
    {
      text:"React",
      icon:SiReact
    },
    {
      text:"Next.Js",
      icon:SiNextdotjs
    },
    {
      text:"Node.Js",
      icon:SiNodedotjs
    },
    {
      text:"Javascript",
      icon:SiJavascript
    },
    {
      text:"Github",
      icon:SiGithub
    },
    {
      text:"Vite",
      icon:SiVite
    },
    {
      text:"MySQL",
      icon:SiMysql
    },
    {
      text:"Phyton",
      icon:SiPython
    },
    {
      text:"PHP",
      icon:SiPhp
    },
  ]
  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title text="Skills 👨‍💻" ClassName='flex flex-col items-center justify-center -rotate-6'/>
      <HoverEffect items={skills}/>
    </div>
  )
}
