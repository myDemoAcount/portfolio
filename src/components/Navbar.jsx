import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Experience', to: 'experience' },
    { label: 'Contact', to: 'contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 glass border-b border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text font-space cursor-pointer"
          >
            DEV
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy
                smooth
                offset={-70}
                duration={500}
                className="text-text-secondary hover:text-accent-primary transition-colors cursor-pointer font-medium"
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-accent-primary hover:bg-blue-600 rounded-lg font-medium transition-all btn-ripple"
            >
              <Download size={18} />
              Resume
            </motion.button>
          </div>

          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-4 py-4 border-t border-dark-border mt-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy
                smooth
                offset={-70}
                duration={500}
                className="text-text-secondary hover:text-accent-primary transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
