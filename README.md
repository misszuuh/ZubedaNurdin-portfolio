# Portfolio Website - Full Stack Application

A modern, full-stack portfolio website built with React and Django, featuring project showcases, service request forms, and contact management.

## 🚀 Tech Stack

### Frontend
- **React 19.1.1** - UI framework
- **Vite 7.1.7** - Build tool and dev server
- **React Router DOM 7.9.4** - Client-side routing
- **tsparticles** - Particle background effects

### Backend
- **Django 5.1.3** - Web framework
- **Django REST Framework 3.15.2** - API development
- **SQLite** - Database (development)
- **django-cors-headers** - CORS support
- **Gunicorn** - Production server

## 📁 Project Structure

```
.
├── myportfolio/              # React frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── config/           # API configuration
│   │   └── context/          # React context
│   └── package.json
│
├── backend_myportfolio/      # Django backend
│   ├── config/               # Django settings
│   ├── portfolioapp/         # Main app
│   │   ├── models.py         # Database models
│   │   ├── views.py          # API views
│   │   ├── serializers.py    # DRF serializers
│   │   └── urls.py           # URL routing
│   └── requirements.txt
│
└── README.md                 # This file
```

## ⚙️ Setup Instructions

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn
- Gmail account with App Password (for email functionality)

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend_myportfolio
   ```

2. **Create and activate virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables:**
   
   The `.env` file is already configured with your email. Verify it contains:
   ```
   SECRET_KEY=django-insecure-ar0etm%5_@c1s8%=0bsn7hp$!p!0#$x$+12!tp8ovp5=6oq$)q
   DEBUG=True
   ALLOWED_HOSTS=localhost,127.0.0.1
   CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000,http://localhost:5173,http://127.0.0.1:5173
   
   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USE_TLS=True
   EMAIL_HOST_USER=zubedanrdn@gmail.com
   EMAIL_HOST_PASSWORD=asexpyowlqyevjno
   DEFAULT_FROM_EMAIL=zubedanrdn@gmail.com
   ```

5. **Run database migrations:**
   ```bash
   python manage.py migrate
   ```

6. **Create superuser (for admin access):**
   ```bash
   python manage.py createsuperuser
   ```

7. **Start the development server:**
   ```bash
   python manage.py runserver
   ```
   
   Backend will be available at: `http://localhost:8000`
   Admin panel at: `http://localhost:8000/admin`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd myportfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify environment configuration:**
   
   The `.env` file should contain:
   ```
   VITE_API_URL=http://localhost:8000
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   Frontend will be available at: `http://localhost:5173`

## 🎯 Running Both Servers

You can use the provided script to start both servers:

```bash
./START_SERVERS.sh
```

Or manually in separate terminals:

**Terminal 1 (Backend):**
```bash
cd backend_myportfolio
source venv/bin/activate
python manage.py runserver
```

**Terminal 2 (Frontend):**
```bash
cd myportfolio
npm run dev
```

## 📧 Email Configuration

The email functionality is already configured to send emails to `zubedanrdn@gmail.com`. 

### How it works:
1. User submits a contact form or service request
2. Backend sends notification email to you at `zubedanrdn@gmail.com`
3. Backend sends confirmation email to the user
4. Frontend shows success message

### Testing Email:
```bash
cd backend_myportfolio
python test_email.py
```

## 🧪 Testing

### Test Contact Form:
```bash
cd backend_myportfolio
python test_contact_form.py
```

### Test Service Request:
```bash
cd backend_myportfolio
python test_contact_comprehensive.py
```

## 📝 API Endpoints

### Public Endpoints (GET)
- `/api/projects/` - List all projects
- `/api/skills/` - List all skills
- `/api/testimonials/` - List all testimonials
- `/api/social-links/` - List social media links
- `/api/about-me/` - Get about me information

### Form Submission Endpoints (POST)
- `/api/contact-message/` - Submit contact form
- `/api/service-request/` - Submit service request

## 🚀 Deployment Guide

### Backend Deployment (Django)

1. **Update settings for production:**
   - Set `DEBUG=False` in `.env`
   - Update `ALLOWED_HOSTS` with your domain
   - Update `CORS_ALLOWED_ORIGINS` with your frontend URL
   - Use PostgreSQL instead of SQLite

2. **Collect static files:**
   ```bash
   python manage.py collectstatic
   ```

3. **Deploy to hosting service:**
   - **Heroku**: Use `Procfile` with Gunicorn
   - **Railway**: Connect GitHub repo
   - **DigitalOcean**: Use App Platform or Droplet
   - **AWS**: Use Elastic Beanstalk or EC2

4. **Example Heroku deployment:**
   ```bash
   # Install Heroku CLI
   heroku create your-portfolio-api
   heroku addons:create heroku-postgresql:mini
   git push heroku main
   heroku run python manage.py migrate
   heroku run python manage.py createsuperuser
   ```

### Frontend Deployment (React)

1. **Build for production:**
   ```bash
   cd myportfolio
   npm run build
   ```

2. **Update API URL:**
   - Create `.env.production` file
   - Set `VITE_API_URL=https://your-backend-domain.com`

3. **Deploy to hosting service:**
   - **Vercel**: `vercel --prod`
   - **Netlify**: Drag & drop `dist` folder or connect GitHub
   - **GitHub Pages**: Use `gh-pages` package
   - **AWS S3**: Upload `dist` folder to S3 bucket

4. **Example Vercel deployment:**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### Environment Variables for Production

**Backend (.env):**
```
SECRET_KEY=your-production-secret-key
DEBUG=False
ALLOWED_HOSTS=your-domain.com,www.your-domain.com
CORS_ALLOWED_ORIGINS=https://your-frontend-domain.com
DATABASE_URL=postgres://user:password@host:5432/dbname
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=zubedanrdn@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
DEFAULT_FROM_EMAIL=zubedanrdn@gmail.com
```

**Frontend (.env.production):**
```
VITE_API_URL=https://your-backend-domain.com
```

## 🔒 Security Notes

1. **Never commit `.env` files** - They contain sensitive information
2. **Use App Passwords** for Gmail (not your regular password)
3. **Enable 2FA** on your Gmail account
4. **Update SECRET_KEY** for production
5. **Use HTTPS** in production
6. **Set DEBUG=False** in production

## 📱 Features

- ✅ Portfolio project showcase
- ✅ Skills display with categories
- ✅ Client testimonials
- ✅ Contact form with email notifications
- ✅ Service request forms (6 service types)
- ✅ Admin panel for content management
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Particle background effects

## 🛠️ Development Commands

### Backend
```bash
python manage.py runserver          # Start dev server
python manage.py makemigrations     # Create migrations
python manage.py migrate            # Apply migrations
python manage.py createsuperuser    # Create admin user
python manage.py test               # Run tests
python manage.py collectstatic      # Collect static files
```

### Frontend
```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 📞 Support

For issues or questions, contact: **zubedanrdn@gmail.com**

## 📄 License

This project is private and proprietary.
