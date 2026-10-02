"use client";

import {
  FiUser,
  FiPhone,
  FiMail,
  FiMessageSquare,
  FiArrowRight,
  FiMapPin,
  FiHome,
} from "react-icons/fi";

import styles from "./footer.module.css";

import {
  footerContactData,
  footerLinks,
  footerCopyright,
} from "@/data/footer";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.contactSection}>
        <div className="container">
          <h2 className={styles.heading}>
            Contact us
          </h2>

          <div className={styles.headingLine}></div>

          <div className={styles.contactWrapper}>
            {/* Contact Form */}
            <div className={styles.formCard}>
              <form
                className={styles.form}
                onSubmit={handleSubmit}
              >
                <div className={styles.twoColumn}>
                  <div className={styles.inputGroup}>
                    <FiUser />

                    <input
                      type="text"
                      placeholder="Full Name"
                      aria-label="Full Name"
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <FiPhone />

                    <input
                      type="tel"
                      placeholder="Contact Number"
                      aria-label="Contact Number"
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <FiMail />

                  <input
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                </div>

                <div
                  className={`${styles.inputGroup} ${styles.messageGroup}`}
                >
                  <FiMessageSquare />

                  <textarea
                    placeholder="Send Message"
                    aria-label="Send Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                >
                  <span>Submit</span>

                  <FiArrowRight />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FiMapPin />
                </div>

                <div className={styles.infoContent}>
                  <h3>
                    {footerContactData.siteOffice.label}
                  </h3>

                  <p>
                    {footerContactData.siteOffice.value}
                  </p>
                </div>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FiPhone />
                </div>

                <div className={styles.infoContent}>
                  <h3>
                    {footerContactData.phone.label}
                  </h3>

                  <a
                    href={footerContactData.phone.href}
                    className={styles.phoneLink}
                  >
                    {footerContactData.phone.value}
                  </a>
                </div>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FiMail />
                </div>

                <div className={styles.infoContent}>
                  <h3>
                    {footerContactData.email.label}
                  </h3>

                  <a
                    href={footerContactData.email.href}
                    className={styles.emailLink}
                  >
                    {footerContactData.email.value}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.bottomFooter}>
        <div className="container">
          <div className={styles.bottomContent}>
           
            <div className={styles.footerCenter}>
              <nav className={styles.footerNav}>
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <p className={styles.copyright}>
                {footerCopyright}
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;