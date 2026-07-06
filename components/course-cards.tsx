'use client'

import { SystemArchitectureSvg, LowLevelDesignSvg, SystemDesignScenariosSvg } from '@/lib/svg-constants'

export function CourseCards() {
  const courses = [
    {
      id: 1,
      title: 'Master High Level Design',
      description: 'Without skippable topics, built for interview context. Also learn how real scalable systems are built, high-level design for architecture decisions.',
      icon: <SystemArchitectureSvg />,
      badge: null,
    },
    {
      id: 2,
      title: 'Master Low Level Design',
      description: 'Without skippable topics, built for interview context. Build real-world class diagrams, relationships, design principles, and API-level system components.',
      icon: <LowLevelDesignSvg />,
      badge: null,
    },
    {
      id: 3,
      title: 'System Design Scenarios',
      description: 'Real scenario-based system design cross-questioning that actually comes up in interviews. 90% of tech interviews touch these.',
      icon: <SystemDesignScenariosSvg />,
      badge: '90% INTERVIEWS TOUCH THIS',
      badgeColor: 'bg-red-600',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
            System Design & Architecture
          </h2>
        </div>

        {/* Course Cards Grid */}
        {/* <div className="grid md:grid-cols-3 max-w-6xl mx-auto gap-4 "> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto items-stretch">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative dark:bg-[#0d0d0d] border border-[#333333] rounded-xl overflow-hidden hover:border-[#1A3C71] transition-all hover:shadow-xl hover:shadow-blue-500/10 flex flex-col"
            >
              {/* Badge */}
              {course.badge && (
                <div className="absolute top-3 left-3 z-10">
                  <span className={`text-[9px] font-bold text-white uppercase px-4 py-1 rounded-lg ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="h-56 w-full p-4 flex items-center justify-center bg-black">
                {course.icon}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 border-t border-[#222222]">
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white group-hover:text-blue-400 transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-[13.5px] text-gray-400 leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  )
}
