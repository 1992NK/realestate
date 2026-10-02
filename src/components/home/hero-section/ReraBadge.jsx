import { FaCheck, FaStar } from "react-icons/fa6";
import styles from "./reraBadge.module.css";

const ReraBadge = () => {
  return (
    <div className={styles.badge}>
      <div className={styles.outerRing}>
        <div className={styles.inner}>
          <div className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <strong className={styles.rera}>RERA</strong>

          <span className={styles.approved}>Approved</span>

          <span className={styles.check}>
            <FaCheck />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReraBadge;