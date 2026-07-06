'use client'
import { FaInstagram, FaLinkedin} from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        {/* Main Footer Content - All in one line */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between  py-6 lg:gap-6">
          {/* Left - Logo and Tagline */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">A</span>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg leading-none">AlgorithmXlrB.io</h3>
              <p className="text-[0.5rem] text-muted-foreground leading-none">BUILT BY ENGINEERS, FOR ENGINEERS</p>
            </div>
          </div>

          {/* Middle - Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium ">
            <a href="#" className="text-gray-600 dark:text-zinc-400 hover:text-foreground transition-colors whitespace-nowrap">
              About
            </a>
            <span className="text-muted-foreground">|</span>
            <a href="#" className="text-gray-600 dark:text-zinc-400 hover:text-foreground transition-colors whitespace-nowrap">
              Pricing
            </a>
            <span className="text-muted-foreground">|</span>
            <a href="#" className="text-gray-600 dark:text-zinc-400 hover:text-foreground transition-colors whitespace-nowrap flex items-center gap-0.5">
              Buy me a chai
              <span>☕</span>
            </a>
            <span className="text-muted-foreground">|</span>
            <a href="#" className="text-gray-600 dark:text-zinc-400 hover:text-foreground transition-colors whitespace-nowrap">
              Privacy Policy
            </a>
            <span className="text-muted-foreground">|</span>
            <a href="#" className="text-gray-600 dark:text-zinc-400 hover:text-foreground transition-colors whitespace-nowrap">
              Terms and Conditions
            </a>
            <span className="text-muted-foreground">|</span>
            <a href="#" className="text-gray-600 dark:text-zinc-400 hover:text-foreground transition-colors whitespace-nowrap">
              Refund Policy
            </a>
            <span className="text-muted-foreground">|</span>
            <a href="#" className="text-gray-600 dark:text-zinc-400 hover:text-foreground transition-colors whitespace-nowrap">
              Cancellation Policy
            </a>
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-center gap-2">
            <a 
              href="#" 
              className="text-[rgb(190, 39, 119);] hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <BsTwitterX className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
             <FaLinkedin className="w-5 h-5" />
            
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Podcast"
            >
             <FaMedium className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright - Below in centered line */}
        <div className="text-center border-t border-border/50 py-4 px-4 sm:px-8 lg:px-16">
          <p className="text-xs text-gray-600 dark:text-zinc-500">
            Copyright © 2026 AlgorithmXlrB.io | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
