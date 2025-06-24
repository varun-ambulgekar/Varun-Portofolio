import { motion } from 'framer-motion'
import { FaUsers, FaChalkboardTeacher, FaLaptopCode, FaHandsHelping } from 'react-icons/fa'

const Community = () => {
  const initiatives = [
    {
      title: 'Advanced C Programming Workshop',
      description: 'Conducted an intensive workshop helping 2nd year students transition from Python to C programming. Focused on core concepts, memory management, and practical applications.',
      icon: <FaLaptopCode className="w-6 h-6" />,
      date: '2024'
    },
    {
        title: 'CUDA Programming Workshop Volunteer',
        description: 'Volunteered in a CUDA programming workshop, assisting students with understanding GPU programming concepts and helping them troubleshoot issues throughout the session.',
        icon: <FaChalkboardTeacher className="w-6 h-6" />,
        date: '2024',
    }
  ]

  return (
    <section id="community" className="section-padding bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-center text-text-light dark:text-text-dark">Workshop & Teaching</h2>

          <div className="max-w-4xl mx-auto mt-12">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start gap-4 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-light dark:bg-primary-dark flex items-center justify-center text-text-dark">
                  {initiative.icon}
                </div>

                <div className="flex-grow card p-6 bg-background-light dark:bg-background-dark border border-text-light/10 dark:border-text-dark/10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
                      {initiative.title}
                    </h3>
                    <span className="text-sm text-text-light/60 dark:text-text-dark/60">
                      {initiative.date}
                    </span>
                  </div>
                  <p className="text-text-light/80 dark:text-text-dark/80">
                    {initiative.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Community