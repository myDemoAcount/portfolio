import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Server,
  Cloud,
  Git,
  Palette,
  Zap,
  Shield
} from 'lucide-react'

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      icon: Palette,
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 95 },
        { name: 'Framer Motion', level: 85 }
      ]
    },
    backend: {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'RESTful APIs', level: 92 },
        { name: 'GraphQL', level: 80 },
        { name: 'Middleware', level: 85 },
        { name: 'Authentication', level: 90 }
      ]
    },
    database: {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Firebase', level: 82 },
        { name: 'Redis', level: 78 },
        { name: 'SQL', level: 90 },
        { name: 'Data Modeling', level: 85 }
      ]
    },
    tools: {
      title: 'Tools & Platforms',
      icon: Zap,
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Vite', level: 90 },
        { name: 'CI/CD', level: 80 },
        { name: 'Linux', level: 85 }
      ]
    }
  }

  const categories = Object.keys(skillCategories)

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full" />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => {
            const Icon = skillCategories[category].icon
            return (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-accent-primary text-dark-bg'
                    : 'glass border border-dark-border hover:border-accent-primary/50'
                }`}
              >
                <Icon size={20} />
                {skillCategories[category].title}
              </motion.button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[selectedCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-lg p-6 border border-dark-border hover:border-accent-primary/50 group transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-sm text-accent-primary font-bold">{skill.level}%</span>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-2 bg-dark-bg rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                />
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
