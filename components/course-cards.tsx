'use client'

export function CourseCards() {
  const courses = [
    {
      id: 1,
      title: 'Master High Level Design',
      description: 'Without skippable topics, built for interview context. Also learn how real scalable systems are built. High-level design for architecture decisions.',
      icon: '🏛️',
      badge: null,
    },
    {
      id: 2,
      title: 'Master Low Level Design',
      description: 'Without skippable topics, built for interview context. Build real-world class diagrams, relationships, design principles, and API-level system components.',
      icon: '⚙️',
      badge: null,
    },
    {
      id: 3,
      title: 'System Design Scenarios',
      description: 'Real scenario-based system design cross-questioning that actually comes up in interviews. 90% of tech interviews touch these.',
      icon: '🎯',
      badge: 'NEW INTERVIEW TOUCH PSS',
      badgeColor: 'bg-red-500',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            System Design & Architecture (Complete One)
          </h2>
        </div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Badge */}
              {course.badge && (
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-bold text-white px-3 py-1 rounded-full ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4">{course.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {course.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
