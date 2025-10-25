import React from "react";
import styles from "./AboutLove.module.css";
import loveGridImg from "../../assets/about-love-grid.jpg";      // Review grid - 4 images/cards in one
import reelsGridImg from "../../assets/reels-grid.jpg";         // Reels grid - 4 images in one

function AboutLove() {
  return (
    <section className={styles.loveSection}>
      <div className={styles.aboutGrid}>
        <h2 className={styles.loveHeading}>ABOUT US<br />LOVE ABOUT US</h2>
        <div className={styles.gridWrap}>
          <img src={loveGridImg} alt="Love About Us grid" className={styles.gridImg} />
        </div>
      </div>
      <div className={styles.reelsSection}>
        <h2 className={styles.reelsHeading}>WATCH OUR REELS</h2>
        <p className={styles.reelsDesc}>
          Get a taste of what everyone’s talking about. These are the ChutNée favorites our guests keep coming back for:
        </p>
        <img src={reelsGridImg} alt="Watch Our Reels grid" className={styles.reelsImg} />
      </div>
    </section>
  );
}

export default AboutLove;
