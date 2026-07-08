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
  Flame,
  Clock,
  ExternalLink,
  Cpu,
  Twitter,
  Github,
  Linkedin,
  Youtube
} from "lucide-react";
import { BlogPost } from "../app/types";

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
    { id: "tool-resume", name: "AI Resume Builder", category: "Document Design", rating: "4.9", usage: "12.4k users", desc: "Build tailored, ATS-compliant professional resumes using AI optimizations." },
    { id: "tool-pdf", name: "AI PDF Utilities", category: "Utility Toolbox", rating: "4.8", usage: "10.1k users", desc: "Merge, split, lock, unlock, compress, and convert PDF documents in your browser." },
    { id: "tool-email", name: "AI Email Writer", category: "Writing Assistants", rating: "4.9", usage: "9.2k users", desc: "Draft high-response cold emails, follow-ups, and business responses instantly." }
  ];

  const features = [
    { title: "Military-Grade Security", desc: "All conversions and extractions occur directly on secure servers or in-browser. Your files never remain saved unless you actively request it.", icon: Shield },
    { title: "Ultra-Fast Processing", desc: "Built on high-performance infrastructure ensuring file compression and text responses within milliseconds.", icon: Zap },
    { title: "Export Anywhere", desc: "Export to professional PDF, Word DOCX, text files, CSV databases, or vector images seamlessly depending on your workflow.", icon: Download },
    { title: "Next-Gen AI Core", desc: "Powered by Gemini 3.5 Flash for highly contextualized, professional text responses aligned to modern hiring or marketing practices.", icon: Cpu }
  ];

  const faqs = [
    { q: "Is AI Toolbox Pro free to use?", a: "Yes, we offer a robust Free Tier that provides daily credits to use all 10 tools, standard exports, and local storage. Our Pro Plan offers unlimited high-volume generations and high-DPI document exports." },
    { q: "How secure is my personal uploaded data?", a: "Your files are processed with extreme privacy in mind. We do not store your PDFs, images, or resume data unless you choose to save them into your personal account dashboard. Data is encrypted using HTTPS and TLS standards." },
    { q: "Are the generated resumes ATS friendly?", a: "Absolutely. Our resumes are modeled around strict guidelines requested by modern Applicant Tracking Systems. They utilize single-column flows, standard headings, clean typography, and zero isolated text boxes." },
    { q: "Can I cancel my premium subscription at any time?", a: "Yes, subscription management is frictionless. You can manage your subscription or lifetime membership right from the profile billing menu without any hidden cancelation fees." }
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
      {/* 1. Hero Section */}
      <section className="relative pt-16 pb-12 flex flex-col items-center text-center px-4 max-w-5xl mx-auto space-y-8">
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
            Unlimited Productivity.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed font-sans">
          Generate resumes, draft emails, compress image layers, modify PDFs, generate custom QR codes, and automate daily tracking—all from a single premium dark workspace.
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
            Designed for Enterprise Velocity
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

      {/* 3. Popular Tools Showcase */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-6">
          <div>
            <h2 className="font-display font-bold text-3xl text-white tracking-tight flex items-center gap-2">
              <Flame className="h-6 w-6 text-orange-500" />
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

        <div className="grid md:grid-cols-3 gap-8">
          {popularTools.map((tool) => (
            <div 
              key={tool.id} 
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span className="px-2 py-0.5 rounded bg-white/5 text-brand-neon-blue border border-white/10">{tool.category}</span>
                  <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-brand-neon-blue text-brand-neon-blue" /> {tool.rating}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white">{tool.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{tool.desc}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs">
                <span className="text-gray-500">{tool.usage}</span>
                <button 
                  onClick={() => onExploreTools()}
                  className="flex items-center gap-1 text-brand-neon-blue font-semibold hover:text-white"
                >
                  <span>Launch Tool</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
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

      {/* 5. Pricing Section (Free & Pro) - Hidden for now to make every tool completely free */}
      {false && (
        <section className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Flexible Plans for All Creators
            </h2>
            <p className="text-gray-400 max-w-md mx-auto text-xs">Unlock unlimited high-volume generations, high-DPI exports, and dedicated premium server access.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free Plan */}
            <div className="glass-panel rounded-2xl p-8 space-y-8 flex flex-col justify-between border-white/5">
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold tracking-wider text-gray-500 uppercase">STANDARD</span>
                <h3 className="font-display font-bold text-2xl text-white">Starter Free</h3>
                <p className="text-gray-400 text-xs leading-relaxed">Essential features for casual creators and document drafts.</p>
                <div className="pt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-display">$0</span>
                  <span className="text-gray-500 text-xs">/ forever</span>
                </div>

                <div className="pt-6 space-y-3.5 text-xs text-gray-300">
                  <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-brand-neon-blue" /> 15 AI Credits Daily</div>
                  <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-brand-neon-blue" /> Access to 10 core tools</div>
                  <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-brand-neon-blue" /> Standard TXT and PDF exports</div>
                  <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-brand-neon-blue" /> Local persistence state</div>
                </div>
              </div>

              <button 
                onClick={onStartFree}
                className="w-full py-3 bg-brand-graphite hover:bg-brand-graphite/70 text-white font-semibold text-sm rounded-xl transition-all border border-white/5 hover:border-brand-neon-blue/20"
              >
                Start Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="glass-panel rounded-2xl p-8 space-y-8 flex flex-col justify-between border-brand-purple/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-purple text-white text-[9px] font-bold px-3 py-1 font-mono tracking-widest uppercase rounded-bl-lg">
                POPULAR
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold tracking-wider text-brand-purple uppercase">PREMIUM ACCESS</span>
                <h3 className="font-display font-bold text-2xl text-white">Pro Membership</h3>
                <p className="text-gray-400 text-xs leading-relaxed">Unlimited productivity for professional creators and career climbers.</p>
                <div className="pt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-display">$19</span>
                  <span className="text-gray-500 text-xs">/ month</span>
                </div>

                <div className="pt-6 space-y-3.5 text-xs text-gray-300">
                  <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-brand-purple" /> Unlimited AI Generations</div>
                  <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-brand-purple" /> Premium ATS templates & Word exports</div>
                  <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-brand-purple" /> Dynamic PDF Compression & Merging</div>
                  <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-brand-purple" /> High-Resolution Vector SVG QR Codes</div>
                  <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-brand-purple" /> High-Performance server access (Priority)</div>
                </div>
              </div>

              <button 
                onClick={onStartFree}
                className="w-full py-3 bg-gradient-to-r from-brand-neon-blue to-brand-purple text-white font-semibold text-sm rounded-xl shadow-lg shadow-brand-purple/20 hover:shadow-brand-purple/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Premium Access
              </button>
            </div>
          </div>
        </section>
      )}

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
                <h3 className="font-semibold text-white hover:text-brand-neon-blue transition-colors text-base line-clamp-2">
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

      {/* 9. Footer */}
      <footer className="border-t border-white/5 pt-16 pb-12 text-xs text-gray-400 space-y-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/5">
          {/* Logo, Description & Socials */}
          <div className="md:col-span-5 space-y-5 text-left">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-brand-purple to-brand-neon-blue flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-display font-bold text-base text-white">
                AI Toolbox <span className="text-brand-neon-blue text-xs font-mono">PRO</span>
              </span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed max-w-sm">
              The ultimate workspace for elite professional content creation, dynamic PDF solutions, lossless media optimization, and robust automation suite.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-8 w-8 rounded-lg bg-white/5 hover:bg-brand-neon-blue/10 border border-white/10 hover:border-brand-neon-blue/30 flex items-center justify-center text-gray-400 hover:text-brand-neon-blue transition-all"
                title="Follow us on Twitter/X"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-8 w-8 rounded-lg bg-white/5 hover:bg-brand-neon-blue/10 border border-white/10 hover:border-brand-neon-blue/30 flex items-center justify-center text-gray-400 hover:text-brand-neon-blue transition-all"
                title="View our GitHub profile"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-8 w-8 rounded-lg bg-white/5 hover:bg-brand-neon-blue/10 border border-white/10 hover:border-brand-neon-blue/30 flex items-center justify-center text-gray-400 hover:text-brand-neon-blue transition-all"
                title="Connect on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-8 w-8 rounded-lg bg-white/5 hover:bg-brand-neon-blue/10 border border-white/10 hover:border-brand-neon-blue/30 flex items-center justify-center text-gray-400 hover:text-brand-neon-blue transition-all"
                title="Watch our YouTube guides"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Navigation Links */}
          <div className="md:col-span-5 grid grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <h4 className="font-display font-semibold text-[11px] uppercase tracking-wider text-white">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={onAboutUs} className="hover:text-brand-neon-blue transition-colors cursor-pointer text-xs font-sans text-gray-400">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={onFAQ} className="hover:text-brand-neon-blue transition-colors cursor-pointer text-xs font-sans text-gray-400">
                    FAQ
                  </button>
                </li>
                <li>
                  <button onClick={onContactUs} className="hover:text-brand-neon-blue transition-colors cursor-pointer text-xs font-sans text-gray-400">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-display font-semibold text-[11px] uppercase tracking-wider text-white">Legal & Support</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={onPrivacyPolicy} className="hover:text-brand-neon-blue transition-colors cursor-pointer text-xs font-sans text-gray-400">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={onTermsAndConditions} className="hover:text-brand-neon-blue transition-colors cursor-pointer text-xs font-sans text-gray-400">
                    Terms & Conditions
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-[11px] text-center sm:text-left">
          <p>Copyright © 2026 AI Toolbox Pro. All Rights Reserved.</p>
          <p className="font-mono text-[10px]">VER_3.4.0 • HIGH_VELOCITY_SECURE_COMPLIANCE</p>
        </div>
      </footer>
    </div>
  );
}
