import React from "react";
import styles from "./Hero.module.css";
import logo from "../../assets/logo.png";
import bgImage from "../../assets/welcome-bg.jpg"; // Replace with your background image

const navLinks = [
  { name: "OUR STORY", href: "#ourstory" },
  { name: "MENU", href: "#menu" },
  { name: "AFTERNOON TEA", href: "#afternoontea" },
  { name: "EVENTS", href: "#events" },
  { name: "CHUTNÉE FAMILY", href: "#family" },
  { name: "CONTACT", href: "#contact" },
];

function Hero() {
  return (
    <header
      className={styles.hero}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <nav className={styles.navbar}>
        <div className={styles.logoArea}>
          <img src={logo} alt="ChutNee Logo" className={styles.logo} />
          <span className={styles.brand}></span>
        </div>
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <button className={styles.reserveBtn}>
          RESERVATION <span className={styles.arrow}>&#8250;</span>
        </button>
      </nav>
      <div className={styles.content}>
        <h1 className={styles.heading}>WELCOME TO <br />CHUTNÉE</h1>
        <div className={styles.btnRow}>
          <a href="#menu" className={styles.ctaBlue}>
            VIEW MENU
          </a>
          <a href="#booking" className={styles.ctaPink}>
            BOOK A TABLE
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
