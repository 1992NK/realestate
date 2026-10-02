import { registrationSteps } from "@/data/registerData";
import styles from "./registerSteps.module.css";

const RegisterSteps = () => {
  return (
    <section className={styles.stepsSection}>
      <div className="container">
        <div className={styles.steps}>
          {registrationSteps.map((step) => (
            <div className={styles.step} key={step.id}>
              <span className={styles.number}>
                {step.id}
              </span>

              <span className={styles.text}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegisterSteps;