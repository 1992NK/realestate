import { navLinks } from "@/data/headerData";

import styles from "./desktopNav.module.css";

const DesktopNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        {navLinks.map((item, index) => (
          <a
            href={item.href}
            className={`${styles.navLink} ${
              index === 0 ? styles.active : ""
            }`}
            key={item.id}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default DesktopNav;