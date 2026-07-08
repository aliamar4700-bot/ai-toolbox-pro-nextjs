# AI Toolbox Pro — Premium SaaS Platform (Next.js Edition)

Welcome to the fully migrated, Next.js App Router-powered edition of **AI Toolbox Pro**. This project is structured specifically to be standalone, production-ready, and optimized for instant packaging or local/serverless deployment (Vercel, AWS, etc.).

---

## 🎨 Theme & Visual Philosophy

- **Premium Dark Aesthetics**: Styled in high-contrast deep tones matching pure dark SaaS applications (#0B0B0B, #111111, #1A1A1A) coupled with glowing electric cyan, neon blue, and purple highlights.
- **Micro-Animations & Transitions**: Employs elegant standard CSS animation scales, responsive hover triggers, and clean visual indicators.
- **Anti-AI-Slop Architecture**: Avoids clutter, diagnostic coordinates, or useless terminal metrics. Focuses purely on premium typographic rhythms and functional SaaS dashboards.

---

## 🏗️ Standalone Directory Tree

```text
/ai-toolbox-nextjs/
├── app/
│   ├── api/
│   │   └── gemini/
│   │       └── route.ts       # Secure server-side Google GenAI proxy
│   ├── globals.css            # Responsive Tailwind and font imports
│   ├── layout.tsx             # HTML structure with global font load
│   ├── page.tsx               # Client router & master state manager
│   └── types.ts               # Shared TypeScript schemas
├── components/
│   ├── AdminPanel.tsx         # User simulation and SEO composer
│   ├── AiTools.tsx            # Full 10-tool productivity sandbox
│   ├── Blog.tsx               # SEO Career Blog with comments & search
│   ├── Dashboard.tsx          # Real-time metrics and file vault
│   ├── Homepage.tsx           # Conversion-optimized landing page
│   ├── SettingsAndAuth.tsx    # Secure credential mock forms
│   └── Sidebar.tsx            # Dual-theme responsive navigation
├── utils/
│   ├── exporter.ts            # High-fidelity PDF, TXT, DOCX, CSV exporter
│   └── stateManager.ts        # Local cache browser synchronizer
├── package.json               # Modular scripts & dependencies
├── postcss.config.js          # Next-generation CSS compiler config
├── tailwind.config.js         # Dedicated brand colors & fonts
├── tsconfig.json              # TypeScript strict configuration
└── README.md                  # This documentation file
```

---

## 🚀 Getting Started Locally

Follow these quick commands to spin up the local development server:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environmental Secrets**
   Create a `.env.local` file in the root of the project:
   ```env
   GEMINI_API_KEY="your-google-api-key-here"
   ```

3. **Run Dev Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

4. **Production Compilation**
   To compile and optimize for production:
   ```bash
   npm run build
   ```

---

## 🛠️ Unified 10-Tool Suite

1. **AI Resume Builder** — ATS-compliant, single-column vector resume compiler with dynamic scoring.
2. **AI Cover Letter Generator** — Personalizable executive pitch generator with keywords injection.
3. **AI Email Writer** — Deep pitch generator supporting cold, followup, business, and negotiation tones.
4. **AI Bio Generator** — Personal branding compiler for LinkedIn, X (Twitter), Instagram, and TikTok.
5. **AI Caption Generator** — Social copywriter with custom hooks, tags, and automated emojis.
6. **AI Study Notes Generator** — Raw lecture or copy processor compiling structured sheets or interactive flashcard grids.
7. **AI Habit Tracker** — Real-time progress database tracking streaks and checklist checkoffs.
8. **AI PDF Utilities** — Simulated high-efficiency converter to compress, split, merge, or encrypt PDF nodes.
9. **Image Compressor** — Dynamic client-side Canvas pixel reducer allowing JPG, PNG, and WebP downloads.
10. **QR Code Generator** — Fully interactive canvas compiler generating vector-perfect scan grids for URLs, SSID profiles, or VCard contacts.
