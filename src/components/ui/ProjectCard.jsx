import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index = 0 }) => {
  const { title, slug, excerpt, heroImage, tags, type, demoLink } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -8 }}
    >
      <Link to={`/projects/${slug}`} className="block">
        <div className="aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
          <img
            src={heroImage || '/placeholder-project.jpg'}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300">
              {type}
            </span>
          </div>
          
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags?.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-accent-600 dark:text-accent-400 flex items-center gap-1 group-hover:gap-2 transition-all">
              View Case Study
              <ArrowRight className="w-4 h-4" />
            </span>
            
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="View demo"
              >
                <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </a>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
