"use client";

import { useState } from "react";
import Image from "next/image";
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
          Top videos from the <Swoosh>Cross Trades</Swoosh> YouTube channel
        </h2>
        <p className="mt-4 text-[15px] text-muted-foreground md:text-base">
          Live sessions, strategy breakdowns, and honest recaps — free on
          YouTube.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {VIDEOS.map((video, index) => (
          <div key={video.title} className="overflow-hidden rounded-2xl">
            {playing === index ? (
              <iframe
                src={video.embedUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="aspect-video w-full rounded-2xl border-0"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(index)}
                aria-label={`Play video: ${video.title}`}
                className="group relative block w-full overflow-hidden rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              >
                <Image
                  src={video.thumb}
                  alt={`Video thumbnail: ${video.title}`}
                  width={1280}
                  height={720}
                  className="aspect-video w-full rounded-2xl object-cover"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-accent-gold shadow-lg transition-transform group-hover:scale-110">
                    <Play className="ml-0.5 size-6 fill-black text-black" aria-hidden="true" />
                  </span>
                </span>
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <CtaButton href="https://youtube.com" variant="outline" arrow={false}>
          Watch More
        </CtaButton>
      </div>
    </section>
  );
}
