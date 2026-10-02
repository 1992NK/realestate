import AmenityCard from "./AmenityCard";

import { amenitiesData } from "@/data/amenitiesData";

import styles from "./amenities.module.css";

const Amenities = () => {
  return (
    <section
      id="amenities"
      className={styles.amenities}
    >
      <div className="container">
        <div className={styles.headingWrapper}>
          

          <div className={styles.headingRow}>
            <span className={styles.headingLine}></span>

            <h2 className={styles.heading}>
              Amenities
            </h2>

            <span className={styles.headingLine}></span>
          </div>
        </div>

        <div className={styles.grid}>
          {amenitiesData.map((amenity) => (
            <AmenityCard
              key={amenity.id}
              amenity={amenity}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;