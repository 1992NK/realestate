import Image from "next/image";
import styles from "./reraBadge.module.css";

const ReraBadge = () => {
  return (
    <div className={styles.badge}>
      <Image src="/images/rera/rera-approved.png" alt="RERA Approved" width={150} height={150} priority className={styles.logo} />
    </div>
  );
};

export default ReraBadge;