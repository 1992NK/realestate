import { FaArrowRight, FaHouseChimney, FaXmark } from "react-icons/fa6";
import { brandData, headerActions, navLinks } from "@/data/headerData";
import styles from "./mobileMenu.module.css";

const MobileMenu = ({ isOpen, onClose }) => {
  const handleScroll = (event, href) => {
    event.preventDefault();

    const sectionId = href.replace("#", "");
    const section = document.getElementById(sectionId);

    onClose();

    if (!section) {
      return;
    }

    window.setTimeout(() => {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  };

  return (
    <>
      <button type="button" className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`} onClick={onClose} aria-label="Close menu" tabIndex={isOpen ? 0 : -1} />

      <aside className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`} aria-hidden={!isOpen}>
        <div className={styles.menuHeader}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <FaHouseChimney />
            </span>
            <span className={styles.brandContent}>
              <strong>{brandData.title}</strong>
              <span>{brandData.subtitle}</span>
            </span>
          </div>

          <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close navigation menu">
            <FaXmark />
          </button>
        </div>

        <nav className={styles.navigation}>
          {navLinks.map((item) => (
            <a href={item.href} className={styles.navLink} key={item.id} onClick={(event) => handleScroll(event, item.href)}>
              <span>{item.label}</span>
              <FaArrowRight />
            </a>
          ))}
        </nav>

        <a href={headerActions.apply.href} className={styles.applyButton} onClick={(event) => handleScroll(event, headerActions.apply.href)}>
          <span>{headerActions.apply.label}</span>
          <FaArrowRight />
        </a>
      </aside>
    </>
  );
};

export default MobileMenu;