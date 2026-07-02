'use client'

import { FileText, TrendingUp } from 'lucide-react'

export function DSASection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Data Structures and Algorithms (Systematic Way)
          </h2>
        </div>

        {/* Main Showcase Card */}
        <div className="mb-12 border border-border rounded-xl overflow-hidden bg-card hover:border-primary/50 transition-colors">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left - Content */}
            <div className="flex flex-col justify-center">
              <div className="inline-block mb-4 w-fit">
                <span className="text-xs font-bold bg-primary text-primary-foreground px-3 py-1 rounded-full">
                  NEW INTERVIEW TOUCH
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                How to Solve DSA Problems Effectively
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Learn the systematic approach to solving data structure and algorithm problems. Master the patterns, identify problem types, and build the skills to solve them efficiently under interview conditions.
              </p>
              <div className="flex gap-3">
                <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium">
                  Start Learning
                </button>
                <button className="px-6 py-2 rounded-lg border border-border text-foreground hover:bg-card transition-colors text-sm font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative hidden md:flex items-center justify-center">
              <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20">
                <div className="space-y-4 text-center">
                  <div className="text-4xl font-bold text-primary">DSA</div>
                  <div className="text-sm text-muted-foreground">Interactive Learning</div>
                  <div className="flex gap-2 justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-primary/40"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle and Description */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
            Master Data Structures & Algorithm Patterns
          </h3>
          <p className="text-muted-foreground max-w-3xl">
            Already know the basics? Level up with design patterns built for those with DSA experience who want to crack top interviews.
          </p>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="border border-border rounded-lg overflow-hidden bg-card hover:border-primary/50 transition-colors group cursor-pointer">
            <div className="p-6 md:p-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-bold bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                  AB-XLR8 DSA SHEET FOR ENGINEERS
                </span>
              </div>

              {/* Content */}
              <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                AB-XLR8 DSA Sheet
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A curated collection of DSA sheet for software engineers interviewed, built to sharpen your problem-solving the right way. Platform-worked problems.
              </p>

              {/* Meta */}
              <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  <span>150+ Problems</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Beginner to Pro</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-border rounded-lg overflow-hidden bg-card hover:border-primary/50 transition-colors group cursor-pointer">
            <div className="p-6 md:p-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-xs font-bold bg-red-500/20 text-red-400 px-3 py-1 rounded-full">
                  CF-XLR8 COMPETITIVE PROGRAMMING
                </span>
              </div>

              {/* Content */}
              <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                CF-XLR8 DSA Sheet
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A curated collection of Collaborative problems by topic and rating. Build real speed and sharpen the problem-solving from 800 to 2200+ rating growth.
              </p>

              {/* Meta */}
              <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  <span>200+ Problems</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Intermediate to Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
