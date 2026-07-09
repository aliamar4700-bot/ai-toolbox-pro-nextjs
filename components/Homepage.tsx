"use client";

import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  Wrench, 
  CheckCircle, 
  Layers, 
  Zap, 
  Shield, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Mail, 
  Star,
  FileText,
  Lock,
  Flame,
  Clock,
  ExternalLink,
  Cpu
} from "lucide-react";
import { BlogPost } from "../app/types";
import AdSensePlaceholder from "./AdSensePlaceholder";

interface HomepageProps {
  onStartFree: () => void;
  onExploreTools: () => void;
  onSelectBlogPost: (blog: BlogPost) => void;
  blogPosts: BlogPost[];
  onContactUs: () => void;
  onPrivacyPolicy: () => void;
  onTermsAndConditions: () => void;
  onFAQ: () => void;
  onAboutUs: () => void;
}

export default function Homepage({ 
  onStartFree, 
  onExploreTools, 
  onSelectBlogPost,
  blogPosts,
  onContactUs,
  onPrivacyPolicy,
  onTermsAndConditions,
  onFAQ,
  onAboutUs
}: HomepageProps) {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [emailSub, setEmailSub] = React.useState("");
  const [subSuccess, setSubSuccess] = React.useState(false);

  const categories = [
    { name: "Document Design", count: "3 tools", icon: Layers, desc: "ATS-friendly resumes, bio, notes" },
    { name: "Writing Assistants", count: "3 tools", icon: Sparkles, desc: "Professional emails, social captions" },
    { name: "Utility Toolbox", count: "4 tools", icon: Wrench, desc: "PDF tools, compress, habits, QR codes" }
  ];

  const popularTools = [
    { 
      id: "tool-resume", 
      name: "AI Resume Builder", 
      category: "Document Design", 
      rating: "4.9", 
      usage: "12.4k users", 
      desc: "Create ATS-friendly resumes in seconds using AI.",
      icon: FileText,
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      glowColor: "hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
    },
    { 
      id: "tool-pdf", 
      name: "AI PDF Utilities", 
      category: "Utility Toolbox", 
      rating: "4.8", 
      usage: "10.1k users", 
      desc: "Protect, split, encrypt, or compress PDF documents instantly.",
      icon: Lock,
      iconColor: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      glowColor: "hover:border-orange-500/40 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]"
    },
    { 
      id: "tool-email", 
      name: "AI Email Writer", 
      category: "Writing Assistants", 
      rating: "4.9", 
      usage: "9.2k users", 
      desc: "Write professional emails with AI assistance.",
      icon: Mail,
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      glowColor: "hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
    }
  ];

  const features = [
    { title: "100% Free & Open Access", desc: "No subscriptions, signups, or payment fields. Every AI micro-tool is unlocked and operates with unlimited daily runs directly in your browser.", icon: Shield },
    { title: "Ultra-Fast Processing", desc: "Built on high-performance infrastructure ensuring file compression and text responses within milliseconds.", icon: Zap },
    { title: "Export Anywhere", desc: "Export to professional PDF, Word DOCX, text files, CSV databases, or vector images seamlessly depending on your workflow.", icon: Download },
    { title: "Next-Gen AI Core", desc: "Powered by Gemini 3.5 Flash for highly contextualized, professional text responses aligned to modern hiring or marketing practices.", icon: Cpu }
  ];

  const faqs = [
    { q: "Is AI Toolbox free to use?", a: "Yes, 100%! AI Toolbox has been fully transitioned to a completely free-to-use platform. There are no daily credits, signup walls, or hidden payment links. All 10 advanced tools are ready for unlimited use." },
    { q: "How secure is my personal uploaded data?", a: "Your files are processed with extreme privacy in mind. We do not store your PDFs, images, or resume data. Data is processed locally or via secure proxy servers, encrypted using standard HTTPS protocols." },
    { q: "Are the generated resumes ATS friendly?", a: "Absolutely. Our resumes are modeled around strict guidelines requested by modern Applicant Tracking Systems. They utilize single-column flows, standard headings, clean typography, and zero isolated text boxes." },
    { q: "How is the free platform supported?", a: "AI Toolbox is supported through non-intrusive Google AdSense advertising. These premium placements help cover the computational fees for our AI backend servers while ensuring the toolkit remains open to everyone." }
  ];

  const handleSubSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSub.trim()) {
      setSubSuccess(true);
      setEmailSub("");
      setTimeout(() => setSubSuccess(false), 5000);
    }
  };

  return (
    <div className="space-y-24 pb-20">
      {/* AdSense Top Banner */}
      <div className="pt-4 max-w-7xl mx-auto px-6">
        <AdSensePlaceholder slotType="top-banner" />
      </div>

      {/* 1. Hero Section */}
      <section className="relative pt-8 pb-12 flex flex-col items-center text-center px-4 max-w-5xl mx-auto space-y-8">
        {/* Glow effect background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-neon-blue/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-purple/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Feature badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-neon-blue shadow-lg shadow-brand-neon-blue/5 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-brand-neon-blue" />
          <span>Next-Generation Productivity Suite</span>
        </div>

        {/* Big Heading */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-tight text-white max-w-4xl">
          One AI Platform.<br/>
          <span className="bg-gradient-to-r from-brand-neon-blue via-brand-electric-cyan to-brand-purple bg-clip-text text-transparent">
            100% Free Forever.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed font-sans">
          Generate resumes, draft emails, compress image layers, modify PDFs, generate custom QR codes, and automate daily tracking—all with unlimited, free access.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <button 
            onClick={onStartFree}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-neon-blue to-brand-purple text-white rounded-xl font-semibold text-base shadow-xl shadow-brand-neon-blue/20 hover:shadow-brand-neon-blue/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Start Producing Free</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          <button 
            onClick={onExploreTools}
            className="w-full sm:w-auto px-8 py-4 bg-brand-charcoal text-white rounded-xl font-semibold text-base border border-white/10 hover:border-brand-neon-blue/30 hover:bg-brand-graphite transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Tools</span>
            <Wrench className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* 2. Features Grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Designed for Instant Velocity
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Enjoy full data safety, rich local persistence, and cutting-edge intelligence models tailored to optimize your workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="glass-panel rounded-2xl p-6 space-y-4 hover:border-brand-purple/20 transition-all duration-300">
                <div className="h-10 w-10 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white text-base">{feat.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* AdSense Between Sections */}
      <div className="max-w-7xl mx-auto px-6">
        <AdSensePlaceholder slotType="between-sections" />
      </div>

      {/* 3. Popular Tools Showcase */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-6">
          <div>
            <h2 className="font-display font-bold text-3xl text-white tracking-tight flex items-center gap-2">
              <Flame className="h-6 w-6 text-orange-500 animate-bounce" />
              Popular Workspace Utilities
            </h2>
            <p className="text-gray-400 text-xs">The most utilized tools this week by developers and marketers globally.</p>
          </div>
          <button 
            onClick={onExploreTools}
            className="text-brand-neon-blue hover:text-white flex items-center gap-1.5 text-xs font-semibold hover:underline"
          >
            <span>View All 10 Tools</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularTools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <div 
                key={tool.id} 
                onClick={onExploreTools}
                className={`group relative flex flex-col justify-between p-6 bg-brand-charcoal/40 hover:bg-brand-charcoal/70 rounded-2xl border ${tool.borderColor} ${tool.glowColor} cursor-pointer transition-all duration-300 shadow-lg hover:-translate-y-1.5 h-full`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`h-11 w-11 rounded-xl ${tool.bgColor} border ${tool.borderColor} flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent className={`h-5 w-5 ${tool.iconColor}`} />
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-400">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-brand-neon-blue">{tool.category}</span>
                      <span className="flex items-center gap-0.5"><Star className="h-3 w-3 fill-brand-neon-blue text-brand-neon-blue" /> {tool.rating}</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-brand-neon-blue transition-colors">{tool.name}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 h-10">{tool.desc}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs mt-6">
                  <span className="text-gray-500 font-mono text-[10px]">{tool.usage}</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onExploreTools();
                    }}
                    className="flex items-center gap-1 text-brand-neon-blue font-semibold hover:text-white transition-colors"
                  >
                    <span>Launch Tool</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. How It Works Section */}
      <section className="bg-brand-charcoal border-y border-white/5 py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Production Productivity in 3 Simple Steps
            </h2>
            <p className="text-gray-400 max-w-md mx-auto text-xs">No complex configs. Choose, write with high intelligence, and download in standard schemas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="text-center space-y-4 relative">
              <div className="h-12 w-12 rounded-full bg-brand-neon-blue/10 border border-brand-neon-blue/30 flex items-center justify-center text-brand-neon-blue font-bold font-display text-lg mx-auto shadow-md shadow-brand-neon-blue/5">
                1
              </div>
              <h3 className="font-semibold text-white">Select Your Workspace Tool</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Navigate our list of 10 professional utilities, optimized for content, layout, file compression, or QR structures.</p>
            </div>

            <div className="text-center space-y-4 relative">
              <div className="h-12 w-12 rounded-full bg-brand-purple/10 border border-brand-purple/30 flex items-center justify-center text-brand-purple font-bold font-display text-lg mx-auto shadow-md shadow-brand-purple/5">
                2
              </div>
              <h3 className="font-semibold text-white">Refine with Server AI</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Generate contextually aware documents or convert heavy PDF structures using our proxy servers in milliseconds.</p>
            </div>

            <div className="text-center space-y-4 relative">
              <div className="h-12 w-12 rounded-full bg-brand-electric-cyan/10 border border-brand-electric-cyan/30 flex items-center justify-center text-brand-electric-cyan font-bold font-display text-lg mx-auto shadow-md shadow-brand-electric-cyan/5">
                3
              </div>
              <h3 className="font-semibold text-white">Export Pristine Assets</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Download results instantly in compliant DOCX, high-DPI PDF, vectorized SVG formats, or compression packs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Blog Preview Section */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-6">
          <div>
            <h2 className="font-display font-bold text-3xl text-white tracking-tight flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-brand-neon-blue" />
              Latest Career & Utility Insights
            </h2>
            <p className="text-gray-400 text-xs">Read professional advice to beat the algorithms and optimize assets.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <article 
              key={post.id}
              onClick={() => onSelectBlogPost(post)}
              className="glass-panel glass-panel-hover rounded-2xl p-5 space-y-4 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span className="text-brand-neon-blue">{post.category}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>
                <h3 className="font-semibold text-white group-hover:text-brand-neon-blue transition-colors text-base line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span>By {post.author}</span>
                <span className="text-brand-neon-blue font-semibold hover:underline flex items-center gap-0.5">
                  Read Article <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 space-y-12">
        <h2 className="font-display font-bold text-3xl text-white tracking-tight text-center">
          Frequently Answered Queries
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="glass-panel rounded-xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-semibold text-white hover:text-brand-neon-blue transition-colors"
                >
                  <span className="text-sm">{faq.q}</span>
                  {isOpen ? <ChevronUp className="h-4 w-4 text-brand-neon-blue" /> : <ChevronDown className="h-4 w-4 text-gray-400" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-gray-400 text-xs leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Newsletter Subscription */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border-brand-neon-blue/20">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-neon-blue/10 blur-[50px] rounded-full pointer-events-none" />
          
          <div className="space-y-4 max-w-md relative z-10">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">Join the AI Revolution</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Subscribe to get modern templates, PDF conversion tricks, productivity hacks, and new tool announcements directly inside your inbox. No spam, ever.
            </p>
          </div>

          <form onSubmit={handleSubSubmit} className="w-full max-w-md space-y-3 relative z-10">
            {subSuccess ? (
              <div className="p-4 rounded-xl bg-brand-neon-blue/10 border border-brand-neon-blue/30 text-brand-neon-blue text-xs font-semibold text-center">
                🎉 Welcome to the inner circle! Check your inbox soon.
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    type="email"
                    required
                    value={emailSub}
                    onChange={(e) => setEmailSub(e.target.value)}
                    placeholder="Enter your professional email"
                    className="w-full pl-10 pr-4 py-3 bg-brand-black border border-white/10 rounded-xl text-white text-xs placeholder-gray-500 focus:outline-none focus:border-brand-neon-blue"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-brand-neon-blue hover:bg-brand-neon-blue/80 text-brand-black font-semibold text-xs rounded-xl transition-all shadow-md shadow-brand-neon-blue/25 shrink-0"
                >
                  Join Newsletter
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

    </div>
  );
}
