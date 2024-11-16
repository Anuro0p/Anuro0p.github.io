import './App.css'
import Hero from './components/hero'
import Navbar from './components/navbar'
import ContactSection from './components/contact'
import Footer from './components/footer'
import SkillsAndExpertise from './components/skills'
import BlobCursor from './components/blob-cursor'
import CustomCursor from './components/round-cursor'

function App () {
  return (
    <body class='df-bg df-text'>
      <div
        id='sticky-banner'
        tabindex='-1'
        class='top-0 z-[99999] fixed flex justify-between border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 p-2 border-b w-full start-0'
      >
        <div class='flex items-center mx-auto'>
          <p class='flex items-center font-normal text-gray-500 text-sm dark:text-gray-300'>
            <span class='inline-flex flex-shrink-0 justify-center items-center bg-gray-200 dark:bg-gray-600 mr-4 p-1 rounded-full w-6 h-6 me-3'>
              <svg
                class='w-3 h-3 text-gray-500 dark:text-gray-300'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 18 19'
              >
                <path d='M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z' />
              </svg>
              <span class='sr-only'>Light bulb</span>
            </span>
            <span className='font-bold'>Wesite is under construction </span>
          </p>
        </div>
      </div>

      <BlobCursor />
      <CustomCursor />
      {/* <Header scrolled={isScrolled} /> */}
      <div className='elipseGrad'></div>
      <div className='elipseGrad2'></div>
      {/* <div className="elipseGrad3"></div> */}

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
          class="brightness-50 h-12 invert contrast-50 saturate-50"
        />
        <img
          src={logo2}
          alt="Logo 2"
          class="brightness-50 h-12 invert contrast-50 saturate-50"
        />
        <img
          src={logo3}
          alt="Logo 2"
          class="brightness-50 h-12 invert contrast-50 saturate-50"
        />
        <img
          src={logo4}
          alt="Logo 2"
          class="brightness-50 h-12 invert contrast-50 saturate-50"
        />
        <img
          src={logo5}
          alt="Logo 2"
          class="brightness-50 h-12 invert contrast-50 saturate-50"
        />
        <img
          src={logo6}
          alt="Logo 2"
          class="brightness-50 h-12 contrast-50 saturate-50"
        />
      </section>

      <section class="py-12 text-center">
        <h2 class="mb-4 font-bold text-3xl">
          Software Engineer Specialized in Front-End Development
        </h2>
        <p class="mx-auto max-w-2xl text-gray-400 text-lg">
          I'm passionate about creating visually stunning and highly efficient
          web applications. I bring innovative solutions to life with my
          expertise in front-end development.
        </p>
      </section> */}
    </body>
  )
}

export default App
