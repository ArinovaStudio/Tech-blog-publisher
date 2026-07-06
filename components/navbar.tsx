'use client'

import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { ChevronRight } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar */}
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">A</span>
            </div>
            <span className="font-bold text-foreground text-sm sm:text-base">AlgorithmXlrB.io</span>
          </div>

          {/* Navigation Links - Visible on lg and above */}
          <div className="hidden lg:flex items-center gap-6 flex-1">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              System Design
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Data Structures
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Problem Solving
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Engineering
            </a>
          </div>

          {/* Right side - Search Bar, Theme Toggle, Get Started and Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Search Bar - Visible on md and above */}
            <div className="hidden md:flex max-w-xs">
              <div className="relative flex items-center w-full bg-card border border-border rounded-lg px-3 py-2">
                <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder-muted-foreground ml-2 w-32 lg:w-40"
                />
                <span className="text-xs text-muted-foreground ml-2 hidden lg:inline">⌘K</span>
              </div>
            </div>

            <ThemeToggle />
            <button className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-100 text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium">
              Get Started
              <ChevronRight size={18} />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-card rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border/50 py-4 space-y-3">
            {/* Mobile Navigation Links */}
            <a href="#" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-card rounded-lg transition-colors">
              System Design
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-card rounded-lg transition-colors">
              Data Structures & Algorithms
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-card rounded-lg transition-colors">
              Problem Solving
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-card rounded-lg transition-colors">
              Engineering Newsletter
            </a>
            <button className="w-full sm:hidden px-4 py-2 mt-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
