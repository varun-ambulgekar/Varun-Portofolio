import { motion } from 'framer-motion'
import ResumeButton from './ResumeButton'

const Hero = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center bg-gradient-to-b from-light to-tertiary/5 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left space-y-6"
        >
          <div className="space-y-3">
            <h2 className="text-base md:text-lg text-secondary font-poppins tracking-wider">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-primary leading-tight">Varun Ambulgekar</h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-lg md:text-xl text-primary/80 font-montserrat max-w-2xl"
            >
              App Developer specializing in iOS, React Native, Flutter, and Android
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 max-w-md">
            <div className="p-4 bg-white/50 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h3 className="text-3xl font-bold text-secondary mb-1">15+</h3>
              <p className="text-primary/80 font-medium">Projects Completed</p>
            </div>
            <div className="p-4 bg-white/50 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h3 className="text-3xl font-bold text-secondary mb-1">6+ Months</h3>
              <p className="text-primary/80 font-medium">of Experience</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a href="#contact" className="btn-primary hover:scale-105 transition-transform">
              Get in Touch
            </a>
            <a href="#projects" className="btn-outline hover:scale-105 transition-transform">
              View Projects
            </a>
            <ResumeButton />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex items-center justify-center h-[28rem] md:h-[32rem]"
        >
          <div className="relative z-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-tertiary/20 p-3">
            <div className="w-full h-full rounded-full bg-white/50 flex items-center justify-center overflow-hidden">
              <img
                src="/assets/IMG_9238.jpg"
                alt="Varun Ambulgekar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  e.target.parentElement.innerHTML = `<div class="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-tertiary/20 to-secondary/20">
                    <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <span class="mt-2 text-gray-500">Profile Photo</span>
                  </div>`;
                }}
                loading="eager"
              />
            </div>
          </div>
          {/* Adjust the circle position by modifying the top and left percentages, and transform values */}
          <motion.div
            className="absolute z-10 w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] rounded-full bg-secondary/30"
            style={{ top: '10%', left: '17%', transform: 'translate(-50%, -50%)', transformOrigin: 'center' }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Outer circle - Adjust position similar to inner circle above */}
          <motion.div
            className="absolute z-0 w-[26rem] h-[26rem] md:w-[32rem] md:h-[32rem] rounded-full bg-tertiary/20"
            style={{ top: '5%', left: '10%', transform: 'translate(-50%, -50%)', transformOrigin: 'center' }}
            animate={{
              scale: [1.1, 1.25, 1.1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
