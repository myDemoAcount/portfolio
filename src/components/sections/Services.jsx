import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, Zap, Brain, Shield, TrendingUp } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Building modern, responsive web applications with cutting-edge technologies'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with great user experience'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, efficiency, and better user experience'
    },
    {
      icon: Brain,
      title: 'API Development',
      description: 'Building robust RESTful and GraphQL APIs for modern applications'
    },
    {
      icon: Shield,
      title: 'Security Implementation',
      description: 'Implementing security best practices and authentication mechanisms'
    },
    {
      icon: TrendingUp,
      title: 'Scalability Solutions',
      description: 'Designing scalable architectures for growing applications'
    }
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">Services</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-primary/0 via-accent-primary/10 to-accent-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="glass rounded-lg p-8 border border-dark-border group-hover:border-accent-primary/50 transition-all relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-lg bg-accent-primary/20 flex items-center justify-center mb-4 group-hover:bg-accent-primary/30 transition-colors"
                  >
                    <Icon className="text-accent-primary" size={32} />
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{service.description}</p>

                  {/* Hover Line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-accent-primary to-accent-secondary group-hover:w-full transition-all duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
