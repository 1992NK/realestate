import Image from "next/image";
import { aboutProjectData, projectFeatures } from "@/data/aboutProjectData";
import ProjectFeature from "./projectfeature/ProjectFeature";
import styles from "./aboutProject.module.css";

const AboutProject = () => {
  return (
    <section id={aboutProjectData.id} className={styles.aboutProject}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.leftContent}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine}></span>
            <span>{aboutProjectData.eyebrow}</span>
          </div>

          <h2 className={styles.heading}>
            {aboutProjectData.title}{" "}
            <span className={styles.highlight}>{aboutProjectData.highlightedTitle}</span>
          </h2>

          <h3 className={styles.subheading}>{aboutProjectData.subtitle}</h3>

          <div className={styles.description}>
            {aboutProjectData.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.features}>
            {projectFeatures.map((feature) => (
              <ProjectFeature key={feature.id} icon={feature.icon} title={feature.title} subtitle={feature.subtitle} />
            ))}
          </div>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.blueCircle}></div>
          <div className={styles.dots}></div>

          <div className={styles.certificateWrapper}>
            <Image src={aboutProjectData.certificate.src} alt={aboutProjectData.certificate.alt} width={460} height={590} className={styles.certificate} priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;