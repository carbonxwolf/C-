import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

// Sample blog posts
const blogPosts = [
  {
    title: 'Optimizing React Performance with useMemo and useCallback',
    slug: 'react-performance-optimization',
    excerpt: 'Learn how to use React hooks to prevent unnecessary re-renders and improve your app performance.',
    date: '2024-11-01',
    readTime: '8 min',
    tags: ['React', 'Performance', 'Hooks'],
  },
  {
    title: 'Building Accessible Web Applications',
    slug: 'accessible-web-apps',
    excerpt: 'A comprehensive guide to creating inclusive web experiences that work for everyone.',
    date: '2024-10-15',
    readTime: '12 min',
    tags: ['Accessibility', 'Best Practices', 'WCAG'],
  },
  {
    title: 'Modern CSS Techniques for 2024',
    slug: 'modern-css-techniques',
    excerpt: 'Explore the latest CSS features like Container Queries, :has(), and CSS Grid subgrid.',
    date: '2024-09-28',
    readTime: '10 min',
    tags: ['CSS', 'Frontend', 'Web Design'],
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Thoughts on React, UI/UX, performance, and web development
          </p>
        </motion.div>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link
                to={`/blog/${post.slug}`}
                className="block bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} read</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-accent-600 dark:text-accent-400 font-medium group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400">
              No blog posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
