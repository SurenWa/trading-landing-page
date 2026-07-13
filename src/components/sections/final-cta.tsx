import { CtaButton } from "@/components/ui/cta-button";
import { DISCORD_URL } from "@/lib/config";

export function FinalCta() {
  return (
    <section id="join" className="relative overflow-hidden bg-surface-navy">
      {/* Soft blue radial glow so the closing band reads as a distinct section (CLAUDE.md §4.11) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:px-8 md:py-32">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Ready to start your own journey?
        </h2>
        <p className="mt-4 text-[15px] text-muted-foreground md:text-base">
          Join the Cross Trades community today.
        </p>
        <div className="mt-8">
          <CtaButton href={DISCORD_URL}>Get Started Now</CtaButton>
        </div>
      </div>
    </section>
  );
}
