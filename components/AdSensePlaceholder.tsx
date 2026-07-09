"use client";

import React, { useEffect, useRef } from "react";
import { Megaphone, Info } from "lucide-react";

interface AdSensePlaceholderProps {
  slotType: "top-banner" | "sidebar" | "between-sections" | "footer";
}

// Global window declaration for AdSense pushing
declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export default function AdSensePlaceholder({ slotType }: AdSensePlaceholderProps) {
  const adInitializedRef = useRef(false);

  const getSlotConfig = () => {
    switch (slotType) {
      case "top-banner":
        return {
          containerClass: "w-full max-w-4xl mx-auto mb-8 p-3 bg-brand-charcoal/20 border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center",
          dimensions: "Leaderboard (728x90 or Responsive Banner)",
          label: "Top Sponsor Placement",
          minHeight: "90px",
          height: "90px",
          adSlot: "1234567890", // Example slot ID
        };
      case "sidebar":
        return {
          containerClass: "w-full p-4 bg-brand-charcoal/20 border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center space-y-3",
          dimensions: "Medium Rectangle (300x250)",
          label: "Workspace Sponsor Link",
          minHeight: "250px",
          height: "250px",
          adSlot: "2345678901",
        };
      case "between-sections":
        return {
          containerClass: "w-full my-8 p-4 bg-brand-charcoal/20 border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center",
          dimensions: "Horizontal Feed (Responsive Banner)",
          label: "Sponsored Content Section",
          minHeight: "120px",
          height: "120px",
          adSlot: "3456789012",
        };
      case "footer":
        return {
          containerClass: "w-full mt-6 p-3 bg-brand-charcoal/10 border border-white/5 rounded-xl flex flex-col items-center justify-center text-center",
          dimensions: "Standard Banner (468x60 or Responsive)",
          label: "Footer Ad Placement",
          minHeight: "75px",
          height: "75px",
          adSlot: "4567890123",
        };
    }
  };

  const config = getSlotConfig();

  useEffect(() => {
    // Only attempt to initialize ads once per component instance mount
    if (adInitializedRef.current) return;
    
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        adInitializedRef.current = true;
      }
    } catch (err) {
      console.warn("Google AdSense push error (usually due to AdBlock or local workspace environment):", err);
    }
  }, [slotType]);

  return (
    <div 
      className={`${config.containerClass} relative overflow-hidden group select-none transition-all hover:border-white/10`}
      id={`adsense-slot-${slotType}`}
      style={{ minHeight: config.minHeight }}
    >
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
      
      {/* Ad Disclosure Label */}
      <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-gray-500 uppercase mb-1.5 pointer-events-none">
        <Megaphone className="h-3 w-3 text-gray-600 group-hover:text-brand-neon-blue transition-colors" />
        <span>Advertisement — {config.label}</span>
      </div>

      {/* Google AdSense container with size locks to eliminate Cumulative Layout Shift (CLS) */}
      <div className="w-full relative flex items-center justify-center rounded-xl" style={{ minHeight: "50px" }}>
        {/* Real AdSense Ins Tag */}
        <ins 
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: config.height }}
          data-ad-client="ca-pub-3940256099942544" // Google official AdSense test publisher ID
          data-ad-slot={config.adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />

        {/* Beautiful fallback placeholder overlay shown when script is not loaded yet or blocked */}
        <div className="absolute inset-0 flex items-center justify-center bg-brand-black/30 border border-dashed border-white/5 rounded-lg p-3 pointer-events-none">
          <div className="flex items-center gap-2.5">
            <div className="h-2 w-2 rounded-full bg-brand-neon-blue animate-pulse" />
            <div className="text-left">
              <p className="text-[10px] font-mono text-gray-400">
                Google AdSense Unit • <span className="text-brand-purple font-semibold">{config.dimensions}</span>
              </p>
              <p className="text-[8px] text-gray-600 font-mono flex items-center gap-1 mt-0.5">
                <Info className="h-2 w-2" /> Space reserved. Safe from layout shift.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
