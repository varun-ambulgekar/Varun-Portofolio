import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed w-full z-[100] bg-light/80 backdrop-blur-sm">
      <div className="section-padding py-10 flex justify-between items-center">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-montserrat font-bold text-primary"
        >
          Varun<span className="text-secondary">.dev</span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <motion.li
              key={item.title}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href={item.href}
                className="font-poppins text-primary hover:text-secondary transition-colors"
              >
                {item.title}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isMenuOpen ? 0 : '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed top-0 right-0 h-screen w-64 bg-light/95 backdrop-blur-sm shadow-lg md:hidden z-[90]"
        >
          <div className="pt-20 px-6">
            <ul className="space-y-6">
              {menuItems.map((item) => (
                <motion.li
                  key={item.title}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <a
                    href={item.href}
                    className="block font-poppins text-lg text-primary hover:text-secondary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar