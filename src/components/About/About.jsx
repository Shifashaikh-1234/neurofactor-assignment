import React from "react";
import styles from "./About.module.css";
import promoImg from "../../assets/about-promo.jpg";     // Top circular promo image
import offersImg from "../../assets/about-offers.jpg";   // Single image showing all 6 offers

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.topBar}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            WHERE TRADITION <br />
            MEETS INNOVATION IN <br />
            EVERY BITE.
          </h2>
          <p className={styles.desc}>
            Founded by a passionate husband-and-wife duo, ChutNee is London’s go-to for bold and refreshing South Asian street food. Our dishes are crafted from cherished family recipes using hand-picked ingredients, blending authentic flavours with Western finesse. From signature chai to inventive plates paired with our vibrant chutneys, every bite is made to surprise and comfort. More than a café, our House of Chai is an experience—where rich teas, soulful food, and fusion delights bring the warmth of home to every dish.
          </p>
          <a href="#about" className={styles.cta}>
            VIEW ABOUT US &nbsp;&#8250;
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.roundImgWrap}>
            <img src={promoImg} alt="About ChutNee" className={styles.roundImg} />
            <button className={styles.playBtn}>
              <span className={styles.playIcon}>&#9654;</span>
            </button>
            {/* Position sticker element at top-left per Figma */}
            <div className={styles.sticker}>CHUTNEE CAFE</div>
            {/* Add additional decorative Yellow star */}
            <div className={styles.star}></div>
          </div>
        </div>
      </div>
      <div className={styles.offerSection}>
        <h2 className={styles.offerHeading}>WHAT WE OFFER</h2>
        <img src={offersImg} alt="Offer Grid" className={styles.offerImg} />
      </div>
    </section>
  );
}

export default About;
