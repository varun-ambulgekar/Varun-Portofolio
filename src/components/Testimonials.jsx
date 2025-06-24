import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const autoPlayRef = useRef(null)

  useEffect(() => {
    autoPlayRef.current = nextTestimonial
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const autoPlayInterval = setInterval(play, 5000)
    return () => clearInterval(autoPlayInterval)
  }, [])

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextTestimonial()
    }

    if (touchStart - touchEnd < -75) {
      prevTestimonial()
    }
  }

  const testimonials = [
    {
      name: 'EKatta Innovators LLP',
      role: 'HR',
      feedback: 'Varun is an exceptional developer with a keen eye for detail. His ability to quickly grasp complex concepts and deliver high-quality applications is remarkable.',
      initials: 'HR'
    },
    {
      name: 'Devashish Dadke',
      role: 'Team Member and Classmate',
      feedback: 'Working with Varun has been a pleasure. His proactive approach and strong communication skills make him a valuable asset to any team.',
      initials: 'DD'
    },
    {
      name: 'Varad Dixit',
      role: 'Team Member and Classmate',
      feedback: 'Varun consistently demonstrates strong problem-solving abilities and a genuine passion for learning. His contributions to our team have been invaluable.',
      initials: 'VD'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section id="testimonials" className="section-padding bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-center text-text-light dark:text-text-dark">What People Say About Me</h2>

          <div className="relative max-w-4xl mx-auto mt-12">
            <div 
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                className="flex"
                initial={{ opacity: 1 }}
                animate={{ x: `${-currentIndex * 100}%` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="card p-8 bg-background-light dark:bg-background-dark border border-text-light/10 dark:border-text-dark/10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-primary-light dark:bg-primary-dark flex items-center justify-center text-text-dark font-semibold">
                          {testimonial.initials}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
                            {testimonial.name}
                          </h3>
                          <p className="text-text-light/80 dark:text-text-dark/80">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-lg text-text-light/90 dark:text-text-dark/90 italic">
                        "{testimonial.feedback}"
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials