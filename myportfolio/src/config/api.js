// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://apizuuhportfolio.deploy.tz';

export const API_ENDPOINTS = {
  contactMessage: `${API_BASE_URL}/api/contact-message/`,
  serviceRequest: `${API_BASE_URL}/api/service-request/`,
  projects: `${API_BASE_URL}/api/projects/`,
  skills: `${API_BASE_URL}/api/skills/`,
  testimonials: `${API_BASE_URL}/api/testimonials/`,
  socialLinks: `${API_BASE_URL}/api/social-links/`,
  aboutMe: `${API_BASE_URL}/api/about-me/`,
};

export default API_BASE_URL;
