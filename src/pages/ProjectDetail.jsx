import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, TrendingUp } from 'lucide-react';
import Button from '../components/ui/Button';
import { useEffect, useState } from 'react';

// Import MDX files
const projectModules = import.meta.glob('../content/projects/*.mdx', { eager: true });

const ProjectDetail = () => {
  const { slug } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [ProjectContent, setProjectContent] = useState(null);

  useEffect(() => {
    // Find the matching project
    const projectPath = `../content/projects/${slug}.mdx`;
    const module = projectModules[projectPath];

    if (module) {
      setProjectData(module.frontmatter || module);
      setProjectContent(() => module.default);
    }
  }, [slug]);

  if (!projectData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Project not found
          </h2>
          <Link to="/projects" className="text-accent-600 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Hero Image */}
          <div className="aspect-video rounded-2xl overflow-hidden mb-8 shadow-2xl">
            <img
              src={projectData.heroImage}
              alt={projectData.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Meta */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm font-semibold">
              {projectData.type}
            </span>
            {projectData.tags?.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {projectData.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {projectData.excerpt}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {projectData.githubLink && (
              <Button href={projectData.githubLink} variant="outline">
                <Github className="w-5 h-5 mr-2" />
                View Code
              </Button>
            )}
            {projectData.demoLink && (
              <Button href={projectData.demoLink}>
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </Button>
            )}
          </div>
        </motion.div>

        {/* Tech Stack */}
        {projectData.tech && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {projectData.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Metrics */}
        {projectData.metrics && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {projectData.metrics.map((metric, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-accent-50 to-primary-50 dark:from-accent-950 dark:to-primary-950 rounded-xl text-center"
              >
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-accent-600 dark:text-accent-400" />
                <div className="text-3xl font-bold mb-1 text-gray-900 dark:text-white">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* MDX Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-12
            prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-p:text-gray-600 dark:prose-p:text-gray-400
            prose-a:text-accent-600 dark:prose-a:text-accent-400 prose-a:no-underline hover:prose-a:underline
            prose-code:text-accent-600 dark:prose-code:text-accent-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:text-gray-100
            prose-img:rounded-xl prose-img:shadow-lg"
        >
          {ProjectContent && <ProjectContent />}
        </motion.div>

        {/* Testimonial */}
        {projectData.testimonial && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 p-8 bg-gradient-to-br from-accent-50 to-primary-50 dark:from-accent-950 dark:to-primary-950 rounded-2xl"
          >
            <p className="text-xl italic text-gray-700 dark:text-gray-300 mb-4">
              "{projectData.testimonial.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-400 to-primary-500 flex items-center justify-center text-white font-bold">
                {projectData.testimonial.author.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {projectData.testimonial.author}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {projectData.testimonial.role}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center"
        >
          <Button to="/projects" variant="outline" size="lg">
            View More Projects
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
