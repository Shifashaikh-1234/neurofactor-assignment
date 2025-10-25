import React from "react";
import styles from "./TopBar.module.css";
import locationIcon from "../../assets/location.png"; // Location icon
import phoneIcon from "../../assets/phone.png"; // Call/phone icon
import socialsIcon from "../../assets/socials.png"; // One image with Instagram, Snapchat, TikTok icons (arranged horizontally)

function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.infoArea}>
        <span className={styles.icon}><img src={locationIcon} alt="Location" /></span>
        <span className={styles.text}>
          124 THE BROADWAY, SOUTHALL, LONDON, UB1 1QF
        </span>
        <span className={styles.icon}><img src={phoneIcon} alt="Phone" /></span>
        <span className={styles.text}>02085711688</span>
      </div>
      <div className={styles.socialArea}>
        <img src={socialsIcon} alt="Socials" className={styles.socials} />
      </div>
    </div>
  );
}

export default TopBar;
