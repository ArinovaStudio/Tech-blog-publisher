"use client";

export function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-gray-900 dark:text-white text-center">
            <span className="inline">Master Your</span>
            <span className="text-blue-600 dark:text-blue-400">
              Software Engineering
            </span>
            <span className="text-black dark:text-white"> Interviews</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mx-auto px-4">
            Master System Design, Ace DSA with confidence, and Build real
            engineering skills that make companies want to hire you.
          </p>
          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="h-px w-10 .bg-gradient-to-r from-transparent to-gray-300 dark:to-zinc-700"></div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 dark:text-zinc-500">
              OneStop Platform For Engineers
            </span>
            <div className="h-px w-10 .bg-gradient-to-l from-transparent to-gray-300 dark:to-zinc-700"></div>
          </div>
        </div>
      </div>
      {/* <div className="max-w-6xl mx-auto text-center"> */}
      {/* Main Heading */}
      {/* <h1 className="text-3xl sm:text-4xl lg:text-[3.4rem] font-bold text-gray-400 dark:text-white text-center leading-tight mb-4">
          Master Your{' '}
          <span className="text-[#50A2FF]">
            Software Engineering
          </span>{' '}
          Interviews
        </h1> */}

      {/* Subheading */}
      {/* <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
          Master System Design, Ace DSA with confidence, and Build real engineering skills that make companies want to hire you.
        </p> */}

      {/* Badge */}
      {/* <div className="inline-block">
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-12 bg-white/20"></span>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
              ONESTOP PLATFORM FOR ENGINEERS
            </span>
            <span className="h-[1px] w-12 bg-white/20"></span>
          </div>
        </div>
      </div> */}
    </section>
  );
}
