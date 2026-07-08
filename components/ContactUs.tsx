"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Send, 
  CheckCircle, 
  Sparkles, 
  Twitter, 
  Linkedin, 
  Github, 
  HelpCircle,
  MessageSquare
} from "lucide-react";
import { PlatformState, ContactMessage } from "../app/types";

interface ContactUsProps {
  state: PlatformState;
  onUpdateState: (newState: PlatformState) => void;
}

export default function ContactUs({ state, onUpdateState }: ContactUsProps) {
  // Form States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  // Status States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorMessage("Please fill in all the required form fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API submit latency
      await new Promise((resolve) => setTimeout(resolve, 800));

      const newMessage: ContactMessage = {
        id: `msg-${Date.now()}`,
        name: fullName,
        email: email,
        message: `Subject: ${subject}\n\nMessage: ${message}`,
        date: new Date().toISOString()
      };

      // Construct update activity
      const newActivity = {
        id: `act-${Date.now()}`,
        action: "Contact Form Submit",
        details: `Message received from ${fullName} (${email}) - Subject: "${subject}"`,
        timestamp: new Date().toISOString()
      };

      // Update state
      onUpdateState({
        ...state,
        messages: [...(state.messages || []), newMessage],
        activities: [newActivity, ...state.activities]
      });

      // Clear Form & Show Success
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setSubmitSuccess(true);
      
      // Auto dismiss success toast after 8 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 8000);

    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "What is your standard support response time?",
      a: "Our support engineering team typically reviews all developer and customer inquiries within 12 to 24 hours on business days."
    },
    {
      q: "Where is my generated content stored?",
      a: "All document creations are stored locally in your browser workspace storage. Contact messages are stored in client-side secure registers."
    },
    {
      q: "How can I request custom enterprise modules?",
      a: "Feel free to use this contact form with the subject 'Enterprise Request'. Our sales team will follow up with custom SLA structures."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-16">
      
      {/* Hero Header */}
      <section className="relative text-center max-w-3xl mx-auto space-y-4">
        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-neon-blue/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-brand-purple/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-neon-blue shadow-lg shadow-brand-neon-blue/5 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-brand-neon-blue" />
          <span>Global Professional Support Desk</span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight text-white">
          Contact Our <span className="bg-gradient-to-r from-brand-neon-blue to-brand-purple bg-clip-text text-transparent">Support Team</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Have queries about custom models, billing issues, or technical integration? Reach out to our dedicated support desk.
        </p>
      </section>

      {/* Two Column Grid */}
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-8 border-white/5 relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-purple/5 blur-[50px] rounded-full pointer-events-none" />
            
            <h3 className="font-display font-bold text-lg text-white flex items-center gap-2.5 border-b border-white/5 pb-4">
              <MessageSquare className="h-5 w-5 text-brand-purple" />
              Corporate Touchpoints
            </h3>

            {/* Support details with standard easy-to-replace placeholders */}
            <div className="space-y-6">
              
              {/* Support Email */}
              <div className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-neon-blue group-hover:border-brand-neon-blue/30 transition-all shrink-0">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 font-mono tracking-wider uppercase font-medium">Support Email</p>
                  <a href="mailto:support@example.com" className="text-sm font-semibold text-white hover:text-brand-neon-blue transition-colors font-mono">
                    support@example.com
                  </a>
                </div>
              </div>

              {/* Support Hotline */}
              <div className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-neon-blue group-hover:border-brand-neon-blue/30 transition-all shrink-0">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 font-mono tracking-wider uppercase font-medium">Phone Support</p>
                  <a href="tel:+000000000000" className="text-sm font-semibold text-white hover:text-brand-neon-blue transition-colors font-mono">
                    +00 000 0000000
                  </a>
                </div>
              </div>

              {/* Physical Location */}
              <div className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-neon-blue group-hover:border-brand-neon-blue/30 transition-all shrink-0">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 font-mono tracking-wider uppercase font-medium">Business Address</p>
                  <p className="text-sm font-semibold text-white leading-relaxed">
                    Business Address Here
                  </p>
                </div>
              </div>

              {/* Main Website */}
              <div className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-neon-blue group-hover:border-brand-neon-blue/30 transition-all shrink-0">
                  <Globe className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 font-mono tracking-wider uppercase font-medium">Primary Website</p>
                  <a href="https://yourdomain.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-brand-neon-blue transition-colors font-mono flex items-center gap-1">
                    https://yourdomain.com
                  </a>
                </div>
              </div>

            </div>

            {/* Social Media (using # links per instructions) */}
            <div className="pt-6 border-t border-white/5">
              <p className="text-xs text-gray-500 font-mono mb-3.5 tracking-wider uppercase font-medium">Find us on socials</p>
              <div className="flex items-center gap-3">
                <a href="#" className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 hover:border-brand-neon-blue/50 hover:text-brand-neon-blue flex items-center justify-center transition-all cursor-pointer">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 hover:border-brand-neon-blue/50 hover:text-brand-neon-blue flex items-center justify-center transition-all cursor-pointer">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 hover:border-brand-neon-blue/50 hover:text-brand-neon-blue flex items-center justify-center transition-all cursor-pointer">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick FAQ / Guideline Card */}
          <div className="glass-panel rounded-2xl p-6 border-white/5 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
              <HelpCircle className="h-4 w-4 text-brand-purple" /> Support Guidelines
            </h4>
            <div className="space-y-3.5">
              {faqs.map((f, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-xs font-semibold text-white">{f.q}</p>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Premium Contact Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border-white/5 relative">
            
            {/* Success Notification Banner */}
            {submitSuccess && (
              <div className="p-4 rounded-xl bg-brand-neon-blue/10 border border-brand-neon-blue/30 text-brand-neon-blue text-xs font-semibold flex items-start gap-3 animate-fade-in relative z-10">
                <CheckCircle className="h-5 w-5 text-brand-neon-blue shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-sm">Message Transmitted Successfully!</p>
                  <p className="text-gray-300 font-normal mt-0.5">Your message has been received. Our support engineers will review and respond to you shortly.</p>
                </div>
              </div>
            )}

            {/* Error Message Banner */}
            {errorMessage && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
                {errorMessage}
              </div>
            )}

            <div className="space-y-2">
              <h3 className="font-display font-bold text-lg text-white">Send a Direct Message</h3>
              <p className="text-gray-400 text-xs">Complete the secure form parameters below to initiate a private tracking ticket.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 block font-mono uppercase tracking-wider">
                  Full Name <span className="text-brand-neon-blue font-bold">*</span>
                </label>
                <input 
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Iftikhar Ali"
                  className="w-full bg-brand-black/60 border border-white/10 rounded-xl text-white text-xs pl-4 pr-4 py-3.5 focus:outline-none focus:border-brand-neon-blue focus:ring-1 focus:ring-brand-neon-blue/20 transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 block font-mono uppercase tracking-wider">
                  Email Address <span className="text-brand-neon-blue font-bold">*</span>
                </label>
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="iftikharaliattari05@gmail.com"
                  className="w-full bg-brand-black/60 border border-white/10 rounded-xl text-white text-xs pl-4 pr-4 py-3.5 focus:outline-none focus:border-brand-neon-blue focus:ring-1 focus:ring-brand-neon-blue/20 transition-all"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 block font-mono uppercase tracking-wider">
                Message Subject <span className="text-brand-neon-blue font-bold">*</span>
              </label>
              <input 
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Billing query / Technical integration assistance"
                className="w-full bg-brand-black/60 border border-white/10 rounded-xl text-white text-xs pl-4 pr-4 py-3.5 focus:outline-none focus:border-brand-neon-blue focus:ring-1 focus:ring-brand-neon-blue/20 transition-all"
              />
            </div>

            {/* Message Body */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 block font-mono uppercase tracking-wider">
                Detailed Message <span className="text-brand-neon-blue font-bold">*</span>
              </label>
              <textarea 
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your comprehensive message detailing how our tech desk can guide you..."
                className="w-full bg-brand-black/60 border border-white/10 rounded-xl text-white text-xs pl-4 pr-4 py-3.5 focus:outline-none focus:border-brand-neon-blue focus:ring-1 focus:ring-brand-neon-blue/20 transition-all resize-none"
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-brand-neon-blue to-brand-purple text-white rounded-xl font-bold text-sm shadow-xl shadow-brand-neon-blue/10 hover:shadow-brand-neon-blue/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-pulse">Transmitting Securely...</span>
                </>
              ) : (
                <>
                  <span>Send Ticket Message</span>
                  <Send className="h-4 w-4 text-white" />
                </>
              )}
            </button>

          </form>
        </div>

      </div>

    </div>
  );
}
