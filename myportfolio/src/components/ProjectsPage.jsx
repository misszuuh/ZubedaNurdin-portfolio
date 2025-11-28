import { useTheme } from "../context/ThemeContext";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  const { darkMode } = useTheme();

  const projects = [
    {
      name: "DjangoGirls Website",
      description: "A comprehensive website for DjangoGirls organization to help women learn programming and organize workshops worldwide with event management and registration system.",
      skills: ["Django", "Python", "HTML", "CSS", "JavaScript", "PostgreSQL"],
      codeLink: "https://github.com/pythontanzania/djangogirlstz",
      demoLink: "https://djangogirls.tz/",
      
    },
    {
      name: "Doekman Website",
      description: "Official website for Doekman Foundation, a nonprofit organization addressing community health and environmental issues in Tanzania through menstrual health awareness and sustainable development.",
      skills: ["Django", "React", "REST APIs", "SQLite"],
      codeLink: "https://github.com/misszuuh/doekman-website",
      demoLink: "https://doekmanfoundation.deploy.tz/",
     
    },
    {
      name: "MyPortfolio Website",
      description: "Personal portfolio website showcasing projects, skills, and services with integrated contact and service request management system built with modern technologies.",
      skills: ["React", "Django", "REST APIs", "SQLite", "Vite"],
      codeLink: "https://github.com/misszuuh/ZubedaNurdin-portfolio",
      demoLink: "https://zubedanurdin.deploy.tz/",
      
    },
    {
      name: "PythonMzumbe Website",
      description: "Official website for PythonMzumbe community promoting Python programming education with learning resources, event calendar, and member portal.",
      skills: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQLite"],
      codeLink: "https://github.com/misszuuh/pyconmzumbe",
      demoLink: "https://pythonmzumbe.deploy.tz/",
      
    },
    {
      name: "Smart Health",
      description: "IoT-based health monitoring system with real-time patient data tracking, mobile app integration using Flutter and Firebase, with Python backend for data processing.",
      skills: ["Flutter", "Firebase", "Python", "IoT", "REST APIs"],
      codeLink: "https://github.com/misszuuh/smarthealth_app",
      demoLink: null,
     
    },
    {
      name: "TFF Management System",
      description: "Comprehensive management system for Tanzania Football Federation built with Django framework for managing teams, players, matches, and tournament schedules.",
      skills: ["Django", "Python", "PostgreSQL", "HTML", "CSS"],
      codeLink: "https://github.com/sherry1612/TFF-management-system",
      demoLink: null,
      
    },
    {
      name: "Django Voice",
      description: "AI-powered voice recognition and processing application built with Django and PostgreSQL, featuring natural language processing and voice command functionality.",
      skills: ["Django", "PostgreSQL", "AI", "Python", "NLP"],
      codeLink: "https://github.com/GloryMsasalaga/django-voice",
      demoLink: null,
      
    },
    {
      name: "Donation Track Website",
      description: "Donation tracking and management platform built with Django and MySQL for nonprofit organizations to manage donors, track contributions, and generate reports.",
      skills: ["Django", "MySQL", "Python", "HTML", "CSS"],
      codeLink: "https://github.com/sherry1612/Final-year-project",
      demoLink: null,
    
    },
    {
      name: "Food Monitoring Model",
      description: "AI-powered food quality monitoring and prediction model using Python and machine learning algorithms for detecting food freshness and safety parameters.",
      skills: ["Python", "AI", "Machine Learning", "TensorFlow", "Data Science"],
      codeLink: "https://github.com/GloryMsasalaga/Food-Monitoring",
      demoLink: null,
      
    }
  ];

  const stats = [
    { number: "20+", label: "Repositories", icon: "📁" },
    { number: "5+", label: "Stars Earned", icon: "⭐" },
    { number: "30+", label: "Contributions", icon: "🔨" }
  ];

  return (
    <div className={`projects-page ${darkMode ? 'dark-mode' : ''}`}>
      {/* Hero Section */}
      <section className="projects-hero-section">
        <div className="container">
          <h1 className="projects-hero-title">My Projects</h1>
          <p className="projects-hero-subtitle">
            A showcase of my recent work and contributions
          </p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="projects-grid-section">
        <div className="container">
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
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        className="btn btn-primary btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="projects-stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="github-button-container">
            <a 
              href="https://github.com/misszuuh" 
              className="btn btn-primary github-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{marginRight: '8px'}}>🐙</span>
              View My GitHub
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectsPage;
