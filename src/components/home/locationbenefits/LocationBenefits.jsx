import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { locationBenefitsData } from "@/data/locationBenefits";
import styles from "./locationBenefits.module.css";

const LocationBenefits = () => {
  return (
    <section className={styles.locationSection} id="location">
      <div className={styles.locationContainer}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>PRIME CONNECTIVITY</span>
          </div>

          <h2 className={styles.heading}>
            Location <span>Benefits</span>
          </h2>

          <span className={styles.headingLine} />

          <p className={styles.description}>
            Strategically located in Sector 3, Pataudi near the iconic Pataudi Palace, Jay Shree Royal Greens enjoys excellent connectivity to Gurugram, NH-8, and key industrial corridors. The project offers seamless access to IMT Manesar, Dwarka Expressway, and KMP Expressway, making daily commuting smooth and convenient. Surrounded by greenery and a peaceful environment, it provides a perfect escape from city congestion while staying well-connected to urban essentials.
          </p>

          <div className={styles.benefitsGrid}>
            {locationBenefitsData.map((item) => {
              const Icon = item.icon;

              return (
                <div className={styles.benefitCard} key={item.id}>
                  <div className={styles.iconBox}>
                    <Icon />
                  </div>
                  <p className={styles.benefitTitle}>{item.title}</p>
                  <span className={styles.divider} />
                  <span className={styles.time}>{item.time}</span>
                </div>
              );
            })}
          </div>

          <div className={styles.buttonWrapper}>
            <Link href="#contact" className={styles.applyButton}>
              <span>Apply Now</span>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>

        <div className={styles.visualWrapper}>
          <div className={styles.visualRing} />
          <div className={styles.visual} role="img" aria-label="Jay Shree Royal Greens location connectivity" />
        </div>
      </div>
    </section>
  );
};

export default LocationBenefits;