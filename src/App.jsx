import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";
import logo4 from "./logo4.png";
import logo5 from "./logo5.png";
import logo6 from "./logo6.png";
import ImageScroll from "./components/imageScroll";
import Navbar from "./components/navbar";
import ContactSection from "./components/contact";
import Footer from "./components/footer";
import WhyChooseMe from "./components/why-choose-me";
import SkillsAndExpertise from "./components/skills";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollPosition]);

  return (
    <body class="df-bg df-text">
      {/* <Header scrolled={isScrolled} /> */}
      <div className="elipseGrad"></div>
      <div className="elipseGrad2"></div>
      <Navbar />

      <Hero />
      <SkillsAndExpertise />
      <WhyChooseMe />
      <ContactSection />
      <Footer />

      {/* <section class="flex justify-center space-x-8 py-12">
        <img
          src={logo1}
          alt="Logo 2"
          class="h-12 brightness-50	contrast-50 saturate-50 invert"
        />
        <img
          src={logo2}
          alt="Logo 2"
          class="h-12 brightness-50	contrast-50 saturate-50 invert"
        />
        <img
          src={logo3}
          alt="Logo 2"
          class="h-12 brightness-50	contrast-50 saturate-50 invert"
        />
        <img
          src={logo4}
          alt="Logo 2"
          class="h-12 brightness-50	contrast-50 saturate-50 invert"
        />
        <img
          src={logo5}
          alt="Logo 2"
          class="h-12 brightness-50	contrast-50 saturate-50 invert"
        />
        <img
          src={logo6}
          alt="Logo 2"
          class="h-12 brightness-50	contrast-50 saturate-50 "
        />
      </section>

      <section class="text-center py-12">
        <h2 class="text-3xl font-bold mb-4">
          Software Engineer Specialized in Front-End Development
        </h2>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">
          I'm passionate about creating visually stunning and highly efficient
          web applications. I bring innovative solutions to life with my
          expertise in front-end development.
        </p>
      </section> */}
    </body>
  );
}

export default App;
