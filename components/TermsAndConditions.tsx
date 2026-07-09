"use client";

import React from "react";
import { 
  Scale, 
  ShieldCheck, 
  Globe, 
  AlertTriangle, 
  Terminal, 
  Copyright, 
  Ban, 
  FileText, 
  UserX, 
  RefreshCcw, 
  Mail,
  Sparkles,
  ArrowLeft,
  Info
} from "lucide-react";
import { BUSINESS_CONFIG } from "../config";

interface TermsAndConditionsProps {
  onBackToHome?: () => void;
}

export default function TermsAndConditions({ onBackToHome }: TermsAndConditionsProps) {
  const lastUpdated = "July 5, 2026";

  const sections = [
    {
      id: "acceptance",
      icon: <ShieldCheck className="h-5 w-5 text-brand-neon-blue" />,
      title: "1. Acceptance of Terms",
      content: (
        <div className="space-y-3">
          <p>
            By accessing or utilizing the <span className="text-white font-semibold">AI Toolbox Pro</span> software-as-a-service platform, including any related subdomains, API integrations, and developer environments (collectively, the "Services"), you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions ("Terms").
          </p>
          <p>
            If you are entering into these Terms on behalf of a company, corporate enterprise, or other legal entity, you represent and warrant that you possess the full legal authority to bind such entity to these covenants. If you do not agree with any segment of these Terms, you are strictly prohibited from utilizing our Services.
          </p>
        </div>
      )
    },
    {
      id: "usage",
      icon: <Globe className="h-5 w-5 text-brand-purple" />,
      title: "2. Website & Platform Usage",
      content: (
        <div className="space-y-3">
          <p>
            Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and run our web-based AI tools.
          </p>
          <p>
            We deploy advanced neural networks and language processing pipelines (including server-side Gemini API layers) to compute documents, compress files, and optimize datasets. We make reasonable commercial efforts to ensure continuous, latency-optimized server execution; however, we do not guarantee uninterrupted platform availability, specific uptime SLAs, or absolute precision of generated outputs.
          </p>
        </div>
      )
    },
    {
      id: "responsibilities",
      icon: <Terminal className="h-5 w-5 text-emerald-400" />,
      title: "3. User Responsibilities",
      content: (
        <div className="space-y-3">
          <p>
            As a registered user or guest visitor, you assume sole legal responsibility for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
            <li>Maintaining the strict confidentiality of your account credentials, secret keys, and login parameters.</li>
            <li>All activities, data processes, and document queries initiated under your session identity.</li>
            <li>Ensuring that any text, file data, metadata prompts, or media assets you upload do not infringe upon third-party copyrights, intellectual rights, or privacy keys.</li>
            <li>Securing adequate digital network connections to transmit files safely into our secure pipelines.</li>
          </ul>
        </div>
      )
    },
    {
      id: "prohibited",
      icon: <Ban className="h-5 w-5 text-red-400" />,
      title: "4. Prohibited Activities",
      content: (
        <div className="space-y-3">
          <p>
            You are strictly forbidden from engaging in the following high-risk activities:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
            <li>Using our AI generation workflows to generate or distribute malicious code, ransomware, malware, spam, or defamatory publications.</li>
            <li>Reverse-engineering, decompiling, or attempting to extract the underlying source models, architecture, or internal APIs of the platform.</li>
            <li>Executing automated crawlers, bots, scrapers, or DDoS loads that disrupt our core hosting clusters or saturate processing nodes.</li>
            <li>Circumventing designated rate limits, security walls, paywall structures, or platform sandbox permissions.</li>
            <li>Deploying AI outputs in life-critical industries, medical diagnostic systems, aerospace operations, or legal regulatory compliance fields without independent human verification.</li>
          </ul>
        </div>
      )
    },
    {
      id: "intellectual",
      icon: <Copyright className="h-5 w-5 text-amber-400" />,
      title: "5. Intellectual Property",
      content: (
        <div className="space-y-3">
          <p>
            Our Service houses proprietary assets, including but not limited to brand identity logos, custom CSS frameworks, graphical user interfaces, deterministic algorithms, vector designs, and text layouts owned exclusively by AI Toolbox Pro SaaS Inc.
          </p>
          <p>
            <strong className="text-white">Your Input & Output Rights:</strong> As between you and us, you retain full ownership of all prompts, document text, and uploaded assets. To the maximum extent permitted by applicable laws, we transfer all intellectual rights, copyrights, and titles in generated documents directly back to you. You are free to publish, sell, or commercialize computed outputs, provided you do not violate any core licensing covenants.
          </p>
        </div>
      )
    },
    {
      id: "disclaimer",
      icon: <AlertTriangle className="h-5 w-5 text-orange-400" />,
      title: "6. Disclaimer of Warranties",
      content: (
        <div className="space-y-3">
          <p className="uppercase tracking-wider text-xs text-orange-400 font-mono font-bold">Disclaimer Warning</p>
          <p>
            OUR SERVICES ARE DISTRIBUTED STRICTLY ON AN "AS IS" AND "AS AVAILABLE" STRUCTURAL BASIS. WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR ORAL, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A SPECIFIC WORKSPACE USE, AND NON-INFRINGEMENT.
          </p>
          <p>
            WE DO NOT WARRANT THAT (I) THE AI WORKFLOW OUTPUTS WILL BE 100% PRECISE, RELIABLE, OR FREE OF FACTUAL ERRORS; (II) THE PLATFORM INTEGRATIONS WILL BE SECURE OR AVAILABLE AT ANY SECTOR STAMP; OR (III) ANY SERVER DEFECTS OR TEXT DEVIATIONS WILL BE AUTOMATICALLY RESOLVED.
          </p>
        </div>
      )
    },
    {
      id: "liability",
      icon: <Scale className="h-5 w-5 text-red-400" />,
      title: "7. Limitation of Liability",
      content: (
        <div className="space-y-3">
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE JURISDICTIONS, IN NO EVENT SHALL AI TOOLBOX PRO, ITS EXECUTIVE OFFICERS, DIRECTORS, AFFILIATES, AGENTS, OR THIRD-PARTY MODEL PARTNERS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, OR EXEMPLARY DAMAGES.
          </p>
          <p>
            THIS LIMITATION COVERS LOSS OF WORKSPACE PROFITS, LOSS OF CORPORATE DATA, DATA CORRUPTION, BUSINESS INTERRUPTIONS, COMPUTER MALFUNCTIONS, OR SYSTEM CRASHES ARISING OUT OF THE USE OR INABILITY TO NAVIGATE THE SaaS PLATFORM.
          </p>
        </div>
      )
    },
    {
      id: "termination",
      icon: <UserX className="h-5 w-5 text-pink-400" />,
      title: "8. Termination",
      content: (
        <div className="space-y-3">
          <p>
            We reserve the absolute right, in our sole technical discretion and without prior legal warning or liability, to suspend or terminate your account credentials, API tokens, and platform access:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
            <li>Upon your breach of any licensing covenants or prohibited activities.</li>
            <li>For prolonged account inactivity periods.</li>
            <li>Due to technical failure, force majeure events, or unexpected system updates.</li>
          </ul>
          <p>
            Upon termination, your license to use the Services immediately ceases, and we may delete your stored metadata cache permanently.
          </p>
        </div>
      )
    },
    {
      id: "changes",
      icon: <RefreshCcw className="h-5 w-5 text-amber-400" />,
      title: "9. Changes to Terms",
      content: (
        <div className="space-y-3">
          <p>
            We actively monitor evolving model criteria and international data regulations. Accordingly, we reserve the right to revise or update these Terms & Conditions at any time.
          </p>
          <p>
            When changes are pushed, we will modify the "Last Updated" metadata stamp. Your continued interaction with the platform after revisions are posted constitutes complete legal agreement to the updated covenants.
          </p>
        </div>
      )
    },
    {
      id: "contact-terms",
      icon: <Mail className="h-5 w-5 text-brand-neon-blue" />,
      title: "10. Contact Information",
      content: (
        <div className="space-y-3">
          <p>
            For legal compliance audits, enterprise license agreements, SLA reviews, or queries regarding these Terms, please contact our administrative desk:
          </p>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2.5 font-mono text-xs">
            <p className="flex items-center gap-2">
              <span className="text-gray-400">Compliance Email:</span>
              <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-brand-neon-blue hover:underline">
                {BUSINESS_CONFIG.email}
              </a>
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-12">
      
      {/* Back Navigation Header */}
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
          <Scale className="h-3.5 w-3.5 text-brand-neon-blue" />
          <span>SEO Optimized Service Agreement</span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white leading-tight">
          Terms & <span className="bg-gradient-to-r from-brand-neon-blue to-brand-purple bg-clip-text text-transparent">Conditions Agreement</span>
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-gray-400 font-mono">
          <p>Effective Date: {lastUpdated}</p>
          <span className="hidden sm:inline text-gray-600">•</span>
          <p>Jurisdiction: Standard AI Legal Guidelines</p>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="space-y-8 relative">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

        {guidanceCallout()}

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

  function guidanceCallout() {
    return (
      <div className="p-5 rounded-2xl bg-brand-neon-blue/5 border border-brand-neon-blue/20 flex gap-4 items-start">
        <div className="h-8 w-8 rounded-lg bg-brand-neon-blue/10 flex items-center justify-center shrink-0 text-brand-neon-blue">
          <Sparkles className="h-4 w-4" />
        </div>
        <div className="space-y-1">
          <p className="text-xs font-bold text-white font-mono uppercase tracking-wide">License Agreement Guidance</p>
          <p className="text-[11px] text-gray-300 leading-relaxed">
            By interacting with our neural processing engine, you enter into a binding covenant with AI Toolbox Pro SaaS Inc. This agreement structures user responsibilities, fair-use limits, and liability boundaries for modern web-based productivity workflows.
          </p>
        </div>
      </div>
    );
  }
}
