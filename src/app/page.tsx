import { AnnouncementBar } from "@/components/sections/announcement-bar";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { AboutCommunity } from "@/components/sections/about-community";
import { WhatToExpect } from "@/components/sections/what-to-expect";
import { WhyJoin } from "@/components/sections/why-join";
import { Results } from "@/components/sections/results";
import { Reviews } from "@/components/sections/reviews";
import { PullQuote } from "@/components/sections/pull-quote";
import { VideoGrid } from "@/components/sections/video-grid";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <AboutCommunity />
        <WhatToExpect />
        <WhyJoin />
        <Results />
        <Reviews />
        <PullQuote />
        <VideoGrid />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
