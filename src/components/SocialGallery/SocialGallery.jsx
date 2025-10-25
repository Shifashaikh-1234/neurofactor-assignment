import React from "react";
import styles from "./SocialGallery.module.css";
import socialsImg from "../../assets/socials-row.jpg";      // Top row: TikTok, IG, Snap - as one image
import galleryImg from "../../assets/reels-grid.jpg";      // Four images in a row - as one image

function SocialGallery() {
  return (
    <section className={styles.socialGallery}>
      <div className={styles.socialRow}>
        <h2 className={styles.socialHeading}>
          STAY CONNECTED & SHARE<br />
          YOUR EXPERIENCE WITH US!
        </h2>
        <img src={socialsImg} alt="Socials Row" className={styles.socialsImg} />
      </div>
      <div className={styles.galleryRow}>
        <h2 className={styles.galleryHeading}>OUR GALLERY</h2>
        <img src={galleryImg} alt="Gallery Row" className={styles.galleryImg} />
      </div>
    </section>
  );
}

export default SocialGallery;
