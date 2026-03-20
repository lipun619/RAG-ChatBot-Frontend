# RAG ChatBot - Frontend (Portfolio)

A modern, responsive developer portfolio built with **Angular 19** featuring an integrated AI-powered chat widget connected to a RAG (Retrieval-Augmented Generation) ChatBot backend.

## Live Demo

> _Add your deployed URL here after deployment_

---

## Features

- **Single-Page Scroll Layout** — Smooth navigation between Home, About, and Contact sections
- **AI Chat Widget** — Integrated `@caplipun/ai-chat-widget` connected to a RAG ChatBot backend API
- **Dark/Light Theme Toggle** — Persistent theme switching with sun/moon icons
- **Responsive Design** — Mobile hamburger menu with animated icon transitions
- **Scroll Animations** — Custom `appFadeIn` directive using Intersection Observer
- **Active Section Tracking** — Navbar highlights current section via Intersection Observer
- **Contact Form** — Reactive form with validation, powered by EmailJS
- **Markdown Rendering** — Supports markdown content via `ngx-markdown` with Prism.js syntax highlighting
- **Pixel Art Effects** — Halftone overlay on images and hover effects on skill chips

---

## Tech Stack

| Category         | Technology                                   |
| ---------------- | -------------------------------------------- |
| Framework        | Angular 19                                   |
| Language         | TypeScript 5.7                               |
| Styling          | SCSS + Tailwind CSS 4.0                      |
| Icons            | ng-icons (Heroicons + Simple Icons)          |
| Animations       | Angular Animations                           |
| Chat Widget      | @caplipun/ai-chat-widget                     |
| Email            | EmailJS                                      |
| Markdown         | ngx-markdown + marked + PrismJS              |
| Build Tool       | Angular CLI + esbuild                        |

---

## Project Structure

```
src/
├── app/
│   ├── app.component.ts          # Root component (layout + chat widget)
│   ├── app.config.ts             # App providers (router, animations, markdown)
│   ├── app.routes.ts             # Route config (SPA with wildcard redirect)
│   ├── components/
│   │   └── navbar/               # Fixed navbar with theme toggle & mobile menu
│   ├── directives/
│   │   └── fade-in.directive.ts  # Scroll-triggered fade-in animation
│   ├── pages/
│   │   ├── home/                 # Hero section with animated text & portrait
│   │   ├── about/                # Bio, education, experience & tech stack
│   │   └── contact/              # Contact form with EmailJS + social links
│   └── services/
│       ├── email.service.ts      # EmailJS integration
│       └── theme.service.ts      # Dark/Light theme management
├── styles.scss                   # Global styles
└── index.html                    # Entry HTML
```

---

## Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x
- **Angular CLI** >= 19.x

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/RAG-ChatBot-Frontend.git
cd RAG-ChatBot-Frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

The app will be available at `http://localhost:4200/`.

### 4. Build for production

```bash
ng build --configuration production
```

The build artifacts are output to `dist/portfolio/browser`.

---

## Deploying to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

#### Step 1 — Push code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/RAG-ChatBot-Frontend.git
git push -u origin main
```

#### Step 2 — Create a Vercel account

1. Go to [vercel.com](https://vercel.com) and click **Sign Up**
2. Choose **Continue with GitHub** to link your repositories

#### Step 3 — Import the project

1. On the Vercel dashboard, click **"Add New..." → "Project"**
2. Find **RAG-ChatBot-Frontend** in the repo list and click **"Import"**
3. Configure the build settings:

| Setting            | Value                                  |
| ------------------ | -------------------------------------- |
| Framework Preset   | Angular                                |
| Build Command      | `ng build --configuration production`  |
| Output Directory   | `dist/portfolio/browser`               |
| Install Command    | `npm install`                          |

4. Click **"Deploy"**

#### Step 4 — SPA routing configuration

Create a `vercel.json` in the project root to handle Angular client-side routing:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Commit and push — Vercel auto-deploys on every push:

```bash
git add vercel.json
git commit -m "Add Vercel SPA rewrite config"
git push
```

#### Step 5 — Custom domain (optional)

1. Go to your project on Vercel → **Settings → Domains**
2. Add your custom domain
3. Update DNS records at your domain registrar as instructed
4. SSL is provisioned automatically

---

### Option B: Deploy via Vercel CLI

#### Step 1 — Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2 — Login

```bash
vercel login
```

#### Step 3 — Deploy

From the project root:

```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (first time)
- **Project name?** → `rag-chatbot-frontend`
- **Directory of code?** → `./`
- **Override settings?** → Yes
  - Build Command: `ng build --configuration production`
  - Output Directory: `dist/portfolio/browser`

#### Step 4 — Deploy to production

```bash
vercel --prod
```

---

### Environment Variables on Vercel

If your app uses environment-specific values (API URLs, keys):

1. Go to **Vercel Dashboard → Project → Settings → Environment Variables**
2. Add your variables (e.g., `API_URL`, `EMAILJS_KEY`)
3. Redeploy for changes to take effect

---

## Available Scripts

| Command          | Description                        |
| ---------------- | ---------------------------------- |
| `npm start`      | Start dev server at localhost:4200 |
| `ng build`       | Production build                   |
| `ng build --watch` | Build in watch mode              |

---

## License

This project is open source and available under the [MIT License](LICENSE).
