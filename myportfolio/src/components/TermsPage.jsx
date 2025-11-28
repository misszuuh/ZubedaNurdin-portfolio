import { useTheme } from "../context/ThemeContext";
import "./TermsPage.css";

const TermsPage = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`terms-page ${darkMode ? 'dark-mode' : ''}`}>

      {/* Scrolling Text Banner */}
      <section className="scrolling-banner">
        <div className="scrolling-container">
          <div className="scrolling-text">
            <span className="banner-icon">💡</span>
            Understanding These Terms • These terms are designed to create a fair and professional working relationship • If you have any questions or need clarification on any point, please don't hesitate to ask before starting your project •
            <span className="banner-icon">💡</span>
            Understanding These Terms • These terms are designed to create a fair and professional working relationship • If you have any questions or need clarification on any point, please don't hesitate to ask before starting your project •
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="container">
          <div className="terms-container">
            <h1 className="terms-title">Terms & Conditions</h1>
            <p>Service Agreement for Zubeda Nurdin (zuuh)</p>
            <p className="terms-update">Last updated: {new Date().getFullYear()}</p>

            <div className="terms-sections">
              {/* Section 1 */}
              <div className="terms-section">
                <h2>1. Acceptance of Terms</h2>
                <p>By submitting a service request or engaging Zubeda Nurdin (Zuuh) for any services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
              </div>

              {/* Section 2 */}
              <div className="terms-section">
                <h2>2. Services Offered</h2>
                <p>Zubeda Nurdin provides professional software development services including but not limited to:</p>
                <ul>
                  <li>Web Development (Full-stack applications, websites, web apps)</li>
                  <li>Mobile Development (Cross-platform mobile applications)</li>
                  <li>API Development (RESTful APIs, integrations, microservices)</li>
                  <li>UI/UX Design (User interface and experience design)</li>
                  <li>Technical Consulting (Architecture planning, code reviews, optimization)</li>
                  <li>DevOps & Deployment (CI/CD setup, cloud deployment, infrastructure)</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="terms-section">
                <h2>3. Custom Pricing and Quotes</h2>
                <p><strong>Flexible Pricing:</strong> All services are priced based on project requirements, complexity, timeline, and client budget. No fixed pricing is provided upfront.</p>
                
                <p><strong>Quote Process:</strong></p>
                <ul>
                  <li>Initial consultation and requirement gathering (free)</li>
                  <li>Custom quote provided within 2-3 business days</li>
                  <li>Pricing negotiations welcome and encouraged</li>
                  <li>Final pricing agreed upon before project commencement</li>
                </ul>
                
                <p><strong>Quote Validity:</strong> All quotes are valid for 30 days from the date of issue.</p>
              </div>

              {/* Section 4 */}
              <div className="terms-section">
                <h2>4. Payment Terms</h2>
                <p><strong>Payment Schedule:</strong></p>
                <ul>
                  <li>Projects under $1,000: 50% upfront, 50% upon completion</li>
                  <li>Projects $1,000-$5,000: 30% upfront, 40% at midpoint, 30% upon completion</li>
                  <li>Projects over $5,000: Custom payment schedule to be agreed upon</li>
                </ul>
                
                <p><strong>Payment Methods:</strong> Bank transfer, PayPal, or other mutually agreed methods.</p>
                <p><strong>Late Payments:</strong> Overdue payments may result in project suspension until payment is received.</p>
              </div>

              {/* Section 5 */}
              <div className="terms-section">
                <h2>5. Project Timeline and Delivery</h2>
                <p><strong>Timeline Estimates:</strong> Project timelines are estimates based on project scope and complexity. Actual delivery may vary due to:</p>
                <ul>
                  <li>Changes in project scope or requirements</li>
                  <li>Client feedback and revision cycles</li>
                  <li>Technical complexities not initially anticipated</li>
                  <li>Third-party dependencies</li>
                </ul>
                
                <p><strong>Client Responsibilities:</strong> Timely provision of required materials, feedback, and approvals are essential for project completion.</p>
              </div>

              {/* Section 6 */}
              <div className="terms-section">
                <h2>6. Intellectual Property</h2>
                <p><strong>Client Ownership:</strong> Upon full payment, clients retain full ownership of custom-developed code and intellectual property created specifically for their project.</p>
                <p><strong>Developer Tools:</strong> Zubeda Nurdin retains rights to general methodologies, techniques, and any pre-existing code or frameworks used in development.</p>
                <p><strong>Portfolio Rights:</strong> Zubeda Nurdin reserves the right to showcase completed projects in portfolios and marketing materials unless otherwise agreed in writing.</p>
              </div>

              {/* Section 7 */}
              <div className="terms-section">
                <h2>7. Revisions and Changes</h2>
                <p><strong>Included Revisions:</strong> Each project includes a reasonable number of revisions as specified in the project agreement.</p>
                <p><strong>Additional Changes:</strong> Significant changes to project scope may result in additional charges and timeline adjustments.</p>
                <p><strong>Change Requests:</strong> All change requests must be submitted in writing and approved before implementation.</p>
              </div>

              {/* Section 8 */}
              <div className="terms-section">
                <h2>8. Support and Maintenance</h2>
                <p><strong>Bug Fixes:</strong> Free bug fixes are provided for 30 days after project delivery for issues directly related to the delivered work.</p>
                <p><strong>Ongoing Support:</strong> Long-term maintenance and support services are available under separate agreements.</p>
                <p><strong>Third-party Issues:</strong> Support for third-party services, hosting, or external dependencies may incur additional charges.</p>
              </div>

              {/* Section 9 */}
              <div className="terms-section">
                <h2>9. Confidentiality</h2>
                <p>Zubeda Nurdin agrees to maintain confidentiality of all client information, data, and proprietary business details shared during the course of the project. This confidentiality extends beyond project completion.</p>
              </div>

              {/* Section 10 */}
              <div className="terms-section">
                <h2>10. Liability and Warranties</h2>
                <p><strong>Service Warranty:</strong> Services are provided with professional care and industry best practices.</p>
                <p><strong>Limitation of Liability:</strong> Zubeda Nurdin's liability is limited to the total amount paid for services. We are not liable for indirect, incidental, or consequential damages.</p>
                <p><strong>Client Responsibility:</strong> Clients are responsible for data backups and testing in their own environments.</p>
              </div>

              {/* Section 11 */}
              <div className="terms-section">
                <h2>11. Termination</h2>
                <p><strong>Client Termination:</strong> Clients may terminate projects with 7 days written notice. Payment is due for all work completed up to termination date.</p>
                <p><strong>Developer Termination:</strong> Zubeda Nurdin may terminate projects for non-payment, scope creep, or unprofessional conduct.</p>
                <p><strong>Deliverables:</strong> Upon termination, clients receive all work completed and paid for up to the termination date.</p>
              </div>

              {/* Section 12 */}
              <div className="terms-section">
                <h2>12. Communication</h2>
                <p><strong>Primary Contact:</strong> All project communication should go through the designated project contact.</p>
                <p><strong>Response Time:</strong> Standard response time is 24-48 hours during business days.</p>
                <p><strong>Project Updates:</strong> Regular project updates will be provided as agreed upon in the project timeline.</p>
              </div>

              {/* Section 13 */}
              <div className="terms-section">
                <h2>13. Dispute Resolution</h2>
                <p>Any disputes will be resolved through:</p>
                <ul>
                  <li>Direct communication and negotiation</li>
                  <li>Mediation if necessary</li>
                  <li>Arbitration as a final resort</li>
                </ul>
              </div>

              {/* Section 14 */}
              <div className="terms-section">
                <h2>14. Changes to Terms</h2>
                <p>These terms may be updated from time to time. Clients will be notified of significant changes. Continued use of services constitutes acceptance of updated terms.</p>
              </div>

              {/* Section 15 */}
              <div className="terms-section">
                <h2>15. Contact Information</h2>
                <p>For questions about these Terms and Conditions, please contact:</p>
                <div className="contact-info">
                  <p><strong>Zubeda Nurdin (Zuuh)</strong></p>
                  <p>Email: zubedanrdn@gmail.com</p>
                  <p>GitHub: github.com/misszuuh</p>
                  <p>LinkedIn: linkedin.com/in/zubeda-nurdin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;