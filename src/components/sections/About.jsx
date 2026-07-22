import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Zap, Target, Users } from 'lucide-react'

const About = () => {
  const stats = [
    { label: 'Years Learning', value: '3+' },
    { label: 'Projects Done', value: '10+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Passion Level', value: '100%' }
  ]

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Creative solutions to complex technical challenges'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams and stakeholders'
    }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I'm a passionate developer with a love for creating beautiful, functional digital products. My journey in tech started with curiosity and has evolved into expertise across the full stack.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I specialize in frontend development with React, but I'm equally comfortable building robust backends with Node.js. I believe in writing code that's not just functional, but elegant and maintainable.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              When I'm not coding, I love exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.
            </p>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-lg p-6 border border-dark-border hover:border-accent-primary/50 transition-all"
              >
                <div className="text-3xl font-bold gradient-text font-space mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-lg p-6 border border-dark-border hover:border-accent-primary/50 group transition-all cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-lg bg-accent-primary/20 flex items-center justify-center mb-4 group-hover:bg-accent-primary/30 transition-colors"
                >
                  <Icon className="text-accent-primary" size={24} />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
