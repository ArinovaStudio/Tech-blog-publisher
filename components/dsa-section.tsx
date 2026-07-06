'use client'

import Image from 'next/image'
import { FileText, TrendingUp } from 'lucide-react'
import { DsaPatternsSvg } from '@/lib/svg-constants'

export function DSASection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
            Data Structures & Algorithms (Systematic Way)
          </h2>
        </div>

        {/* Main Showcase Card */}
        <div className="mb-12 border border-[#1E2939] hover:border-[#1A3C71] rounded-xl overflow-hidden bg-[#0d0d0d]">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left - Image */}
            <div className="p-6 flex items-center justify-center bg-black">
              <Image
                src="/home/Home2.webp"
                alt="DSA Learning Platform"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>

            {/* Right - SVG Visual */}
            <div className="p-4 flex items-center justify-center bg-black">
              <div className="w-full max-w-md .aspect-[480/400]">
                <DsaPatternsSvg />
              </div>
            </div>
          </div>

          {/* Bottom Content Bar */}
          <div className="p-6 md:p-8 border-t border-white/10">
            <h3 className="text-xl font-semibold sm:text-2xl text-white mb-2">
              Master Data Structures & Algorithm Patterns
            </h3>
            <p className="text-gray-400 text-sm">
              Already know the basics? Level up with design patterns built for those with DSA experience who want to crack top interviews.
            </p>
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#0d0d0d] hover:border-white/30 transition-colors group cursor-pointer">
            {/* Image Top */}
            <div className="relative">
              <Image
                src="/home/DSA_Sheet.webp"
                alt="AB-XLR8 DSA Sheet"
                width={800}
                height={500}
                className="w-full h-auto"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-bold bg-blue-600 text-white px-4 py-1 rounded-lg">
                  AB-XLR8 (DSA Sheet For Engineers)
                </span>
              </div>
            </div>
            
            {/* Content Bottom */}
            <div className="p-6 md:p-8">
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                AB-XLR8 DSA Sheet
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                A curated DSA sheet for software engineering interviews, built to sharpen your problem-solving the right way. Pattern-sorted problems.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#0d0d0d] hover:border-white/30 transition-colors group cursor-pointer">
            {/* Image Top */}
            <div className="relative">
              <Image
                src="/home/CF_Sheet.webp"
                alt="CF-XLR8 DSA Sheet"
                width={800}
                height={500}
                className="w-full h-auto"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-bold bg-red-600 text-white px-4 py-1 rounded-lg">
                  CF-XLR8 (Competitive Programming)
                </span>
              </div>
            </div>

            {/* Content Bottom */}
            <div className="p-6 md:p-8">
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                CF-XLR8 DSA Sheet
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                A curated competitive programming problems of Codeforces by topic and rating. Build real speed and sharpen the problem-solving from 800 to 2200+ rating growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
