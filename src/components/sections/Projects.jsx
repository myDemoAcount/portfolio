import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and notifications',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'frontend',
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasting',
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&h=400&fit=crop',
      tags: ['React', 'API', 'Chart.js'],
      category: 'frontend',
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'RESTful API for social networking platform with authentication',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      category: 'backend',
      github: '#',
      live: '#'
    },
    {
      id: 5,
      title: 'Portfolio Generator',
      description: 'Dynamic portfolio generator with customizable templates',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      tags: ['React', 'TypeScript', 'Framer Motion'],
      category: 'frontend',
      github: '#',
      live: '#'
    },
    {
      id: 6,
      title: 'Content Management System',
      description: 'Headless CMS with GraphQL API and media management',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70504009?w=600&h=400&fit=crop',
      tags: ['GraphQL', 'Node.js', 'MongoDB', 'AWS'],
      category: 'fullstack',
      github: '#',
      live: '#'
    }
  ]

  const categories = ['all', 'frontend', 'backend', 'fullstack']

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-medium transition-all capitalize ${
                filter === category
                  ? 'bg-accent-primary text-dark-bg'
                  : 'glass border border-dark-border hover:border-accent-primary/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="glass rounded-lg overflow-hidden border border-dark-border hover:border-accent-primary/50 cursor-pointer group transition-all"
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-text-secondary text-sm mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-primary transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-highlight transition-colors ml-auto"
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-bg/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-lg max-w-2xl w-full p-8 border border-dark-border"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold font-space">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 hover:bg-dark-card rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-text-secondary mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.a
                  href={selectedProject.github}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-accent-primary hover:bg-blue-600 rounded-lg font-semibold transition-all"
                >
                  <Github size={20} />
                  View Code
                </motion.a>
                <motion.a
                  href={selectedProject.live}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 glass border border-dark-border hover:border-accent-highlight rounded-lg font-semibold transition-all"
                >
                  Live Demo
                  <ExternalLink size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
