'use client'

import { BookOpen, Users, Zap } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Content',
      description: 'Learn from industry experts with real-world experience in system design and algorithms.',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join thousands of engineers preparing for their dream roles at top tech companies.',
    },
    {
      icon: Zap,
      title: 'Interactive Learning',
      description: 'Practice with hands-on problems, real interview scenarios, and live coding challenges.',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
