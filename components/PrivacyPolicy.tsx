"use client";

import React from "react";
import { 
  Shield, 
  Lock, 
  Eye, 
  Cookie, 
  Activity, 
  Database, 
  Sliders, 
  UserCheck, 
  Baby, 
  RefreshCw, 
  Mail,
  Sparkles,
  ArrowLeft,
  Info,
  Layers,
  Percent,
  TrendingUp
} from "lucide-react";

interface PrivacyPolicyProps {
  onBackToHome?: () => void;
}

export default function PrivacyPolicy({ onBackToHome }: PrivacyPolicyProps) {
  const lastUpdated = "July 5, 2026";

  const sections = [
    {
      id: "introduction",
      icon: <Info className="h-5 w-5 text-brand-neon-blue" />,
      title: "1. Introduction",
      content: (
        <div className="space-y-3">
          <p>
            Welcome to <span className="text-white font-semibold">AI Toolbox Pro</span> ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal data. 
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit and use our web-based platform, SaaS applications, and developer productivity tools. Our platform utilizes advanced artificial intelligence models (including the Gemini API) to optimize files, generate documents, and process data.
          </p>
          <p>
            By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with any terms here, please discontinue use of the platform immediately.
          </p>
        </div>
      )
    },
    {
      id: "collect",
      icon: <Database className="h-5 w-5 text-brand-purple" />,
      title: "2. Information We Collect",
      content: (
        <div className="space-y-3">
          <p>
            We may collect information about you in a variety of ways depending on how you interact with our AI tools:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
            <li>
              <strong className="text-white">Account Data:</strong> Contact information, including email address, full name, and billing details provided during manual account registration or OAuth authentication.
            </li>
            <li>
              <strong className="text-white">Input Metadata & Content:</strong> Text, files, images, and other prompt metadata that you actively upload or paste into our AI tools (e.g., resumes, cover letter text, or images for compression). This content is processed in real-time to return the computed results.
            </li>
            <li>
              <strong className="text-white">Automatically Collected Data:</strong> Standard server logs, IP address, browser metadata, operating system type, referring URLs, and device specifications collected when you navigate the platform.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "usage",
      icon: <Eye className="h-5 w-5 text-emerald-400" />,
      title: "3. How We Use Information",
      content: (
        <div className="space-y-3">
          <p>
            We utilize the collected information to maintain, optimize, and secure our AI processing pipelines. Specifically, your data is used to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
            <li>Provide, operate, and maintain the Core AI application modules.</li>
            <li>Process real-time API integrations with high-performance model layers safely.</li>
            <li>Improve, personalize, and expand the user experience of our SaaS products.</li>
            <li>Understand and analyze how you navigate the platform to introduce optimized workflows.</li>
            <li>Develop new tools, features, and algorithmic optimizations.</li>
            <li>Communicate with you regarding direct customer inquiries, security alerts, and administrative updates.</li>
            <li>Prevent fraudulent transactions, cyber-attacks, and service misuse.</li>
          </ul>
        </div>
      )
    },
    {
      id: "cookies",
      icon: <Cookie className="h-5 w-5 text-amber-400" />,
      title: "4. Cookies & Local Storage",
      content: (
        <div className="space-y-3">
          <p>
            We use cookies and modern client-side storage technologies (such as <code className="text-brand-neon-blue bg-white/5 px-1.5 py-0.5 rounded font-mono text-[11px]">localStorage</code> and session storage) to elevate your workspace performance.
          </p>
          <p>
            Cookies are tiny data files stored on your hard drive or browser cache. We utilize these indicators to keep you securely signed in across browser tabs, store layout preferences (e.g., active tools and color themes), and optimize page load speeds.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some custom segments of our AI tools may not function properly.
          </p>
        </div>
      )
    },
    {
      id: "third-party",
      icon: <Layers className="h-5 w-5 text-brand-neon-blue" />,
      title: "5. Third Party Services",
      content: (
        <div className="space-y-3">
          <p>
            To provide robust model capabilities and cloud computing speed, our platform shares limited, highly-secured metadata with designated third-party providers:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
            <li>
              <strong className="text-white">AI Processing Nodes:</strong> Raw textual prompt inputs are securely routed to authorized cloud processing partners (e.g., Google Gemini API) to generate the desired outputs. We ensure our partners do not use your inputs to train public base models.
            </li>
            <li>
              <strong className="text-white">Hosting & Database Providers:</strong> Enterprise cloud infrastructure nodes that secure server runtime logic.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "analytics",
      icon: <Activity className="h-5 w-5 text-brand-purple" />,
      title: "6. Google Analytics",
      content: (
        <div className="space-y-3">
          <p>
            Our web platform integrates <span className="text-white font-semibold">Google Analytics</span>, a web analysis service provided by Google LLC. Google Analytics tracks visitor traffic patterns, bounce rates, and active session lengths.
          </p>
          <p>
            This telemetry is completely anonymized and does not contain personal names or private passwords. The information generated by the cookie is transmitted to and stored by Google on secure servers. We use this data strictly to debug performance issues and optimize system layout.
          </p>
        </div>
      )
    },
    {
      id: "adsense",
      icon: <Percent className="h-5 w-5 text-blue-400" />,
      title: "7. Google AdSense Ready",
      content: (
        <div className="space-y-3">
          <p>
            Please note that our website is architected to be <span className="text-white font-semibold">Google AdSense Ready</span>. We may display professional advertising blocks to support free computational tools.
          </p>
          <p>
            Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve targeted ads to our users. Users may opt out of personalized advertising by visiting the official Google Ads Settings.
          </p>
        </div>
      )
    },
    {
      id: "security",
      icon: <Lock className="h-5 w-5 text-red-400" />,
      title: "8. Data Security",
      content: (
        <div className="space-y-3">
          <p>
            The security of your data is our highest priority. We implement an array of administrative, technical, and physical security measures to safeguard your information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
            <li>Encryption of all API data in transit using industry-standard TLS protocols.</li>
            <li>Secure hashing of credentials and restricted database credentials.</li>
            <li>Periodic reviews of our processing models to ensure compliance with strict security parameters.</li>
          </ul>
          <p>
            While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee its absolute security.
          </p>
        </div>
      )
    },
    {
      id: "rights",
      icon: <UserCheck className="h-5 w-5 text-emerald-400" />,
      title: "9. User Rights",
      content: (
        <div className="space-y-3">
          <p>
            Depending on your jurisdiction (such as GDPR under the EU or CCPA under California law), you hold specific statutory rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
            <li>
              <strong className="text-white">Right of Access:</strong> You can request a digital file of all personal data held in our active registries.
            </li>
            <li>
              <strong className="text-white">Right of Rectification:</strong> You can request to update incorrect or outdated contact parameters.
            </li>
            <li>
              <strong className="text-white">Right of Erasure:</strong> You can request the complete deletion of your registered accounts and associated metadata.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please communicate directly with our Data Protection Officer using the contact channel below.
          </p>
        </div>
      )
    },
    {
      id: "children",
      icon: <Baby className="h-5 w-5 text-pink-400" />,
      title: "10. Children's Privacy",
      content: (
        <div className="space-y-3">
          <p>
            Our AI productivity services do not target and are not structured to attract children under the age of 13. 
          </p>
          <p>
            We do not knowingly collect or solicit personal identifiable information from anyone under the age of 13. If we discover that a child under 13 has registered with us, we immediately delete their metadata parameters from our active data files. If you are a parent or legal guardian and believe your child has submitted data, please contact us immediately.
          </p>
        </div>
      )
    },
    {
      id: "changes",
      icon: <RefreshCw className="h-5 w-5 text-amber-400" />,
      title: "11. Changes to Privacy Policy",
      content: (
        <div className="space-y-3">
          <p>
            We reserve the right to update or modify this Privacy Policy at any time to reflect changing technical capabilities or statutory parameters.
          </p>
          <p>
            When we publish revisions, we will update the <span className="text-brand-neon-blue font-mono">"Last Updated"</span> date at the top of this document. We encourage users to periodically review this page to stay informed of how we protect our community. Your continued use of the platform after updates signifies acceptance.
          </p>
        </div>
      )
    },
    {
      id: "contact-info",
      icon: <Mail className="h-5 w-5 text-brand-neon-blue" />,
      title: "12. Contact Information",
      content: (
        <div className="space-y-3">
          <p>
            For any queries, requests, or concerns regarding your privacy settings, please reach out to our legal compliance and data protection officer:
          </p>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2.5 font-mono text-xs">
            <p className="flex items-center gap-2">
              <span className="text-gray-400">Compliance Email:</span>
              <a href="mailto:support@example.com" className="text-brand-neon-blue hover:underline">
                support@example.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-gray-400">Corporate Address:</span>
              <span className="text-white">Business Address Here</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-gray-400">Support Line:</span>
              <a href="tel:+000000000000" className="text-white hover:underline">
                +00 000 0000000
              </a>
            </p>
          </div>
        </div>
      )
    }
  ];

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
          <Shield className="h-3.5 w-3.5 text-brand-neon-blue" />
          <span>SEO Optimized Compliance Documentation</span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white leading-tight">
          Privacy Policy & <span className="bg-gradient-to-r from-brand-neon-blue to-brand-purple bg-clip-text text-transparent">Data Protection</span>
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-gray-400 font-mono">
          <p>Effective Date: {lastUpdated}</p>
          <span className="hidden sm:inline text-gray-600">•</span>
          <p>Jurisdiction: Global AI Compliance Standards</p>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="space-y-8 relative">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

        {faqsSection()}

        <div className="space-y-6">
          {sections.map((sec) => (
            <section 
              key={sec.id}
              id={sec.id}
              className="glass-panel rounded-2xl p-6 border-white/5 space-y-4 hover:border-white/10 transition-colors"
            >
              <h2 className="font-display font-bold text-base sm:text-lg text-white flex items-center gap-2.5 pb-3 border-b border-white/5">
                {sec.icon}
                {sec.title}
              </h2>
              <div className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                {sec.content}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer back button */}
      {onBackToHome && (
        <div className="text-center pt-6 border-t border-white/5">
          <button 
            onClick={onBackToHome}
            className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold text-xs transition-all border border-white/10 cursor-pointer"
          >
            I Acknowledge and Back to Home
          </button>
        </div>
      )}

    </div>
  );

  function faqsSection() {
    return (
      <div className="p-5 rounded-2xl bg-brand-neon-blue/5 border border-brand-neon-blue/20 flex gap-4 items-start">
        <div className="h-8 w-8 rounded-lg bg-brand-neon-blue/10 flex items-center justify-center shrink-0 text-brand-neon-blue">
          <Sparkles className="h-4 w-4" />
        </div>
        <div className="space-y-1">
          <p className="text-xs font-bold text-white font-mono uppercase tracking-wide">AI Compliance & Security First</p>
          <p className="text-[11px] text-gray-300 leading-relaxed">
            Our SaaS suite executes deterministic, vector-optimized model requests securely. We do not store, distribute, or utilize prompt data to feed external model cycles. Your workflow files remain private, secure, and fully owned by you.
          </p>
        </div>
      </div>
    );
  }
}
