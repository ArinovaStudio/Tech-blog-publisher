'use client'

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        {/* Main Footer Content - All in one line */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between  py-6 lg:gap-6">
          {/* Left - Logo and Tagline */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-primary-foreground">A</span>
            </div>
            <div className="flex-shrink-0">
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
          <div className="flex items-center gap-2 flex-shrink-0">
            <a 
              href="#" 
              className="text-[rgb(190, 39, 119);] hover:text-primary transition-colors flex-shrink-0"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2M7 4v16h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7zm6.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm5-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-10 10"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
              aria-label="Podcast"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
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
