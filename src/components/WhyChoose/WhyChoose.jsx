import React from "react";
import styles from "./WhyChoose.module.css";
import chooseImg from "../../assets/choose-img.jpg";         // Top circle image
import bestsellersImg from "../../assets/bestsellers-img.jpg"; // One image: 3 best sellers grid

function WhyChoose() {
  return (
    <section className={styles.choose}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.imgWrap}>
            <img src={chooseImg} alt="ChutNee food" className={styles.mainImg} />
            <div className={styles.star} />
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.heading}>WHY CHOOSE CHUTNÉE</h2>
          <h4 className={styles.subhead}>Fresh Flavours, Authentic Vibes.</h4>
          <p className={styles.desc}>
            Discover bold, South Asian-inspired cuisine in the heart of Southall. From organic, locally sourced ingredients to fusion plates, ChutNee blends tradition with modern flair—all served in a vibrant, welcoming space.
          </p>
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <div className={styles.statNum}>100%</div>
              <div className={styles.statCap}>Locally Sourced Ingredients</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statNum}>98%</div>
              <div className={styles.statCap}>Friendly, Attentive Service</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statNum}>99%</div>
              <div className={styles.statCap}>Perfect for Social Gatherings</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bestsellers}>
        <h2 className={styles.sellerHead}>BEST SELLERS</h2>
        <div className={styles.carousel}>
          {/* One image of three best sellers including arrow icons */}
          <img src={bestsellersImg} alt="Best Sellers" className={styles.carouselImg} />
        </div>
        <div className={styles.itemTitle}>COLD COFFEE</div>
        <a href="#menu" className={styles.viewMenu}>
          VIEW MENU &nbsp;&#8250;
        </a>
      </div>
    </section>
  );
}

export default WhyChoose;
