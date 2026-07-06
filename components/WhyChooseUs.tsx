"use client";

const features = [
  {
    title: "STRUCTURED, NOT SCATTERED",
    description: (
      <>
        Engineers choose <strong className="text-white">AlgorithmXlr8.io</strong> because it gives
        clarity in a space where learning often feels scattered. Instead of
        jumping across random videos and playlists, everything here is{" "}
        <strong className="text-white">structured in the right order</strong> so that Low-Level Design
        and High-Level Design finally make sense. Every concept connects to the
        next until system design becomes something you understand deeply, not
        just memorize.
      </>
    ),
  },
  {
    title: "DSA PATTERN-FIRST",
    description: (
      <>
        One of the most loved parts of the platform is the{" "}
        <strong className="text-white">DSA pattern-wise problem set.</strong> You don't solve problems
        randomly. You master every pattern from two pointers to sliding window,
        trees, graphs, heaps, DP, and more. Every week new pattern-based
        challenges are added so your problem-solving ability keeps improving
        without searching across 10 different platforms.
      </>
    ),
  },
  {
    title: "REAL COMPANIES, REAL ARCHITECTURES",
    description: (
      <>
        Learning stays exciting because{" "}
        <strong className="text-white">
          everything is taught using real architectures from real companies.
        </strong>{" "}
        When you understand how Amazon handles massive traffic or how Netflix
        streams globally, system design stops feeling intimidating. You
        understand why technologies are chosen, how trade-offs are made, and
        what bottlenecks matter in production.
      </>
    ),
  },
  {
    title: "STAY AHEAD WITH THE NEWSLETTER",
    description: (
      <>
        <strong className="text-white">Daily and weekly tech articles and newsletters</strong> make
        sure you never fall behind. Subscribe at{" "}
        <strong className="text-white">AlgorithmXlr8.io</strong> and get the latest engineering
        insights, scaling stories, backend trends, and architecture learnings
        delivered directly. Like having a mentor who constantly shares what
        matters in the real world.
      </>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black text-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}

        <div className="text-center">
          <p className="text-xs uppercase tracking-[1px] text-gray-500 dark:text-zinc-600">
            Why Us
          </p>

          <h2 className="mt-3 text-3xl lg:text-5xl sm:text-4xl text-gray-900 dark:text-white font-bold mb-3">
            Why Engineers Choose AlgorithmXlr8.io
            {/* <span className="text-blue-500"> AlgorithmXlr8.io</span> */}
          </h2>

          <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
            Build real engineering depth, not just interview skills.
          </p>

          <div className="mt-12">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400 tabular-nums">
              1,00,024+
            </h3>

            <p className="mt-1 text-sm font-medium text-gray-500 dark:text-zinc-400">
              Engineers learning on AlgorithmXlr8.io
            </p>
          </div>
        </div>

        {/* Timeline */}

        <div className="mt-20 space-y-14">
          {features.map((item, index) => (
            <div key={index} className="relative pl-8">

              {/* Vertical Line */}

              <div className="absolute left-0 top-0 h-full w-px bg-zinc-700" />

              {/* Dot */}


              <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-zinc-600 mb-2">
                {item.title}
              </h4>

              <p className="leading-relaxed text-base text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
