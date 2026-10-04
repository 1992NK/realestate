import Image from "next/image";
import styles from "./projectPlan.module.css";
import { projectPlanData } from "@/data/projectPlanData";

const ProjectPlan = () => {
  const { title, subtitle, image, alt } = projectPlanData;

  return (
    <section
      className={styles.projectPlan}
      id="payment-layout"
    >
      <div className="container">
        <div className={styles.headingWrapper}>
          <h2 className={styles.title}>{title}</h2>

          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.planWrapper}>
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 576px) 94vw,
                   (max-width: 768px) 92vw,
                   (max-width: 1200px) 88vw,
                   1050px"
            className={styles.planImage}
            priority={false}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectPlan;