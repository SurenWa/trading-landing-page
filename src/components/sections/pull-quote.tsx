import { PULL_QUOTE } from "@/lib/config";

export function PullQuote() {
  return (
    <section className="border-b border-border bg-black">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center md:px-8 md:py-24">
        <span
          aria-hidden="true"
          className="font-heading text-7xl font-extrabold leading-none text-accent-blue"
        >
          &ldquo;
        </span>
        <blockquote className="mt-2 text-2xl font-medium italic leading-snug text-foreground md:text-3xl">
          {PULL_QUOTE.quote}
        </blockquote>
        <p className="mt-6 text-sm text-muted-foreground">
          — {PULL_QUOTE.attribution}
        </p>
      </div>
    </section>
  );
}
