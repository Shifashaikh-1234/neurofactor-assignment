import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import phoneIcon from "../../assets/phone.png";
import socialsImg from "../../assets/socials.png";

const navLinks = [
  { name: "OUR STORY", href: "#ourstory" },
  { name: "MENU", href: "#menu" },
  { name: "AFTERNOON TEA", href: "#afternoontea" },
  { name: "EVENTS", href: "#events" },
  { name: "CHUTNÉE FAMILY", href: "#family" },
  { name: "CONTACT", href: "#contact" },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.centerBlock}>
        <img src={logo} alt="ChutNee Logo" className={styles.logo} />
        <nav>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.contactRow}>
          <span className={styles.address}>
            <span className={styles.locationIcon}>📍</span>
            124 THE BROADWAY, SOUTHALL, LONDON, UB1 1QF
          </span>
          <span className={styles.phone}>
            <img src={phoneIcon} alt="Phone" />
            02085711688
          </span>
        </div>
        <div className={styles.socialsWrap}>
          <img src={socialsImg} alt="Socials" className={styles.socials} />
        </div>
      </div>
      <div className={styles.bottomBar}>
        COPYRIGHT 2024 © ALL RIGHT RESERVED. DEVELOPED BY FOODO.AI
      </div>
    </footer>
  );
}

export default Footer;
