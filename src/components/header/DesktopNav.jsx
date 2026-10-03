import Image from "next/image";
import { navLinks } from "@/data/headerData";
import styles from "./desktopNav.module.css";

const DesktopNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.menu}>
          {navLinks.map((item, index) => (
            <a href={item.href} className={`${styles.navLink} ${index === 0 ? styles.active : ""}`} key={item.id}>
              {item.label}
            </a>
          ))}
        </div>

        <div className={styles.logos}>
          <div className={styles.logoItem}>
            <Image src="/images/header/swaksh-bharat.webp" alt="Haryana Logo" width={250} height={88} />
          </div>

        
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;