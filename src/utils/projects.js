export const projects = [
  {
    id: 1,
    title: "E-commerce UI Modernization",
    slug: "E-Commerce",
    description:
      "Complete frontend overhaul of a major e-commerce platform serving 1M+ daily users. Implemented responsive design, and real-time cart updates.",

    projectType: "Single Page Application (SPA)",
    developmentMethodology: "Component-Driven Development",
    category: "E-commerce",
    image: "https://onilab.com/uploads/Ecommerce_Homepage_UX_2_197ffe2cb6.jpg",

    frontendTechnologies: [
      "React 18",
      "Tailwind CSS 3.x",
      "React Hooks",
      "React Router",
      "Responsive Design",
      "CSS Grid & Flexbox",
      "Framer Motion",
      "React Suspense",
    ],

    componentArchitecture: {
      type: "Modular Component Structure",
      description:
        "Implemented a scalable, reusable component architecture using functional components and custom hooks",
      keyPrinciples: [
        "Atomic Design Methodology",
        "Separation of Concerns",
        "Lazy Loading Components",
        "Memoization for Performance",
      ],
    },

    stylingApproach: {
      type: "Utility-First CSS",
      description:
        "Leveraged Tailwind CSS's utility classes for rapid, responsive, and consistent UI development",
      advantages: [
        "Minimal Custom CSS",
        "Consistent Design System",
        "Rapid Prototyping",
        "Easy Responsive Design",
        "Theme Customization",
      ],
    },

    performanceOptimizations: [
      "Code Splitting",
      "Lazy Loading",
      "Memoization of Complex Components",
      "Optimized Rendering Cycles",
      "Minimal Re-renders",
    ],

    accessibilityFeatures: [
      "Semantic HTML Structure",
      "ARIA Attributes",
      "Keyboard Navigation",
      "Color Contrast Compliance",
      "Screen Reader Support",
    ],

    fullDescription: `
        A state-of-the-art frontend application demonstrating the pinnacle of modern web development 
        techniques. Meticulously crafted using React and Tailwind CSS, this project represents a 
        comprehensive showcase of advanced frontend engineering principles.
  
        The application goes beyond traditional web development by implementing cutting-edge 
        performance optimizations, responsive design patterns, and a component-driven architecture 
        that emphasizes code reusability and maintainability.
      `,

    codeQualityMetrics: {
      componentReusability: 92,
      performanceScore: 96,
      accessibilityScore: 90,
      responsiveDesignScore: 98,
    },

    learningOutcomes: [
      "Advanced React Hooks Implementation",
      "Tailwind CSS Design Patterns",
      "Performance Optimization Techniques",
      "Responsive Web Design Strategies",
      "Component Composition Principles",
    ],

    challenges: [
      "Implementing Complex Responsive Layouts",
      "Managing Component State Efficiently",
      "Optimizing Render Performance",
      "Creating Reusable UI Components",
      "Maintaining Consistent Design Language",
    ],

    images: [
      "https://images-platform.99static.com//rXq2ArI625LaNc3vbyaA1JxTlK0=/0x0:1600x1600/fit-in/500x500/99designs-contests-attachments/114/114020/attachment_114020551",
      "https://imgcdn.stablediffusionweb.com/2024/5/6/a6fc662e-25cc-4dc2-b522-5c4c894eb5ac.jpg",
      "https://img.freepik.com/premium-vector/abstract-blue-purple-gradient-landing-page-template_745217-522.jpg",
    ],

    codeSnippets: {
      componentStructure: `
  // Example of a Modular React Component
  const ResponsiveCard = ({ title, description }) => {
    return (
      <div className="
        w-full 
        sm:w-1/2 
        md:w-1/3 
        lg:w-1/4 
        p-4 
        hover:shadow-lg 
        transition-all 
        duration-300
      ">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
        `,
      tailwindConfig: `
  // Tailwind CSS Configuration
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'brand': {
            light: '#5eead4',
            DEFAULT: '#14b8a6',
            dark: '#0f766e'
          }
        },
        animation: {
          'spin-slow': 'spin 3s linear infinite'
        }
      }
    }
  }
        `,
    },
  },
  {
    id: 2,
    title: "SaaS Dashboard Frontend",
    slug: "Saas-Dashboard",
    description:
      "A modern, interactive frontend for a SaaS platform with real-time data visualization, user management, and performance analytics",

    projectType: "Single Page Application (SPA)",
    developmentMethodology: "Component-Driven Development",
    category: "Web Application",
    image:
      "https://tailadmin.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fhkc8ojqt%2Fproduction%2Fe8c7251a9eed63a9bb80403d7becaca5b694c5d0-1800x900.png%3Ffit%3Dmax%26auto%3Dformat&w=3840&q=75",

    frontendTechnologies: [
      "React 18",
      "Tailwind CSS 3.x",
      "React Hooks",
      "React Router",
      "Chart.js",
      "CSS Grid & Flexbox",
      "Framer Motion",
      "WebSocket Integration",
    ],

    componentArchitecture: {
      type: "Modular Component Structure",
      description:
        "Built using a flexible and scalable component-driven architecture, facilitating easy maintenance and enhancement",
      keyPrinciples: [
        "Atomic Design Methodology",
        "Separation of Concerns",
        "Lazy Loading Components",
        "State Management with Redux",
      ],
    },

    stylingApproach: {
      type: "Utility-First CSS",
      description:
        "Employed Tailwind CSS's utility classes for fast and efficient UI development, making it easy to build custom layouts without sacrificing performance",
      advantages: [
        "Minimal Custom CSS",
        "Consistent Design System",
        "Rapid Prototyping",
        "Easy Responsive Design",
        "Theme Customization",
      ],
    },

    performanceOptimizations: [
      "Code Splitting",
      "Lazy Loading",
      "Memoization of Complex Components",
      "Optimized Rendering Cycles",
      "WebSocket Performance Optimization",
    ],

    accessibilityFeatures: [
      "Semantic HTML Structure",
      "ARIA Attributes",
      "Keyboard Navigation",
      "Color Contrast Compliance",
      "Screen Reader Support",
    ],

    fullDescription: `
        A professional SaaS dashboard frontend designed for modern SaaS applications. This project 
        features real-time data updates, beautiful interactive charts, and a user-friendly interface.
  
        Leveraging state-of-the-art React and Tailwind CSS, the dashboard is highly performant, 
        responsive, and accessible, ensuring seamless experiences across devices.
      `,

    codeQualityMetrics: {
      componentReusability: 95,
      performanceScore: 94,
      accessibilityScore: 88,
      responsiveDesignScore: 97,
    },

    learningOutcomes: [
      "Integrating WebSockets for Real-Time Updates",
      "Data Visualization with Chart.js",
      "Advanced State Management with Redux",
      "Building Scalable Dashboard Layouts",
      "Responsive Design for Data-Intensive Applications",
    ],

    challenges: [
      "Designing Intuitive Data Visualizations",
      "Optimizing Performance for Large Datasets",
      "Managing Complex State Logic",
      "Creating Modular and Reusable Components",
      "Ensuring Accessibility for All Features",
    ],

    images: [
      "https://s3-alpha.figma.com/hub/file/1817172110/da06461e-9c77-4a04-9e05-79fd04f43d63-cover.png",
      "https://s3-alpha.figma.com/hub/file/2040503138/b813544b-145d-4ac4-a48f-8e2965022b13-cover.png",
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4qbn59ldg1a2r30hbssq.png",
    ],

    codeSnippets: {
      componentStructure: `
  // Example of a Dashboard Card Component
  const DashboardCard = ({ title, data }) => {
    return (
      <div className="
        bg-white 
        shadow 
        p-6 
        rounded-lg 
        border 
        hover:shadow-md 
        transition-all 
        duration-300
      ">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{data}</p>
      </div>
    );
  };
        `,
      tailwindConfig: `
  // Tailwind CSS Configuration
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'dashboard': {
            light: '#4ade80',
            DEFAULT: '#22c55e',
            dark: '#166534',
          }
        },
        animation: {
          'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }
      }
    }
  }
        `,
    },
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    slug: "Portfolio-Website",
    description:
      "A personal portfolio website designed to showcase skills, projects, and experience with an interactive UI and responsive design.",
    projectType: "Static Frontend Website",
    developmentMethodology: "Component-Driven Development",
    category: "Portfolio",
    image:
      "https://i.pinimg.com/originals/f9/72/02/f972024105052829cf425522a4ab27df.jpg",
    frontendTechnologies: [
      "React 18",
      "Tailwind CSS 3.x",
      "React Router",
      "Framer Motion",
      "Responsive Design",
      "SVG Animations",
      "React Hooks",
    ],
    componentArchitecture: {
      type: "Modular Component Structure",
      description:
        "Built with reusable components and organized folders to support easy scaling and addition of new sections as the portfolio grows.",
      keyPrinciples: [
        "Component Reusability",
        "Code Splitting",
        "Atomic Design",
        "Modular CSS with Tailwind",
      ],
    },
    stylingApproach: {
      type: "Utility-First CSS",
      description:
        "Used Tailwind CSS for utility-based styling to rapidly create layouts and fine-tune the design with responsive breakpoints.",
      advantages: [
        "Consistent Layouts",
        "Faster Prototyping",
        "Responsive Design out of the Box",
        "Easy Customization",
      ],
    },
    performanceOptimizations: [
      "Code Splitting",
      "Image Optimization",
      "Lazy Loading",
      "SVG Icon Usage",
      "Minimal Re-renders",
    ],
    accessibilityFeatures: [
      "Semantic HTML",
      "ARIA Labels",
      "Keyboard Navigation",
      "Color Contrast Improvements",
      "Responsive Design",
    ],
    fullDescription: `
          This portfolio website was designed to present my professional and technical skills in a clean, modern, and engaging layout. 
          The website features smooth animations, a dynamic homepage with a rotating hero image, and a section dedicated to showcasing various 
          projects and accomplishments. Tailwind CSS and React are used for the frontend, with a strong emphasis on user experience and performance.
      
          The site is fully responsive and optimized for both desktop and mobile, ensuring a smooth and consistent experience across all devices.
        `,
    codeQualityMetrics: {
      componentReusability: 92,
      performanceScore: 96,
      accessibilityScore: 89,
      responsiveDesignScore: 98,
    },
    learningOutcomes: [
      "Creating Interactive Portfolio Sites with React",
      "Tailwind CSS and Utility-First Design",
      "SVG Animations and Interactivity",
      "React Router for Navigation",
      "Optimizing Static Websites for Speed",
    ],
    challenges: [
      "Creating Custom Animations with Framer Motion",
      "Ensuring Cross-Browser Compatibility",
      "Responsive Design for Complex Layouts",
      "Implementing SEO and Accessibility",
      "Optimizing Image and Video Files",
    ],
    images: [
      "https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2022/06/Portfolio-site-of-the-front-end-developer-Ian-Dunkerley-1024x481.png",
      "https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2022/06/Portfolio-of-the-front-end-developer-Olaolu-Olawuyi-1024x473.png",
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1631452885120/SWlSpHgry.png",
    ],
    codeSnippets: {
      componentStructure: `
    // Example of a Portfolio Card Component
    const ProjectCard = ({ title, description, image }) => {
      return (
        <div className="
          w-full 
          sm:w-1/2 
          lg:w-1/3 
          p-4 
          hover:shadow-lg 
          transition-all 
          duration-300
        ">
          <img className="w-full h-48 object-cover mb-4 rounded" src={image} alt={title} />
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      );
    };
        `,
      tailwindConfig: `
    // Tailwind CSS Configuration
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            'brand': {
              light: '#5eead4',
              DEFAULT: '#14b8a6',
              dark: '#0f766e'
            }
          },
          animation: {
            'spin-slow': 'spin 3s linear infinite'
          }
        }
      }
    }
        `,
    },
  },
  {
    id: 4,
    title: "Interactive Blog Platform",
    slug: "Interactive-Blog",
    description:
      "A dynamic frontend blog platform with a clean UI, comment system, and post categorization using React, Tailwind CSS, and real-time updates.",
    projectType: "Single Page Application (SPA)",
    developmentMethodology: "Component-Driven Development",
    category: "Blog",
    image:
      "https://i.pinimg.com/736x/4d/76/18/4d76185f58f8c010f843c2eb41268e44.jpg",
    frontendTechnologies: [
      "React 18",
      "Tailwind CSS 3.x",
      "React Router",
      "React Hooks",
      "Framer Motion",
      "Real-time Updates",
      "CSS Grid & Flexbox",
    ],
    componentArchitecture: {
      type: "Modular Component Structure",
      description:
        "Designed using reusable components such as PostCard, CommentSection, and CategoryTabs to ensure easy maintenance and flexibility.",
      keyPrinciples: [
        "Component Reusability",
        "State Management with Context API",
        "Lazy Loading",
        "Separation of Concerns",
      ],
    },
    stylingApproach: {
      type: "Utility-First CSS",
      description:
        "Tailwind CSS is used for rapid styling with custom utilities for layout, spacing, and typography, ensuring consistency across the blog platform.",
      advantages: [
        "Customizable Themes",
        "Utility-First Layouts",
        "Optimized for Responsiveness",
        "Faster Development and Prototyping",
      ],
    },
    performanceOptimizations: [
      "Lazy Loading for Comments and Posts",
      "Memoization with React.memo",
      "Efficient Rendering with Virtualization",
      "Optimized Real-Time Data Flow",
      "Minimal Re-renders",
    ],
    accessibilityFeatures: [
      "Semantic HTML5 Elements",
      "ARIA Landmarks",
      "Keyboard Navigation",
      "Screen Reader Support",
      "High-Contrast Modes",
    ],
    fullDescription: `
          This interactive blog platform was built using React and Tailwind CSS to provide a user-friendly, 
          responsive interface for content consumption. The app supports dynamic post categorization, real-time 
          comment updates, and seamless navigation between pages, all while being optimized for accessibility and performance.
      
          The clean, minimalist design adapts to different screen sizes, with interactive animations enhancing 
          the user experience. The platform allows users to engage through comments, like posts, and categorize 
          content for better navigation.
        `,
    codeQualityMetrics: {
      componentReusability: 94,
      performanceScore: 93,
      accessibilityScore: 90,
      responsiveDesignScore: 96,
    },
    learningOutcomes: [
      "Building Dynamic, Interactive SPAs with React",
      "Implementing Real-Time Data Flow",
      "Using Tailwind CSS for Scalable Layouts",
      "Creating Reusable Components",
      "Performance Optimization with React",
    ],
    challenges: [
      "Implementing Real-Time Updates with WebSockets",
      "Handling Large Comment Systems Efficiently",
      "Ensuring Cross-Device Consistency",
      "Implementing Smooth Navigation with React Router",
      "Maintaining Accessibility Standards",
    ],
    images: [
      "https://assets.justinmind.com/wp-content/uploads/2019/10/best-web-development-blogs-hongkiat.png",
      "https://assets.justinmind.com/wp-content/uploads/2019/10/best-web-development-blogs-hongkiat.png",
      "https://thebloggingbuddha.com/wp-content/uploads/2016/02/WordPress-themes-screenshot.png",
    ],
    codeSnippets: {
      componentStructure: `
    // Example of a Blog Post Component
    const PostCard = ({ title, excerpt, author }) => {
      return (
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4 hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{excerpt}</p>
          <div className="mt-4 text-sm text-gray-500">By {author}</div>
        </div>
      );
    };
        `,
      tailwindConfig: `
    // Tailwind CSS Configuration
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            'brand': {
              light: '#fbbf24',
              DEFAULT: '#f59e0b',
              dark: '#d97706'
            }
          },
          animation: {
            'spin-slow': 'spin 3s linear infinite'
          }
        }
      }
    }
        `,
    },
  },
];
