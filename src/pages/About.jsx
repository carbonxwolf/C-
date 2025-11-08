import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, MapPin, Calendar, Award, Heart, Code } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/ui/Button';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const [bioRef, bioVisible] = useScrollReveal();
  const [timelineRef, timelineVisible] = useScrollReveal();
  const [valuesRef, valuesVisible] = useScrollReveal();
  const [contactRef, contactVisible] = useScrollReveal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Netlify Forms submission
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      });
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const timeline = [
    {
      year: '2024',
      title: 'React Developer at JarzDigital',
      description: 'Building modern web applications and WordPress solutions for clients worldwide.',
    },
    {
      year: '2022',
      title: 'Frontend Developer',
      description: 'Specialized in React development and component architecture.',
    },
    {
      year: '2020',
      title: 'WordPress Developer',
      description: 'Started journey in web development with WordPress customization.',
    },
    {
      year: '2019',
      title: 'Computer Science Degree',
      description: 'Graduated with honors, focusing on web technologies and software engineering.',
    },
  ];

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, well-documented code that stands the test of time.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for the highest quality in every project, no matter the size.',
    },
    {
      icon: Heart,
      title: 'User First',
      description: 'Building experiences that delight users and solve real problems.',
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Get to know the person behind the code
          </p>
        </motion.div>

        {/* Bio Section */}
        <section ref={bioRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={bioVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent-400 to-primary-500 flex items-center justify-center text-white text-6xl font-bold">
                  SH
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Hi, I'm Salman Hafiz
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I'm a passionate React Developer and WordPress Customizer based in Bangladesh,
                  currently working at JarzDigital. With over 5 years of experience in web development,
                  I specialize in creating modern, performant, and accessible web applications.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  My journey in tech started with a curiosity about how websites work, which led me
                  to pursue Computer Science. Since then, I've had the privilege of working on
                  diverse projects ranging from e-commerce platforms to complex web applications.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  When I'm not coding, you'll find me exploring new web technologies, contributing
                  to open-source projects, or sharing my knowledge through blog posts and tutorials.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>salman@jarzdigital.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Timeline Section */}
        <section ref={timelineRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
              Education & Experience
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-600 to-primary-600" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={timelineVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 md:w-1/2" />
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent-600 border-4 border-white dark:border-gray-950 z-10" />
                  <div className="flex-1 md:w-1/2 ml-16 md:ml-0 md:px-8">
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-accent-600" />
                        <span className="text-accent-600 font-semibold">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
              My Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Contact Form */}
        <section ref={contactRef} id="contact" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contactVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
              Get In Touch
            </h2>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <form 
                onSubmit={handleSubmit} 
                name="contact" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>

                {formStatus === 'success' && (
                  <p className="mt-4 text-green-600 dark:text-green-400 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}

                {formStatus === 'error' && (
                  <p className="mt-4 text-red-600 dark:text-red-400 text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;
