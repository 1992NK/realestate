"use client";

import { useEffect, useState } from "react";
import ContactBar from "./ContactBar";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import TopTicker from "./TopTicker";
import styles from "./header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <TopTicker />
      <ContactBar isMenuOpen={isMenuOpen} onMenuOpen={handleMenuOpen} />
      <DesktopNav />
      <MobileMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </header>
  );
};

export default Header;