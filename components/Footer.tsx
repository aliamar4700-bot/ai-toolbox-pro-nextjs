"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import AdSensePlaceholder from "./AdSensePlaceholder";

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (tab: string) => {
    onNavigate(tab);
    // Smooth scroll to top of main workspace view
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full mt-16 border-t border-white/5 pt-12 pb-8 text-xs text-gray-400 space-y-8" id="global-adsense-footer">
      {/* AdSense Footer Placement - Locked Height to protect CLS */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <AdSensePlaceholder slotType="footer" />
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 pb-6 border-b border-white/5">
        {/* Logo and Description */}
        <div className="md:col-span-5 space-y-4 text-left">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-brand-purple to-brand-neon-blue flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-display font-bold text-base text-white">
              AI Toolbox <span className="text-brand-neon-blue text-xs font-mono font-semibold">PRO</span>
            </span>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed max-w-sm">
            The ultimate SaaS web suite for elite professionals. Instantly access premium, local-first converters, dynamic document builders, lossless media optimizers, and advanced AI utilities.
          </p>
        </div>

        {/* Spacer */}
        <div className="hidden md:block md:col-span-2"></div>

        {/* Quick Navigation Links */}
        <div className="md:col-span-5 grid grid-cols-2 gap-6 text-left">
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-[11px] uppercase tracking-wider text-white">Platform</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleLinkClick("about-us")} 
                  className="hover:text-brand-neon-blue transition-colors cursor-pointer text-xs font-sans text-gray-400 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("faq")} 
                  className="hover:text-brand-neon-blue transition-colors cursor-pointer text-xs font-sans text-gray-400 text-left"
                >
                  FAQ Help Center
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("contact")} 
                  className="hover:text-brand-neon-blue transition-colors cursor-pointer text-xs font-sans text-gray-400 text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-display font-semibold text-[11px] uppercase tracking-wider text-white">Legal & Compliance</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleLinkClick("privacy-policy")} 
                  className="hover:text-brand-neon-blue transition-colors cursor-pointer text-xs font-sans text-gray-400 text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("terms-and-conditions")} 
                  className="hover:text-brand-neon-blue transition-colors cursor-pointer text-xs font-sans text-gray-400 text-left"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright segment */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-[11px] text-center sm:text-left">
        <p>Copyright © 2026 AI Toolbox Pro. All Rights Reserved.</p>
        <p className="font-mono text-[10px] text-gray-600">VER_4.0.0 • GOOGLE_ADSENSE_VERIFIED_SECURE</p>
      </div>
    </footer>
  );
}
