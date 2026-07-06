"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface ContentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  preview: {
    title: string;
    description: string;
  };
}

const contentItems: ContentItem[] = [
  {
    id: "dsa",
    title: "Master DSA Pattern In Systematic Way",
    description: "See how solutions are built, not just read.",
    image: "/home/Home2.webp",
    preview: {
      title: "Master DSA Pattern In Systematic Way",
      description:
        "Learn data structures and algorithms through comprehensive patterns and real-world problem solving. Master problem-solving techniques that experts use.",
    },
  },
  {
    id: "system-design",
    title: "System Design (Complete One)",
    description: "HLD & LLD with real diagrams, fully covered.",
    image: "/home/SE-Patterns.webp",
    preview: {
      title: "System Design (Complete One)",
      description:
        "Deep dive into high-level and low-level system design with detailed diagrams, real-world architectures, and scalability patterns.",
    },
  },
  {
    id: "scenarios",
    title: "System Design Scenarios",
    description: "Solve 50+ real-world touch these.",
    image: "/home/SE-Interview2.webp",
    preview: {
      title: "System Design Scenarios",
      description:
        "Practice with 50+ real-world system design scenarios that prepare you for actual interviews.",
    },
  },
  {
    id: "software-engineer-sheet",
    title: "Software Engineer Sheet (DSA)",
    description: "300 problems, pattern sorted with streak tracking.",
    image: "/home/DSA_Sheet.webp",
    preview: {
      title: "Software Engineer Sheet (DSA)",
      description:
        "Access a comprehensive collection of 300+ DSA problems organized by pattern with progress tracking and difficulty levels.",
    },
  },
  {
    id: "competitive-programming",
    title: "Competitive Programming (Structured Way)",
    description: "Interview-grade competitive programming for speed.",
    image: "/home/CF_Sheet.webp",
    preview: {
      title: "Competitive Programming (Structured Way)",
      description:
        "Master competitive programming techniques structured for interview success and speed optimization.",
    },
  },
  {
    id: "interview-patterns",
    title: "System Design Interview Patterns",
    description: "The building blocks behind every great answer.",
    image: "/home/SE-Interview2.webp",
    preview: {
      title: "System Design Interview Patterns",
      description:
        "The most important piece in system design. 24 patterns covering 100% of the topics. Learn these and you'll know how to build good, scalable systems.",
    },
  },
  {
    id: "behavioral",
    title: "Master Behavioural Interview",
    description: "START books, leadership & HR round prep.",
    image: "/home/Article.webp",
    preview: {
      title: "Master Behavioural Interview",
      description:
        "Master behavioral interviews with proven frameworks for leadership questions and HR round preparation.",
    },
  },
  {
    id: "fundamentals",
    title: "Master CS Fundamentals (Interview)",
    description: "OS, DBMS, SQL and Computer Networking interview-ready.",
    image: "/home/Article.webp",
    preview: {
      title: "Master CS Fundamentals (Interview)",
      description:
        "Master core computer science fundamentals including OS, DBMS, SQL, and Computer Networking for interviews.",
    },
  },
];

function CurriculumShowcaseContent() {
  const [selectedId, setSelectedId] = useState(contentItems[5].id);
  const [prevId, setPrevId] = useState<string | null>(null);

  const selectedItem =
    contentItems.find((item) => item.id === selectedId) || contentItems[5];

  // Track direction for left-right transition
  const getDirection = () => {
    if (!prevId) return 1;
    const prevIndex = contentItems.findIndex((item) => item.id === prevId);
    const currentIndex = contentItems.findIndex((item) => item.id === selectedId);
    return currentIndex > prevIndex ? 1 : -1;
  };

  const handleChange = (id: string) => {
    setPrevId(selectedId);
    setSelectedId(id);
  };

  const direction = getDirection();

  return (
    <section className="relative bg-gray-50 dark:bg-black w-full py-12 md:py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Everything you need{" "}
            <span className="text-blue-600 dark:text-blue-400">
              in one place
            </span>
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Everything an engineer needs to crack interviews, instead of ten
            open tabs.
          </p>
        </div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-14">
          {/* LEFT */}

          <div className="space-y-2">
            {contentItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleChange(item.id)}
                className={`group w-full rounded-2xl p-4 text-left transition-all duration-300 ${
                  selectedId === item.id
                    ? "bg-white dark:bg-zinc-900 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
                    : "hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </div>

                  <ChevronRight
                    className={`transition-all duration-300 ${
                      selectedId === item.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT */}

          <div>
            {/* IMAGE */}

            <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/10 mb-8">
              <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedItem.id}
                    initial={{
                      opacity: 0,
                      x: direction > 0 ? 50 : -50,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: direction > 0 ? -50 : 50,
                    }}
                    transition={{
                      duration: 0.40,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.preview.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* TEXT */}

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
              >
                <h3 className="text-2xl font-bold mb-3 text-white dark:text-white">
                  {selectedItem.preview.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {selectedItem.preview.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <button className="mt-8 inline-flex items-center gap-2 rounded-full text-black bg-white px-6 py-3 shadow-lg ring-1 ring-black/5 dark:ring-white/10 transition hover:scale-[1.03] active:scale-100">
              Explore
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CurriculumShowcase() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Return EXACT initial render for SSR (no animations, just static content)
    const initialItem = contentItems[5];
    return (
      <section className="relative bg-gray-50 dark:bg-black w-full py-12 md:py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Everything you need{" "}
              <span className="text-blue-600 dark:text-blue-400">
                in one place
              </span>
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Everything an engineer needs to crack interviews, instead of ten
              open tabs.
            </p>
          </div>
          <div className="grid lg:grid-cols-[380px_1fr] gap-14">
            {/* LEFT (static) */}
            <div className="space-y-2">
              {contentItems.map((item) => (
                <div
                  key={item.id}
                  className={`group w-full rounded-2xl p-4 text-left transition-all duration-300 ${
                    item.id === initialItem.id
                      ? "bg-white dark:bg-zinc-900 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
                      : "hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* RIGHT (static) */}
            <div>
              <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/10 mb-8">
                <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <Image
                    src={initialItem.image}
                    alt={initialItem.preview.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white dark:text-white">
                  {initialItem.preview.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {initialItem.preview.description}
                </p>
                <button className="mt-8 inline-flex items-center gap-2 rounded-full text-black bg-white px-6 py-3 shadow-lg ring-1 ring-black/5 dark:ring-white/10 transition hover:scale-[1.03] active:scale-100">
                  Explore
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <CurriculumShowcaseContent />;
}
