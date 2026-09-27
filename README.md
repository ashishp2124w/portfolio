# Full-Stack Personal Developer Portfolio Website

A modern, responsive, high-performance personal developer portfolio built with **React**, **Vite**, **Tailwind CSS**, **Node.js**, **Express**, and **Nodemailer**.

![Portfolio Preview](https://img.shields.io/badge/Stack-React%20%7C%20Vite%20%7C%20Tailwind%20%7C%20Express%20%7C%20Nodemailer-indigo)

---

## 🌟 Key Features

- **🎨 Modern Aesthetic:** Sleek dark mode design, glassmorphism card UI, gradient text highlights, and smooth scrolling.
- **📱 Fully Responsive:** Optimized layout for Mobile, Tablet, and Desktop screens.
- **⚡ Fast Performance:** Powered by Vite & React 18 with minimal bundles and fast load times.
- **✉️ Working Contact Form:** Asynchronous submission with loading spinner, success/error banners, input validation, and direct email dispatch via Nodemailer.
- **⚙️ Centralized Content (`client/src/data/portfolioData.js`):** Easily edit your name, bio, skills, project cards, timeline, and social links in a single JavaScript file.
- **🔒 Secure Architecture:** Backend handles Nodemailer credentials safely via environment variables—no secrets exposed on frontend.

---

## 📁 Project Structure

```text
p2/
├── client/                      # Frontend Application (React + Vite + Tailwind CSS)
│   ├── public/                  # Static assets & favicon
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Navbar.jsx       # Glassmorphism navbar header & mobile drawer
│   │   │   ├── Hero.jsx         # Intro with CTA, animated badge & code window
│   │   │   ├── About.jsx        # Bio, stats counters, key priorities
│   │   │   ├── Skills.jsx       # Category tabs & skill level progress indicators
│   │   │   ├── Projects.jsx     # Filterable project cards with demo & repo links
│   │   │   ├── Experience.jsx   # Interactive Experience & Education timeline
│   │   │   ├── Contact.jsx      # Form with state management & contact info
│   │   │   └── Footer.jsx       # Footer with back-to-top & social links
│   │   ├── data/
│   │   │   └── portfolioData.js # Customizable portfolio dataset
│   │   ├── App.jsx              # Main App component
│   │   ├── index.css            # Tailwind directives & custom CSS utilities
│   │   └── main.jsx             # React entry point
│   ├── .env             # Frontend environment template
│   ├── index.html               # HTML with SEO tags & Google Fonts
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/                      # Backend API (Node.js + Express + Nodemailer)
│   ├── src/
│   │   ├── config/
│   │   │   └── mailer.js        # Nodemailer transport configuration
│   │   ├── controllers/
│   │   │   └── contactController.js # Contact form validation & email sender
│   │   └── routes/
│   │       └── contact.js       # API route (/api/contact)
│   ├── .env             # Backend environment template
│   ├── index.js                 # Express server entry point
│   └── package.json
│
└── README.md                    # Project documentation & deployment guide
```

---

## 🛠️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- `npm` (included with Node.js)

---

### 1. Backend Setup (`server/`)

Open a terminal in the root directory and navigate to `server/`:

```bash
cd server
npm install
```

#### Environment Variables Setup:
Copy `.env` to create a `.env` file inside the `server/` directory:

```bash
cp .env .env
```

Edit `server/.env` with your actual email credentials:

```env
PORT=5000
NODE_ENV=development
CLIENT_ORIGIN=http://localhost:5173

# Nodemailer Settings (Gmail Example)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
RECEIVER_EMAIL=your-destination-email@gmail.com
```

> 💡 **Gmail App Password Setup:**
> 1. Enable 2-Step Verification on your Google Account.
> 2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords).
> 3. Generate a new App Password for "Mail" and copy the 16-character code into `EMAIL_PASS`.

#### Run the Server:
```bash
# Development mode with Nodemailer hot-reload
npm run dev

# Or Production start
npm start
```
The server will start at `http://localhost:5000`. Test endpoint in browser: `http://localhost:5000/api/health`.

---

### 2. Frontend Setup (`client/`)

Open a new terminal window, navigate to `client/`:

```bash
cd client
npm install
```

#### Environment Variables Setup:
Copy `.env` to create `.env` inside `client/`:

```bash
cp .env .env
```

Edit `client/.env`:
```env
VITE_API_URL=http://localhost:5000
```

#### Run the Frontend:
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

---

## 🚀 How to Customise Content

All portfolio content is stored in [client/src/data/portfolioData.js](file:///c:/BITU/New%20Portfolio/p2/client/src/data/portfolioData.js).

Open this file to update:
- Your name, role, status badge, bio, and resume link.
- Social media handles (GitHub, LinkedIn, Twitter).
- Key stats and experience timeline items.
- Project cards, descriptions, live demo links, and GitHub repositories.
- Skills and category levels.
- Contact phone and email display details.

---

## 🌐 Deployment Instructions

### A. Deploying Backend to Render / Railway

1. **Push your code to GitHub.**
2. **Create a Service on Render (render.com):**
   - Click **New +** -> **Web Service**.
   - Connect your GitHub repository.
   - Set **Root Directory** to `server`.
   - Set **Build Command** to `npm install`.
   - Set **Start Command** to `node index.js`.
3. **Set Environment Variables on Render:**
   - `PORT`: `5000` (or leave default assigned by Render)
   - `EMAIL_USER`: `your-email@gmail.com`
   - `EMAIL_PASS`: `your-app-password`
   - `RECEIVER_EMAIL`: `your-destination-email@gmail.com`
   - `CLIENT_ORIGIN`: `https://your-frontend.vercel.app`
4. **Deploy.** Once deployed, copy your backend URL (e.g. `https://portfolio-backend.onrender.com`).

---

### B. Deploying Frontend to Vercel / Netlify

1. **Vercel (vercel.com):**
   - Click **Add New** -> **Project**.
   - Select your repository.
   - Set **Framework Preset** to `Vite`.
   - Set **Root Directory** to `client`.
2. **Add Environment Variable on Vercel:**
   - `VITE_API_URL`: `https://portfolio-backend.onrender.com` (Your deployed Render backend URL)
3. **Deploy.** Your portfolio frontend is live!

---

## ⚡ Connecting Deployed Frontend to Deployed Backend

1. Make sure `VITE_API_URL` in Vercel settings points to your deployed backend domain.
2. Make sure `CLIENT_ORIGIN` in Render settings points to your deployed Vercel domain to allow CORS requests.
3. Test your contact form live!
