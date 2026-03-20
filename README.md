# 7TechSoft - Digital Innovation & Software Solutions

A modern, high-performance website built with Next.js 15, featuring Server-Side Rendering (SSR), advanced animations, and a responsive design.

## 🚀 Features

- **Server-Side Rendering (SSR)** - Optimized for performance and SEO
- **Advanced Animations** - Smooth transitions using Framer Motion
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Contact Form** - Email integration using Nodemailer
- **Modern UI/UX** - Gradient effects, parallax scrolling, and interactive components

## 📋 Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

## 🛠️ Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Configure environment variables (see below)

## ⚙️ Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=recipient@email.com
```

For Gmail, create an [App Password](https://myaccount.google.com/apppasswords) instead of using your regular password.

## 🏃 Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
app/
├── components/        # Reusable React components
├── api/              # API routes
├── about/            # About page
├── contact/          # Contact page
├── services/         # Services page
├── portfolio/        # Portfolio page
├── blog/             # Blog page
├── technologies/     # Technologies page
└── page.tsx          # Home page (SSR)
```

## 🎨 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email:** Nodemailer
- **TypeScript:** Full type safety
- **Icons:** Lucide React

## 📦 Deployment

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Make sure to configure environment variables in your deployment platform.

## 📄 License

© 2026 7TechSoft. All rights reserved.
