# 🚀 Complete Deployment Guide

## Quick Start for Development

### Step 1: Start Backend Server

```bash
cd backend_myportfolio
source venv/bin/activate  # On Windows: venv\Scripts\activate
python3 manage.py runserver
```

Backend runs at: **http://localhost:8000**

### Step 2: Start Frontend Server

Open a new terminal:

```bash
cd myportfolio
npm run dev
```

Frontend runs at: **http://localhost:5173**

### Step 3: Test the Application

1. Open browser to `http://localhost:5173`
2. Navigate to Contact page
3. Fill out and submit the contact form
4. You should see: "Thank you for your message! I'll get back to you soon."
5. Check your email at `zubedanrdn@gmail.com` for the notification

## ✅ What's Already Configured

### Backend (Django)
- ✅ Email configured to send to `zubedanrdn@gmail.com`
- ✅ CORS enabled for frontend communication
- ✅ All API endpoints working
- ✅ Database migrations ready
- ✅ Contact form and service request handlers implemented

### Frontend (React)
- ✅ API URL configured to `http://localhost:8000`
- ✅ Contact form with proper error handling
- ✅ Service request forms (6 types)
- ✅ Success/error messages for users

## 📧 Email Functionality

When a user submits a form:

1. **You receive an email** at `zubedanrdn@gmail.com` with:
   - User's name and email
   - Their message/request
   - Reply-To header set to user's email (click Reply to respond)

2. **User receives confirmation email** with:
   - Thank you message
   - Summary of their submission
   - Your contact information

3. **Frontend shows success message**:
   - Contact form: "Thank you for your message! I'll get back to you soon."
   - Service request: "Thank you for your [Service] request! I'll review your requirements and get back to you within 24 hours."

## 🧪 Testing Email Configuration

Run this test to verify email is working:

```bash
cd backend_myportfolio
python3 test_email.py
```

Expected output:
```
✓ Email sent successfully to zubedanrdn@gmail.com
```

## 🔧 Troubleshooting

### Backend won't start
```bash
cd backend_myportfolio
source venv/bin/activate
pip install -r requirements.txt
python3 manage.py migrate
python3 manage.py runserver
```

### Frontend won't start
```bash
cd myportfolio
npm install
npm run dev
```

### Forms not submitting
1. Check both servers are running
2. Verify frontend `.env` has: `VITE_API_URL=http://localhost:8000`
3. Check browser console for errors (F12)
4. Verify backend terminal shows no errors

### Emails not sending
1. Check backend `.env` has correct email credentials
2. Run: `cd backend_myportfolio && python3 test_email.py`
3. Check Gmail App Password is valid
4. Look for error messages in backend terminal

## 🌐 Production Deployment

### Backend Deployment Options

**Option 1: Railway (Recommended - Free tier available)**
1. Create account at railway.app
2. Connect GitHub repository
3. Select `backend_myportfolio` as root directory
4. Add environment variables from `.env`
5. Railway auto-detects Django and deploys

**Option 2: Render (Free tier available)**
1. Create account at render.com
2. New Web Service → Connect repository
3. Root directory: `backend_myportfolio`
4. Build command: `pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate`
5. Start command: `gunicorn config.wsgi:application`
6. Add environment variables

**Option 3: Heroku**
```bash
cd backend_myportfolio
heroku create your-portfolio-api
heroku addons:create heroku-postgresql:mini
heroku config:set SECRET_KEY=your-secret-key
heroku config:set DEBUG=False
heroku config:set EMAIL_HOST_USER=zubedanrdn@gmail.com
heroku config:set EMAIL_HOST_PASSWORD=your-app-password
git push heroku main
heroku run python manage.py migrate
```

### Frontend Deployment Options

**Option 1: Vercel (Recommended - Free)**
1. Install Vercel CLI: `npm install -g vercel`
2. Navigate to frontend: `cd myportfolio`
3. Create `.env.production`:
   ```
   VITE_API_URL=https://your-backend-url.com
   ```
4. Deploy: `vercel --prod`

**Option 2: Netlify (Free)**
1. Build: `cd myportfolio && npm run build`
2. Go to netlify.com
3. Drag & drop the `dist` folder
4. Set environment variable: `VITE_API_URL=https://your-backend-url.com`

**Option 3: GitHub Pages**
```bash
cd myportfolio
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build
npm run deploy
```

### Production Environment Variables

**Backend (.env for production):**
```
SECRET_KEY=generate-new-secret-key-for-production
DEBUG=False
ALLOWED_HOSTS=your-backend-domain.com
CORS_ALLOWED_ORIGINS=https://your-frontend-domain.com
DATABASE_URL=postgres://user:password@host:5432/dbname
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=zubedanrdn@gmail.com
EMAIL_HOST_PASSWORD=asexpyowlqyevjno
DEFAULT_FROM_EMAIL=zubedanrdn@gmail.com
```

**Frontend (.env.production):**
```
VITE_API_URL=https://your-backend-domain.com
```

## 📋 Pre-Deployment Checklist

### Backend
- [ ] Update `SECRET_KEY` to a new random value
- [ ] Set `DEBUG=False`
- [ ] Update `ALLOWED_HOSTS` with your domain
- [ ] Update `CORS_ALLOWED_ORIGINS` with frontend URL
- [ ] Run `python3 manage.py collectstatic`
- [ ] Test email functionality
- [ ] Create superuser for admin access

### Frontend
- [ ] Update `VITE_API_URL` to production backend URL
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`
- [ ] Verify all API calls work with production backend

## 🔒 Security Checklist

- [ ] Never commit `.env` files to Git
- [ ] Use strong `SECRET_KEY` in production
- [ ] Enable HTTPS for both frontend and backend
- [ ] Set `DEBUG=False` in production
- [ ] Use environment variables for all secrets
- [ ] Keep Gmail App Password secure
- [ ] Enable 2FA on Gmail account
- [ ] Regularly update dependencies

## 📊 Monitoring

After deployment, monitor:
- Email delivery (check spam folder initially)
- Form submissions in Django admin
- Server logs for errors
- API response times

## 🆘 Getting Help

If you encounter issues:
1. Check server logs (backend terminal)
2. Check browser console (F12)
3. Verify environment variables are set correctly
4. Test email with `test_email.py`
5. Contact: zubedanrdn@gmail.com

---

**Your portfolio is ready to deploy! 🎉**
