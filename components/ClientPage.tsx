"use client";

import React, { useState, useEffect } from "react";
import { 
  Search, 
  Calendar,
  X,
  Play,
  Wrench
} from "lucide-react";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("./Sidebar"), {
  ssr: false,
});

const Homepage = dynamic(() => import("./Homepage"), {
  loading: () => <div className="h-48 flex items-center justify-center font-mono text-xs text-brand-neon-blue">LOADING HOMEPAGE...</div>,
  ssr: false,
});
const Dashboard = dynamic(() => import("./Dashboard"), {
  loading: () => <div className="h-48 flex items-center justify-center font-mono text-xs text-brand-neon-blue">LOADING DASHBOARD...</div>,
  ssr: false,
});
const AiTools = dynamic(() => import("./AiTools"), {
  loading: () => <div className="h-48 flex items-center justify-center font-mono text-xs text-brand-neon-blue">LOADING WORKSPACE UTILITIES...</div>,
  ssr: false,
});
const Blog = dynamic(() => import("./Blog"), {
  loading: () => <div className="h-48 flex items-center justify-center font-mono text-xs text-brand-neon-blue">LOADING ARTICLES...</div>,
  ssr: false,
});
const AdminPanel = dynamic(() => import("./AdminPanel"), {
  loading: () => <div className="h-48 flex items-center justify-center font-mono text-xs text-brand-neon-blue">LOADING ADMIN PLATFORM...</div>,
  ssr: false,
});
const SettingsAndAuth = dynamic(() => import("./SettingsAndAuth"), {
  loading: () => <div className="h-48 flex items-center justify-center font-mono text-xs text-brand-neon-blue">LOADING ACCOUNT CONFIGURATION...</div>,
  ssr: false,
});
const ContactUs = dynamic(() => import("./ContactUs"), {
  loading: () => <div className="h-48 flex items-center justify-center font-mono text-xs text-brand-neon-blue">LOADING CONTACT PORTAL...</div>,
  ssr: false,
});
const PrivacyPolicy = dynamic(() => import("./PrivacyPolicy"), {
  loading: () => <div className="h-48 flex items-center justify-center font-mono text-xs text-brand-neon-blue">LOADING PRIVACY DOCUMENT...</div>,
  ssr: false,
});
const TermsAndConditions = dynamic(() => import("./TermsAndConditions"), {
  loading: () => <div className="h-48 flex items-center justify-center font-mono text-xs text-brand-neon-blue">LOADING AGREEMENT COMPLIANCE...</div>,
  ssr: false,
});
const FAQPage = dynamic(() => import("./FAQPage"), {
  loading: () => <div className="h-48 flex items-center justify-center font-mono text-xs text-brand-neon-blue">LOADING HELP DESK...</div>,
  ssr: false,
});
const AboutUs = dynamic(() => import("./AboutUs"), {
  loading: () => <div className="h-48 flex items-center justify-center font-mono text-xs text-brand-neon-blue">LOADING SAAS VISION...</div>,
  ssr: false,
});
import { loadState, saveState } from "../utils/stateManager";
import { PlatformState, UserProfile, BlogPost } from "../app/types";

const ALL_TOOLS = [
  { id: "tool-resume", name: "AI Resume Builder", desc: "Build tailored, ATS-compliant professional resumes using AI optimizations." },
  { id: "tool-cover", name: "AI Cover Letter Generator", desc: "Write tailored executive-level cover letters." },
  { id: "tool-email", name: "AI Email Writer", desc: "Draft high-response cold emails, followups, and business responses." },
  { id: "tool-bio", name: "AI Bio Generator", desc: "Write premium social platform professional bios." },
  { id: "tool-caption", name: "AI Caption Generator", desc: "Write catchy social captions with emojis and tags." },
  { id: "tool-notes", name: "AI Study Notes Generator", desc: "Analyze raw educational text into formatted summary sheets." },
  { id: "tool-habit", name: "AI Habit Tracker", desc: "Create, track daily checklist habits with streak counts." },
  { id: "tool-pdf", name: "AI PDF Utilities", desc: "Merge, protect, encrypt, compress, and convert PDF documents." },
  { id: "tool-compress", name: "Image Compressor", desc: "Resize and compress PNG/JPG/WebP files." },
  { id: "tool-qr", name: "QR Code Generator", desc: "Compile scannable vector-perfect QR codes for URLs, WiFi, WiFi configurations, or business cards." },
  { id: "tool-qr-scan", name: "QR Code Scanner", desc: "Scan, parse, and instantly decode any QR code image with detailed format breakdown." }
];

