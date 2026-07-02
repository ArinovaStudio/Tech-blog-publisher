'use client'

export function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background/50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">
            DESTOP PLATFORM FOR ENGINEERS
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Master Your{' '}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Software Engineering
          </span>{' '}
          Interviews
        </h1>

        {/* Subheading */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Master System Design, Ace DSA with confidence, and Build real engineering skills that make companies want to hire you.
        </p>
      </div>
    </section>
  )
}
