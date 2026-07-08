"use client";

import React, { useState } from "react";
import { 
  Settings, 
  Lock, 
  Mail, 
  Chrome, 
  CheckCircle, 
  LogOut, 
  KeyRound
} from "lucide-react";
import { PlatformState, UserProfile } from "../app/types";

interface SettingsAndAuthProps {
  state: PlatformState;
  onUpdateState: (newState: PlatformState) => void;
  onLogin: (user: UserProfile) => void;
  onLogout: () => void;
}

export default function SettingsAndAuth({ 
  state, 
  onUpdateState,
  onLogin,
  onLogout 
}: SettingsAndAuthProps) {
  const [authMode, setAuthMode] = useState<"login" | "register" | "forgot" | "profile">("profile");
  const [alertMsg, setAlertMsg] = useState<string | null>(null);

  // Auth Inputs
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");

  // Profile Inputs
  const [profileName, setProfileName] = useState(state.currentUser?.displayName || state.currentUser?.name || "Iftikhar Ali");
  const [profileEmail, setProfileEmail] = useState(state.currentUser?.email || "iftikharaliattari05@gmail.com");
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");

  // Preferences
  const [notifyDaily, setNotifyDaily] = useState(true);

  const showToast = (msg: string) => {
    setAlertMsg(msg);
    setTimeout(() => setAlertMsg(null), 4000);
  };

  const handleMockLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;

    const matchedUser = state.users.find(u => u.email.toLowerCase() === emailInput.toLowerCase());
    if (matchedUser) {
      onLogin(matchedUser);
    } else {
      const namePart = emailInput.split("@")[0];
      const newUser: UserProfile = {
        id: `usr-${Date.now()}`,
        uid: `usr-${Date.now()}`,
        name: namePart,
        displayName: namePart,
        email: emailInput,
        role: "user",
        subscription: "free",
        createdAt: new Date().toISOString()
      };
      
      onUpdateState({
        ...state,
        users: [...state.users, newUser]
      });
      onLogin(newUser);
    }

    setEmailInput("");
    setPassInput("");
  };

  const handleGoogleLogin = () => {
    const googleUser: UserProfile = {
      id: "usr-google-demo",
      uid: "usr-google-demo",
      name: "Google Dev Account",
      displayName: "Google Dev Account",
      email: "google.tester@gmail.com",
      role: "user",
      subscription: "pro", 
      createdAt: new Date().toISOString()
    };

    onUpdateState({
      ...state,
      users: state.users.some(u => u.uid === googleUser.uid) ? state.users : [...state.users, googleUser]
    });
    onLogin(googleUser);
  };

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.currentUser) return;

    const updatedUser: UserProfile = {
      ...state.currentUser,
      name: profileName,
      displayName: profileName,
      email: profileEmail
    };

    const updatedUsers = state.users.map(u => u.uid === state.currentUser?.uid || u.id === state.currentUser?.id ? updatedUser : u);

    onUpdateState({
      ...state,
      currentUser: updatedUser,
      users: updatedUsers
    });

    showToast("✓ Profile metadata successfully saved!");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-10">
      {/* 1. Header */}
      <div>
        <h1 className="font-display font-bold text-3xl text-white flex items-center gap-2">
          <Settings className="h-7 w-7 text-brand-purple" />
          Account & Portal Configurations
        </h1>
        <p className="text-gray-400 text-xs mt-1">Configure notifications, security credentials, mock SSO pathways, or manage settings.</p>
      </div>

      {/* Floating Status Toast */}
      {alertMsg && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-brand-neon-blue/15 border border-brand-neon-blue/40 text-brand-neon-blue text-xs font-semibold shadow-2xl animate-fade-in-up">
          {alertMsg}
        </div>
      )}

      {/* Auth and Profile tabs switcher */}
      <div className="flex border-b border-white/5 bg-brand-black/20 p-1 rounded-xl max-w-sm">
        <button 
          onClick={() => setAuthMode("profile")}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${authMode === "profile" ? "bg-brand-purple text-white font-bold" : "text-gray-400 hover:text-white"}`}
        >
          My Profile
        </button>
        <button 
          onClick={() => setAuthMode("login")}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${authMode === "login" ? "bg-brand-purple text-white font-bold" : "text-gray-400 hover:text-white"}`}
        >
          Portal Authentication
        </button>
      </div>

      {/* =========================================================================
          VIEW A: ACCOUNT PROFILE SETTINGS
         ========================================================================= */}
      {authMode === "profile" && (
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* User profile Summary card */}
          <div className="glass-panel rounded-2xl p-6 text-center space-y-5">
            <div className="relative inline-block">
              <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-brand-neon-blue to-brand-purple p-1 mx-auto">
                <div className="h-full w-full rounded-full bg-brand-charcoal flex items-center justify-center font-display text-2xl font-bold text-white">
                  {(state.currentUser?.displayName || state.currentUser?.name || "U")[0]}
                </div>
              </div>
              <span className="absolute bottom-0 right-2 h-4 w-4 bg-emerald-500 border-2 border-brand-charcoal rounded-full" />
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-white text-lg">{state.currentUser?.displayName || state.currentUser?.name || "SaaS User"}</h3>
              <p className="text-gray-400 text-xs">{state.currentUser?.email || "user@example.com"}</p>
            </div>

            <div className="p-3 bg-brand-black/50 border border-white/5 rounded-xl space-y-2">
              <p className="text-[10px] text-gray-500 font-mono font-bold">WORKSPACE LEVEL:</p>
              <span className="px-3 py-1 rounded-lg bg-brand-neon-blue/10 text-brand-neon-blue border border-brand-neon-blue/25 text-xs font-bold uppercase tracking-wider font-mono">
                {state.currentUser?.subscription || "free"} subscription
              </span>
            </div>

            <button 
              onClick={onLogout}
              className="w-full py-2.5 bg-red-500/10 hover:bg-red-500 hover:text-white text-red-400 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
            >
              <LogOut className="h-4 w-4" /> Sign Out of Platform
            </button>
          </div>

          {/* Form edit fields */}
          <div className="glass-panel rounded-2xl p-6 md:col-span-2 space-y-6">
            <h3 className="font-display font-bold text-base text-white">Personal Information</h3>
            
            <form onSubmit={handleUpdateProfile} className="space-y-4 text-xs text-gray-300">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-gray-400">Display Name</label>
                  <input 
                    type="text" 
                    value={profileName} 
                    onChange={(e) => setProfileName(e.target.value)} 
                    className="w-full p-2.5 bg-brand-black border border-white/5 rounded-xl text-white focus:border-brand-neon-blue focus:outline-none" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    value={profileEmail} 
                    onChange={(e) => setProfileEmail(e.target.value)} 
                    className="w-full p-2.5 bg-brand-black border border-white/5 rounded-xl text-white focus:border-brand-neon-blue focus:outline-none" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/5">
                <div className="space-y-1">
                  <label className="text-gray-400">Current Password</label>
                  <input 
                    type="password" 
                    value={currentPass} 
                    onChange={(e) => setCurrentPass(e.target.value)} 
                    placeholder="••••••••"
                    className="w-full p-2.5 bg-brand-black border border-white/5 rounded-xl text-white focus:border-brand-neon-blue focus:outline-none" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-gray-400">New Password</label>
                  <input 
                    type="password" 
                    value={newPass} 
                    onChange={(e) => setNewPass(e.target.value)} 
                    placeholder="Min 8 characters"
                    className="w-full p-2.5 bg-brand-black border border-white/5 rounded-xl text-white focus:border-brand-neon-blue focus:outline-none" 
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-3.5">
                <h4 className="font-semibold text-white">Interface Preferences</h4>
                <div className="flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <p className="text-white font-medium">Daily Progress Alerts</p>
                    <p className="text-gray-500 text-[10px]">Send email reminders to check off active habit tracking cards daily.</p>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={notifyDaily} 
                    onChange={(e) => setNotifyDaily(e.target.checked)} 
                    className="h-4 w-4 bg-brand-black border border-white/10 rounded text-brand-neon-blue focus:ring-0"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-brand-neon-blue text-brand-black font-bold text-xs rounded-xl shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
              >
                <CheckCircle className="h-4 w-4" /> Save Metadata Changes
              </button>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW B: SIMULATED IDENTITY ENDPOINT SIGN-INS
         ========================================================================= */}
      {authMode === "login" && (
        <div className="max-w-md mx-auto glass-panel rounded-3xl p-8 space-y-6">
          <div className="text-center space-y-1.5">
            <h3 className="font-display font-extrabold text-2xl text-white">Sign In to Workspace</h3>
            <p className="text-gray-400 text-xs">Enter credentials to restore saved files and premium API credits.</p>
          </div>

          <form onSubmit={handleMockLogin} className="space-y-4 text-xs text-gray-300">
            <div className="space-y-1">
              <label className="text-gray-400">Professional Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-500" />
                <input 
                  type="email" 
                  required 
                  value={emailInput} 
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="name@company.com" 
                  className="w-full pl-10 pr-4 py-3 bg-brand-black border border-white/5 rounded-xl text-white focus:border-brand-neon-blue focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-gray-400">Password</label>
                <button 
                  type="button" 
                  onClick={() => showToast("✓ A mock reset signature token has been generated. Use any login to proceed.")} 
                  className="text-[10px] text-brand-neon-blue hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-500" />
                <input 
                  type="password" 
                  value={passInput} 
                  onChange={(e) => setPassInput(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full pl-10 pr-4 py-3 bg-brand-black border border-white/5 rounded-xl text-white focus:border-brand-neon-blue focus:outline-none"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-3 bg-brand-neon-blue text-brand-black font-bold text-xs rounded-xl shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
            >
              <KeyRound className="h-4 w-4" /> Sign In securely
            </button>
          </form>

          <div className="relative flex items-center justify-center my-4">
            <div className="border-t border-white/5 w-full absolute" />
            <span className="bg-brand-charcoal text-gray-500 px-3 py-1 text-[9px] font-mono tracking-widest relative">OR CONTINUE WITH</span>
          </div>

          <button 
            onClick={handleGoogleLogin}
            className="w-full py-3 bg-brand-graphite text-white rounded-xl border border-white/5 hover:border-brand-neon-blue/20 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
          >
            <Chrome className="h-4 w-4 text-red-400" />
            <span>Continue with Google Secure Sign-in</span>
          </button>
        </div>
      )}
    </div>
  );
}
