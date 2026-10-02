import { reraRegistrationData } from "@/data/reraRegistrationData";
import styles from "./reraRegistration.module.css";

const ReraRegistration = () => {
  return (
    <section className={styles.reraRegistration}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.registrationRow}>
          <div className={styles.registrationBar}>
            <span className={styles.registrationLabel}>{reraRegistrationData.registrationLabel}</span>
            <span className={styles.divider}></span>
            <span className={styles.registrationNumber}>{reraRegistrationData.registrationNumber}</span>
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.smallHeading}>{reraRegistrationData.heading}</p>
          <h2 className={styles.title}>{reraRegistrationData.title}</h2>
          <p className={styles.description}>{reraRegistrationData.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ReraRegistration;