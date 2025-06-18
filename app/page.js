import Banner from "@/components/Banner";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";
import { SpotBannerLight } from "@/components/SpotBannerLight/SpotBannerLight";
import { cn } from "@/lib/utils";
export default function Home() {
  return (
    <>
      <div
        className={cn(
          "[background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#d9d7d709_0.5px,transparent_1px),linear-gradient(to_bottom,#d9d7d709_0.5px,transparent_1px)]"
        )}
      >
        <SpotBannerLight />
        <Banner />
        <div className="w-[85%] mx-auto">
          <FeaturedSection />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  );
}
