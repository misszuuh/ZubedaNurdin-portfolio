import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section footer-about">
            <h3 className="footer-title">Zubeda Nurdin</h3>
            <p className="footer-description">
              Software Developer & Digital Designer passionate about creating
              innovative digital solutions that bridge technology and creativity.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h4 className="footer-section-title">Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/order/web" className="footer-link">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/order/mobile" className="footer-link">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link to="/order/api" className="footer-link">
                  API Development
                </Link>
              </li>
              <li>
                <Link to="/order/design" className="footer-link">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/order/consulting" className="footer-link">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-section footer-social-section">
            <h4 className="footer-section-title">Connect With Me</h4>
            <div className="footer-social-icons">
              <a
                href="https://www.linkedin.com/in/zubeda-nurdin-3374872ba"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img 
                  src="/images/linkedin1.png" 
                  alt="LinkedIn" 
                  className="footer-icon-img"
                />
              </a>
              <a
                href="https://github.com/misszuuh"
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img 
                  src="/images/github.png" 
                  alt="GitHub" 
                  className="footer-icon-img"
                />
              </a>
              <a
                href="mailto:zubedanrdn@gmail.com"
                className="footer-icon-link"
                aria-label="Email"
              >
                <img 
                  src="/images/email.png" 
                  alt="Email" 
                  className="footer-icon-img"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Zubeda Nurdin. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/terms" className="footer-bottom-link">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
