import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    {
      category: 'iOS Development',
      items: [
        { name: 'Swift', level: 90 },
        { name: 'SwiftUI', level: 85 },
        { name: 'UIKit', level: 90 },
        { name: 'Core Data', level: 80 },
      ],
    },
    {
      category: 'Cross-Platform',
      items: [
        { name: 'React Native', level: 95 },
        { name: 'Flutter', level: 85 },
        { name: 'Dart', level: 85 },
        { name: 'JavaScript', level: 90 },
      ],
    },
    {
      category: 'Android Development',
      items: [
        { name: 'Java', level: 90 },
        { name: 'Android SDK', level: 85 },
        { name: 'XML', level: 85 },
        { name: 'Material Design', level: 80 },
      ],
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git', level: 90 },
        { name: 'REST APIs', level: 90 },
        { name: 'Firebase', level: 85 },
        { name: 'CI/CD', level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="heading">Skills & Expertise</h2>
          <p className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto mb-12">
            With expertise across multiple platforms and frameworks, I bring a comprehensive
            skill set to mobile app development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card transform hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="subheading">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-primary">{skill.name}</span>
                      <span className="text-secondary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-tertiary/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-secondary rounded-full animate-pulse"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills