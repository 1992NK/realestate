import {
  FaBuilding,
  FaCalendarDays,
  FaIndianRupeeSign,
  FaRoad,
  FaUsers,
} from "react-icons/fa6";
import styles from "./heroStatCard.module.css";

const iconMap = {
  rupee: FaIndianRupeeSign,
  road: FaRoad,
  building: FaBuilding,
  users: FaUsers,
  calendar: FaCalendarDays,
};

const HeroStatCard = ({ item }) => {
  const Icon = iconMap[item.icon];

  return (
    <article className={styles.card}>
      <div className={styles.icon}>{Icon && <Icon />}</div>

      <div className={styles.content}>
        {item.label && <span className={styles.label}>{item.label}</span>}

        <strong className={styles.value}>{item.value}</strong>

        {item.description && <span className={item.icon === "road" ? styles.roadDescription : styles.description}>{item.description}</span>}
      </div>
    </article>
  );
};

export default HeroStatCard;