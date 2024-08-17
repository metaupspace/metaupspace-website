import Header from "@/components/Header";
import ITStaffing from "@/components/ITStaffing";
import GridPattern from "@/components/magicui/grid-pattern";
import MainSection from "@/components/MainSection";
import { MarqueeDemo } from "@/components/Marquee";
import ProcessFlow from "@/components/ProcessFlow";
import StaffingType from "@/components/StaffingType";
import Development from "@/components/Development";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Header />
      <MainSection />

      <ITStaffing />
      <StaffingType />
      <MarqueeDemo />
      <ProcessFlow />
      <Development />
    </main>
  );
}
