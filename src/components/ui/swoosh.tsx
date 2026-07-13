/**
 * Hand-drawn-style blue underline swoosh (CLAUDE.md §3.2) — wraps one key
 * word/phrase per headline, mirroring the real site's signature accent.
 */
export function Swoosh({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        viewBox="0 0 120 12"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1.5 left-0 h-2.5 w-full md:-bottom-2 md:h-3"
      >
        <path
          d="M3 9 C 28 11.5, 52 3.5, 76 6 S 108 8.5, 117 5"
          fill="none"
          stroke="var(--accent-blue)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
