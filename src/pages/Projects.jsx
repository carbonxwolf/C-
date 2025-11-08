import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ui/ProjectCard';

// Sample projects data
const allProjects = [
  {
    title: 'E-Commerce Dashboard',
    slug: 'ecommerce-dashboard',
    excerpt: 'A comprehensive admin dashboard for managing online stores with real-time analytics.',
    heroImage: 'https://via.placeholder.com/600x400/8B5CF6/ffffff?text=E-Commerce+Dashboard',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    type: 'Web App',
    demoLink: 'https://example.com',
  },
  {
    title: 'Component Library',
    slug: 'react-component-library',
    excerpt: 'A production-ready React component library with accessibility and theming support.',
    heroImage: 'https://via.placeholder.com/600x400/0EA5E9/ffffff?text=Component+Library',
    tags: ['React', 'Storybook', 'CSS-in-JS', 'Accessibility'],
    type: 'Component Library',
    demoLink: 'https://example.com',
  },
  {
    title: 'WordPress Customizer',
    slug: 'wordpress-customizer',
    excerpt: 'Advanced WordPress theme customization with live preview and drag-and-drop builder.',
    heroImage: 'https://via.placeholder.com/600x400/A855F7/ffffff?text=WordPress+Customizer',
    tags: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    type: 'WordPress',
    demoLink: 'https://example.com',
  },
  {
    title: 'Task Management App',
    slug: 'task-management-app',
    excerpt: 'A collaborative task management application with real-time updates and team features.',
    heroImage: 'https://via.placeholder.com/600x400/10B981/ffffff?text=Task+Management',
    tags: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
    type: 'Web App',
    demoLink: 'https://example.com',
  },
  {
    title: 'Portfolio Builder',
    slug: 'portfolio-builder',
    excerpt: 'A drag-and-drop portfolio builder for developers and designers to showcase their work.',
    heroImage: 'https://via.placeholder.com/600x400/F59E0B/ffffff?text=Portfolio+Builder',
    tags: ['React', 'Next.js', 'DnD Kit', 'Vercel'],
    type: 'Web App',
    demoLink: 'https://example.com',
  },
  {
    title: 'WooCommerce Theme',
    slug: 'woocommerce-theme',
    excerpt: 'Custom WooCommerce theme optimized for performance and conversion rates.',
    heroImage: 'https://via.placeholder.com/600x400/EC4899/ffffff?text=WooCommerce+Theme',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'SCSS'],
    type: 'WordPress',
    demoLink: 'https://example.com',
  },
];

const filters = ['All', 'Web App', 'Component Library', 'WordPress'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.type === activeFilter);

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Projects & Case Studies
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my work spanning web applications, component libraries, and WordPress customizations.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-accent-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-600 dark:text-gray-400">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
