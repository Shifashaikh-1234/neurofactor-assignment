import React from "react";
import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";

//import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import TopBar from "./components/TopBar/TopBar";
import About  from "./components/About/About";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Reserve from "./components/Reserve/Reserve";
import AboutLove from "./components/AboutLove/AboutLove";
import SocialGallery from "./components/SocialGallery/SocialGallery";

function App() {
  return (
    <div className={styles.app}>
     <TopBar />
      
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Reserve />
        <AboutLove />
        <SocialGallery />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
