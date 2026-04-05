<<<<<<< HEAD
# Adithya Ganiga — Portfolio

A production-grade personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

## ✨ Features

- 🎨 Premium dark design (Stripe/Linear-inspired)
- 🔄 GitHub repos auto-fetched via API
- ⚡ Scroll-progress indicator + sticky nav
- 🔍 Project search & category filtering
- 📱 Fully responsive (mobile-first)
- ⌨️ Typewriter role animation
- 💫 Smooth hover & transition animations
- 📄 Resume download button
- 📬 Contact form (mailto fallback)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### 1. Install dependencies

```bash
npm install
```

### 2. Add your assets to `/public`

Make sure these files exist in the `/public` folder:
- `favicon.ico`
- `logo.png`
- `profile.jpeg`
- `resume.pdf`

### 3. Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky navbar with scroll highlight
│   │   ├── Hero.tsx           # Hero with typewriter + metrics
│   │   ├── About.tsx          # Storytelling about section
│   │   ├── Experience.tsx     # Timeline experience cards
│   │   ├── Projects.tsx       # GitHub API projects grid + filters
│   │   ├── Skills.tsx         # Grouped skill tags
│   │   ├── HowIThink.tsx      # Problem→Result framework
│   │   ├── Certifications.tsx # Certification cards
│   │   ├── Contact.tsx        # Contact form + social CTAs
│   │   ├── Footer.tsx         # Footer with links
│   │   └── ScrollProgress.tsx # Top scroll bar
│   ├── data/
│   │   ├── personal.ts        # Name, bio, links, metrics
│   │   ├── experience.ts      # Work history
│   │   ├── certifications.ts  # Certifications
│   │   └── skills.ts          # All skill groups
│   ├── globals.css            # Design tokens + animations
│   ├── layout.tsx             # Root layout + fonts
│   └── page.tsx               # Main page assembly
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   ├── profile.jpeg
│   └── resume.pdf
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#050A14` |
| Card | `#0D1829` |
| Brand Blue | `#1D6FE8` |
| Accent Cyan | `#05E8C8` |
| Text Primary | `#E2E8F0` |
| Font Display | Syne |
| Font Body | DM Sans |
| Font Mono | JetBrains Mono |

## 🔧 Customization

All content is driven from `/app/data/*.ts` — no hardcoded content anywhere.

- Edit `personal.ts` to update bio, links, social handles
- Edit `experience.ts` to update work history
- Edit `certifications.ts` for new credentials
- Edit `skills.ts` for skill groups
- Replace files in `/public` for logo, profile photo, resume

## 🌐 Deployment

Deploy instantly on **Vercel**:

```bash
npx vercel
```

Or push to GitHub and connect to Vercel dashboard.

---

Built by Adithya Ganiga · Data | Insights | Solutions
=======
# portfolio
About me
>>>>>>> a8f4ef10e036c0e6baa1fc7c24e20045af8d2682
