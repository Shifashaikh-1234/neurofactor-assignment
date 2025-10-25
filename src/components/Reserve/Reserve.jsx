import React from "react";
import styles from "./Reserve.module.css";
import reserveImg from "../../assets/reservation-bg.jpg";     // Hero: reservation background image
import dishesImg from "../../assets/popular-dishes.jpg";     // Popular dishes row image

function Reserve() {
  return (
    <section className={styles.reserveSection}>
      <div
        className={styles.reserveHero}
        style={{ backgroundImage: `url(${reserveImg})` }}
      >
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroHeading}>RESERVE YOUR TABLE AT CHUTNÉE</h2>
            <p className={styles.heroDesc}>
              Whether you’re planning a cozy breakfast, a family dinner, or a stylish catch-up with friends — we’ve got the perfect seat waiting for you.
            </p>
            <a className={styles.cta} href="#booking">
              BOOK A TABLE &#8250;
            </a>
          </div>
          <button className={styles.playBtn}>
            <span className={styles.playIcon}>&#9654;</span>
          </button>
        </div>
      </div>
      <div className={styles.dishesSection}>
        <div className={styles.decorStar}></div>
        <h2 className={styles.dishesHeading}>MOST POPULAR DISHES</h2>
        <p className={styles.dishesDesc}>
          Get a taste of what everyone’s talking about. These are the ChutNée favorites our guests keep coming back for:
        </p>
        <img
          src={dishesImg}
          alt="Popular Dishes"
          className={styles.dishesImg}
        />
        <a href="#menu" className={styles.menuBtn}>
          VIEW MENU &nbsp;&#8250;
        </a>
      </div>
    </section>
  );
}

export default Reserve;
