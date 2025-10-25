// import React from "react";
// import styles from "./Testimonials.module.css";
// // Import avatars from assets
// import avatar1 from "../../assets/avatar1.png";
// import avatar2 from "../../assets/avatar2.png";
// import avatar3 from "../../assets/avatar3.png";

// const testimonials = [
//   {
//     quote: "ChutNee streamlined our workflow and improved team collaboration.",
//     author: "Priya S.",
//     role: "Full Stack Developer",
//     img: avatar1,
//   },
//   {
//     quote: "The mobile-first UI is stunning—my whole team loves using it.",
//     author: "Rohan K.",
//     role: "Product Manager",
//     img: avatar2,
//   },
//   {
//     quote: "Lightning-fast and reliable. Integration saved us hours every week.",
//     author: "Meera T.",
//     role: "Tech Lead",
//     img: avatar3,
//   },
// ];

// function Testimonials() {
//   return (
//     <section className={styles.testimonials} id="testimonials">
//       <h2 className={styles.heading}>Testimonials</h2>
//       <div className={styles.wrapper}>
//         {testimonials.map((t, idx) => (
//           <div className={styles.card} key={t.author}>
//             <img src={t.img} alt={t.author} className={styles.avatar} loading="lazy"/>
//             <blockquote className={styles.quote}>
//               “{t.quote}”
//             </blockquote>
//             <div className={styles.meta}>
//               <span className={styles.author}>{t.author}</span>
//               <span className={styles.role}>{t.role}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Testimonials;
