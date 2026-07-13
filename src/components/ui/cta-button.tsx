import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Signature pill CTA (CLAUDE.md §3.3): gold fill on black, or gold outline
 * for secondary actions. Always a link — no forms on this page.
 */
export function CtaButton({
  href,
  children,
  variant = "gold",
  arrow = true,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "outline";
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-7 py-3 text-[15px] font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "gold" &&
          "bg-accent-gold text-black hover:bg-accent-gold-hover",
        variant === "outline" &&
          "border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black",
        className
      )}
    >
      {children}
      {arrow && <ArrowRight className="size-4" aria-hidden="true" />}
    </Link>
  );
}
