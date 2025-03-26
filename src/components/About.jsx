import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-primary/80 mb-6">
              I'm a passionate App Developer with expertise in creating cross-platform and native mobile applications. 
              Currently, I'm working as an iOS App Developer intern at Ekatta Innovators (Dec 2024 - present) and as an 
              AWS Cloud Testing and Cybersecurity intern at XPMC (Feb 2025 - present).
            </p>
            <p className="text-lg md:text-xl text-primary/80 mb-6">
              At Ekatta Innovators, I'm gaining hands-on experience in iOS development, working with Swift and SwiftUI 
              to create innovative mobile solutions. Simultaneously at XPMC, I'm expanding my skills in cloud infrastructure 
              and security testing, ensuring robust and secure application deployments.
            </p>
            <p className="text-lg md:text-xl text-primary/80">
              My diverse skill set allows me to adapt to various technologies and platforms, ensuring that I can 
              provide the best solution for any mobile development challenge. Whether it's native iOS development, 
              cross-platform solutions with React Native and Flutter, or Android development using Java, I'm committed 
              to creating exceptional mobile experiences.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {[
            { number: '3+ Months', text: 'of Experience' },
            { number: '50+', text: 'Projects Completed' },
            { number: '4', text: 'Platforms Mastered' },
            { number: '100%', text: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div
              key={index}
              className="card text-center hover:bg-primary hover:text-light group transition-all duration-300"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-secondary group-hover:text-light">
                {stat.number}
              </h3>
              <p className="text-primary/80 group-hover:text-light/80">{stat.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About