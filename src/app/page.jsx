"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import DotGrid from "../components/Dotgrid/DotGrid.jsx";
import Navbar from "../components/Navbar.jsx";
import ScrollProgressBar from "../components/ScrollProgressBar.jsx";
import "../styles/globals.css";
import "../styles/DotGrid.css";
import "../styles/Hero.css";
import "../styles/About.css";
import "../styles/Responsive/desktop.css";
import "../styles/Responsive/tablet.css";
import "../styles/Responsive/large-mobile.css";
import "../styles/Responsive/small-mobile.css";

const Hero = dynamic(() => import("../components/Hero.jsx"));
const About = dynamic(() =>
  import("../components/About.jsx").then((mod) => mod.About)
);
const MySkill = dynamic(() =>
  import("../components/MySkills.jsx").then((mod) => mod.MySkill)
);
const Milestones = dynamic(() =>
  import("../components/Milestones.jsx").then((mod) => mod.Milestones)
);
const Project = dynamic(() => import("../components/Project.jsx"));
const Services = dynamic(() =>
  import("../components/Services.jsx").then((mod) => mod.Services)
);
const Plan = dynamic(() => import("../components/Plan.jsx"));
const FAQ = dynamic(() => import("../components/Fqa.jsx"));
const Contact = dynamic(() => import("../components/Contact.jsx"));
const Footer = dynamic(() =>
  import("../components/footer.jsx").then((mod) => mod.Footer)
);

const LoadingFallback = () => (
  <div
    style={{
      padding: "40px 20px",
      textAlign: "center",
      color: "#888",
      fontSize: "14px",
    }}
  >
    Loading...
  </div>
);

export default function Home() {
  return (
    <div
      className="app position-relative"
      style={{ width: "100%", minHeight: "100vh" }}
    >
      {/* DotGrid Background */}
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#2F293A"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
        className="dotgrid-bg"
      />

      <div className="overlay-layer"></div>

      {/* Foreground Content */}
      <div className="position-relative content-layer container">
        <Navbar />

        <Suspense fallback={<LoadingFallback />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <MySkill />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Milestones />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Project />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Services />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Plan />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <FAQ />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>

        <ScrollProgressBar />
      </div>
    </div>
  );
}
