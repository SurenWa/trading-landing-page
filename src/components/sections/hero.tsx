import Image from "next/image";
import { BadgeCheck } from "lucide-react";

import { CtaButton } from "@/components/ui/cta-button";
import { Swoosh } from "@/components/ui/swoosh";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-8 md:py-28">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue">
          Looking to day trade stocks?
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight leading-[1.05] md:text-6xl">
          Trade Smarter With <Swoosh>PureFX</Swoosh>
        </h1>
        <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
          We provide more than just stock trading education. We&apos;re a{" "}
          <Swoosh>true community</Swoosh> for all day traders and swing
          traders.
        </p>
        <div className="mt-8">
          <CtaButton href="#join">Get Started</CtaButton>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md md:max-w-none">
        <Image
          src="/purefx-image-1.png"
          alt="PureFX"
          width={795}
          height={1172}
          priority
          className="aspect-[4/5] w-full rounded-2xl object-cover"
        />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-border bg-black/80 px-4 py-2 backdrop-blur">
          <BadgeCheck className="size-4 text-accent-blue" aria-hidden="true" />
          <span className="text-xs font-semibold">Verified Trader</span>
        </div>
      </div>
    </section>
  );
}
