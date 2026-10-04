"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaXmark } from "react-icons/fa6";

import { headerActions, navLinks } from "@/data/headerData";
import styles from "./mobileMenu.module.css";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      <button type="button" className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`} onClick={onClose} aria-label="Close menu" tabIndex={isOpen ? 0 : -1} />

      <aside className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`} aria-hidden={!isOpen}>
        <div className={styles.menuHeader}>
          <Link href="/" className={styles.brandLogo} onClick={onClose}>
            <Image src="/images/header/logo.jpg" alt="Deen Dayal Logo" width={75} height={85} className={styles.logoImage} priority />
          </Link>

          <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close navigation menu">
            <FaXmark />
          </button>
        </div>

        <nav className={styles.navigation}>
          {navLinks.map((item) => (
            <Link href={item.href} className={styles.navLink} key={item.id} onClick={onClose}>
              <span>{item.label}</span>
              <FaArrowRight />
            </Link>
          ))}
        </nav>

        <div className={styles.bottomArea}>
          <Link href={headerActions.apply.href} className={styles.applyButton} onClick={onClose}>
            <span>{headerActions.apply.label}</span>
            <FaArrowRight />
          </Link>

          <div className={styles.digitalIndia}>
            <Image src="/images/header/swaksh-bharat.webp" alt="Digital India" width={250} height={80} className={styles.digitalIndiaImage} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;