export default function App() {
  const [state, setState] = useState<PlatformState | null>(null);
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path === "/contact" || path === "/contact/") return "contact";
      if (window.location.hash === "#contact") return "contact";
      if (path === "/privacy-policy" || path === "/privacy-policy/") return "privacy-policy";
      if (window.location.hash === "#privacy-policy") return "privacy-policy";
      if (path === "/terms-and-conditions" || path === "/terms-and-conditions/") return "terms-and-conditions";
      if (window.location.hash === "#terms-and-conditions") return "terms-and-conditions";
      if (path === "/faq" || path === "/faq/") return "faq";
      if (window.location.hash === "#faq") return "faq";
      if (path === "/about-us" || path === "/about-us/") return "about-us";
      if (window.location.hash === "#about-us") return "about-us";
    }
    return "homepage";
  });
  const [activeToolId, setActiveToolId] = useState<string>("tool-resume");
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Global Search
  const [globalSearch, setGlobalSearch] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Synchronize router location with activeTab state
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      if (activeTab === "contact") {
        if (currentPath !== "/contact") {
          window.history.pushState({ tab: "contact" }, "", "/contact");
        }
      } else if (activeTab === "privacy-policy") {
        if (currentPath !== "/privacy-policy") {
          window.history.pushState({ tab: "privacy-policy" }, "", "/privacy-policy");
        }
      } else if (activeTab === "terms-and-conditions") {
        if (currentPath !== "/terms-and-conditions") {
          window.history.pushState({ tab: "terms-and-conditions" }, "", "/terms-and-conditions");
        }
      } else if (activeTab === "homepage") {
        if (currentPath !== "/" && currentPath !== "") {
          window.history.pushState({ tab: "homepage" }, "", "/");
        }
      } else {
        const expectedPath = `/${activeTab}`;
        if (currentPath !== expectedPath) {
          window.history.pushState({ tab: activeTab }, "", expectedPath);
        }
      }
    }
  }, [activeTab]);

  // Support browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      if (typeof window !== "undefined") {
        const path = window.location.pathname;
        if (path === "/contact" || path === "/contact/") {
          setActiveTab("contact");
        } else if (path === "/privacy-policy" || path === "/privacy-policy/") {
          setActiveTab("privacy-policy");
        } else if (path === "/terms-and-conditions" || path === "/terms-and-conditions/") {
          setActiveTab("terms-and-conditions");
        } else if (path === "/faq" || path === "/faq/") {
          setActiveTab("faq");
        } else if (path === "/about-us" || path === "/about-us/") {
          setActiveTab("about-us");
        } else if (path === "/" || path === "") {
          setActiveTab("homepage");
        } else {
          const tab = path.replace("/", "");
          setActiveTab(tab);
        }
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Initial load inside browser environment
  useEffect(() => {
    setState(loadState());
  }, []);

  // Save state on any alteration
  useEffect(() => {
    if (state) {
      saveState(state);
    }
  }, [state]);

  if (!state) {
    return (
      <div className="flex h-screen w-screen bg-brand-black items-center justify-center font-mono text-xs text-brand-neon-blue">
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin h-5 w-5 border-2 border-brand-neon-blue border-t-transparent rounded-full" />
          <span>INITIALIZING SECURE SAAS WORKSPACE...</span>
        </div>
      </div>
    );
  }

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 4000);
  };

  const handleUpdateState = (newState: PlatformState) => {
    setState(newState);
  };

  // Demo user role toggling
  const handleSwitchUserRole = () => {
    if (!state.currentUser) return;
    const newRole = state.currentUser.role === "admin" ? "user" : "admin";
    const updatedUser: UserProfile = {
      ...state.currentUser,
      role: newRole,
      name: state.currentUser.name || state.currentUser.displayName || "Alex Sterling",
      displayName: state.currentUser.displayName || state.currentUser.name || "Alex Sterling"
    };

    const updatedUsers = state.users.map(u => u.uid === state.currentUser?.uid ? updatedUser : u);
    
    // Add activity log
    const newActivity = {
      id: `act-${Date.now()}`,
      action: "Role Switcher",
      details: `Switched active account credentials to ${newRole.toUpperCase()}`,
      timestamp: new Date().toISOString()
    };

    setState(prev => {
      if (!prev) return null;
      return {
        ...prev,
        currentUser: updatedUser,
        users: updatedUsers,
        activities: [newActivity, ...prev.activities]
      };
    });

    showToast(`✓ Switched role to ${newRole.toUpperCase()}`);
  };

  // Logout handler
  const handleLogout = () => {
    const defaultUser = state.users[1] || state.users[0];
    setState({
      ...state,
      currentUser: defaultUser
    });
    showToast(`Logged out. Active session: ${defaultUser.displayName || defaultUser.name}.`);
    setActiveTab("settings");
  };

  const handleLogin = (user: UserProfile) => {
    setState({
      ...state,
      currentUser: user
    });
    setActiveTab("dashboard");
    showToast(`Welcome back, ${user.displayName || user.name}!`);
  };

  // File Delete Handler
  const handleDeleteFile = (fileId: string) => {
    const updatedFiles = state.savedFiles.filter(f => f.id !== fileId);
    setState({
      ...state,
      savedFiles: updatedFiles,
      activities: [
        {
          id: `act-${Date.now()}`,
          action: "File Deleted",
          details: `Successfully removed saved document entry: ${fileId}`,
          timestamp: new Date().toISOString()
        },
        ...state.activities
      ]
    });
    showToast("✓ File deleted successfully!");
  };

  // Search Results
  const matchedTools = ALL_TOOLS.filter(tool => 
    tool.name.toLowerCase().includes(globalSearch.toLowerCase()) ||
    tool.desc.toLowerCase().includes(globalSearch.toLowerCase())
  );

  const handleLaunchTool = (toolId: string) => {
    setActiveToolId(toolId);
    setActiveTab("tools");
    setGlobalSearch("");
    setShowSearchResults(false);
  };

  return (
    <div className="flex h-screen w-screen bg-brand-black text-white overflow-hidden font-sans">
      
      {/* 1. Responsive Sidebar Navigation */}
      <Sidebar 
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab !== "blog") setSelectedBlogPost(null);
        }}
        currentUser={state.currentUser}
        onSwitchUser={handleSwitchUserRole}
        onLogout={handleLogout}
      />

      {/* Floating Status Toast */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-brand-neon-blue/15 border border-brand-neon-blue/40 text-brand-neon-blue text-xs font-semibold shadow-2xl animate-fade-in-up">
          {toastMsg}
        </div>
      )}

      {/* 2. Main Area Container */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Header Ribbon / Toolbar */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-6 sm:px-8 shrink-0 bg-brand-black/40 backdrop-blur-md z-10">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-500" />
              <input 
                type="text"
                value={globalSearch}
                onChange={(e) => {
                  setGlobalSearch(e.target.value);
                  setShowSearchResults(e.target.value.length > 0);
                }}
                onFocus={() => {
                  if (globalSearch.length > 0) setShowSearchResults(true);
                }}
                placeholder="Global Search (e.g. Resume, Compressor, QR...)"
                className="w-full bg-brand-charcoal text-white text-xs pl-11 pr-10 py-3 rounded-xl border border-white/5 focus:outline-none focus:border-brand-neon-blue focus:ring-1 focus:ring-brand-neon-blue/20 transition-all font-mono"
              />
              {globalSearch && (
                <button 
                  onClick={() => {
                    setGlobalSearch("");
                    setShowSearchResults(false);
                  }}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 hover:text-white text-gray-500 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              )}

              {/* Global search dropdown results */}
              {showSearchResults && (
                <div className="absolute top-14 left-0 right-0 bg-brand-charcoal border border-white/10 rounded-2xl shadow-2xl p-4 space-y-2 z-50 max-h-80 overflow-y-auto">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <p className="text-[10px] text-gray-500 font-mono tracking-wider uppercase font-bold">MATCHED WORKSPACE TOOLS ({matchedTools.length})</p>
                    <button onClick={() => setShowSearchResults(false)} className="text-[10px] text-brand-neon-blue hover:underline cursor-pointer">Close</button>
                  </div>
                  {matchedTools.length === 0 ? (
                    <p className="text-gray-500 text-xs py-4 text-center">No workspace tools match your current query.</p>
                  ) : (
                    matchedTools.map(tool => (
                      <button
                        key={tool.id}
                        onClick={() => handleLaunchTool(tool.id)}
                        className="w-full text-left p-3 rounded-xl bg-brand-black/40 hover:bg-white/5 border border-white/5 hover:border-brand-neon-blue/20 flex items-center justify-between group transition-all cursor-pointer"
                      >
                        <div className="space-y-0.5">
                          <p className="text-xs font-bold text-white group-hover:text-brand-neon-blue transition-colors">{tool.name}</p>
                          <p className="text-[10px] text-gray-500 line-clamp-1">{tool.desc}</p>
                        </div>
                        <Play className="h-3.5 w-3.5 text-brand-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 ml-4">
            {/* Quick date display */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-brand-charcoal border border-white/5 rounded-xl font-mono text-[10px] text-gray-400">
              <Calendar className="h-3.5 w-3.5 text-brand-purple" />
              <span>{new Date().toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</span>
            </div>

            {/* Subscription status pill */}
            <div className="px-3.5 py-1.5 bg-brand-charcoal border border-white/5 rounded-xl flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold text-gray-300">
              <span className="h-2 w-2 rounded-full bg-brand-neon-blue animate-pulse" />
              <span>Plan: <span className="text-brand-neon-blue font-bold">{state.currentUser?.subscription || "Free"}</span></span>
            </div>
          </div>
        </header>

        {/* 3. Render View Panel with scroll boundaries */}
        <main className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 relative">
          
          {/* Homepage View */}
          {activeTab === "homepage" && (
            <Homepage 
              onStartFree={() => setActiveTab("dashboard")}
              onExploreTools={() => {
                setActiveTab("tools");
                setActiveToolId("tool-resume");
              }}
              blogPosts={state.blogs}
              onSelectBlogPost={(post) => {
                setSelectedBlogPost(post);
                setActiveTab("blog");
              }}
              onContactUs={() => setActiveTab("contact")}
              onPrivacyPolicy={() => setActiveTab("privacy-policy")}
              onTermsAndConditions={() => setActiveTab("terms-and-conditions")}
              onFAQ={() => setActiveTab("faq")}
              onAboutUs={() => setActiveTab("about-us")}
            />
          )}

          {/* User Dashboard */}
          {activeTab === "dashboard" && (
            <Dashboard 
              state={state}
              onSelectTool={handleLaunchTool}
              onDeleteFile={handleDeleteFile}
              onUpdateState={handleUpdateState}
            />
          )}

          {/* AI Tools Workspace Sub-Routing */}
          {activeTab === "tools" && (
            <div className="grid lg:grid-cols-4 gap-8 items-start">
              
              {/* Sidebar tool selector switcher (Internal tab grid) */}
              <div className="lg:col-span-1 glass-panel rounded-2xl p-4 space-y-3.5">
                <div className="pb-2 border-b border-white/5">
                  <h3 className="font-display font-extrabold text-xs text-white uppercase tracking-wider">WORKSPACE UTILITIES</h3>
                </div>
                <div className="space-y-1 text-xs">
                  {ALL_TOOLS.map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => {
                        setActiveToolId(tool.id);
                        window.scrollTo(0,0);
                      }}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl font-semibold transition-all flex items-center justify-between group cursor-pointer ${activeToolId === tool.id ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/10' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                    >
                      <span className="truncate">{tool.name}</span>
                      <Wrench className={`h-3.5 w-3.5 shrink-0 ml-1 opacity-0 group-hover:opacity-100 transition-opacity ${activeToolId === tool.id ? 'text-white opacity-100' : 'text-brand-neon-blue'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Tool Canvas Operative Panel */}
              <div className="lg:col-span-3">
                <AiTools 
                  state={state}
                  activeToolId={activeToolId}
                  onUpdateState={handleUpdateState}
                  onSelectTool={handleLaunchTool}
                />
              </div>
            </div>
          )}

          {/* SEO Blog Portal */}
          {activeTab === "blog" && (
            <Blog 
              blogPosts={state.blogs}
              selectedBlogPost={selectedBlogPost}
              onSelectPost={(post) => setSelectedBlogPost(post)}
              onSearch={() => {}}
            />
          )}

          {/* SaaS Administrative Panel */}
          {activeTab === "admin" && state.currentUser?.role === "admin" && (
            <AdminPanel 
              state={state}
              onUpdateState={handleUpdateState}
            />
          )}

          {/* Account and Interface settings */}
          {activeTab === "settings" && (
            <SettingsAndAuth 
              state={state}
              onUpdateState={handleUpdateState}
              onLogin={handleLogin}
              onLogout={handleLogout}
            />
          )}

          {/* Contact Support Portal */}
          {activeTab === "contact" && (
            <ContactUs 
              state={state}
              onUpdateState={handleUpdateState}
            />
          )}

          {/* Privacy Policy Portal */}
          {activeTab === "privacy-policy" && (
            <PrivacyPolicy 
              onBackToHome={() => setActiveTab("homepage")}
            />
          )}

          {/* Terms and Conditions Portal */}
          {activeTab === "terms-and-conditions" && (
            <TermsAndConditions 
              onBackToHome={() => setActiveTab("homepage")}
            />
          )}

          {/* Frequently Asked Questions Portal */}
          {activeTab === "faq" && (
            <FAQPage 
              onBackToHome={() => setActiveTab("homepage")}
            />
          )}

          {/* About Us Portal */}
          {activeTab === "about-us" && (
            <AboutUs 
              onBackToHome={() => setActiveTab("homepage")}
            />
          )}

        </main>
      </div>
    </div>
  );
}
