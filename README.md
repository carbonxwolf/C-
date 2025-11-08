# Signal & Case - Salman Hafiz Portfolio

A production-ready React developer portfolio showcasing modern web development skills, interactive demos, and professional case studies.

![Portfolio Preview](https://via.placeholder.com/1200x600/8B5CF6/ffffff?text=Signal+%26+Case+Portfolio)

## 🚀 Live Demo

- **Live Site**: [https://salmanhafiz.dev](https://salmanhafiz.dev) *(Deploy to Vercel/Netlify)*
- **Storybook**: [Coming Soon]

## ✨ Features

### Pages
- **Home** - Hero section with animated introduction, sticky skill bar, and featured projects
- **Projects** - Filterable grid showcasing Web Apps, Component Libraries, and WordPress projects
- **Project Details** - Dynamic MDX-powered case study pages with metrics and testimonials
- **Playground** - Interactive React demos showcasing UI skills and animation techniques
- **About** - Professional bio, education timeline, values, and contact form
- **Blog** - MDX-based blog posts on React, UI/UX, and performance *(optional)*
- **404** - Custom not found page with navigation

### Technical Highlights
- ⚡ **React 18** with latest features
- 🎨 **Tailwind CSS** for utility-first styling
- 🎭 **Framer Motion** for smooth animations
- 📝 **MDX** for content-rich case studies
- 🎯 **React Router** for seamless navigation
- 🌙 **Dark Mode** with system preference detection
- ♿ **Accessible** - WCAG 2.1 Level AA compliant
- 📱 **Responsive** - Mobile-first design
- 🚀 **Performance** - Optimized for Lighthouse score >90
- 🔍 **SEO** - JSON-LD structured data and meta tags

### Components
- **Nav** - Animated navigation with scroll-hide behavior
- **Footer** - Professional footer with social links
- **ProjectCard** - Interactive project cards with hover effects
- **DarkModeToggle** - Smooth theme switching
- **CodeBlock** - Syntax-highlighted code with Prism.js
- **CustomCursor** - Optional custom cursor effect
- **Button** - Versatile button component with multiple variants

### Animations & Interactions
- Scroll reveal animations
- Hover lift effects
- Staggered animations
- Custom cursor with disable option
- Smooth page transitions
- Drag and drop interactions

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v3
- **Animation**: Framer Motion
- **Routing**: React Router v6
- **Content**: MDX with remark/rehype plugins
- **Icons**: Lucide React
- **Code Highlighting**: Prism.js
- **Forms**: React Hook Form (contact form with Netlify Forms)
- **Testing**: Vitest + React Testing Library + Playwright
- **Deployment**: Vercel / Netlify

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
\`\`\`bash
git clone https://github.com/salmanhafiz/salman-hafiz-portfolio.git
cd salman-hafiz-portfolio
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
\`\`\`

3. **Start development server**
\`\`\`bash
npm run dev
\`\`\`

The app will be available at \`http://localhost:5173\`

## 🚀 Available Scripts

\`\`\`bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Lint code with ESLint

# Testing
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:e2e     # Run E2E tests with Playwright
\`\`\`

## 📝 Adding Content

### Adding a New Project

1. Create a new MDX file in \`src/content/projects/\`:

\`\`\`mdx
---
title: "Your Project Title"
slug: "your-project-slug"
excerpt: "Brief project description"
heroImage: "/path/to/hero-image.jpg"
tags: ["React", "TypeScript", "Tailwind"]
type: "Web App"
tech: ["React", "TypeScript", "Tailwind CSS"]
metrics:
  - label: "Performance"
    value: "95/100"
testimonial:
  text: "Client testimonial here"
  author: "Client Name"
  role: "Client Title"
githubLink: "https://github.com/..."
demoLink: "https://demo.example.com"
---

## Your content here
Write your case study using Markdown/MDX...
\`\`\`

2. Add the project to the featured list in \`src/pages/Home.jsx\` and \`src/pages/Projects.jsx\`

### Adding a Blog Post

Create a new MDX file in \`src/content/blog/\` following the same frontmatter pattern.

## 🎨 Customization

### Theme Colors

Edit \`tailwind.config.js\` to customize the color palette:

\`\`\`js
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
      accent: { /* your colors */ },
    }
  }
}
\`\`\`

### Fonts

Change fonts in \`tailwind.config.js\` and update the Google Fonts import in \`src/index.css\`.

### Personal Information

Update personal details in:
- \`src/pages/About.jsx\` - Bio, timeline, contact info
- \`src/components/layout/Footer.jsx\` - Social links
- \`index.html\` - SEO meta tags and JSON-LD

## 🧪 Testing

### Unit Tests
\`\`\`bash
npm run test
\`\`\`

Tests are located in \`src/**/*.test.jsx\` files.

### E2E Tests
\`\`\`bash
npm run test:e2e
\`\`\`

E2E tests use Playwright and are in the \`e2e/\` directory.

## 📈 Performance

The portfolio is optimized for:
- **Lighthouse Score**: >90 for Performance and Accessibility
- **Bundle Size**: Code splitting and lazy loading
- **Image Optimization**: Lazy loading with blur-up effect
- **Animations**: Hardware-accelerated with Framer Motion
- **Code Quality**: ESLint and best practices

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: \`npm run build\`
4. Publish directory: \`dist\`
5. For Netlify Forms, add \`netlify\` attribute to forms

## 🔧 Environment Variables

Create a \`.env\` file for any environment-specific configuration:

\`\`\`env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
\`\`\`

## 📄 License

MIT License - feel free to use this portfolio as a template for your own!

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📧 Contact

**Salman Hafiz**
- Portfolio: [https://salmanhafiz.dev](https://salmanhafiz.dev)
- GitHub: [@salmanhafiz](https://github.com/salmanhafiz)
- LinkedIn: [salmanhafiz](https://linkedin.com/in/salmanhafiz)
- Email: salman@jarzdigital.com

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
