"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  CheckCircle, 
  Sparkles, 
  HelpCircle,
  MessageSquare,
  ShieldAlert,
  RefreshCw
} from "lucide-react";
import { PlatformState, ContactMessage } from "../app/types";
import { sanitizeInput, validateEmail } from "../utils/security";
import { BUSINESS_CONFIG } from "../config";

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
  
  // Spam protection state (Dynamic Math Equation)
  const [captchaNum1, setCaptchaNum1] = useState(() => Math.floor(Math.random() * 9) + 1);
  const [captchaNum2, setCaptchaNum2] = useState(() => Math.floor(Math.random() * 9) + 1);
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  // Status States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const regenerateCaptcha = () => {
    setCaptchaNum1(Math.floor(Math.random() * 9) + 1);
    setCaptchaNum2(Math.floor(Math.random() * 9) + 1);
    setCaptchaAnswer("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const safeName = sanitizeInput(fullName);
    const safeEmail = sanitizeInput(email);
    const safeSubject = sanitizeInput(subject);
    const safeMessage = sanitizeInput(message);

    // Validation
    if (!safeName.trim() || !safeEmail.trim() || !safeSubject.trim() || !safeMessage.trim()) {
      setErrorMessage("Please fill in all the required form fields.");
      return;
    }

    if (!validateEmail(safeEmail)) {
      setErrorMessage("Please enter a valid and secure email address format.");
      return;
    }

    // Spam Protection Verification
    const parsedAnswer = parseInt(captchaAnswer.trim(), 10);
    if (isNaN(parsedAnswer) || parsedAnswer !== (captchaNum1 + captchaNum2)) {
      setErrorMessage("Spam protection challenge failed. Please verify the simple math calculation.");
      regenerateCaptcha();
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API submit latency
      await new Promise((resolve) => setTimeout(resolve, 850));

      const newMessage: ContactMessage = {
        id: `msg-${Date.now()}`,
        name: safeName,
        email: safeEmail,
        message: `Subject: ${safeSubject}\n\nMessage: ${safeMessage}`,
        date: new Date().toISOString()
      };

      // Construct update activity
      const newActivity = {
        id: `act-${Date.now()}`,
        action: "Contact Form Submit",
        details: `Message received from ${safeName} (${safeEmail}) - Subject: "${safeSubject}"`,
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
      setCaptchaAnswer("");
      regenerateCaptcha();
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
          Have queries about custom utilities, feature requests, or technical integrations? Reach out to our dedicated support desk.
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

            {/* Support details with dynamic config email */}
            <div className="space-y-6">
              
              {/* Support Email */}
              <div className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-neon-blue group-hover:border-brand-neon-blue/30 transition-all shrink-0">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1 min-w-0">
                  <p className="text-xs text-gray-500 font-mono tracking-wider uppercase font-medium">Business Email</p>
                  <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-sm font-semibold text-white hover:text-brand-neon-blue transition-colors font-mono block truncate">
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>
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
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold flex items-start gap-2">
                <ShieldAlert className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="space-y-2">
              <h3 className="font-display font-bold text-lg text-white">Send a Direct Message</h3>
              <p className="text-gray-400 text-xs">Complete the secure form parameters below to initiate a private support ticket.</p>
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

            {/* Spam Protection */}
            <div className="space-y-2.5 p-4 bg-brand-black/40 rounded-xl border border-white/5">
              <label className="text-[10px] font-bold text-gray-400 block font-mono uppercase tracking-wider">
                Spam Verification Challenge <span className="text-brand-neon-blue font-bold">*</span>
              </label>
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <div className="flex items-center gap-2 bg-brand-charcoal border border-white/10 px-3.5 py-2 rounded-lg text-xs font-mono select-none">
                  <span className="text-white font-bold">{captchaNum1}</span>
                  <span className="text-brand-neon-blue font-extrabold">+</span>
                  <span className="text-white font-bold">{captchaNum2}</span>
                  <span className="text-gray-400">=</span>
                </div>
                <input 
                  type="text"
                  required
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                  placeholder="Sum"
                  className="w-full sm:w-24 bg-brand-black/60 border border-white/10 rounded-lg text-white text-xs px-3 py-2 focus:outline-none focus:border-brand-neon-blue font-mono"
                />
                <button
                  type="button"
                  onClick={regenerateCaptcha}
                  className="p-2 text-gray-500 hover:text-white transition-all rounded-lg hover:bg-white/5 cursor-pointer"
                  title="Generate new calculation challenge"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
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
