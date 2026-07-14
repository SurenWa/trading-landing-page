"use client";

import { useState } from "react";
import { Play } from "lucide-react";

import { CtaButton } from "@/components/ui/cta-button";
import { Swoosh } from "@/components/ui/swoosh";
import { VIDEOS } from "@/lib/config";

export function VideoGrid() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section id="videos" className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-28">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue">
          Videos
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          Top clips from the <Swoosh>PureFX</Swoosh> channel
        </h2>
        <p className="mt-4 text-[15px] text-muted-foreground md:text-base">
          Live sessions, strategy breakdowns, and honest recaps — straight from
          the community.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {VIDEOS.map((video, index) =>
          playing === index ? (
            <video
              key={video.title}
              src={video.src}
              controls
              autoPlay
              playsInline
              aria-label={video.title}
              className="aspect-[9/16] w-full rounded-2xl border border-border bg-black object-contain"
            />
          ) : (
            <button
              key={video.title}
              type="button"
              onClick={() => setPlaying(index)}
              aria-label={`Play video: ${video.title}`}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
            >
              <video
                src={video.src}
                preload="metadata"
                muted
                playsInline
                tabIndex={-1}
                aria-hidden="true"
                className="aspect-[9/16] w-full bg-black object-cover"
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/10">
                <span className="flex size-14 items-center justify-center rounded-full bg-accent-gold shadow-lg transition-transform group-hover:scale-110">
                  <Play className="ml-0.5 size-6 fill-black text-black" aria-hidden="true" />
                </span>
              </span>
            </button>
          ),
        )}
      </div>

      <div className="mt-12 text-center">
        <CtaButton href="https://youtube.com" variant="outline" arrow={false}>
          Watch More
        </CtaButton>
      </div>
    </section>
  );
}
