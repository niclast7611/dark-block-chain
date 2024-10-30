import FeatureCards from "@/sections/FeatureCards";
import FeatureGrid from "@/sections/FeatureGrid";
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
    </div>
  );
}
