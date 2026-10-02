import styles from "./registerHero.module.css";

const RegisterHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className="container">
        <div className={styles.content}>
          <div className={styles.rera}>
            RERA REG. NO. HARERA/GGM/1023/575/2025/126
          </div>

          <h1 className={styles.title}>
            Online Registration
          </h1>

          <p className={styles.subtitle}>
            Deen Dayal Jan Awas Yojana — Affordable Residential Plots •
            Pataudi, Gurugram
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterHero;