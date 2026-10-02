import Image from "next/image";
import styles from "./locationMap.module.css";
import { locationMapData } from "@/data/locationMapData";

const LocationMap = () => {
  const {
    id,
    title,
    description,
    image,
    imageAlt,
    callText,
    phoneNumber,
  } = locationMapData;

  return (
    <section id={id} className={styles.locationMap}>
      <div className={`container ${styles.locationMapInner}`}>
        <div className={styles.headingWrap}>
          <span className={styles.headingLine}></span>

          <h2 className={styles.heading}>
            {title}
          </h2>

          <span className={styles.headingLine}></span>
        </div>

        <p className={styles.description}>
          {description}
        </p>

        <div className={styles.mapBox}>
          <Image
            src={image}
            alt={imageAlt}
            width={1400}
            height={950}
            className={styles.mapImage}
            sizes="
              (max-width: 576px) 94vw,
              (max-width: 992px) 90vw,
              1200px
            "
          />
        </div>

        <a
          href={`tel:${phoneNumber}`}
          className={styles.callButton}
          aria-label={callText}
        >
          {callText}
        </a>
      </div>
    </section>
  );
};

export default LocationMap;