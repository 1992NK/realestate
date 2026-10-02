import RegisterHero from "@/components/register/RegisterHero";
import RegisterSteps from "@/components/register/RegisterSteps";
import RegistrationForm from "@/components/register/RegistrationForm";

import styles from "./page.module.css";

const RegisterOnlinePage = () => {
    return (
        <main className={styles.registerPage}>
            <RegisterHero />

            <RegisterSteps />

            <section className={styles.formArea}>
                <div className="container">
                    <RegistrationForm />
                </div>
            </section>
            <footer className={styles.footer}>
                <div className={styles.footer_links}>
                    <a href="#">Terms & Conditions</a>
                    <span>|</span>

                    <a href="#">Privacy Policy</a>
                    <span>|</span>

                    <a href="#">Refund Policy</a>
                    <span>|</span>

                    <a href="#">Payment Plan</a>
                </div>

                <p className={styles.copyright}>
                    Copyright © 2026 Deen Dayal Affordable Plot - All rights reserved.
                </p>

                <p className={styles.disclaimer}>
                    <strong>Disclaimer:</strong>
                    The content provided is for informational purposes only and does not
                    constitute an offer to avail any services. Prices mentioned are subject to
                    change without prior notice, and property availability is subject to
                    change. Images are for representation purposes only.
                </p>
            </footer>

        </main>
    );
};

export default RegisterOnlinePage;