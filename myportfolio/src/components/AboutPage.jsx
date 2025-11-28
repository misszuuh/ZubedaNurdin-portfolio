import { useTheme } from "../context/ThemeContext";
import "./AboutPage.css";

const AboutPage = () => {
  const { darkMode } = useTheme();

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

  const stats = [
    { number: "20+", label: "Projects Completed" },
    { number: "3+", label: "Years of Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const education = [
    {
      institution: "Mzumbe University - Main Campus Morogoro",
      faculty: "Faculty of Science and Technology",
      degree: "Bachelor of Science in Information Technology with Business",
      period: "2022-2025",
      focus: "Focusing on Software Development, Database Management, Business Systems Analysis, and IT Project Management"
    },
    {
      institution: "Korogwe Girls Secondary School",
      faculty: "Advanced Certificate of Secondary Education",
      degree: "PCB (Physics, Chemistry, Biology)",
      period: "2020-2022",
      focus: "Focusing on Physics, Chemistry, Biology with emphasis on scientific research and analytical thinking"
    }
  ];

  const experience = [
    {
      position: "Software Developer",
      company: "Rayomi Technology",
      period: "July 2025 - Present",
      description: "Develop and maintain software systems, implement new features, and optimize existing applications for better performance and user experience."
    },
    {
      position: "Software Developer",
      company: "BinaryLabs",
      period: "July 2024 - Present",
      description: "Developed and maintained software applications, improved system architecture, and collaborated with cross-functional teams to deliver high-quality solutions."
    },
    {
      position: "IT Maintenance",
      company: "NHIF",
      period: "July 2023 - September 2023",
      description: "Performed troubleshooting, resolved system issues, managed membership data, and maintained IT infrastructure across all NHIF branches."
    }
  ];

  const community = [
    {
      role: "Secretary Team Member",
      organization: "Python Tanzania",
      description: "Active member contributing to community growth and organizing Python-related events and workshops."
    },
    {
      role: "Coach",
      organization: "DjangoGirls",
      description: "Coach and mentor for DjangoGirls workshops, helping women learn programming and web development with Django."
    },
    {
      role: "Developer",
      organization: "DjangoGirls Website",
      description: "Contributed to the development and maintenance of the DjangoGirls website to support the organization's mission."
    }
  ];

  return (
    <div className={`about-page ${darkMode ? 'dark-mode' : ''}`}>
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <h1 className="about-hero-title">ABOUT ME</h1>
          <p className="about-hero-subtitle">Get to know Zubeda Nurdin (Zuuh)</p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content-section">
        <div className="container">
          <div className="about-profile">
            <div className="profile-image-container">
              <img src="/images/profile.jpg" alt="Zubeda Nurdin" className="profile-image" />
            </div>
            <div className="profile-content">
              <h2>Software Developer & Digital Designer</h2>
              <p className="profile-intro">
                Hello👋 I'm Zubeda Nurdin, but everyone calls me Zuuh a passionate software developer and digital designer who loves bringing ideas to life through creativity and code. I enjoy turning complex problems into simple, beautiful, and functional digital experiences.
              </p>
              
              <p className="profile-story">
                My tech journey began in an unexpected way. I studied PCB and once dreamed of becoming a doctor, but everything changed when I joined university for a degree in ICT. At first, I didn't understand a thing about programming until I saw a friend coding in Python. That moment lit a spark. Curiosity turned into passion, and passion turned into purpose. From that point on, I dedicated myself to learning, building, and growing every single day.
              </p>
              
              <p className="profile-philosophy">
                I believe in writing clean, efficient, and purposeful code crafting solutions that make a difference. For me, technology is not just about what we build, but why we build it: to create impact, inspire others, and make the digital world a little smarter and more human.
              </p>

              {/* Stats */}
              <div className="profile-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
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

      {/* Education Section */}
      <section className="education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <h3>{edu.institution}</h3>
                <p className="education-faculty">{edu.faculty}</p>
                <p className="education-degree">{edu.degree}</p>
                <p className="education-period">{edu.period}</p>
                <p className="education-focus">{edu.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-grid">
            {experience.map((exp, index) => (
              <div key={index} className="experience-card">
                <h3>{exp.position}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-period">{exp.period}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="community-section">
        <div className="container">
          <h2 className="section-title">Community Involvement</h2>
          <div className="community-grid">
            {community.map((item, index) => (
              <div key={index} className="community-card">
                <h3>{item.role}</h3>
                <p className="community-organization">{item.organization}</p>
                <p className="community-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Let's Work Together</h2>
            <p>Ready to bring your idea to life? Let's discuss your project and create something amazing together.</p>
            <a href="/contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section> 
    </div>
  );
};

export default AboutPage;