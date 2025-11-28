import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import "./HomePage.css";

const HomePage = () => {
  const { darkMode } = useTheme();
  const [animatedText, setAnimatedText] = useState(false);

  const homeRef = useRef(null);

  useEffect(() => {
    // Trigger text animation after component mounts
    setTimeout(() => {
      setAnimatedText(true);
    }, 300);
  }, []);

  const skills = [
    { name: "React", category: "Frontend Framework", percentage: 90 },
    { name: "Flutter", category: "Mobile Framework", percentage: 85 },
    { name: "Django", category: "Backend Framework", percentage: 88 },
    { name: "SQL", category: "Database", percentage: 82 },
    { name: "PHP", category: "Programming Language", percentage: 80 },
    { name: "C#", category: "Programming Language", percentage: 75 },
    { name: "Python", category: "Programming Language", percentage: 92 },
    { name: "C++", category: "Programming Language", percentage: 78 },
    { name: "Git", category: "Tool", percentage: 95 },
    { name: "Docker", category: "DevOps", percentage: 75 },
    { name: "Java", category: "Programming Language", percentage: 80 },
    { name: "Go", category: "Programming Language", percentage: 72 },
  ];

  const projects = [
    {
      name: "DjangoGirls Website",
      description: "A website for DjangoGirls organization to help women learn programming and organize workshops worldwide.",
      skills: ["Django", "Python", "HTML", "CSS", "JavaScript"],
      codeLink: "https://github.com/pythontanzania/djangogirlstz",
      demoLink: "https://djangogirls.tz/",
  
    },
    {
      name: "Doekman Website",
      description: "Official website for Doekman Foundation, a nonprofit organization addressing community health and environmental issues in Tanzania.",
      skills: ["Django", "React", "REST APIs", "SQLite"],
      codeLink: "https://github.com/misszuuh/doekman-website",
      demoLink: "https://doekmanfoundation.deploy.tz/",
      
    },
    {
      name: "PythonMzumbe Website",
      description: "Official website for PythonMzumbe community promoting Python programming education at Mzumbe University.",
      skills: ["Django", "Python", "HTML", "CSS", "JavaScript"],
      codeLink: "https://github.com/misszuuh/pyconmzumbe",
      demoLink: "https://pythonmzumbe.deploy.tz/",
   
    }
  ];

  const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, Django, and Node.js. Responsive designs that work perfectly on all devices.",
    icon: "💻",
    serviceType: "web" 
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile apps using Flutter and React Native. Native performance with beautiful UI/UX design.",
    icon: "📱",
    serviceType: "mobile"
  },
  {
    title: "APIs Development",
    description: "RESTful APIs and backend services with proper documentation, authentication, and scalability in mind.",
    icon: "🔗",
    serviceType: "api"
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions with wireframes, prototypes, and polished interfaces that enhance user experience.",
    icon: "🎨",
    serviceType: "design"
  },
  {
    title: "Consulting",
    description: "Technical consulting to help you choose the right technologies and development approach for your project.",
    icon: "💡",
    serviceType: "consulting"
  },
  {
    title: "DevOps & Deployment",
    description: "CI/CD pipeline setup, containerization with Docker, and cloud deployment for smooth application operation.",
    icon: "⚙️",
    serviceType: "devops"
  }
];

  return (
    <div className={`home-page ${darkMode ? 'dark-mode' : ''}`} ref={homeRef}>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="text-animator">
              <h1 className={`hero-title ${animatedText ? 'animate-in' : ''}`}>
                I AM ZUBEDA NURDIN (ZUUH)
              </h1>
              <h2 className={`hero-subtitle ${animatedText ? 'animate-in' : ''}`}>
                SOFTWARE DEVELOPER & DIGITAL DESIGNER
              </h2>
              <p className={`hero-description ${animatedText ? 'animate-in' : ''}`}>
                Passionate about creating innovative digital solutions that bridge technology and creativity. 
                I specialize in building responsive web applications, mobile solutions, and intuitive user interfaces 
                that deliver exceptional user experiences. Let's transform your ideas into reality.
              </p>
              <div className={`hero-buttons ${animatedText ? 'animate-in' : ''}`}>
                  <a href="/projects" className="btn btn-primary">View My Work</a>
                  <a href="/contact" className="btn-text-link">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-content">
            <div className="quote-icon">✨</div>
            <blockquote className="quote-text">
              "Code is poetry written in logic. Every line is a step toward turning dreams into reality."
            </blockquote>
            <p className="quote-author">— A girl who loves coding</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <h3>{skill.name}</h3>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <span className="skill-category">{skill.category}</span>
                <div className="skill-progress">
                  <div 
                    className="skill-progress-bar" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="projects-section">
  <div className="container">
    <h2 className="section-title">Recent Work & Contributions</h2>
     <p className="projects-description">
      Here are some samples of projects I've recently worked on.
    </p>
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <img 
                src="/images/code.png" 
                alt="Code" 
                className="project-code-icon"
              />
            </div>
            
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-skills">
              {project.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
            <div className="project-actions">
              <a 
                href={project.codeLink} 
                className="btn btn-outline btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
              <a 
                href={project.demoLink} 
                className="btn btn-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="view-all-container">
      <a href="/projects" className="btn btn-primary">View All Projects</a>
    </div>
  </div>
</section>

      {/* Services Section */}
<section className="services-section">
  <div className="container">
    <h2 className="section-title">Services I Offer</h2>
    <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <div className="service-price">Custom Pricing Available</div>
          <a 
            href={`/order/${service.serviceType}`} 
            className="btn btn-primary service-btn"
          >
            Get Quote
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to work together to bring your ideas to life?</h2>
            <p>Let's collaborate to create something amazing that makes a difference.</p>
            <a href="/contact" className="btn btn-secondary cta-btn">
              <span className="btn-icon">🚀</span>
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;