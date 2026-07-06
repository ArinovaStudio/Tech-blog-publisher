'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  name: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    id: 'subscription',
    name: 'Subscription & Future Updates',
    items: [
      {
        id: 'sub-1',
        question: 'How does the premium subscription work?',
        answer:
          'AlgorithmXlr8 is a comprehensive learning platform focused on DSA patterns, System Design (HLD & LLD), real-world case studies, and engineering insights. We offer both free and premium content to help you master coding interviews and become a better software engineer.',
      },
      {
        id: 'sub-2',
        question: 'Will I get access to new features or content released in the future?',
        answer:
          'AlgorithmXlr8.io is our interactive learning platform providing hands-on experience with data structure algorithms and system design problems.',
      },
       {
        id: 'sub-3',
        question: 'Can I upgrade from free to premium later?',
        answer:
          'AlgorithmXlr8 is a comprehensive learning platform focused on DSA patterns, System Design (HLD & LLD), real-world case studies, and engineering insights. We offer both free and premium content to help you master coding interviews and become a better software engineer.',
      },
       {
        id: 'sub-4',
        question: 'Can we extend the validity after expiry?',
        answer:
          'AlgorithmXlr8 is a comprehensive learning platform focused on DSA patterns, System Design (HLD & LLD), real-world case studies, and engineering insights. We offer both free and premium content to help you master coding interviews and become a better software engineer.',
      },
       {
        id: 'sub-5',
        question: 'What subscription plans are available, including both platforms?',
        answer:
          'AlgorithmXlr8 is a comprehensive learning platform focused on DSA patterns, System Design (HLD & LLD), real-world case studies, and engineering insights. We offer both free and premium content to help you master coding interviews and become a better software engineer.',
      },
    ],
  },
  {
    id: 'features',
    name: 'Features & Functionality',
    items: [
      {
        id: 'feat-1',
        question: 'Are the courses suitable for beginners?',
        answer:
          'Yes, our courses are designed for all skill levels, from beginners to advanced engineers. We provide foundational content alongside advanced topics.',
      },
      {
        id: 'feat-2',
        question: 'How often is new content added?',
        answer:
          'We continuously update our platform with new content, adding new problems, solutions, and insights regularly to keep the curriculum fresh and relevant.',
      },
       {
        id: 'feat-3',
        question: 'How often is new content added?',
        answer:
          'We continuously update our platform with new content, adding new problems, solutions, and insights regularly to keep the curriculum fresh and relevant.',
      },
    ],
  },
  {
    id: 'curriculum',
    name: 'Course Content & Curriculum',
    items: [
      {
        id: 'curr-1',
        question: 'What makes AlgorithmXlr8 different from other platforms?',
        answer:
          'We focus on real-world system design scenarios, engineering insights from industry experts, and a structured learning path that mirrors what top companies expect.',
      },
      {
        id: 'curr-2',
        question:
          'What makes AlgorithmXlr8.io different from the Engineering Newsletter?',
        answer:
          'Our platform provides interactive hands-on practice with problems, while our newsletter delivers curated insights and tips directly to your inbox.',
      },
       {
        id: 'curr-3',
        question:
          'What makes AlgorithmXlr8.io different from the Engineering Newsletter?',
        answer:
          'Our platform provides interactive hands-on practice with problems, while our newsletter delivers curated insights and tips directly to your inbox.',
      },
       {
        id: 'curr-4',
        question:
          'What makes AlgorithmXlr8.io different from the Engineering Newsletter?',
        answer:
          'Our platform provides interactive hands-on practice with problems, while our newsletter delivers curated insights and tips directly to your inbox.',
      },
       {
        id: 'curr-5',
        question:
          'What makes AlgorithmXlr8.io different from the Engineering Newsletter?',
        answer:
          'Our platform provides interactive hands-on practice with problems, while our newsletter delivers curated insights and tips directly to your inbox.',
      },
       {
        id: 'curr-6',
        question:
          'What makes AlgorithmXlr8.io different from the Engineering Newsletter?',
        answer:
          'Our platform provides interactive hands-on practice with problems, while our newsletter delivers curated insights and tips directly to your inbox.',
      },
    ],
  },
  {
    id: 'account',
    name: 'Account Management',
    items: [
      {
        id: 'acc-1',
        question: 'Is there premium content available?',
        answer:
          'Yes, we offer premium content alongside our free courses. Premium membership gives you access to advanced problems, detailed solutions, and exclusive insights.',
      },
      {
        id: 'acc-2',
        question: 'Is there premium content available?',
        answer:
          'Yes, we offer premium content alongside our free courses. Premium membership gives you access to advanced problems, detailed solutions, and exclusive insights.',
      },
    ],
  },
  {
    id: 'access',
    name: 'Course Access & Technical Support',
    items: [
      {
        id: 'acc-1',
        question: 'How do I access my purchased courses?',
        answer:
          'Once you purchase a course, you can access it immediately from your dashboard. All content is available 24/7 from any device.',
      },
      {
        id: 'acc-2',
        question: 'How do I access my purchased courses?',
        answer:
          'Once you purchase a course, you can access it immediately from your dashboard. All content is available 24/7 from any device.',
      },
    ],
  },
  {
    id: 'mentorship',
    name: 'Mentorship & Community Support',
    items: [
      {
        id: 'ment-1',
        question: 'Is there community support available?',
        answer:
          'Yes, we have an active community forum where you can ask questions, share insights, and connect with other learners and mentors.',
      },
      {
        id: 'ment-2',
        question: 'Is there community support available?',
        answer:
          'Yes, we have an active community forum where you can ask questions, share insights, and connect with other learners and mentors.',
      },
      {
        id: 'ment-3',
        question: 'Is there community support available?',
        answer:
          'Yes, we have an active community forum where you can ask questions, share insights, and connect with other learners and mentors.',
      },
    ],
  },
  {
    id: 'career',
    name: 'Career Guidance',
    items: [
      {
        id: 'car-1',
        question: 'How does career guidance work?',
        answer:
          'We provide resources, mock interviews, and personalized guidance to help you prepare for your dream role at top tech companies.',
      },
      {
        id: 'car-2',
        question: 'What are the career guidance resources available?',
        answer:
          'We offer mock interviews, personalized guidance, and resources to help you prepare for your dream role at top tech companies.',
      },
      {
        id: 'car-3',
        question: 'What are the career guidance resources available?',
        answer:
          'We offer mock interviews, personalized guidance, and resources to help you prepare for your dream role at top tech companies.',
      },
    ],
  },
  {
    id: 'internships',
    name: 'Internships & Job Assistance',
    items: [
      {
        id: 'int-1',
        question: 'Do you help with job placements?',
        answer:
          'We provide job assistance resources, company insights, and preparation materials to help you succeed in your job search.',
      },
      {
        id: 'int-2',
        question: 'Do you help with job placements?',
        answer:
          'We provide job assistance resources, company insights, and preparation materials to help you succeed in your job search.',
      },
    ],
  },
  {
    id: 'payment',
    name: 'Payment & Refunds',
    items: [
      {
        id: 'pay-1',
        question: 'What is your refund policy?',
        answer:
          'We offer a 30-day money-back guarantee if you&apos;re not satisfied with our courses. No questions asked.',
      },
      {
        id: 'pay-2',
        question: 'What is your refund policy?',
        answer:
          'We offer a 30-day money-back guarantee if you&apos;re not satisfied with our courses. No questions asked.',
      },
      {
        id: 'pay-3',
        question: 'What is your refund policy?',
        answer:
          'We offer a 30-day money-back guarantee if you&apos;re not satisfied with our courses. No questions asked.',
      },
    ],
  },
];

