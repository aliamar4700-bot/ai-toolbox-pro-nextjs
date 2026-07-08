"use client";

import React, { useState } from "react";
import { 
  Users, 
  BookOpen, 
  ShieldCheck, 
  TrendingUp, 
  Plus, 
  Trash2, 
  UserPlus, 
  Sliders, 
  BarChart,
  AlertTriangle
} from "lucide-react";
import { PlatformState, UserProfile, BlogPost } from "../app/types";

interface AdminPanelProps {
  state: PlatformState;
  onUpdateState: (newState: PlatformState) => void;
}

export default function AdminPanel({ state, onUpdateState }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<"users" | "blog" | "metrics">("metrics");
  const [alertMsg, setAlertMsg] = useState<string | null>(null);

  // Add User State Form
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    role: "user" as "user" | "admin",
    subscription: "free" as "free" | "pro"
  });

  // Add Blog State Form
  const [blogForm, setBlogForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Career Growth",
    readTime: "5 min",
    author: "AI Toolbox Pro Admin"
  });

  // Add User Handler
  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userForm.name || !userForm.email) return;

    const newUser: UserProfile = {
      uid: `usr-${Date.now()}`,
      displayName: userForm.name,
      email: userForm.email,
      role: userForm.role,
      subscription: userForm.subscription,
      createdAt: new Date().toISOString()
    };

    onUpdateState({
      ...state,
      users: [...state.users, newUser]
    });

    setUserForm({ name: "", email: "", role: "user", subscription: "free" });
    showToast("✓ Mock user created and successfully deployed to secure client-side registry!");
  };

  // Toggle User Plan Handler
  const handleTogglePlan = (uid: string) => {
    const updated = state.users.map(u => {
      if (u.uid === uid) {
        return { ...u, subscription: u.subscription === "pro" ? "free" : "pro" };
      }
      return u;
    });
    onUpdateState({ ...state, users: updated });
  };

  // Delete User Handler
  const handleDeleteUser = (uid: string) => {
    onUpdateState({
      ...state,
      users: state.users.filter(u => u.uid !== uid)
    });
  };

  // Add Blog Post Handler
  const handleAddBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogForm.title || !blogForm.content) return;

    const newPost: BlogPost = {
      id: `post-${Date.now()}`,
      title: blogForm.title,
      excerpt: blogForm.excerpt || blogForm.content.slice(0, 100) + "...",
      content: blogForm.content,
      category: blogForm.category,
      readTime: blogForm.readTime,
      author: blogForm.author,
      date: new Date().toISOString().split("T")[0],
      createdAt: new Date().toISOString()
    };

    onUpdateState({
      ...state,
      blogs: [newPost, ...state.blogs]
    });

    setBlogForm({
      title: "",
      excerpt: "",
      content: "",
      category: "Career Growth",
      readTime: "5 min",
      author: "AI Toolbox Pro Admin"
    });
    showToast("✓ Tactical SEO guide drafted and published successfully!");
  };

  // Delete Blog Post Handler
  const handleDeleteBlog = (postId: string) => {
    onUpdateState({
      ...state,
      blogs: state.blogs.filter(b => b.id !== postId)
    });
  };

  const showToast = (msg: string) => {
    setAlertMsg(msg);
    setTimeout(() => setAlertMsg(null), 4000);
  };

  return (
    <div className="space-y-8 pb-10">
      {/* 1. Admin Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-display font-bold text-3xl text-white flex items-center gap-2">
            <ShieldCheck className="h-7 w-7 text-brand-purple animate-pulse" />
            SaaS Platform Admin Control
          </h1>
          <p className="text-gray-400 text-xs">
            Simulate administrative control, manage mock user accounts, toggle subscriptions, and publish SEO career blog posts.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-brand-charcoal p-1 rounded-xl border border-white/5 font-mono text-[11px] uppercase font-bold text-gray-400">
          <button 
            onClick={() => setActiveTab("metrics")}
            className={`px-3.5 py-2 rounded-lg transition-all ${activeTab === "metrics" ? 'bg-brand-purple text-white' : 'hover:text-white'}`}
          >
            SaaS Metrics
          </button>
          <button 
            onClick={() => setActiveTab("users")}
            className={`px-3.5 py-2 rounded-lg transition-all ${activeTab === "users" ? 'bg-brand-purple text-white' : 'hover:text-white'}`}
          >
            Users ({state.users.length})
          </button>
          <button 
            onClick={() => setActiveTab("blog")}
            className={`px-3.5 py-2 rounded-lg transition-all ${activeTab === "blog" ? 'bg-brand-purple text-white' : 'hover:text-white'}`}
          >
            Blog ({state.blogs.length})
          </button>
        </div>
      </div>

      {/* Floating Status Toast */}
      {alertMsg && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-brand-neon-blue/15 border border-brand-neon-blue/40 text-brand-neon-blue text-xs font-semibold shadow-2xl animate-fade-in-up">
          {alertMsg}
        </div>
      )}

      {/* =========================================================================
          TAB 1: SaaS METRICS & REVENUE
         ========================================================================= */}
      {activeTab === "metrics" && (
        <div className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-panel rounded-2xl p-4 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] text-gray-500 font-mono tracking-wider">MOCK ACTIVE SESSIONS</p>
                <p className="text-2xl font-bold text-white font-display">1,482</p>
              </div>
              <div className="p-2.5 bg-brand-neon-blue/10 rounded-xl text-brand-neon-blue">
                <Users className="h-5 w-5" />
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-4 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] text-gray-500 font-mono tracking-wider">CONVERSION RATIO</p>
                <p className="text-2xl font-bold text-white font-display">4.2%</p>
              </div>
              <div className="p-2.5 bg-brand-purple/10 rounded-xl text-brand-purple">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-4 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] text-gray-500 font-mono tracking-wider">MONTHLY REVENUE</p>
                <p className="text-2xl font-bold text-white font-display">$28,190</p>
              </div>
              <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-500">
                <BarChart className="h-5 w-5" />
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-4 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] text-gray-500 font-mono tracking-wider">DATABASE STORAGE</p>
                <p className="text-2xl font-bold text-white font-display">12.4 GB</p>
              </div>
              <div className="p-2.5 bg-yellow-500/10 rounded-xl text-yellow-500">
                <Sliders className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 space-y-4">
            <h3 className="font-display font-bold text-base text-white">Administrative Warnings</h3>
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-xl text-xs flex gap-3 leading-relaxed">
              <AlertTriangle className="h-6 w-6 shrink-0 text-yellow-500" />
              <div className="space-y-1">
                <p className="font-semibold">Simulated Environment Active</p>
                <p className="text-gray-400">All modifications done inside this dashboard alter the local state variables temporarily stored in the browser cache. Production setups persist schemas securely inside Google Cloud SQL or Firebase Firestore databases.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: USER PROFILE ADMINISTRATION
         ========================================================================= */}
      {activeTab === "users" && (
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="glass-panel rounded-2xl p-5 space-y-4">
            <h3 className="font-display font-bold text-sm text-white flex items-center gap-1.5">
              <UserPlus className="h-4 w-4 text-brand-purple" />
              Deploy Mock Account
            </h3>
            <form onSubmit={handleAddUser} className="space-y-4 text-xs text-gray-300">
              <div className="space-y-1">
                <label className="text-gray-400">Full Display Name</label>
                <input 
                  type="text" 
                  value={userForm.name} 
                  onChange={(e) => setUserForm({...userForm, name: e.target.value})} 
                  placeholder="e.g., Aliza Fatima"
                  className="w-full p-2.5 bg-brand-black border border-white/5 rounded-xl text-white focus:border-brand-neon-blue focus:outline-none"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  value={userForm.email} 
                  onChange={(e) => setUserForm({...userForm, email: e.target.value})} 
                  placeholder="aliza@example.com"
                  className="w-full p-2.5 bg-brand-black border border-white/5 rounded-xl text-white focus:border-brand-neon-blue focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-gray-400">Security Role</label>
                  <select 
                    value={userForm.role} 
                    onChange={(e) => setUserForm({...userForm, role: e.target.value as any})}
                    className="w-full p-2.5 bg-brand-black border border-white/5 rounded-xl text-white focus:border-brand-neon-blue focus:outline-none"
                  >
                    <option value="user">Standard User</option>
                    <option value="admin">Administrator</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-gray-400">Subscription Plan</label>
                  <select 
                    value={userForm.subscription} 
                    onChange={(e) => setUserForm({...userForm, subscription: e.target.value as any})}
                    className="w-full p-2.5 bg-brand-black border border-white/5 rounded-xl text-white focus:border-brand-neon-blue focus:outline-none"
                  >
                    <option value="free">Free Tier</option>
                    <option value="pro">Pro Member</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-2.5 bg-brand-neon-blue text-brand-black font-bold rounded-xl flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
              >
                <Plus className="h-4 w-4" /> Deploy Mock Account
              </button>
            </form>
          </div>

          <div className="glass-panel rounded-2xl p-5 md:col-span-2 space-y-4">
            <h3 className="font-display font-bold text-sm text-white">Registered Workspace Users</h3>
            <div className="space-y-3.5 text-xs">
              {state.users.map((usr) => (
                <div 
                  key={usr.uid} 
                  className="p-3.5 bg-brand-black border border-white/5 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-sm">{usr.displayName}</span>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-mono tracking-wide uppercase font-bold ${usr.role === 'admin' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-brand-neon-blue/10 text-brand-neon-blue border border-brand-neon-blue/20'}`}>
                        {usr.role}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-500 font-mono font-medium">Email: {usr.email} • Created: {new Date(usr.createdAt).toLocaleDateString()}</p>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto font-mono text-[10px]">
                    <button 
                      onClick={() => handleTogglePlan(usr.uid!)}
                      className={`h-7 px-3 rounded-lg border transition-all ${usr.subscription === 'pro' ? 'bg-brand-purple/20 border-brand-purple/40 text-brand-purple font-bold' : 'bg-brand-graphite border-white/5 text-gray-400'}`}
                    >
                      Plan: {usr.subscription.toUpperCase()}
                    </button>
                    
                    <button 
                      onClick={() => handleDeleteUser(usr.uid)}
                      className="p-1.5 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                      title="Revoke access"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 3: SEO BLOG MANAGEMENT
         ========================================================================= */}
      {activeTab === "blog" && (
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="glass-panel rounded-2xl p-5 space-y-4">
            <h3 className="font-display font-bold text-sm text-white flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-brand-purple" />
              Compose SEO Post
            </h3>
            <form onSubmit={handleAddBlog} className="space-y-4 text-xs text-gray-300">
              <div className="space-y-1">
                <label className="text-gray-400">Article Title</label>
                <input 
                  type="text" 
                  value={blogForm.title} 
                  onChange={(e) => setBlogForm({...blogForm, title: e.target.value})} 
                  placeholder="e.g., How to Bypass ATS Scanners Natively"
                  className="w-full p-2.5 bg-brand-black border border-white/5 rounded-xl text-white focus:border-brand-neon-blue focus:outline-none"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-gray-400">SEO Meta Description Excerpt</label>
                <input 
                  type="text" 
                  value={blogForm.excerpt} 
                  onChange={(e) => setBlogForm({...blogForm, excerpt: e.target.value})} 
                  placeholder="Summary for search result snippet"
                  className="w-full p-2.5 bg-brand-black border border-white/5 rounded-xl text-white focus:border-brand-neon-blue focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-gray-400">Category</label>
                  <select 
                    value={blogForm.category} 
                    onChange={(e) => setBlogForm({...blogForm, category: e.target.value})}
                    className="w-full p-2.5 bg-brand-black border border-white/5 rounded-xl text-white focus:border-brand-neon-blue focus:outline-none"
                  >
                    <option value="Career Growth">Career Growth</option>
                    <option value="PDF Hacks">PDF Hacks</option>
                    <option value="Image Compression">Image Compression</option>
                    <option value="SEO Secrets">SEO Secrets</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-gray-400">Est. Read Time</label>
                  <input 
                    type="text" 
                    value={blogForm.readTime} 
                    onChange={(e) => setBlogForm({...blogForm, readTime: e.target.value})} 
                    className="w-full p-2.5 bg-brand-black border border-white/5 rounded-xl text-white focus:border-brand-neon-blue focus:outline-none font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-gray-400">Article Markdown Content</label>
                <textarea 
                  rows={6} 
                  value={blogForm.content} 
                  onChange={(e) => setBlogForm({...blogForm, content: e.target.value})} 
                  placeholder="Draft full article paragraphs..."
                  className="w-full p-2.5 bg-brand-black border border-white/5 rounded-xl text-white focus:border-brand-neon-blue focus:outline-none font-sans"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-2.5 bg-brand-neon-blue text-brand-black font-bold rounded-xl flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
              >
                <Plus className="h-4 w-4" /> Publish Blog Post
              </button>
            </form>
          </div>

          <div className="glass-panel rounded-2xl p-5 md:col-span-2 space-y-4">
            <h3 className="font-display font-bold text-sm text-white">Live Blog Publications</h3>
            <div className="space-y-3.5 text-xs">
              {state.blogs.map((post) => (
                <div 
                  key={post.id} 
                  className="p-4 bg-brand-black border border-white/5 rounded-xl flex justify-between items-start gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-sm truncate max-w-sm">{post.title}</span>
                      <span className="px-2 py-0.5 rounded bg-brand-neon-blue/10 text-brand-neon-blue border border-brand-neon-blue/20 text-[9px] font-mono tracking-wide uppercase font-bold">
                        {post.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs line-clamp-1">{post.excerpt}</p>
                    <p className="text-[10px] text-gray-500 font-mono">By {post.author} • {post.readTime} • {new Date(post.createdAt || '').toLocaleDateString()}</p>
                  </div>

                  <button 
                    onClick={() => handleDeleteBlog(post.id)}
                    className="p-1.5 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors shrink-0"
                    title="Remove post"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
