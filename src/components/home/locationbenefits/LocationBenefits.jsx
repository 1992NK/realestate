import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { locationBenefitsData } from "@/data/locationBenefits";
import styles from "./locationBenefits.module.css";

const LocationBenefits = () => {
  return (
    <section className={styles.locationSection}>
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
            Strategically located in Sector 19, Dharuhera, Avenue 106 offers excellent connectivity to major highways, expressways and key destinations across the NCR region. The project's prime location ensures easy access to work, education, healthcare and lifestyle hubs, making it a smart choice for modern families.
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
            <Link href="/register_online" className={styles.applyButton}>
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