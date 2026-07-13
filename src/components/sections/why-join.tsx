import { BookOpen, TrendingUp, Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { CtaButton } from "@/components/ui/cta-button";
import { Swoosh } from "@/components/ui/swoosh";
import { DISCORD_URL, FEATURES, type Feature } from "@/lib/config";

const ACCENTS: Record<
  Feature["accent"],
  { blob: string; icon: string; Icon: typeof BookOpen }
> = {
  gold: { blob: "bg-accent-gold", icon: "text-accent-gold", Icon: BookOpen },
  blue: { blob: "bg-accent-blue", icon: "text-accent-blue", Icon: Users },
  peach: { blob: "bg-accent-peach", icon: "text-accent-peach", Icon: TrendingUp },
};

export function WhyJoin() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Why join a <Swoosh>trading community</Swoosh>?
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground md:text-base">
          Most traders quit in year one — not from bad ideas, but from learning
          alone. The right room shortens the curve and keeps you accountable.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {FEATURES.map((feature) => {
          const { blob, icon, Icon } = ACCENTS[feature.accent];
          return (
            <Card
              key={feature.title}
              className="relative overflow-hidden rounded-2xl border-border bg-surface"
            >
              <CardContent className="relative p-8">
                {/* Dark-mode take on the real site's pastel blob (CLAUDE.md §3.1) */}
                <div
                  aria-hidden="true"
                  className={`absolute -top-10 left-2 size-36 rounded-full opacity-20 blur-3xl ${blob}`}
                />
                <div className="relative">
                  {feature.video ? (
                    <video
                      src={feature.video}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full rounded-xl border border-border bg-black/40 shadow-2xl shadow-black/60"
                    />
                  ) : (
                    <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-black/40">
                      <Icon className={`size-7 ${icon}`} aria-hidden="true" />
                    </div>
                  )}
                  <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <CtaButton href={DISCORD_URL}>Join the Discord</CtaButton>
      </div>
    </section>
  );
}
