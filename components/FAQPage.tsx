"use client";

import React, { useState, useMemo } from "react";
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft, 
  Sparkles, 
  BookOpen,
  FileText,
  User,
  ShieldAlert,
  HardDrive,
  Cpu,
  Mail,
  FileSpreadsheet,
  Settings,
  Grid
} from "lucide-react";

interface FAQPageProps {
  onBackToHome?: () => void;
}

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export default function FAQPage({ onBackToHome }: FAQPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Questions", icon: <Grid className="h-4 w-4" /> },
    { id: "ai-resumes", label: "AI Resume & Content", icon: <BookOpen className="h-4 w-4" /> },
    { id: "media", label: "PDF & Image Tools", icon: <FileSpreadsheet className="h-4 w-4" /> },
    { id: "account", label: "Account & Downloads", icon: <User className="h-4 w-4" /> },
    { id: "security", label: "Privacy & Security", icon: <ShieldAlert className="h-4 w-4" /> },
    { id: "tech", label: "Technical Support", icon: <Cpu className="h-4 w-4" /> },
  ];

  const faqData: FAQItem[] = [
    // Category: AI Resume & Content Creators
    {
      id: "resume-ats",
      category: "ai-resumes",
      question: "How does the AI Resume Builder optimize my resume for Applicant Tracking Systems (ATS)?",
      answer: "Our AI Resume Builder analyzes your resume against industry-specific ATS algorithms, identifying key skills, structural formats, and density targets that maximize your score. It adjusts the parsing schema and suggests tailored professional bullet points based on your target job descriptions."
    },
    {
      id: "resume-variants",
      category: "ai-resumes",
      question: "Can I generate multiple tailored resumes for different job descriptions?",
      answer: "Absolutely! With AI Toolbox Pro, you can preserve your master profile credentials and generate unlimited custom tailored variations optimized for distinct job postings, titles, and company profiles in just a few clicks."
    },
    {
      id: "email-writer",
      category: "ai-resumes",
      question: "Can I configure the tone and objective of the AI Email Writer?",
      answer: "Yes, our AI Email Writer includes dynamic parameters such as formal, persuasive, casual, collaborative, apologetic, and urgent. You can also specify the target objective—such as sales outreach, professional follow-ups, or administrative queries—to draft perfect copy."
    },
    {
      id: "caption-generator",
      category: "ai-resumes",
      question: "Does the AI Caption Generator suggest relevant hashtags and emojis?",
      answer: "Yes. The AI Caption Generator automatically creates engaging social media copies optimized for Instagram, LinkedIn, and X. It recommends matching emojis and context-aware hashtags based on your media description or text prompts."
    },
    {
      id: "bio-generator",
      category: "ai-resumes",
      question: "Can I generate professional bios for distinct social and professional networks?",
      answer: "Yes, you can toggle between professional styles including 'LinkedIn Professional', 'Twitter/X Minimalist', 'GitHub Developer', and 'Creative Portfolio'. The generator conforms precisely to character and length constraints of each network."
    },

    // Category: PDF & Image Tools
    {
      id: "pdf-limits",
      category: "media",
      question: "What file format and size limits apply to your PDF conversion tools?",
      answer: "Our platform supports processing PDF documents up to 50MB per file. You can merge, split, compress, and convert PDFs to common formats including Microsoft Word (.docx), Excel (.xlsx), and high-resolution JPEG images safely."
    },
    {
      id: "pdf-storage",
      category: "media",
      question: "Are my uploaded PDF and document files stored on your servers?",
      answer: "No. All PDF operations are executed using ephemeral, secure in-memory buffers. Your files are automatically purged immediately after the download process completes, keeping your sensitive enterprise data confidential."
    },
    {
      id: "qr-customization",
      category: "media",
      question: "Can I customize the visual branding and error correction level of generated QR Codes?",
      answer: "Yes, our QR Code Generator allows you to customize foreground/background colors, append central branding logos, select corner shapes, and adjust the Reed-Solomon error correction level (up to 30% / High level) for clean scans under any physical condition."
    },
    {
      id: "qr-expiration",
      category: "media",
      question: "Do the generated QR Codes have an expiration date?",
      answer: "No, all static QR codes generated on our platform are permanent and do not have any expiration date. They will continue to function indefinitely as long as your destination URL remains active."
    },
    {
      id: "image-compression",
      category: "media",
      question: "What optimization algorithms does the Image Compressor use, and does it support WebP?",
      answer: "We employ advanced lossy and lossless engines (including WebP, MozJPEG, and OptiPNG) to reduce file sizes by up to 80% with zero perceptible loss in visual quality. You can compress images and convert them to modern, fast-loading WebP formats."
    },
    {
      id: "batch-compress",
      category: "media",
      question: "Can I compress images in batches to save time?",
      answer: "Yes, you can select and compress up to 20 images simultaneously. Once compressed, you can download them as a bundle or individually in a single zip archive."
    },

    // Category: Account & Downloads
    {
      id: "download-expiry",
      category: "account",
      question: "Where can I find my processed files, and how long are download links valid?",
      answer: "Once an operation is completed, your files are made available for immediate direct download in your active browser session. To protect your data, download links expire after 30 minutes, and files are permanently purged from our temporary cache."
    },
    {
      id: "sub-upgrades",
      category: "account",
      question: "Can I upgrade, downgrade, or cancel my SaaS subscription plan at any time?",
      answer: "Yes, you can manage your membership status anytime via your Account settings. Upgrades take effect instantly with pro-rata billing, while cancellations stop renewal for the following billing period."
    },
    {
      id: "dev-keys",
      category: "account",
      question: "Do you offer API keys for developer integration of these productivity tools?",
      answer: "Yes, enterprise and professional tier users can generate private API keys in the Account Settings panel to programmatically leverage our file compression, PDF rendering, and AI content models in their own applications."
    },

    // Category: Privacy & Security
    {
      id: "model-training",
      category: "security",
      question: "Does AI Toolbox Pro train public AI models using my input text or files?",
      answer: "Absolutely not. We maintain a zero-training privacy standard. All textual inputs, PDF contents, and resume queries are processed through private corporate API endpoints (such as the Google Gemini API with training opt-out), ensuring your data is never used to train public models."
    },
    {
      id: "account-erasure",
      category: "security",
      question: "How can I request the complete deletion of my registered account data?",
      answer: "You can trigger complete account deletion directly from the Settings and Authentication panel. Once confirmed, all your profile data, stored history, and system configurations are permanently purged from our active databases within 24 hours."
    },
    {
      id: "billing-security",
      category: "security",
      question: "Is my credit card and billing metadata secure on your website?",
      answer: "Yes, completely. We do not store or process payment card data on our servers. All transaction details are routed directly through globally recognized, PCI-DSS compliant partner gateways using encrypted tokens."
    },
    {
      id: "data-encryption",
      category: "security",
      question: "Is my session data encrypted during communication?",
      answer: "Yes, all traffic between your browser and our SaaS environment is encrypted with TLS (Transport Layer Security) 1.3. This blocks any unauthorized network interception."
    },

    // Category: Technical Support
    {
      id: "export-formats",
      category: "tech",
      question: "What export file formats are supported for resume and content tools?",
      answer: "You can download your resumes and content output files as print-ready PDF files, Microsoft Word (.docx) format, plain Text (.txt), or optimized Markdown (.md) documents."
    },
    {
      id: "support-hours",
      category: "tech",
      question: "What are your standard support hours, and how do I open a support ticket?",
      answer: "Our support operations run 24/7. You can submit a support ticket instantly using our built-in 'Contact Support' portal, or email us directly at support@example.com. Enterprise users receive priority handling with SLAs under 1 hour."
    }
  ];

  // Filter FAQs based on active category and search query
  const filteredFAQs = useMemo(() => {
    return faqData.filter(faq => {
      const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
      const matchesSearch = 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const toggleExpand = (id: string) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-12">
      
      {/* Back Header navigation */}
      {onBackToHome && (
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors cursor-pointer font-semibold group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Workspace Dashboard
        </button>
      )}

      {/* Hero Header */}
      <header className="relative space-y-4 text-center sm:text-left">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-neon-blue/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-neon-blue">
          <HelpCircle className="h-3.5 w-3.5 text-brand-neon-blue" />
          <span>SEO Optimized Help & Support Portal</span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white leading-tight">
          Frequently Asked <span className="bg-gradient-to-r from-brand-neon-blue to-brand-purple bg-clip-text text-transparent">Questions & Help</span>
        </h1>

        <p className="text-gray-400 text-xs sm:text-sm font-sans max-w-2xl">
          Get quick, detailed answers about our AI tools, file optimizers, security parameters, and workspace integrations. Need additional assistance? Contact our technical desk anytime.
        </p>
      </header>

      {/* Interactive Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search FAQs by keywords (e.g., ATS resume, compress WebP, security)..."
          className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-brand-neon-blue/50 focus:ring-1 focus:ring-brand-neon-blue/50 transition-all font-sans"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-gray-400 hover:text-white"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-white/5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setExpandedId(null);
            }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeCategory === cat.id 
                ? "bg-brand-neon-blue text-brand-black shadow-md shadow-brand-neon-blue/25" 
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
            }`}
          >
            {cat.icon}
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Main Accordion List */}
      <main className="space-y-4 relative">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

        {filteredFAQs.length > 0 ? (
          <div className="space-y-3">
            {filteredFAQs.map((faq) => {
              const isOpen = expandedId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className={`glass-panel rounded-2xl border transition-all duration-300 ${
                    isOpen 
                      ? "border-brand-neon-blue/30 bg-white/[0.04]" 
                      : "border-white/5 hover:border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full text-left px-5 py-4 sm:py-5 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-display font-bold text-xs sm:text-sm text-white hover:text-brand-neon-blue transition-colors leading-snug">
                      {faq.question}
                    </span>
                    <span className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                      isOpen ? "bg-brand-neon-blue/10 text-brand-neon-blue" : "bg-white/5 text-gray-400"
                    }`}>
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans border-t border-white/5 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 px-4 rounded-3xl bg-white/[0.02] border border-white/5 space-y-3">
            <HelpCircle className="h-10 w-10 text-gray-500 mx-auto" />
            <p className="text-white font-semibold text-sm">No matched questions found</p>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              We couldn't find any questions matching your keywords. Try searching for other general terms or clear the filter.
            </p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-xs text-white rounded-xl transition-all"
            >
              Reset Search & Filter
            </button>
          </div>
        )}
      </main>

      {/* SEO Structured Data Hook for AI Search indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Footer support prompt */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-neon-blue/10 to-brand-purple/10 border border-white/10 space-y-4 text-center">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-neon-blue">
          <Mail className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <h3 className="text-white font-bold text-sm">Still have questions?</h3>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
            Our enterprise compliance and technical support teams are available 24/7. Open a diagnostic ticket or submit queries instantly.
          </p>
        </div>
        {onBackToHome && (
          <button 
            onClick={onBackToHome}
            className="px-5 py-2.5 bg-brand-neon-blue hover:bg-brand-neon-blue/80 text-brand-black font-semibold text-xs rounded-xl transition-all shadow-md shadow-brand-neon-blue/25 cursor-pointer"
          >
            Return to Dashboard
          </button>
        )}
      </div>

    </div>
  );
}
