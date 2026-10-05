import Image from "next/image";
import { FaHouse, FaLocationDot } from "react-icons/fa6";
import HeroStats from "./HeroStats";
import ReraBadge from "./ReraBadge";
import RegistrationBar from "./RegistrationBar";
import { heroData } from "@/data/heroData";
import styles from "./heroSection.module.css";

const HeroSection = () => {
  return (
    <section className={`${styles.hero} heroSection`} id="home">
      <div className={styles.background}>
        <Image
          src="/images/home/hero-project.webp"
          alt="Deen Dayal Affordable Plot"
          fill
          priority
          sizes="(max-width: 767px) 0px, 100vw"
          className={`${styles.backgroundImage} ${styles.desktopImage}`}
        />

        <Image
          src="/images/home/hero-project-mobile.webp"
          alt="Deen Dayal Affordable Plot"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 0px"
          className={`${styles.backgroundImage} ${styles.mobileImage}`}
        />

        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={`${styles.content} heroContent`}>
          <div className={styles.approval}>
            <FaHouse />
            <span>{heroData.approvalText}</span>
          </div>

          <div className={styles.titleRow}>
            <h1 className={`${styles.title} heroTitle`}>
              <span>{heroData.titleTop}</span>
              <span>{heroData.titleBottom}</span>
            </h1>

            <div className={`${styles.rera} heroRera`}>
              <ReraBadge />
            </div>
          </div>

          <p className={styles.subtitle}>{heroData.subtitle}</p>

          <div className={styles.location}>
            <FaLocationDot />
            <span>{heroData.location}</span>
          </div>
        </div>

        <HeroStats />
      </div>

      <div className={styles.registration}>
        <RegistrationBar />
      </div>
    </section>
  );
};

export default HeroSection;