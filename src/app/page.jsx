import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/home/hero-section/HeroSection";
import AboutProject from "@/components/home/aboutproject/AboutProject";
import ReraRegistration from "@/components/home/reraregistration/ReraRegistration";
import LocationBenefits from "@/components/home/locationbenefits/LocationBenefits";
import ProjectPlan from "@/components/home/projectplan/ProjectPlan";
import LocationMap from "@/components/home/locationmap/LocationMap";
import Amenities from "@/components/home/amenities/Amenities";
import PriceList from "@/components/home/price-list/PriceList";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
         <HeroSection />
        <ReraRegistration />
        <AboutProject />
        <LocationBenefits />
       <ProjectPlan />
        <LocationMap />
         <Amenities />
        <PriceList />
        <Footer /> 
      </main>
    </>
  );
}