export function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState('curriculum');
  const [expandedId, setExpandedId] = useState('sub-1');

  const currentCategory = faqCategories.find((cat) => cat.id === selectedCategory);

  return (
    <section className="w-full bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-12">
          Frequently Asked
          <br />
          Questions
        </h2>

        <div className="flex flex-col-[300px_1fr] lg:flex-row gap-8 lg:gap-12">
          {/* Left Sidebar - Categories */}
          <div className="flex flex-row lg:flex-col flex-wrap gap-3 content-start">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`text-left text-sm font-semibold rounded-full px-5 py-3 transition-colors duration-200 border ${
                  selectedCategory === category.id
                    // ? 'border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white'
                    // : 'border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-zinc-400 hover:border-gray-300 hover:text-gray-900 dark:hover:border-zinc-600 dark:hover:text-white'
                     ? 'border-zinc-800 dark:border-zinc-800 bg-zinc-800 dark:bg-zinc-800 text-white dark:text-white'
                    : 'border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-zinc-400 hover:border-gray-300 hover:text-gray-900 dark:hover:border-zinc-600 dark:hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="flex-1 min-w-0">
            {currentCategory && (
              <div className="rounded-2xl border border-gray-200 dark:border-zinc-800 divide-y divide-gray-200 dark:divide-zinc-800 overflow-hidden">
                {currentCategory.items.map((item, index) => (
                  <div
                    key={item.id}
                    className={`transition-colors duration-200 ${
                      expandedId === item.id
                        ? 'bg-gray-50 dark:bg-[#161616]'
                        : ''
                    }`}
                  >
                    <button
                      onClick={() =>
                        setExpandedId(expandedId === item.id ? '' : item.id)
                      }
                      className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 group"
                    >
                      <span className="text-base md:text-lg font-semibold leading-snug transition-colors text-gray-900 dark:text-white">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5  text-gray-400 dark:text-zinc-500 transition-transform duration-300 ${
                          expandedId === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {expandedId === item.id && (
                      <div className="grid transition-all duration-300 ease-in-out grid-rows-[1fr] opacity-100">
                        <div className="overflow-hidden">
                          <p className="text-sm md:text-base text-gray-500 dark:text-zinc-400 leading-relaxed px-6 pb-6 pr-12 whitespace-pre-line">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
