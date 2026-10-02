import HeroStatCard from "./HeroStatCard";
import { heroStats } from "@/data/heroData";
import styles from "./heroStats.module.css";

const HeroStats = () => {
  return (
    <div className={styles.stats}>
      {heroStats.map((item) => (
        <HeroStatCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default HeroStats;