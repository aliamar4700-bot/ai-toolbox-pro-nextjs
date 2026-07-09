import { PlatformState, BlogPost, UserProfile, SavedFile, Habit } from "../app/types";

const DEFAULT_USERS: UserProfile[] = [
  {
    id: "admin-1",
    name: "Alex Sterling (Admin)",
    email: "iftikharaliattari05@gmail.com",
    role: "admin",
    createdAt: "2026-01-15T10:00:00Z"
  },
  {
    id: "user-1",
    name: "Iftikhar Ali",
    email: "user@aitoolbox.pro",
    role: "user",
    createdAt: "2026-03-22T14:30:00Z"
  }
];

const DEFAULT_BLOGS: BlogPost[] = [
  {
    id: "blog-1",
    title: "How to Build an ATS-Friendly Resume in 2026",
    slug: "how-to-build-ats-friendly-resume",
    category: "Career Planning",
    author: "Alex Sterling",
    date: "2026-06-28",
    readTime: "5 min",
    excerpt: "Learn how Applicant Tracking Systems filter resumes and the specific AI optimization strategies to beat the filters.",
    content: `Applicant Tracking Systems (ATS) are used by over 98% of Fortune 500 companies. If your resume is not formatted correctly, it might never reach human hands.

Here is a comprehensive guide to mastering ATS filters with AI:

### 1. Keyword Optimization
Analyze the target job description. Identify recurring key phrases (such as "cross-functional coordination", "TypeScript development", or "revenue cycle optimization"). The AI Resume Builder automatically cross-references these keywords with your skillsets to build a rich match.

### 2. Layout Rules
- **No Text Boxes**: ATS systems often fail to extract text from layout containers.
- **Clean Fonts**: Stick to standard system typography like Inter or Arial.
- **Standard Headings**: Use distinct terms like "Professional Experience" instead of "Where I've Been".

Our built-in templates are carefully pre-optimized to meet these criteria, producing pristine ATS scores.`,
    tags: ["ATS", "Resume Tips", "Career", "AI Tool"],
    comments: [
      { id: "c-1", author: "Sarah Jenkins", text: "Extremely helpful guide. Using your ATS optimizer improved my response rate instantly!", date: "2026-06-29" }
    ]
  },
  {
    id: "blog-2",
    title: "The Art of Writing Cold Business Emails with Higher Response Rates",
    slug: "art-of-writing-cold-business-emails",
    category: "AI Copywriting",
    author: "Diana Prince",
    date: "2026-07-02",
    readTime: "4 min",
    excerpt: "Stop sending generic cold emails. Discover the triple-hook framework for getting immediate, positive feedback.",
    content: `Writing a cold email that gets a response requires personalization, value positioning, and brevity. 

### The Triple-Hook Framework
1. **The Context Hook**: State why you are reaching out *right now* (e.g., 'Loved your team's launch of X').
2. **The Value Hook**: Identify a single point of friction they might experience, and offer a specific 1-sentence solution.
3. **The Frictionless CTA**: Never ask for a 30-minute call. Ask a low-friction question: 'Do you have 2 minutes to check if this is relevant?'

Using our AI Email Writer makes implementing this formula instant, tailoring tone to professional or cold-prospecting with ease.`,
    tags: ["Email", "Sales", "AI Copywriting", "SaaS"],
    comments: []
  },
  {
    id: "blog-3",
    title: "Understanding PDF Optimization: Compression and Security",
    slug: "understanding-pdf-optimization-compression-security",
    category: "SaaS Utilities",
    author: "Nate Stone",
    date: "2026-07-04",
    readTime: "3 min",
    excerpt: "Keep your official documents light and highly protected. Learn about PDF layers, downsampling, and cryptographic signatures.",
    content: `When handling files for public proposals or hiring boards, file management can determine whether your application is rejected due to size limits.

### PDF Optimization Strategies
- **Vector Retention**: Keep text as actual SVG vector layers rather than rasterized pixels to maintain infinite crisp zoom levels.
- **Image Downsampling**: Safely shrink embedded illustrations to 150 DPI.
- **Crypto Protection**: Add strong password-backed permissions, keeping sensitive documents inaccessible to scrapers.

Our built-in PDF Tools handle all of these conversions locally, protecting your files while minimizing transfer times.`,
    tags: ["PDF", "Security", "Compression", "SaaS Tools"],
    comments: []
  }
];

