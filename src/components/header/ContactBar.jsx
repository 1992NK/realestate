import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaBars,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

import { contactData, headerActions } from "@/data/headerData";
import styles from "./contactBar.module.css";

const contactIcons = {
  email: FaEnvelope,
  phone: FaPhone,
  location: FaLocationDot,
};

const ContactBar = ({ isMenuOpen, onMenuOpen }) => {
  return (
    <div className={styles.contactBar}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          <Image src="/images/header/logo.jpg" alt="Haryana Logo" width={75} height={85} priority />
        </Link>

        <div className={styles.contactList}>
          {contactData.map((item) => {
            const Icon = contactIcons[item.type];

            return (
              <a href={item.href} className={styles.contactItem} key={item.id}>
                <span className={`${styles.contactIcon} ${item.type === "location" ? styles.locationIcon : ""}`}>
                  <Icon />
                </span>
                <span className={styles.contactContent}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </span>
              </a>
            );
          })}
        </div>

        <Link href={headerActions.apply.href} className={styles.applyButton}>
          <span>{headerActions.apply.label}</span>
          <span className={styles.applyArrow}>
            <FaArrowRight />
          </span>
        </Link>

        <button type="button" className={styles.menuButton} onClick={onMenuOpen} aria-label="Open navigation menu" aria-expanded={isMenuOpen}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default ContactBar;