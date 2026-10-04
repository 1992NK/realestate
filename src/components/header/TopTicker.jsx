import { FaBullhorn } from "react-icons/fa6";
import { tickerData } from "@/data/headerData";
import styles from "./topTicker.module.css";

const TopTicker = () => {
  return (
    <div className={styles.ticker}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.updateBox}>
          <FaBullhorn className={styles.bullhorn} />
          <span className={styles.updateLabel}>{tickerData.label}</span>
        </div>

        <div className={styles.tickerViewport}>
          <div className={styles.tickerTrack}>
            {tickerData.items.map((item, index) => (
              <span className={styles.tickerItem} key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTicker;