import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'

const Hero = () => {
  const socialIcons = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/20 rounded-full mix-blend-screen filter blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent-secondary/20 rounded-full mix-blend-screen filter blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-accent-primary border border-accent-primary/30">
                Welcome to my portfolio
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold font-space mb-6 leading-tight">
              <span className="block">Hi, I'm a</span>
              <span className="gradient-text block">
                <TypeAnimation
                  sequence={[
                    'Developer',
                    1000,
                    'Designer',
                    1000,
                    'Creator',
                    1000
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                />
              </span>
            </h1>

            <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-2xl">
              Crafting elegant, performant digital experiences with modern technologies. Specialized in React, Node.js, and full-stack development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent-primary hover:bg-blue-600 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all btn-ripple"
              >
                View My Work
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass hover:bg-dark-card rounded-lg font-semibold border border-dark-border transition-all btn-ripple"
              >
                Get In Touch
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-text-secondary">Follow me:</span>
              <div className="flex gap-4">
                {socialIcons.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-accent-primary/20 transition-all"
                      title={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Avatar/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-full aspect-square"
            >
              <div className="w-full h-full glass rounded-2xl border border-dark-border overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-accent-primary/10 via-accent-secondary/10 to-accent-highlight/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-bold gradient-text font-space mb-4">DEV</div>
                    <p className="text-text-secondary">Premium Portfolio</p>
                  </div>
                </div>
              </div>
              {/* Floating shapes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, linear: true }}
                className="absolute -top-20 -right-20 w-40 h-40 border border-accent-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, linear: true }}
                className="absolute -bottom-20 -left-20 w-40 h-40 border border-accent-secondary/20 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-accent-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
