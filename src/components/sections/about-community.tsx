import Image from "next/image";

import { Swoosh } from "@/components/ui/swoosh";

export function AboutCommunity() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-8 md:py-28"
    >
      <Image
        src="/screenshot-308.png"
        alt="The PureFX trading community"
        width={735}
        height={889}
        className="order-last mx-auto aspect-[4/5] w-full max-w-[220px] rounded-2xl object-cover shadow-2xl shadow-black/60 md:order-first md:max-w-[280px]"
      />

      <div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          <Swoosh>About</Swoosh> Our Community
        </h2>
        <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted-foreground md:text-base">
          <p>
            PureFX spent his first two years of trading doing everything
            wrong — oversized positions, revenge trades, no journal.
            Cross Trades exists so you can{" "}
            <strong className="font-semibold text-foreground">
              hack the day trading learning curve
            </strong>{" "}
            instead of repeating those same expensive lessons alone.
          </p>
          <p>
            Inside the private Discord you&apos;ll find{" "}
            <strong className="font-semibold text-foreground">
              daily premarket watchlists, live trade calls, and honest
              post-market reviews
            </strong>{" "}
            — the losses get broken down with the same care as the wins. No
            Lambos here, only the reality of what consistent trading actually
            looks like.
          </p>
          <p>
            Whether you scalp the open or swing multi-day setups, you&apos;ll
            trade alongside{" "}
            <strong className="font-semibold text-foreground">
              a community that takes process seriously
            </strong>
            , with coaches who answer questions in plain language.
          </p>
        </div>
      </div>
    </section>
  );
}
