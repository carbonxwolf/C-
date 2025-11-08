import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import ProjectCard from '../components/ui/ProjectCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Sample featured projects - will be replaced with actual data
const featuredProjects = [
  {
    title: 'E-Commerce Dashboard',
    slug: 'ecommerce-dashboard',
    excerpt: 'A comprehensive admin dashboard for managing online stores with real-time analytics.',
    heroImage: 'https://via.placeholder.com/600x400/8B5CF6/ffffff?text=E-Commerce+Dashboard',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    type: 'Web App',
    demoLink: 'https://example.com',
  },
  {
    title: 'Component Library',
    slug: 'react-component-library',
    excerpt: 'A production-ready React component library with accessibility and theming support.',
    heroImage: 'https://via.placeholder.com/600x400/0EA5E9/ffffff?text=Component+Library',
    tags: ['React', 'Storybook', 'CSS-in-JS'],
    type: 'Component Library',
    demoLink: 'https://example.com',
  },
  {
    title: 'WordPress Customizer',
    slug: 'wordpress-customizer',
    excerpt: 'Advanced WordPress theme customization with live preview and drag-and-drop builder.',
    heroImage: 'https://via.placeholder.com/600x400/A855F7/ffffff?text=WordPress+Customizer',
    tags: ['WordPress', 'PHP', 'JavaScript'],
    type: 'WordPress',
    demoLink: 'https://example.com',
  },
];

const skills = [
  'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 
  'Next.js', 'WordPress', 'Node.js', 'REST APIs'
];

const Home = () => {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });
  const [skillsRef, skillsVisible] = useScrollReveal({ threshold: 0.1 });
  const [projectsRef, projectsVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-primary-50 to-white dark:from-accent-950 dark:via-primary-950 dark:to-gray-950 opacity-50" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Available for Projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-accent-600 to-primary-600 dark:from-white dark:via-accent-400 dark:to-primary-400 bg-clip-text text-transparent"
          >
            Salman Hafiz
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4"
          >
            React Developer & WordPress Customizer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-500 dark:text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            Crafting beautiful, performant web experiences at JarzDigital.
            Specializing in React applications and WordPress customizations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button to="/projects" size="lg" className="group">
              View My Case Studies
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button to="/about#contact" variant="outline" size="lg">
              Get In Touch
            </Button>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 opacity-20"
          >
            <Code className="w-16 h-16 text-accent-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 opacity-20"
          >
            <Zap className="w-16 h-16 text-primary-600" />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Bar */}
      <section ref={skillsRef} className="sticky top-16 z-30 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-y border-gray-200 dark:border-gray-800 py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={skillsVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={skillsVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-accent-100 dark:hover:bg-accent-900/30 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section ref={projectsRef} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore my recent work and case studies showcasing clean code, thoughtful design, and measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button to="/projects" variant="outline" size="lg">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
