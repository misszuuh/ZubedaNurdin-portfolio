import { useState } from "react";
import "./ContactPage.css";
import { useTheme } from "../context/ThemeContext";
import { API_ENDPOINTS } from "../config/api";

const ContactPage = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Submitting form to:', API_ENDPOINTS.contactMessage);
    console.log('Form data:', formData);

    try {
      const response = await fetch(API_ENDPOINTS.contactMessage, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
          alert("Thank you for your message! I'll get back to you soon.");
          
          // Reset form
          setFormData({
            full_name: "",
            email: "",
            subject: "",
            message: ""
          });
        } else {
          // Backend returned 200 but success: false
          const errorMessage = data.message || 'Failed to send message';
          console.error('Backend error:', errorMessage, data);
          alert(`Error: ${errorMessage}\n\nPlease email me directly at zubedanrdn@gmail.com`);
        }
      } else {
        // HTTP error status (4xx, 5xx)
        const errorMessage = data.message || data.error || `Server error (${response.status})`;
        console.error('HTTP error:', response.status, errorMessage, data);
        alert(`Error: ${errorMessage}\n\nPlease email me directly at zubedanrdn@gmail.com`);
      }
    } catch (error) {
      console.error('Network or fetch error:', error);
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      alert('Network error: Unable to connect to the server. Please check your internet connection or email me directly at zubedanrdn@gmail.com');
    }
  };

  const contactMethods = [
    {
      icon: "📧",
      name: "Email",
      description: "Send me an email directly",
      linkText: "zubedanrdn@gmail.com"
    },
    {
      icon: "💼",
      name: "LinkedIn",
      description: "Connect with me professionally",
      link: "https://www.linkedin.com/in/zubeda-nurdin-3374872ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      linkText: "linkedin.com/in/zubedanurdin"
    },
    {
      icon: "🐙",
      name: "GitHub",
      description: "Check out my projects and code",
      link: "https://github.com/misszuuh",
      linkText: "github.com/misszuuh"
    }
  ];

  return (
    <div className={`contact-page ${darkMode ? 'dark-mode' : ''}`}>
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="container">
          <h1 className="contact-hero-title">Get In Touch</h1>
          <p className="contact-hero-subtitle">
            Let's discuss your next project
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <h2 className="form-title">Send Me a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="full_name">Full Name</label>
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
                  <label htmlFor="email">Email Address</label>
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
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <span className="btn-icon">📨</span>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods-section">
        <div className="container">
          <h2 className="section-title">Other Ways to Reach Me</h2>
          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-method-card">
                <div className="contact-method-icon">{method.icon}</div>
                <h3>{method.name}</h3>
                <p>{method.description}</p>
                <a 
                  href={method.link} 
                  className="contact-method-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {method.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;