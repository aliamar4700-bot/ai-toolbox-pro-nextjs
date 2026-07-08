"use client";

import React from "react";
import { 
  Home, 
  LayoutDashboard, 
  Wrench, 
  BookOpen, 
  Settings, 
  ShieldCheck, 
  LogOut, 
  User, 
  Sparkles,
  ToggleLeft,
  ToggleRight,
  Menu,
  X,
  Mail
} from "lucide-react";
import { UserProfile } from "../app/types";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentUser: UserProfile | null;
  onSwitchUser: () => void;
  onLogout: () => void;
}

export default function Sidebar({ 
  activeTab, 
  setActiveTab, 
  currentUser, 
  onSwitchUser, 
  onLogout 
}: SidebarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { id: "homepage", name: "Homepage", icon: Home },
    { id: "dashboard", name: "Dashboard", icon: LayoutDashboard },
    { id: "tools", name: "AI Tools", icon: Wrench },
    { id: "blog", name: "SEO Blog", icon: BookOpen },
    { id: "contact", name: "Contact Us", icon: Mail },
    ...(currentUser?.role === "admin" ? [{ id: "admin", name: "Admin Panel", icon: ShieldCheck }] : []),
    { id: "settings", name: "Settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2.5 bg-brand-charcoal text-white rounded-lg border border-white/10 hover:border-brand-neon-blue transition-colors focus:outline-none"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Sidebar Container */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-brand-charcoal border-r border-white/5 flex flex-col justify-between transition-transform duration-300 ease-in-out
        md:translate-x-0 md:static md:h-screen
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        {/* Top Header */}
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-brand-purple to-brand-neon-blue flex items-center justify-center shadow-lg shadow-brand-neon-blue/20">
              <Sparkles className="h-5 w-5 text-white animate-pulse" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
                AI Toolbox <span className="text-xs px-1.5 py-0.5 rounded bg-brand-neon-blue/20 text-brand-neon-blue font-mono border border-brand-neon-blue/30">PRO</span>
              </h1>
              <p className="text-[10px] text-gray-500 font-mono">ALL-IN-ONE SAAS</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-2 space-y-1.5 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200
                  ${isActive 
                    ? "bg-brand-graphite text-white border-l-4 border-brand-neon-blue shadow-md shadow-brand-neon-blue/5" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-brand-neon-blue" : ""}`} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Profile and Quick-Role Switcher */}
        <div className="p-4 border-t border-white/5 space-y-4">
          {/* Quick-Role Switcher */}
          <div className="bg-brand-black/50 border border-white/5 rounded-xl p-3 space-y-2">
            <div className="flex items-center justify-between text-[11px] text-gray-500 font-mono">
              <span>DEMO TESTING ROLE</span>
              <span className={`px-1.5 py-0.2 rounded font-bold uppercase ${currentUser?.role === 'admin' ? 'bg-brand-purple/20 text-brand-purple' : 'bg-brand-neon-blue/20 text-brand-neon-blue'}`}>
                {currentUser?.role}
              </span>
            </div>
            <button
              onClick={onSwitchUser}
              className="w-full flex items-center justify-between px-2.5 py-1.5 bg-brand-graphite rounded-lg text-xs font-medium text-gray-300 hover:text-white transition-colors border border-white/5 hover:border-brand-neon-blue/20"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3 w-3 text-brand-neon-blue" />
                Switch to {currentUser?.role === "admin" ? "User Account" : "Admin Account"}
              </span>
              {currentUser?.role === "admin" ? (
                <ToggleRight className="h-4 w-4 text-brand-neon-blue" />
              ) : (
                <ToggleLeft className="h-4 w-4 text-gray-500" />
              )}
            </button>
          </div>

          {/* User Session Profile Card */}
          <div className="flex items-center justify-between gap-3 p-2 bg-white/5 rounded-xl border border-white/5">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="h-8 w-8 rounded-lg bg-brand-graphite flex items-center justify-center border border-white/10 shrink-0">
                <User className="h-4 w-4 text-brand-neon-blue" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white truncate leading-tight">{currentUser?.name || currentUser?.displayName}</p>
                <p className="text-[10px] text-gray-500 truncate leading-tight">{currentUser?.email}</p>
              </div>
            </div>
            <button 
              onClick={onLogout}
              className="p-1.5 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors shrink-0"
              title="Logout / Change Account"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
        />
      )}
    </>
  );
}
