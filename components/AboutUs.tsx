"use client";

import React from "react";
import { Sparkles, Shield, Cpu, Target, ArrowLeft, Award, Users, Globe } from "lucide-react";

interface AboutUsProps {
  onBackToHome?: () => void;
}

export default function AboutUs({ onBackToHome }: AboutUsProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Back Button */}
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
          <Sparkles className="h-3.5 w-3.5 text-brand-neon-blue" />
          <span>Our Vision & Story</span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white leading-tight">
          Empowering Creators with <span className="bg-gradient-to-r from-brand-neon-blue to-brand-purple bg-clip-text text-transparent">AI Toolbox Pro</span>
        </h1>

        <p className="text-gray-400 text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
          At AI Toolbox Pro, we build seamless, secure, and privacy-respecting tools designed to automate repetitive workflows. By combining advanced AI models with local-first efficiency, we empower professionals worldwide to work with velocity and complete confidence.
        </p>
      </header>

      {/* Core Values Section (Bento Grid) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-3">
          <div className="h-10 w-10 rounded-xl bg-brand-neon-blue/10 border border-brand-neon-blue/20 flex items-center justify-center text-brand-neon-blue">
            <Shield className="h-5 w-5" />
          </div>
          <h3 className="font-display font-bold text-sm text-white">Absolute Privacy</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Your data is strictly yours. We maintain a zero-training privacy policy and process files using ephemeral memory buffers that purge immediately.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-3">
          <div className="h-10 w-10 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
            <Cpu className="h-5 w-5" />
          </div>
          <h3 className="font-display font-bold text-sm text-white">Advanced AI Intelligence</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Harness state-of-the-art AI systems for resumes, study sheets, social content generation, and smart productivity automations.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-3">
          <div className="h-10 w-10 rounded-xl bg-brand-neon-blue/10 border border-brand-neon-blue/20 flex items-center justify-center text-brand-neon-blue">
            <Target className="h-5 w-5" />
          </div>
          <h3 className="font-display font-bold text-sm text-white">High-Speed Execution</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Optimized, high-throughput engines execute your PDF conversions, image compression, and content drafting at blistering speeds.
          </p>
        </div>
      </section>

      {/* Mission & Purpose */}
      <section className="glass-panel p-8 rounded-2xl border border-white/5 bg-white/[0.02] relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="space-y-4 max-w-2xl">
          <h2 className="font-display font-bold text-lg text-white">The Mission</h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Traditional online utilities are cluttered with pop-up ads, malware risks, and heavy subscription blocks. We wanted to design a professional ecosystem that provides clean, gorgeous, and hyper-reliable micro-utilities.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Today, AI Toolbox Pro is used by software developers, professional copywriters, corporate HR generalists, academic researchers, and freelance content creators around the globe to compress media, write content, generate secure PDF workflows, and track daily progress instantly.
          </p>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="space-y-6">
        <h3 className="font-display font-bold text-base text-white text-center sm:text-left">Why Hundreds of Teams Trust AI Toolbox Pro</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/5">
            <div className="p-2 rounded-lg bg-white/5 text-brand-neon-blue shrink-0">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Industry-Standard Algorithms</h4>
              <p className="text-gray-400 text-xs mt-1">We utilize state-of-the-art compression frameworks (including MozJPEG and WebP conversion engines) for maximum visual clarity and space saving.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/5">
            <div className="p-2 rounded-lg bg-white/5 text-brand-neon-blue shrink-0">
              <Globe className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Global Scalability</h4>
              <p className="text-gray-400 text-xs mt-1">Deployed globally across content delivery networks to guarantee near-instantaneous load times and minimal response latency from any region.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer support prompt */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-neon-blue/10 to-brand-purple/10 border border-white/10 space-y-4 text-center">
        <div className="space-y-1">
          <h3 className="text-white font-bold text-sm">Empower Your Workspace Today</h3>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
            Ready to explore our entire suite of professional document converters, visual optimizers, and AI generators?
          </p>
        </div>
        {onBackToHome && (
          <button 
            onClick={onBackToHome}
            className="px-5 py-2.5 bg-brand-neon-blue hover:bg-brand-neon-blue/80 text-brand-black font-semibold text-xs rounded-xl transition-all shadow-md shadow-brand-neon-blue/25 cursor-pointer"
          >
            Launch Free Tools
          </button>
        )}
      </div>
    </div>
  );
}
