import Image from "next/image";
import {
  FaShieldAlt,
  FaSwimmer,
  FaDumbbell,
  FaVideo,
  FaBaseballBall,
  FaTableTennis,
  FaChild,
  FaHome,
} from "react-icons/fa";
import styles from "./amenityCard.module.css";

const iconMap = {
  security: FaShieldAlt,
  swimming: FaSwimmer,
  gym: FaDumbbell,
  camera: FaVideo,
  cricket: FaBaseballBall,
  pickleball: FaTableTennis,
  child: FaChild,
  home: FaHome,
};

const AmenityCard = ({ amenity }) => {
  const Icon = iconMap[amenity.icon];

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={amenity.image}
          alt={amenity.title}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 25vw"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.iconWrapper}>{Icon && <Icon />}</div>

        <div className={styles.info}>
          <span className={styles.number}>{amenity.number}</span>
          <h3 className={styles.title}>{amenity.title}</h3>
        </div>
      </div>
    </article>
  );
};

export default AmenityCard;