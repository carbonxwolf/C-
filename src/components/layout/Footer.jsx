import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/salmanhafiz' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/salmanhafiz' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/salmanhafiz' },
    { name: 'Email', icon: Mail, url: 'mailto:salman@example.com' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
              Signal & Case
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              React Developer & WordPress Customizer at JarzDigital, crafting beautiful and functional web experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/playground" className="text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                  Playground
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Get In Touch</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Have a project in mind? Let's work together to create something amazing.
            </p>
            <Link
              to="/about#contact"
              className="inline-flex items-center px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Salman Hafiz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
