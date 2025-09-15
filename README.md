# My Personal Website

A responsive portfolio website showcasing my cybersecurity expertise, projects, and skills.

## 🛠️ Built With

### Frontend:
- React.js
- Framer Motion for animations
- React Router for navigation
- Typed.js for terminal-style animations
- Responsive design with CSS3
- Font Awesome for icons

### Backend:
- Python Flask
- Email service for contact form

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher) - Install from [nodejs.org](https://nodejs.org/)
- npm (comes with Node.js)
- Python 3.8+ with pip - Install from [python.org](https://www.python.org/downloads/)

### Installation and Setup

#### Clone the repository:
```bash
git clone <your-repo-url>
cd My\ Website
```

#### Backend Setup:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.sample .env  # Then edit .env with your actual email credentials
```

#### Frontend Setup:
```bash
cd frontend
npm install
npm start
```
The frontend will be available at http://localhost:3000

#### Running the Backend:
```bash
cd backend
source venv/bin/activate
python3 app.py
```
The backend will run at http://localhost:8000

## 📋 Features

- **Responsive Design**: Works on all devices from mobile to desktop
- **Animated UI**: Smooth animations and transitions
- **Terminal-style Introduction**: Typewriter effect showcasing cybersecurity focus
- **Project Showcase**: Display of cybersecurity projects with descriptions and links
- **Skills Section**: Visual representation of technical skills and tools
- **Contact Form**: Email functionality for direct communication
- **Dark Theme**: Professional dark theme suitable for cybersecurity professional

## 📂 Project Structure

```
My Website/
├── frontend/                 # React frontend
│   ├── public/               # Public assets
│   └── src/                  # Source files
│       ├── components/       # React components
│       │   ├── Navbar.js     # Navigation bar
│       │   ├── Home.js       # Hero section
│       │   ├── About.js      # About section
│       │   ├── Skills.js     # Skills section
│       │   ├── Projects.js   # Projects section
│       │   ├── Contact.js    # Contact section
│       │   └── Footer.js     # Footer component
│       ├── styles/           # CSS stylesheets
│       ├── App.js            # Main App component
│       └── index.js          # Entry point
│
└── backend/                  # Python Flask backend
    ├── app.py                # Flask application
    └── requirements.txt      # Python dependencies
```

## 🔧 Configuration

### Email Service
To enable the contact form functionality, update the email configuration in `backend/app.py`:

```python
# Email configuration
EMAIL_ADDRESS = "your-email@gmail.com"
EMAIL_PASSWORD = "your-app-password"  # Use an app password for Gmail
```

Note: For security, it's recommended to use environment variables for sensitive information.

## 🌐 Deployment

### Frontend Deployment:
```bash
cd frontend
npm run build
```
Deploy the contents of the `build` folder to your web hosting service.

### Backend Deployment:
The Flask backend can be deployed to services like:
- Heroku
- PythonAnywhere
- AWS Elastic Beanstalk
- Google Cloud Run

Make sure to update the API endpoint in the frontend's Contact component to point to your deployed backend URL.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktops
- Large screens

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any questions or suggestions, please reach out at hashr.work@gmail.com
