import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Title from "./components/Title";
import Footer from "./components/Footer";
import { NeoProject } from "./components/NeoProject";

export default function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar />
        </div>
        <div className="max-w-7xl mx-auto p-5 mt-4">
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -botton-5 left-0 xl::bottom-0 w-full"></div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <NeoProject/>
        <Footer />
      </div>
    </div>
  );
}
