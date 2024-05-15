import Link from "next/link";
import React from "react";
import { MovingBorderBtn } from "@/components/UI/moving-border";
import Title  from "./Title";

export default function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-16 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-6xl ig:text-7xl font-bold">
          Salam kenal semuanya! 👋 <br /> {""}
          <span className="underline underline-offset-8 decoration-green-500">
            {"Saya Ofren dialsa."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-grey-300 text-center lg:text-left">
          {
            "Sekarang saya berkuliah di Prodi Sistem informasi, Universitas jambi, dan saya telah mengembangkan beberapa project di bidang web development"
          }
        </p>
        <Link
          href="mailto:ofrendial25@gmail.com"
          className="inline-block group"
        > 
          <Title text="Contact me 📫"/>
        </Link>
      </div>
      <div className="ml-10 relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
            <div className="flex gap-3 translate-x-8">
              <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
              <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
            </div>
            <div className="flex gap-3 -translate-x-8">
              <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
              <div className="w-32 h-32 rounded-full bg-green-500"></div>
            </div>
            <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="">
            <img
              src="https://media.istockphoto.com/id/1207488059/vector/cute-small-green-chameleon-lizard-cartoon-animal-design-flat-vector-illustration-isolated-on.jpg?s=612x612&w=0&k=20&c=HRG8PY4valWYqbwoNgeyQAxAsk1u0uhXYgjmtwCJwGk="
              alt="Profile Photo" className="absolute w-64 h-64 rounded-full top-[0%] border hover:scale-125 transition-all"
            />
            <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn
            borderRadius="0.5rem"
            className="p-3 font-semibold hover:text-green-400 transition-all"
          >
            <p>🏢 Available for intern</p>
          </MovingBorderBtn>
        </div>
        </div>
      </div>
    </div>
  );
}
