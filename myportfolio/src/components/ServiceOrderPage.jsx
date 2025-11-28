import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./ServiceOrderPage.css";
import { API_ENDPOINTS } from "../config/api";

const ServiceOrderPage = () => {
  const location = useLocation();
  const { darkMode } = useTheme();
  const getServiceTypeFromPath = () => {
    const path = location.pathname;
    if (path.includes('/order/web')) return 'web';
    if (path.includes('/order/mobile')) return 'mobile';
    if (path.includes('/order/api')) return 'api';
    if (path.includes('/order/design')) return 'design';
    if (path.includes('/order/consulting')) return 'consulting';
    if (path.includes('/order/devops')) return 'devops';
    return 'web';
  };

  const serviceType = getServiceTypeFromPath();
  const [animatedText, setAnimatedText] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    project_requirements: "",
    preferred_timeline: "",
    budget_range: "",
    agree_to_terms: false
  });

  // Service configurations
  const serviceConfigs = {
    web: {
      title: "Web Development",
      icon: "🌐",
      description: "Custom websites and web applications built with modern technologies",
      features: [
        "Consultation and planning",
        "Custom development",
        "Testing and quality assurance", 
        "Deployment assistance",
        "30 days of support"
      ]
    },
    mobile: {
      title: "Mobile Development",
      icon: "📱",
      description: "Cross-platform mobile applications for iOS and Android",
      features: [
        "Consultation and planning",
        "Cross-platform development",
        "UI/UX design integration",
        "Testing and quality assurance",
        "App store deployment support",
        "30 days of support"
      ]
    },
    api: {
      title: "APIs Development",
      icon: "🔗",
      description: "RESTful APIs and backend services with proper documentation",
      features: [
        "API design and architecture",
        "RESTful API development",
        "Authentication & security",
        "Documentation",
        "Testing and deployment",
        "30 days of support"
      ]
    },
    design: {
      title: "UI/UX Design",
      icon: "🎨",
      description: "User-centered design solutions with wireframes and prototypes",
      features: [
        "User research and analysis",
        "Wireframing and prototyping",
        "Visual design",
        "Design system creation",
        "User testing support",
        "Design handoff"
      ]
    },
    consulting: {
      title: "Consulting",
      icon: "💡",
      description: "Technical consulting for your development projects",
      features: [
        "Technology stack advice",
        "Architecture planning",
        "Code review and optimization",
        "Best practices guidance",
        "Project planning assistance",
        "Technical documentation review"
      ]
    },
    devops: {
      title: "DevOps & Deployment",
      icon: "⚙️",
      description: "CI/CD pipeline setup and cloud deployment solutions",
      features: [
        "CI/CD pipeline setup",
        "Cloud deployment (AWS, Azure, GCP)",
        "Containerization with Docker",
        "Infrastructure as code",
        "Monitoring and logging setup",
        "30 days of support"
      ]
    }
  };

  const service = serviceConfigs[serviceType] || serviceConfigs.web;

  useEffect(() => {
    // Trigger text animation after component mounts
    setTimeout(() => {
      setAnimatedText(true);
    }, 300);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agree_to_terms) {
      alert("Please agree to the Terms & Conditions to proceed.");
      return;
    }

    console.log('Submitting service request to:', API_ENDPOINTS.serviceRequest);
    console.log('Service type:', serviceType);
    console.log('Form data:', formData);

    try {
      const response = await fetch(API_ENDPOINTS.serviceRequest, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_type: serviceType,
          ...formData
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      // Parse response
      let data;
      try {
        data = await response.json();
        console.log('Response data:', data);
      } catch (parseError) {
        console.error('Failed to parse response:', parseError);
        throw new Error('Invalid response from server');
      }

      // Check if request was successful
      if (response.ok) {
        if (data.success) {
          alert(`Thank you for your ${service.title} request! I'll review your requirements and get back to you within 24 hours.`);
          
          // Reset form
          setFormData({
            full_name: "",
            email: "",
            project_requirements: "",
            preferred_timeline: "",
            budget_range: "",
            agree_to_terms: false
          });
        } else {
          // Backend returned 200 but success: false
          const errorMessage = data.message || 'Failed to submit request';
          console.error('Backend error:', errorMessage, data);
          alert(`Error: ${errorMessage}\n\nPlease contact me directly at zubedanrdn@gmail.com`);
        }
      } else {
        // HTTP error status (4xx, 5xx)
        const errorMessage = data.message || data.error || `Server error (${response.status})`;
        console.error('HTTP error:', response.status, errorMessage, data);
        alert(`Error: ${errorMessage}\n\nPlease contact me directly at zubedanrdn@gmail.com`);
      }
    } catch (error) {
      console.error('Network or fetch error:', error);
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      alert('Network error: Unable to connect to the server. Please check your internet connection or contact me directly at zubedanrdn@gmail.com');
    }
  };

  return (
    <div className={`service-order-page ${darkMode ? 'dark-mode' : ''}`}>
      {/* Scrolling Text Banner */}
      <section className="scrolling-banner">
        <div className="scrolling-container">
          <div className="scrolling-text">
            <span className="banner-icon">💡</span>
            Next Steps: After submitting this form, I'll review your requirements and get back to you within 24 hours with a detailed proposal and timeline •
            <span className="banner-icon">💡</span>
            Next Steps: After submitting this form, I'll review your requirements and get back to you within 24 hours with a detailed proposal and timeline •
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="order-hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="text-animator">
              <h1 className={`order-hero-title ${animatedText ? 'animate-in' : ''}`}>
                Requesting Custom Quote
              </h1>
              <p className={`order-hero-subtitle ${animatedText ? 'animate-in' : ''}`}>
                {service.title}
              </p>
              <div className={`pricing-highlight ${animatedText ? 'animate-in' : ''}`}>
                <span className="highlight-icon">🤍</span>
                <span className="highlight-text">Flexible pricing based on your needs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="order-content-section">
        <div className="container">
          <div className="order-grid">
            {/* Service Info Card */}
            <div className="service-info-card">
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h2>{service.title}</h2>
              </div>
              <p className="service-description">{service.description}</p>
              
              <h3>What's Included:</h3>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              <div className="service-note">
                <p><strong>Note:</strong> Each project is customized to your specific needs. The final scope and pricing will be determined after our initial consultation.</p>
              </div>
            </div>

            {/* Project Form Card */}
            <div className="project-form-card">
              <h2>Project Details</h2>
              <form className="project-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="full_name">Full Name *</label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="project_requirements">Project Requirements *</label>
                  <textarea
                    id="project_requirements"
                    name="project_requirements"
                    value={formData.project_requirements}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Please descibe you project requirements in details...."
                  ></textarea>
                  <small className="input-note">
                    Include as much detail as possible about your project goals, features needed, and any specific requirements.
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="preferred_timeline">Preferred Timeline (Optional)</label>
                  <select
                    id="preferred_timeline"
                    name="preferred_timeline"
                    value={formData.preferred_timeline}
                    onChange={handleInputChange}
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">As soon as possible</option>
                    <option value="2-4 weeks">2-4 weeks</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="2-3 months">2-3 months</option>
                    <option value="3+ months">3+ months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="budget_range">Budget Range (Optional)</label>
                  <select
                    id="budget_range"
                    name="budget_range"
                    value={formData.budget_range}
                    onChange={handleInputChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                    <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000+">$10,000+</option>
                    <option value="not-sure">Not sure / Need quote</option>
                  </select>
                  <small className="input-note">
                    This helps me provide a more accurate quote. Final pricing will be discussed based on your specific needs.
                  </small>
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="agree_to_terms"
                      checked={formData.agree_to_terms}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="checkmark"></span>
                    I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> *
                  </label>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <span className="btn-icon">📨</span>
                  Request Custom Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceOrderPage;