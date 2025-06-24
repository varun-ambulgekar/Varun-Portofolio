import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const OpenSource = () => {
  const contributions = [
    {
      projectName: 'React Native',
      description: 'Open source mobile application framework',
      contribution: 'Fixed accessibility issues in core components',
      prLink: 'https://github.com/facebook/react-native/pull/12345',
      githubLink: 'https://github.com/facebook/react-native'
    },
    {
      projectName: 'TensorFlow',
      description: 'Machine learning framework',
      contribution: 'Improved documentation for iOS deployment',
      prLink: 'https://github.com/tensorflow/tensorflow/pull/67890',
      githubLink: 'https://github.com/tensorflow/tensorflow'
    },
    {
      projectName: 'Swift',
      description: "Apple's programming language",
      contribution: 'Added new test cases for string handling',
      prLink: 'https://github.com/apple/swift/pull/34567',
      githubLink: 'https://github.com/apple/swift'
    }
  ]

  return (
    <section id="opensource" className="section-padding bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-center text-text-light dark:text-text-dark">Open Source Contributions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {contributions.map((contribution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 bg-white dark:bg-gray-800 border border-text-light/10 dark:border-text-dark/10 hover:border-primary-light dark:hover:border-primary-dark rounded-lg shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <a
                    href={contribution.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-primary-light dark:text-primary-dark hover:underline flex items-center gap-2"
                  >
                    {contribution.projectName}
                    <FaGithub className="text-text-light dark:text-text-dark" />
                  </a>
                </div>
                
                <p className="text-text-light/80 dark:text-text-dark/80 mb-4">
                  {contribution.description}
                </p>
                
                <p className="text-text-light/90 dark:text-text-dark/90 mb-4">
                  {contribution.contribution}
                </p>
                
                <a
                  href={contribution.prLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light dark:text-primary-dark hover:underline inline-block"
                >
                  View Pull Request
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OpenSource