import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { SocialIcon } from "@/components/ui/social-icons";
import { BLOG_POSTS, RISK_DISCLAIMER, SOCIAL_LINKS } from "@/lib/config";

const LEGAL_LINKS = [
  "Privacy Policy",
  "Terms & Conditions",
  "Refund Policy",
  "Earnings Disclaimer",
  "Cookie Policy",
];

const USEFUL_LINKS = ["Contact", "Member Login", "Affiliate Registration/Login"];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-black">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-8">
        <div id="blog">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue">
            Trending now
          </p>
          <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-4">
            {BLOG_POSTS.map((post) => (
              <div key={post.title} className="flex items-center gap-3">
                <Image
                  src={post.thumb}
                  alt=""
                  width={112}
                  height={112}
                  className="size-14 shrink-0 rounded-xl object-cover"
                />
                <p className="text-sm font-medium leading-snug">{post.title}</p>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-10 bg-border" />

        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="#" className="font-heading text-xl font-extrabold tracking-tight">
              Pure <span className="text-accent-gold">FX</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A private Discord community for day traders and swing traders who
              care about process over hype.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((label) => (
                <li key={label}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Useful Links</h3>
            <ul className="mt-4 space-y-2.5">
              {USEFUL_LINKS.map((label) => (
                <li key={label}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-border" />

        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cross Trades. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
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
        </div>
        <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground/80 md:text-left">
          {RISK_DISCLAIMER}
        </p>
      </div>
    </footer>
  );
}
