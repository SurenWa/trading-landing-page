"use client";

import { useState } from "react";
import { Play, Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { CtaButton } from "@/components/ui/cta-button";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { TESTIMONIALS } from "@/lib/config";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-4 fill-accent-gold text-accent-gold"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section id="reviews" className="bg-surface-navy">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-28">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue">
            Reviews
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            What People are Saying
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground md:text-base">
            Real reviews from real Community members
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, index) => (
            <Card
              key={t.name}
              className="overflow-hidden rounded-2xl border-border bg-surface p-0"
            >
              {playing === index ? (
                <iframe
                  src={t.embedUrl}
                  title={`Video testimonial from ${t.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="aspect-video w-full border-0"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(index)}
                  aria-label={`Play video testimonial from ${t.name}`}
                  className="group relative block w-full outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                >
                  <PlaceholderImage
                    src={t.thumb}
                    alt={`Video testimonial from ${t.name}`}
                    className="aspect-video"
                  />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="flex size-14 items-center justify-center rounded-full bg-accent-gold shadow-lg transition-transform group-hover:scale-110">
                      <Play
                        className="ml-0.5 size-6 fill-black text-black"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                </button>
              )}
              <CardContent className="p-6">
                <Stars />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-5 flex items-center gap-3">
                  <Avatar className="size-8">
                    <AvatarImage src={t.avatar} alt="" />
                    <AvatarFallback className="text-xs">
                      {t.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">
                    {t.name}{" "}
                    <span className="text-muted-foreground">({t.location})</span>
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CtaButton href="#reviews" variant="outline" arrow={false}>
            Read More Reviews
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
