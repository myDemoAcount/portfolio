import React from 'react'
import { motion } from 'framer-motion'

const TechStack = () => {
  const technologies = [
    { name: 'React', category: 'Frontend', color: '#61DAFB' },
    { name: 'Next.js', category: 'Frontend', color: '#FFFFFF' },
    { name: 'TypeScript', category: 'Language', color: '#3178C6' },
    { name: 'Tailwind CSS', category: 'Styling', color: '#06B6D4' },
    { name: 'Node.js', category: 'Backend', color: '#68A063' },
    { name: 'Express', category: 'Backend', color: '#FFFFFF' },
    { name: 'MongoDB', category: 'Database', color: '#00ED64' },
    { name: 'PostgreSQL', category: 'Database', color: '#336791' },
    { name: 'GraphQL', category: 'API', color: '#E10098' },
    { name: 'REST API', category: 'API', color: '#3B82F6' },
    { name: 'Firebase', category: 'Backend', color: '#FFA500' },
    { name: 'AWS', category: 'Cloud', color: '#FF9900' },
    { name: 'Docker', category: 'DevOps', color: '#2496ED' },
    { name: 'Git', category: 'Tools', color: '#F1502F' },
    { name: 'Framer Motion', category: 'Animation', color: '#0055FF' },
    { name: 'Vite', category: 'Build Tool', color: '#646CFF' }
  ]

  const categories = [...new Set(technologies.map((t) => t.category))]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">Tech Stack</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full" />
        </motion.div>

        {/* Category Breakdown */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const count = technologies.filter((t) => t.category === category).length
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="glass rounded-lg p-4 border border-dark-border text-center"
              >
                <p className="text-2xl font-bold gradient-text font-space">{count}</p>
                <p className="text-text-secondary text-sm">{category}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Technology Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              <div className="glass rounded-lg p-6 border border-dark-border hover:border-accent-primary/50 flex flex-col items-center justify-center text-center h-32 transition-all cursor-pointer">
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3 relative"
                  style={{ backgroundColor: `${tech.color}20` }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ color: tech.color }}
                  >
                    {tech.name.charAt(0)}
                  </div>
                </motion.div>

                {/* Name */}
                <h3 className="font-semibold text-sm mb-1">{tech.name}</h3>
                <p className="text-xs text-text-secondary">{tech.category}</p>

                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none blur"
                  style={{
                    backgroundColor: `${tech.color}10`,
                    boxShadow: `0 0 20px ${tech.color}40`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
