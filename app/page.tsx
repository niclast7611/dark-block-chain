import CallToAction from "@/sections/CallToAction";
import FeatureCards from "@/sections/FeatureCards";
import FeatureGrid from "@/sections/FeatureGrid";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import LatestPosts from "@/sections/LatestPosts";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeatureCards />
      <FeatureGrid />
      <LatestPosts />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
