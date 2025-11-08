import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Code, Eye } from 'lucide-react';
import Button from '../components/ui/Button';

// Demo 1: Animated Card Grid
const AnimatedCardDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <div className="space-y-4">
      <div className="flex justify-center mb-4">
        <Button onClick={() => setIsPlaying(!isPlaying)} size="sm">
          <Play className="w-4 h-4 mr-2" />
          {isPlaying ? 'Reset' : 'Play Animation'}
        </Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl min-h-[300px]">
        {cards.map((card, index) => (
          <motion.div
            key={card}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={isPlaying ? {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                delay: index * 0.1,
                duration: 0.5,
                ease: 'easeOut',
              }
            } : {}}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="aspect-square bg-gradient-to-br from-accent-400 to-primary-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-lg"
          >
            {card}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Demo 2: Interactive Color Picker
const ColorPickerDemo = () => {
  const [selectedColor, setSelectedColor] = useState('#8B5CF6');
  const [showCode, setShowCode] = useState(false);

  const colors = [
    '#8B5CF6', '#0EA5E9', '#10B981', '#F59E0B', '#EF4444', '#EC4899',
  ];

  const codeSnippet = `const [color, setColor] = useState('${selectedColor}');

<motion.div
  animate={{ backgroundColor: color }}
  transition={{ duration: 0.3 }}
  style={{ backgroundColor: color }}
/>`;

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-2 mb-4">
        <Button onClick={() => setShowCode(!showCode)} size="sm" variant="outline">
          {showCode ? <Eye className="w-4 h-4 mr-2" /> : <Code className="w-4 h-4 mr-2" />}
          {showCode ? 'View Demo' : 'View Code'}
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {!showCode ? (
          <motion.div
            key="demo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <motion.div
              animate={{ backgroundColor: selectedColor }}
              transition={{ duration: 0.3 }}
              className="h-48 rounded-xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: selectedColor }}
            >
              <motion.span
                key={selectedColor}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-white text-2xl font-bold"
              >
                {selectedColor}
              </motion.span>
            </motion.div>

            <div className="flex flex-wrap gap-3 justify-center">
              {colors.map((color) => (
                <motion.button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-full shadow-lg ${
                    selectedColor === color ? 'ring-4 ring-white dark:ring-gray-950 ring-offset-2' : ''
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Select color ${color}`}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="code"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gray-900 rounded-xl p-6 text-sm text-gray-300 font-mono overflow-x-auto"
          >
            <pre>{codeSnippet}</pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Demo 3: Drag and Drop List
const DragDropDemo = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'React', color: 'from-blue-400 to-blue-600' },
    { id: 2, text: 'TypeScript', color: 'from-blue-500 to-indigo-600' },
    { id: 3, text: 'Tailwind CSS', color: 'from-cyan-400 to-blue-500' },
    { id: 4, text: 'Framer Motion', color: 'from-purple-400 to-pink-500' },
    { id: 5, text: 'Next.js', color: 'from-gray-700 to-gray-900' },
  ]);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDrop = (targetItem) => {
    if (!draggedItem || draggedItem.id === targetItem.id) return;

    const draggedIndex = items.findIndex(i => i.id === draggedItem.id);
    const targetIndex = items.findIndex(i => i.id === targetItem.id);

    const newItems = [...items];
    newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, draggedItem);

    setItems(newItems);
    setDraggedItem(null);
  };

  return (
    <div className="space-y-4">
      <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
        Drag and drop to reorder the list
      </p>
      
      <div className="space-y-3 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            draggable
            onDragStart={() => handleDragStart(item)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(item)}
            whileHover={{ scale: 1.02 }}
            whileDrag={{ scale: 1.05, rotate: 2 }}
            className={`p-4 rounded-lg bg-gradient-to-r ${item.color} text-white font-semibold shadow-lg cursor-move`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">::</span>
              <span>{item.text}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const demos = [
  {
    id: 'animated-cards',
    title: 'Animated Card Grid',
    description: 'Staggered animation with Framer Motion',
    component: AnimatedCardDemo,
    tags: ['Animation', 'Framer Motion', 'Grid'],
  },
  {
    id: 'color-picker',
    title: 'Interactive Color Picker',
    description: 'Smooth transitions and state management',
    component: ColorPickerDemo,
    tags: ['Interaction', 'State', 'Animation'],
  },
  {
    id: 'drag-drop',
    title: 'Drag & Drop List',
    description: 'Reorderable list with smooth animations',
    component: DragDropDemo,
    tags: ['Drag & Drop', 'Layout Animation', 'Interaction'],
  },
];

const Playground = () => {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Interactive Playground
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore interactive React demos showcasing UI/UX patterns, animations, and modern web techniques.
          </p>
        </motion.div>

        <div className="space-y-12">
          {demos.map((demo, index) => {
            const DemoComponent = demo.component;
            return (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {demo.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {demo.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {demo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <DemoComponent />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center bg-gradient-to-r from-accent-50 to-primary-50 dark:from-accent-950 dark:to-primary-950 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Want to see more?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Check out my full case studies to see these techniques in action on real projects.
          </p>
          <Button to="/projects" size="lg">
            View Case Studies
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Playground;
