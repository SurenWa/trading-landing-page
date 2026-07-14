import { Check } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { CtaButton } from "@/components/ui/cta-button";
import { Swoosh } from "@/components/ui/swoosh";
import { PRICING_TIERS } from "@/lib/config";

export function Pricing() {
  return (
    <section id="join" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue">
          Pricing
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Choose your <Swoosh>membership</Swoosh>
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground md:text-base">
          Every tier unlocks the private Discord. Upgrade or cancel any time —
          no long-term contracts.
        </p>
      </div>

      {/* md:py-6 + featured md:-my-6 lets the middle card outgrow its
          siblings by 24px on both top and bottom. */}
      <div className="mt-12 grid gap-6 md:grid-cols-3 md:py-6">
        {PRICING_TIERS.map((tier) => (
          <Card
            key={tier.name}
            className={`relative h-full overflow-visible rounded-2xl bg-surface ${
              tier.featured
                ? "border-accent-gold shadow-[0_0_40px_-12px] shadow-accent-gold/30 md:-my-6 md:h-auto"
                : "border-border"
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-gold px-3 py-1 text-xs font-semibold text-black">
                Most Popular
              </span>
            )}
            <CardContent className="flex h-full flex-col p-8">
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {tier.tagline}
              </p>
              <p className="mt-6">
                <span className="font-heading text-4xl font-extrabold">
                  ${tier.price}
                </span>
                <span className="text-sm text-muted-foreground">{tier.period}</span>
              </p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-accent-blue"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <CtaButton
                  href={tier.href}
                  variant={tier.featured ? "gold" : "outline"}
                  className="w-full justify-center"
                >
                  Join the Discord
                </CtaButton>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground/80">
        Checkout is handled securely through Subscord and unlocks your Discord
        role automatically.
      </p>
    </section>
  );
}
