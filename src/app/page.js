import DropDown from "@/components/PersonalDropDown";
import NavBar from "@/components/NavBar";
import BusinessDropDown from "@/components/BusinessDropDown";
import HeroSection from "@/components/HeroSection";
import AdvertSection from "@/components/AdvertSection";
import Footer from "@/components/Footer";
import Advert from "@/components/advertsSection/Advert";
import ConnectSection from "@/components/payPallConnectsSection/ConnectSection";
import CallToAction from "@/components/callToActionSection/CallToAction";

export default function Home() {
  return (
    <main className="2xl:container 2xl:mx-auto overflow-hidden">
      <NavBar />
      <HeroSection />
      <AdvertSection />
      <Advert />
      <ConnectSection />
      <CallToAction/>
      <Footer />
    </main>
  );
}