const DEFAULT_HABITS: Habit[] = [
  {
    id: "habit-1",
    title: "Code for 1 hour",
    frequency: "daily",
    status: {
      "2026-07-02": true,
      "2026-07-03": true,
      "2026-07-04": true
    },
    streak: 3,
    createdAt: "2026-07-01T08:00:00Z"
  },
  {
    id: "habit-2",
    title: "Read professional blog",
    frequency: "daily",
    status: {
      "2026-07-03": true,
      "2026-07-04": true
    },
    streak: 2,
    createdAt: "2026-07-01T08:30:00Z"
  }
];

const INITIAL_STATE: PlatformState = {
  users: DEFAULT_USERS,
  currentUser: DEFAULT_USERS[0], // Defaults to admin Alex Sterling for full dashboard view
  savedFiles: [
    {
      id: "file-1",
      title: "Senior Developer Resume",
      toolType: "AI Resume Builder",
      content: JSON.stringify({
        name: "Iftikhar Ali",
        email: "iftikharaliattari05@gmail.com",
        phone: "+1 234 567 890",
        summary: "Highly skilled Full Stack Developer with 5+ years of experience constructing premium SaaS workspaces using React, Tailwind CSS, and Node.js. Optimized core engines, reduced latencies by 40%, and managed critical cloud deployments.",
        experience: "Lead Frontend Engineer at DevCorp (2023 - Present)\n- Built modular dashboard interfaces in React and TS.\n- Led migration of legacy rendering engines to modern Vite pipelines.\n\nSoftware Developer at WebCrafters (2021 - 2023)\n- Integrated microservices and third-party APIs.",
        skills: "React, TypeScript, Node.js, Express, Tailwind CSS, Firestore, Firebase Auth, esbuild, REST APIs"
      }),
      createdAt: "2026-07-04T12:00:00Z",
      format: "PDF"
    }
  ],
  activities: [
    { id: "act-1", action: "Resume Generated", details: "Created Senior Developer Resume using Classic Modern template", timestamp: "2026-07-04T12:00:00Z" },
    { id: "act-2", action: "QR Code Generated", details: "WiFi Config QR code compiled and exported in PNG format", timestamp: "2026-07-04T11:20:00Z" }
  ],
  downloads: [
    { id: "dl-1", filename: "Senior_Developer_Resume.pdf", format: "PDF", timestamp: "2026-07-04T12:01:00Z", toolType: "AI Resume Builder" }
  ],
  habits: DEFAULT_HABITS,
  blogs: DEFAULT_BLOGS,
  favorites: ["tool-resume", "tool-pdf", "tool-qr"],
  messages: [
    { id: "msg-1", name: "David Miller", email: "david@example.com", message: "Hi! This platform is incredibly polished. Do you offer enterprise rates?", date: "2026-07-04T09:15:00Z" }
  ],
  newsletterSubscribers: [
    { email: "user@aitoolbox.pro", subscribedAt: "2026-07-04T14:00:00Z" }
  ],
  usageCount: {
    "tool-resume": 14,
    "tool-pdf": 42,
    "tool-compress": 29,
    "tool-qr": 51,
    "tool-email": 18
  }
};

const STORAGE_KEY = "aitoolbox_state";

export function loadState(): PlatformState {
  if (typeof window === "undefined") return INITIAL_STATE;
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    if (!serialized) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_STATE));
      return INITIAL_STATE;
    }
    const parsed = JSON.parse(serialized);
    // Backward compatibility merge
    return { ...INITIAL_STATE, ...parsed };
  } catch (error) {
    console.error("Failed to load local storage state:", error);
    return INITIAL_STATE;
  }
}

export function saveState(state: PlatformState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save state to local storage:", error);
  }
}
