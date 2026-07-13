"use client";

import { useEffect, useRef, useState } from "react";

import { STATS, type Stat } from "@/lib/config";

/** Counts up from 0 when scrolled into view (nice-to-have per CLAUDE.md §4.7). */
function StatNumber({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  // Render the final display value on the server / before JS, so the page
  // never shows "0" without JavaScript; the count-up only takes over once
  // the section actually scrolls into view.
  const [animating, setAnimating] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setAnimating(true);
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCurrent(stat.value * eased);
          if (progress < 1) requestAnimationFrame(tick);
          else setAnimating(false);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stat.value]);

  const rolling = Number.isInteger(stat.value)
    ? Math.round(current).toLocaleString("en-US")
    : current.toFixed(1);

  return (
    <span ref={ref} className="text-4xl font-extrabold text-accent-blue md:text-5xl">
      {animating ? rolling : stat.display}
    </span>
  );
}

export function Results() {
  return (
    <section id="results" className="border-y border-border bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center md:px-8 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue">
          Results
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          Our day trading academy and community, by the numbers
        </h2>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <dd className="order-first">
                <StatNumber stat={stat} />
              </dd>
              <dt className="text-sm text-muted-foreground">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
