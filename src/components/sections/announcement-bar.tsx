import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-surface border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-2 text-center text-xs text-muted-foreground md:px-8">
        Ready to become a successful trader?{" "}
        <Link
          href="#join"
          className="font-semibold text-accent-gold hover:underline"
        >
          Get Started Now!
        </Link>
      </div>
    </div>
  );
}
