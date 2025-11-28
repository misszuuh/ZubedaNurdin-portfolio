import { useState, useEffect } from "react";
import "./ServicesPage.css";
import { useTheme } from "../context/ThemeContext";

const ServicesPage = () => {
  const { darkMode } = useTheme();
  const [animatedText, setAnimatedText] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    // Trigger text animation after component mounts
    setTimeout(() => {
      setAnimatedText(true);
    }, 300);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    {
      icon: "🌐",
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies like React, Django, and Node.js. Perfect for businesses, portfolios, and e-commerce platforms.",
      serviceType: "web"
    },
    {
      icon: "📱",
      title: "Mobile Application",
      description: "Cross-platform mobile apps using Flutter and React Native. Native performance with beautiful UI/UX design for iOS and Android.",
      serviceType: "mobile"
    },
    {
      icon: "🔗",
      title: "APIs Development",
      description: "RESTful APIs and backend services with proper documentation, authentication, and scalability in mind for your applications.",
      serviceType: "api"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "User-centered design solutions with wireframes, prototypes, and polished interfaces that enhance user experience and engagement.",
      serviceType: "design"
    },
    {
      icon: "💡",
      title: "Consulting",
      description: "Technical consulting to help you choose the right technologies and development approach for your project's success.",
      serviceType: "consulting"
    },
    {
      icon: "⚙️",
      title: "DevOps & Deployment",
      description: "CI/CD pipeline setup, containerization with Docker, and cloud deployment for smooth application operation and scalability.",
      serviceType: "devops"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery",
      description: "We start by understanding your vision, goals, and requirements through detailed discussions and analysis.",
      icon: "🔍"
    },
    {
      step: "2",
      title: "Planning",
      description: "Creating a detailed project plan with timelines, milestones, and technology stack selection.",
      icon: "📋"
    },
    {
      step: "3",
      title: "Designing",
      description: "Wireframing and prototyping to visualize the final product and gather your feedback.",
      icon: "✏️"
    },
    {
      step: "4",
      title: "Development",
      description: "Agile development with regular updates and testing to ensure quality and alignment with your vision.",
      icon: "💻"
    },
    {
      step: "5",
      title: "Delivery",
      description: "Final testing, deployment, and handover with documentation and training support.",
      icon: "🚀"
    }
  ];

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in React, Flutter, Django, Python, JavaScript, PostgreSQL, and modern web technologies. I choose the best stack based on your project requirements."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, medium projects 4-8 weeks, and complex applications 8+ weeks. We'll provide a detailed timeline during planning."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! I offer ongoing support packages including bug fixes, updates, security patches, and feature enhancements to keep your project running smoothly."
    },
    {
      question: "What is your payment structure?",
      answer: "I offer flexible payment options: fixed pricing for well-defined projects, hourly rates for ongoing work, and milestone-based payments for larger projects. Let's discuss what works best for you."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I work with clients worldwide and am experienced in remote collaboration across different time zones using modern communication tools."
    },
    {
      question: "Can you work with existing teams or codebases?",
      answer: "Yes, I can integrate with your existing team and work on improving or extending your current codebase while maintaining best practices."
    }
  ];

  return (
    <div className={`services-page ${darkMode ? 'dark-mode' : ''}`}>
      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="text-animator">
              <h1 className={`services-hero-title ${animatedText ? 'animate-in' : ''}`}>
                My Services
              </h1>
              <p className={`services-hero-subtitle ${animatedText ? 'animate-in' : ''}`}>
                Professional services with flexible pricing tailored to your budget and needs
              </p>
              <div className={`pricing-highlight ${animatedText ? 'animate-in' : ''}`}>
                <span className="highlight-icon">💬</span>
                <span className="highlight-text">Custom pricing based on your requirements</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="service-cta">
                  <p className="cta-text">
                    Let's discuss your budget and requirements
                  </p>
                  <a 
                    href={`/order/${service.serviceType}`} 
                    className="btn btn-primary service-btn"
                  >
                    Get Custom Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">My Process</h2>
          <p className="section-subtitle">
            How I work with clients to deliver successful projects through a structured and collaborative approach
          </p>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-header">
                  <div className="step-number">{step.step}</div>
                  <div className="step-icon">{step.icon}</div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Get answers to common questions about my services and working process
          </p>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question" 
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-toggle">
                    {activeFaq === index ? '−' : '+'}
                  </span>
                </div>
                <div className={`faq-answer ${activeFaq === index ? 'active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;