export interface UserProfile {
  id?: string;
  name?: string;
  email: string;
  role: "admin" | "user";
  subscription?: "free" | "pro" | string;
  uid?: string; // Support either id or uid (firebase standard)
  displayName?: string; // Support either name or displayName
  createdAt: string;
}

export interface SavedFile {
  id: string;
  title: string;
  toolType: string;
  content: string;
  createdAt: string;
  format: string;
  meta?: any; // any extra data
}

export interface RecentActivity {
  id: string;
  action: string;
  details: string;
  timestamp: string;
}

export interface DownloadHistory {
  id: string;
  filename: string;
  format: string;
  timestamp: string;
  toolType: string;
}

export interface Habit {
  id: string;
  title: string;
  frequency: "daily" | "weekly";
  status: { [date: string]: boolean }; // e.g. { "2026-07-04": true }
  streak: number;
  createdAt: string;
}

export interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags?: string[];
  comments?: Comment[];
  createdAt?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}

export interface NewsletterSubscriber {
  email: string;
  subscribedAt: string;
}

export interface PlatformState {
  users: UserProfile[];
  currentUser: UserProfile | null;
  savedFiles: SavedFile[];
  activities: RecentActivity[];
  downloads: DownloadHistory[];
  habits: Habit[];
  blogs: BlogPost[];
  favorites: string[]; // tool IDs
  messages: ContactMessage[];
  newsletterSubscribers: NewsletterSubscriber[];
  usageCount: { [toolId: string]: number };
}
