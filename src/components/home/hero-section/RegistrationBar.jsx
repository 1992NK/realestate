import { FaArrowRight } from "react-icons/fa6";
import { heroData } from "@/data/heroData";
import styles from "./registrationBar.module.css";

const RegistrationBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`container ${styles.container}`}>
        <div className={styles.amountArea}>
          <span className={styles.label}>{heroData.registrationLabel}</span>
          <span className={styles.divider} />
          <strong className={styles.amount}>{heroData.registrationAmount}</strong>
          <span className={styles.only}>{heroData.registrationSuffix}</span>
        </div>

        <a href={heroData.buttonLink} className={styles.button}>
          <span>{heroData.buttonText}</span>
          <span className={styles.buttonIcon}>
            <FaArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
};

export default RegistrationBar;