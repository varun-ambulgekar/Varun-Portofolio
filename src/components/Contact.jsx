import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      url: 'https://github.com/varun-ambulgekar',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      url: 'https://linkedin.com/in/varunambulgekar',
    },
    {
      name: 'Twitter',
      icon: <FaInstagram size={24} />,
      url: 'https://www.instagram.com/1101_varun',
    },
    {
      name: 'Email',
      icon: <FaEnvelope size={24} />,
      url: 'mailto:varunambulgekar700@gmail.com',
    },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="heading">Get in Touch</h2>
          <p className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto mb-12">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card"
          >
            <form className="space-y-6" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="6dd0d60c-9181-4d9a-b948-ff4f73c75df8" />
              <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-primary font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border border-tertiary/30 focus:outline-none focus:border-secondary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-primary font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-tertiary/30 focus:outline-none focus:border-secondary"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-primary font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-tertiary/30 focus:outline-none focus:border-secondary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full md:w-auto transform hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex justify-center space-x-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact