import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Briefcase, Award, GraduationCap } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      type: 'Education',
      icon: GraduationCap,
      title: 'Bachelor of Computer Science',
      company: 'University Name',
      period: '2019 - 2023',
      description: 'Specialized in Software Engineering and Web Development'
    },
    {
      type: 'Work',
      icon: Briefcase,
      title: 'Junior Frontend Developer',
      company: 'Tech Startup Inc',
      period: '2023 - 2024',
      description: 'Developed responsive web applications using React and Tailwind CSS'
    },
    {
      type: 'Work',
      icon: Briefcase,
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd',
      period: '2024 - Present',
      description: 'Building full-stack applications with Node.js, React, and MongoDB'
    },
    {
      type: 'Achievement',
      icon: Award,
      title: 'Best Developer Award',
      company: 'Tech Awards 2024',
      period: '2024',
      description: 'Recognized for innovative solutions and code quality'
    },
    {
      type: 'Achievement',
      icon: Code2,
      title: 'Open Source Contributor',
      company: 'GitHub Community',
      period: '2023 - Present',
      description: 'Contributing to popular open-source projects'
    },
    {
      type: 'Education',
      icon: Award,
      title: 'AWS Certified Developer',
      company: 'Amazon Web Services',
      period: '2024',
      description: 'Professional certification in cloud development'
    }
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">Experience & Timeline</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-highlight" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex gap-8 items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 md:text-right">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass rounded-lg p-6 border border-dark-border hover:border-accent-primary/50 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 text-xs rounded-full bg-accent-primary/20 text-accent-primary">
                          {exp.type}
                        </span>
                        <span className="text-sm text-text-secondary">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-accent-primary text-sm font-medium mb-2">{exp.company}</p>
                      <p className="text-text-secondary text-sm">{exp.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="flex-shrink-0 hidden md:block"
                  >
                    <div className="w-16 h-16 rounded-full bg-dark-bg2 border-4 border-dark-border flex items-center justify-center relative">
                      <Icon className="text-accent-primary" size={24} />
                      <div className="absolute inset-0 rounded-full border border-accent-primary/30 animate-pulse" />
                    </div>
                  </motion.div>

                  {/* Mobile Content */}
                  <div className="md:hidden flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
