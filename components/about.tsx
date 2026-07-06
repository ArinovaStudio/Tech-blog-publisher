"use client";

import {
  ArrowRight,
  Globe,
  Coffee,
  Video ,
} from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { BsSubstack } from "react-icons/bs";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section className="min-h-screen bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-balance">
                <span className="whitespace-nowrap">
                  <span className="text-gray-400 dark:text-zinc-500">
                    Building Engineer,
                  </span>
                  <span className="text-gray-900 dark:text-white"> Not</span>
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  Just Coders
                </span>
              </h1>
              <p className="text-[15px] text-gray-400 font-mono">
                Hey, I&apos;m Himanshu, Engineer of{" "}
                <span className="text-white font-semibold">
                  AlgorithmXlr8.io
                </span>
                .
              </p>
            </div>

            {/* Description */}
            <div className="font-mono text-[15px] leading-relaxed text-gray-600 dark:text-zinc-400 space-y-5 max-w-xl">
              <p>
                I began my journey as a software engineer building scalable
                systems, before choosing a different path; building something of
                my own. Today, I run{" "}
                <span className="text-white font-semibold">
                  AlgorithmXlr8.io
                </span>
                , a platform born from passion, persistence, and the desire to
                make engineering truly accessible, where people can master any
                software engineering interview in a systematic way.
              </p>
            </div>

            {/* Quote Section */}
            <div className="space-y-3 border-l-2 border-gray-700 pl-4 py-2">
              <p className="text-gray-400 dark:text-zinc-500 font-semibold text-sm sm:text-base font-mono">
                Remember:
              </p>
              <p className="text-gray-900 dark:text-white font-semibold text-[15px]">
                You don&apos;t need to know everything to begin.
              </p>
              <p className="text-gray-900 dark:text-white font-semibold text-[15px]">
                You just need the courage to take the first step.
              </p>
            </div>

            {/* Primary CTA Button */}
            <div>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-semibold rounded-full px-8 h-12 text-base gap-2"
              >
                Get Started Now <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Secondary Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 ">
              <Button
                variant="outline"
                size="lg"
                className="border border-gray-300 dark:border-white/15 bg-transparent text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-white/30 hover:text-gray-900 dark:hover:text-white rounded-full px-6 h-12 text-sm font-medium gap-2 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Video  className="w-4 h-4" />
                Book a Session
              </Button>
              <Button
                variant="outline"
                size="lg"
                 className="border border-gray-300 dark:border-white/15 bg-transparent text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-white/30 hover:text-gray-900 dark:hover:text-white rounded-full px-6 h-12 text-sm font-medium gap-2 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Coffee className="w-4 h-4" />
                Buy me a Chai
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="#" 
                className="relative group w-10 h-10 rounded-full border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/[0.04] text-gray-500 dark:text-zinc-400 flex items-center justify-center hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Website"
              >
                <Globe className="w-5 h-5" />
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">AlgorithmXlr8.io</span>
              </a>
              <a
                href="#"
                className="relative group w-10 h-10 rounded-full border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/[0.04] text-gray-500 dark:text-zinc-400 flex items-center justify-center hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">LinkedIn</span>
              </a>
              <a
                href="#"
                className="relative group w-10 h-10 rounded-full border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/[0.04] text-gray-500 dark:text-zinc-400 flex items-center justify-center hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">Instagram</span>
              </a>
              <a
                href="#"
                className="relative group w-10 h-10 rounded-full border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/[0.04] text-gray-500 dark:text-zinc-400 flex items-center justify-center hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="YouTube"
              >
                <FaMedium className="w-5 h-5" />
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">Medium</span>
              </a>
              <a
                href="#"
                className="relative group w-10 h-10 rounded-full border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/[0.04] text-gray-500 dark:text-zinc-400 flex items-center justify-center hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Bookmark"
              >
               <BsSubstack className="w-5 h-5" />
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">Substack</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 .sm:h-[500px] lg:h-screen lg:flex items-center justify-center">
            <div
              className="relative w-full h-full rounded-3xl overflow-hidden
      .[mask-image:linear-gradient(to_right,transparent_0%,black_18%,black_100%)]
      [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_18%,black_100%)]
    "
            >
              <Image
                src="/home/Creator.jpg"
                alt="Professional portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
