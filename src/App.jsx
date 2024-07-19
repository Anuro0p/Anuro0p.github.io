import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import ContactSection from "./components/contact";
import Footer from "./components/footer";
import SkillsAndExpertise from "./components/skills";

function App() {
  return (
    <body style={{ backgroundImage: bgbg }} class="df-bg df-text">
      {/* <Header scrolled={isScrolled} /> */}
      <div className="elipseGrad"></div>
      <div className="elipseGrad2"></div>
      <Navbar />

      <Hero />
      <SkillsAndExpertise />
      {/* <WhyChooseMe /> */}
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
