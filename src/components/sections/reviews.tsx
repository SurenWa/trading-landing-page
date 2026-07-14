import { Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { CtaButton } from "@/components/ui/cta-button";
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
          {TESTIMONIALS.map((t) => (
            <Card
              key={`${t.name}-${t.location}`}
              className="overflow-hidden rounded-2xl border-border bg-surface p-0"
            >
              <video
                src={t.video}
                controls
                autoPlay
                muted
                loop
                playsInline
                aria-label={`Video testimonial from ${t.name}`}
                className="aspect-[9/16] w-full bg-black object-cover"
              />
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
