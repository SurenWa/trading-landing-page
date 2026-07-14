import Image from "next/image";

import { CtaButton } from "@/components/ui/cta-button";
import { DISCORD_URL } from "@/lib/config";

export function WhatToExpect() {
  return (
    <section
      id="expect"
      className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-8 md:py-28"
    >
      <div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          What to expect from our trader&apos;s academy
        </h2>
        <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted-foreground md:text-base">
          <p>
            Every market day starts with a premarket watchlist: the tickers on
            our radar, the levels that matter, and the plan if they hit. You
            see the preparation, not just the outcome.
          </p>
          <p>
            During the session, trade calls are posted in real time with entry,
            stop, and reasoning attached — so you learn the process behind the
            trade instead of blindly following alerts.
          </p>
          <p>
            After the close, we review what worked and what didn&apos;t. Weekly
            video lessons and a searchable archive mean you can catch up on
            your own schedule, in any time zone.
          </p>
        </div>
        <div className="mt-8">
          <CtaButton href={DISCORD_URL}>Join the Discord</CtaButton>
        </div>
      </div>

      <Image
        src="/screenshot-310.png"
        alt="Inside the PureFX trader's academy"
        width={731}
        height={843}
        className="mx-auto aspect-[4/5] w-full max-w-[220px] rounded-2xl object-cover shadow-2xl shadow-black/60 md:max-w-[280px]"
      />
    </section>
  );
}
