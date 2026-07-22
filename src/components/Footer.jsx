import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' }
  ]

  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Contact', href: '#' }
  ]

  return (
    <footer className="bg-dark-bg2 border-t border-dark-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold gradient-text font-space mb-2">DEV</h3>
            <p className="text-text-secondary text-sm">Premium Developer Portfolio</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-text-secondary hover:text-accent-primary transition-colors text-sm block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <a href="#" className="text-text-secondary hover:text-accent-primary transition-colors text-sm block">Web Development</a>
              <a href="#" className="text-text-secondary hover:text-accent-primary transition-colors text-sm block">Frontend Development</a>
              <a href="#" className="text-text-secondary hover:text-accent-primary transition-colors text-sm block">Backend APIs</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-accent-primary/20 transition-all"
                    title={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-dark-border my-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-text-secondary text-sm">
            © 2024 Premium Developer Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
