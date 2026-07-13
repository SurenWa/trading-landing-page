"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/config";
import { CtaButton } from "@/components/ui/cta-button";
import { SocialIcon } from "@/components/ui/social-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-black/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        <Link href="#" className="font-heading text-xl font-extrabold tracking-tight">
          Cross<span className="text-accent-gold">Trades</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) =>
            link.items ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent-blue outline-none">
                  {link.label}
                  <ChevronDown className="size-3.5" aria-hidden="true" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {link.items.map((item) => (
                    <DropdownMenuItem key={item.label} asChild>
                      <Link href={item.href}>{item.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent-blue outline-none"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-3 text-muted-foreground">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="transition-colors hover:text-foreground"
              >
                <SocialIcon label={social.label} className="size-4" />
              </a>
            ))}
          </div>
          <Link
            href="#join"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Login
          </Link>
          <CtaButton href="#join" className="px-5 py-2">
            Get Started
          </CtaButton>
        </div>

        <button
          type="button"
          className="rounded-md p-2 lg:hidden focus-visible:ring-2 focus-visible:ring-accent-blue outline-none"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-border bg-black px-6 pb-6 pt-2 lg:hidden"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="border-b border-border/60 py-3">
              <Link
                href={link.href}
                className="text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.items && (
                <div className="mt-2 flex flex-col gap-2 pl-3">
                  {link.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-sm text-muted-foreground"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 flex items-center justify-between">
            <Link href="#join" className="text-sm font-medium text-muted-foreground">
              Login
            </Link>
            <CtaButton href="#join" className="px-5 py-2">
              Get Started
            </CtaButton>
          </div>
        </nav>
      )}
    </header>
  );
}
