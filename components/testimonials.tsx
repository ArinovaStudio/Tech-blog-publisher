'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Divya Memon',
    role: 'Product Manager at AlgoThink',
    avatar: '👩‍💼',
    rating: 5,
    quote:
      'The UI is clean and easy to navigate. I checked out a few DSA topics and the explanations are clear. Looking forward to going through the LLD and HLD sections as well.',
  },
  {
    id: 2,
    name: 'Ankit Sharma',
    role: 'Senior Engineer at TechCorp',
    avatar: '👨‍💻',
    rating: 5,
    quote:
      'I came across AlgoThinkXHLD today completely by accident, and honestly I didn\'t expect to be this impressed. Seriously everything is well structured. System Design, DSA, everything. Loved it and plan to revise things from this platform only now.',
  },
  {
    id: 3,
    name: 'Rajesh Kumar',
    role: 'Developer at CloudScale',
    avatar: '🧑‍💼',
    rating: 5,
    quote:
      'Henarushu, I have 7 years of experience working at Amazon. I love your content on Instagram. It\'s a unique way of explaining things. Just saw your DSA and system design content and it\'s really amazing. I loved it and plan to revise things from this platform only now.',
  },
  {
    id: 4,
    name: 'Prachi Dubey',
    role: 'Fullstack Developer',
    avatar: '👩‍🔬',
    rating: 5,
    quote:
      'The progress tracking in the DSA sheet is motivating. I can see exactly how many problems I\'ve done per topic and what\'s remaining. Small thing but it keeps you going. Combined with the pattern-based approach, this is the most focused I\'ve been during prep.',
  },
  {
    id: 5,
    name: 'Varun Khanna',
    role: 'Member of AlgoThink',
    avatar: '🧑‍🎓',
    rating: 5,
    quote:
      'Came across AB through Instagram and subscribed the same day. The LLD and HLD content bundle is a complete package for interview prep. You are getting to get all content resources. Everything you need is in one place and it actually makes sense.',
  },
  {
    id: 6,
    name: 'Manish Agrawal',
    role: 'Member of AlgoThinkXHLD',
    avatar: '👨‍🏫',
    rating: 5,
    quote:
      'There around 14 years of experience in software development, so I didn\'t join AlgoThinkXHLD looking for a beginner course. I joined looking for newer generation Learning System Design. To be honest, I was pleasantly surprised. A few months ago I bought a System Design course from Scaler but Slowly last Interest, as many topics felt more complicated than they needed to be. What always',
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mb-20">
          <div className="flex-1">
            <p className="text-xs font-semibold text-accent tracking-wider uppercase mb-4 opacity-80">
              Premium Users Reviews
            </p>
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
              Real Results,
              <br />
              Real Engineers
            </h2>
            <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
              Join thousands of engineers who are mastering DSA and system design through our structured learning platform.
            </p>
          </div>

          {/* Stats Box */}
          <div className="flex flex-col items-start lg:items-end">
            <div className="text-5xl sm:text-6xl font-bold text-accent mb-2">
              67,899
              <span className="text-2xl opacity-75">+</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Growing community of engineers
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-card border border-border/40 rounded-lg p-6 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent opacity-90"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-foreground/90 leading-relaxed mb-6 line-clamp-4">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-lg font-semibold">
                  {testimonial.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="flex justify-center pt-8">
          <button className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300">
            Share your experience
          </button>
        </div>
      </div>
    </section>
  );
}
