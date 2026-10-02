import { FaChartSimple, FaLeaf, FaShieldHalved, FaUserGroup } from "react-icons/fa6";
import styles from "./projectFeature.module.css";

const icons = {
  leaf: FaLeaf,
  shield: FaShieldHalved,
  chart: FaChartSimple,
  users: FaUserGroup,
};

const ProjectFeature = ({ icon, title, subtitle }) => {
  const Icon = icons[icon];

  return (
    <div className={styles.feature}>
      <div className={styles.iconBox}>
        <Icon />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default ProjectFeature;