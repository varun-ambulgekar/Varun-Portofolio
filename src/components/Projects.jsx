import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'iOS Food Delivery App',
      description: 'A native iOS application built with Swift and SwiftUI, featuring real-time order tracking, payment integration, and push notifications.',
      tech: ['Swift', 'SwiftUI', 'Core Data', 'Firebase'],
      type: 'iOS Development',
    },
    {
      title: 'Cross-Platform E-commerce App',
      description: 'A full-featured e-commerce application built with React Native, supporting both iOS and Android platforms with a shared codebase.',
      tech: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      type: 'React Native',
    },
    {
      title: 'Social Media App',
      description: 'A feature-rich social media application developed using Flutter, incorporating real-time chat, media sharing, and user authentication.',
      tech: ['Flutter', 'Dart', 'Firebase', 'GetX'],
      type: 'Flutter',
    },
    {
      title: 'Fitness Tracking App',
      description: 'A native Android application built with Java, featuring workout tracking, progress monitoring, and social sharing capabilities.',
      tech: ['Java', 'Android SDK', 'Room Database', 'Material Design'],
      type: 'Android',
    },
  ]

  return (
    <section id="projects" className="section-padding bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="heading text-text-light dark:text-text-dark">Featured Projects</h2>
          <p className="text-lg md:text-xl text-text-light/80 dark:text-text-dark/80 max-w-3xl mx-auto mb-12">
            Here are some of my notable projects that demonstrate my expertise
            across different mobile development platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card bg-background-light dark:bg-background-dark group hover:bg-primary-light dark:hover:bg-primary-dark hover:scale-105 cursor-pointer border border-text-light/10 dark:border-text-dark/10"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark group-hover:text-text-dark">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 text-sm rounded-full bg-secondary-light/20 text-secondary-light dark:text-secondary-dark group-hover:bg-text-dark/10 group-hover:text-text-dark">
                    {project.type}
                  </span>
                </div>
                <p className="text-text-light/80 dark:text-text-dark/80 group-hover:text-text-dark/80">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-secondary-light/10 text-secondary-light dark:text-secondary-dark group-hover:bg-text-dark/10 group-hover:text-text-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects