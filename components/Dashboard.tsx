"use client";

import React from "react";
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid
} from "recharts";
import { 
  FileText, 
  Download, 
  History, 
  Star, 
  TrendingUp, 
  Trash2, 
  Play, 
  File, 
  FolderHeart,
  ChevronRight,
  Eye,
  CheckCircle,
  Clock,
  Sparkles
} from "lucide-react";
import { PlatformState, SavedFile, RecentActivity, DownloadHistory } from "../app/types";
import { exportToPDF, exportToTXT } from "../utils/exporter";

interface DashboardProps {
  state: PlatformState;
  onSelectTool: (toolId: string) => void;
  onDeleteFile: (fileId: string) => void;
  onUpdateState: (newState: PlatformState) => void;
}

export default function Dashboard({ 
  state, 
  onSelectTool, 
  onDeleteFile,
  onUpdateState
}: DashboardProps) {
  const [activeTab, setActiveTab] = React.useState<"saved" | "downloads" | "activity">("saved");
  const [previewFile, setPreviewFile] = React.useState<SavedFile | null>(null);

  // Compute stats
  const totalGenerations = state.savedFiles.length + state.downloads.length;
  const favoriteTools = state.favorites;
  const savedCount = state.savedFiles.length;
  const downloadCount = state.downloads.length;

  // Chart data: Usage counts
  const chartData = Object.entries(state.usageCount).map(([key, val]) => {
    let name = "Tool";
    if (key === "tool-resume") name = "Resume";
    if (key === "tool-pdf") name = "PDFs";
    if (key === "tool-compress") name = "Compress";
    if (key === "tool-qr") name = "QR Codes";
    if (key === "tool-email") name = "Emails";
    if (key === "tool-notes") name = "Notes";
    if (key === "tool-cover") name = "Cover Letter";
    if (key === "tool-bio") name = "Bios";
    if (key === "tool-caption") name = "Captions";
    if (key === "tool-habit") name = "Habits";
    return { name, usage: val };
  });

  // Trend data: Simulated last 5 days
  const trendData = [
    { day: "Mon", runs: 12 },
    { day: "Tue", runs: 18 },
    { day: "Wed", runs: 24 },
    { day: "Thu", runs: 19 },
    { day: "Fri", runs: 31 },
    { day: "Sat", runs: 15 },
    { day: "Sun", runs: 28 }
  ];

  const handleDownloadSavedFile = (file: SavedFile) => {
    if (file.format === "PDF") {
      exportToPDF(`${file.title.replace(/\s+/g, "_")}.pdf`, file.title, file.content, file.toolType === "AI Resume Builder");
    } else {
      exportToTXT(`${file.title.replace(/\s+/g, "_")}.txt`, file.content);
    }

    // Add download record
    const newDownload: DownloadHistory = {
      id: `dl-${Date.now()}`,
      filename: `${file.title.replace(/\s+/g, "_")}.${file.format.toLowerCase()}`,
      format: file.format,
      timestamp: new Date().toISOString(),
      toolType: file.toolType
    };

    onUpdateState({
      ...state,
      downloads: [newDownload, ...state.downloads]
    });
  };

  const getToolIdFromType = (type: string): string => {
    if (type === "AI Resume Builder") return "tool-resume";
    if (type === "AI Cover Letter Generator") return "tool-cover";
    if (type === "AI Email Writer") return "tool-email";
    if (type === "AI Bio Generator") return "tool-bio";
    if (type === "AI Caption Generator") return "tool-caption";
    if (type === "AI Study Notes Generator") return "tool-notes";
    if (type === "AI Habit Tracker") return "tool-habit";
    if (type === "AI PDF Tools") return "tool-pdf";
    if (type === "Image Compressor") return "tool-compress";
    if (type === "QR Code Generator") return "tool-qr";
    return "tools";
  };

  return (
    <div className="space-y-8 pb-10">
      {/* 1. Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-display font-bold text-3xl tracking-tight text-white flex items-center gap-2">
            Workspace Dashboard
          </h1>
          <p className="text-gray-400 text-xs">
            Monitor credits, manage generated files, and launch your favorite AI productivity engines.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-brand-charcoal border border-white/5 rounded-xl flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-neon-blue animate-pulse" />
            <span className="text-xs text-gray-300 font-mono">
              Role: <span className="text-brand-neon-blue font-bold uppercase">{state.currentUser?.role}</span>
            </span>
          </div>
          <button 
            onClick={() => onSelectTool("tool-resume")}
            className="px-4 py-2 bg-gradient-to-r from-brand-neon-blue to-brand-purple text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-md shadow-brand-neon-blue/10 hover:shadow-brand-neon-blue/20 transition-all"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>New Content</span>
          </button>
        </div>
      </div>

      {/* 2. Overview Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-panel rounded-2xl p-4 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-[10px] text-gray-500 font-mono tracking-wider">SAVED FILES</p>
            <p className="text-2xl font-bold text-white font-display">{savedCount}</p>
          </div>
          <div className="p-2.5 bg-brand-neon-blue/10 rounded-xl text-brand-neon-blue">
            <FileText className="h-5 w-5" />
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-4 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-[10px] text-gray-500 font-mono tracking-wider">DOWNLOADS</p>
            <p className="text-2xl font-bold text-white font-display">{downloadCount}</p>
          </div>
          <div className="p-2.5 bg-brand-purple/10 rounded-xl text-brand-purple">
            <Download className="h-5 w-5" />
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-4 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-[10px] text-gray-500 font-mono tracking-wider">TOTAL ACTIVE RUNS</p>
            <p className="text-2xl font-bold text-white font-display">{totalGenerations}</p>
          </div>
          <div className="p-2.5 bg-brand-electric-cyan/10 rounded-xl text-brand-electric-cyan">
            <TrendingUp className="h-5 w-5" />
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-4 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-[10px] text-gray-500 font-mono tracking-wider">FAVORITES</p>
            <p className="text-2xl font-bold text-white font-display">{favoriteTools.length}</p>
          </div>
          <div className="p-2.5 bg-yellow-500/10 rounded-xl text-yellow-500">
            <Star className="h-5 w-5 fill-yellow-500" />
          </div>
        </div>
      </div>

      {/* 3. Recharts Visual Analytics */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-panel rounded-2xl p-5 space-y-4 md:col-span-2">
          <div className="flex justify-between items-center pb-2 border-b border-white/5">
            <h3 className="font-display font-bold text-sm text-white">Tool Popularity Matrix</h3>
            <span className="text-[10px] font-mono text-brand-neon-blue bg-brand-neon-blue/10 px-2 py-0.5 rounded">LIFETIME USES</span>
          </div>
          <div className="h-64 w-full text-xs font-mono">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
                <XAxis dataKey="name" stroke="#555555" fontSize={10} tickLine={false} />
                <YAxis stroke="#555555" fontSize={10} tickLine={false} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: "#111111", borderColor: "rgba(255,255,255,0.1)", borderRadius: "8px" }}
                  labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
                  itemStyle={{ color: "#00BFFF" }}
                />
                <Bar dataKey="usage" fill="#7C3AED" radius={[4, 4, 0, 0]} barSize={28}>
                  {chartData.map((entry, index) => (
                    <rect key={`bar-${index}`} fill={index % 2 === 0 ? "#00BFFF" : "#7C3AED"} />
                  ))}
                </Bar>
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-5 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-white/5">
            <h3 className="font-display font-bold text-sm text-white">Velocity Trend</h3>
            <span className="text-[10px] font-mono text-brand-purple bg-brand-purple/10 px-2 py-0.5 rounded">WEEKLY ACTIONS</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 10, right: 5, left: -25, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorRuns" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#00E5FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#555555" fontSize={9} tickLine={false} />
                <YAxis stroke="#555555" fontSize={9} tickLine={false} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: "#111111", borderColor: "rgba(255,255,255,0.1)", borderRadius: "8px" }}
                  labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
                  itemStyle={{ color: "#00E5FF" }}
                />
                <Area type="monotone" dataKey="runs" stroke="#00E5FF" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRuns)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 4. Favorites & Quick Launcher */}
      <div className="glass-panel rounded-2xl p-5 space-y-4">
        <h3 className="font-display font-bold text-base text-white flex items-center gap-2">
          <FolderHeart className="h-5 w-5 text-red-500 fill-red-500/10" />
          Favorite Shortcuts
        </h3>
        {favoriteTools.length === 0 ? (
          <p className="text-gray-500 text-xs">You haven't favorited any tools yet. Star them inside the AI Tools panel!</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {favoriteTools.map((toolId) => {
              let label = "Tool";
              if (toolId === "tool-resume") label = "Resume Builder";
              if (toolId === "tool-pdf") label = "PDF Tools";
              if (toolId === "tool-compress") label = "Compressor";
              if (toolId === "tool-qr") label = "QR Generator";
              if (toolId === "tool-email") label = "Email Writer";
              if (toolId === "tool-cover") label = "Cover Letter";
              if (toolId === "tool-bio") label = "Bio Writer";
              if (toolId === "tool-caption") label = "Caption Writer";
              if (toolId === "tool-notes") label = "Study Notes";
              if (toolId === "tool-habit") label = "Habit Tracker";

              return (
                <button
                  key={toolId}
                  onClick={() => onSelectTool(toolId)}
                  className="p-3 bg-brand-graphite hover:bg-brand-graphite/70 rounded-xl border border-white/5 hover:border-brand-neon-blue/20 flex items-center justify-between text-left group transition-all"
                >
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-white group-hover:text-brand-neon-blue transition-colors">{label}</p>
                    <p className="text-[10px] text-gray-500">Run workspace</p>
                  </div>
                  <Play className="h-3.5 w-3.5 text-gray-500 group-hover:text-brand-neon-blue group-hover:translate-x-0.5 transition-all fill-brand-neon-blue/5" />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 5. Triple Tabbed Detailed List Panel */}
      <div className="glass-panel rounded-2xl overflow-hidden">
        {/* Navigation Tabs */}
        <div className="flex border-b border-white/5 bg-brand-black/30">
          <button
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-all ${activeTab === "saved" ? "border-brand-neon-blue text-white bg-white/5" : "border-transparent text-gray-400 hover:text-white"}`}
          >
            <File className="h-3.5 w-3.5" />
            Saved Files ({savedCount})
          </button>
          <button
            onClick={() => setActiveTab("downloads")}
            className={`px-5 py-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-all ${activeTab === "downloads" ? "border-brand-neon-blue text-white bg-white/5" : "border-transparent text-gray-400 hover:text-white"}`}
          >
            <Download className="h-3.5 w-3.5" />
            Download History ({downloadCount})
          </button>
          <button
            onClick={() => setActiveTab("activity")}
            className={`px-5 py-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-all ${activeTab === "activity" ? "border-brand-neon-blue text-white bg-white/5" : "border-transparent text-gray-400 hover:text-white"}`}
          >
            <History className="h-3.5 w-3.5" />
            SaaS Logs ({state.activities.length})
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-5">
          {activeTab === "saved" && (
            <div className="space-y-3">
              {state.savedFiles.length === 0 ? (
                <p className="text-gray-500 text-xs text-center py-8">No saved files yet. Generate content inside AI Tools to save!</p>
              ) : (
                state.savedFiles.map((file) => (
                  <div key={file.id} className="p-4 bg-brand-graphite rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border border-white/5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-brand-neon-blue/10 text-brand-neon-blue border border-brand-neon-blue/20 text-[9px] font-mono tracking-wide uppercase">{file.format}</span>
                        <h4 className="font-semibold text-white text-sm">{file.title}</h4>
                      </div>
                      <p className="text-[10px] text-gray-500 font-mono">Tool: {file.toolType} • Created: {new Date(file.createdAt).toLocaleString()}</p>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <button 
                        onClick={() => setPreviewFile(file)}
                        className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-lg text-xs font-medium flex items-center gap-1 hover:border hover:border-white/10"
                      >
                        <Eye className="h-3.5 w-3.5" /> Preview
                      </button>
                      <button 
                        onClick={() => handleDownloadSavedFile(file)}
                        className="p-2 text-brand-neon-blue hover:text-white bg-brand-neon-blue/10 rounded-lg text-xs font-medium flex items-center gap-1"
                      >
                        <Download className="h-3.5 w-3.5" /> Download
                      </button>
                      <button 
                        onClick={() => onDeleteFile(file.id)}
                        className="p-2 text-red-400 hover:text-white hover:bg-red-500/10 rounded-lg"
                        title="Delete file"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "downloads" && (
            <div className="space-y-3">
              {state.downloads.length === 0 ? (
                <p className="text-gray-500 text-xs text-center py-8">No downloads tracked in this session yet.</p>
              ) : (
                state.downloads.map((dl) => (
                  <div key={dl.id} className="p-3.5 bg-brand-graphite/40 rounded-xl flex items-center justify-between border border-white/5 text-xs">
                    <div className="space-y-1">
                      <p className="font-semibold text-white flex items-center gap-1.5">
                        <Download className="h-3.5 w-3.5 text-brand-purple" />
                        {dl.filename}
                      </p>
                      <p className="text-[10px] text-gray-500">Tool: {dl.toolType} • Ext: {dl.format}</p>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">{new Date(dl.timestamp).toLocaleTimeString()}</span>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "activity" && (
            <div className="space-y-3 font-mono text-xs">
              {state.activities.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No activity log entries found.</p>
              ) : (
                state.activities.map((act) => (
                  <div key={act.id} className="p-3.5 bg-brand-graphite/20 rounded-xl flex items-center justify-between border border-white/5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-neon-blue" />
                        <p className="font-semibold text-white">{act.action}</p>
                      </div>
                      <p className="text-gray-500 text-[10px]">{act.details}</p>
                    </div>
                    <span className="text-gray-500 text-[10px] shrink-0">{new Date(act.timestamp).toLocaleTimeString()}</span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-brand-charcoal border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[85vh]">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-brand-black/40">
              <div className="space-y-1">
                <span className="px-2 py-0.5 rounded bg-brand-neon-blue/20 text-brand-neon-blue text-[9px] font-mono uppercase">{previewFile.format}</span>
                <h3 className="font-display font-bold text-lg text-white">{previewFile.title}</h3>
              </div>
              <button 
                onClick={() => setPreviewFile(null)}
                className="p-1.5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 bg-brand-black/20 font-mono text-xs text-gray-300 leading-relaxed whitespace-pre-wrap">
              {previewFile.toolType === "AI Resume Builder" ? (
                (() => {
                  try {
                    const parsed = JSON.parse(previewFile.content);
                    return (
                      <div className="space-y-4 font-sans">
                        <div className="border-b border-white/10 pb-4">
                          <h4 className="text-lg font-bold text-white">{parsed.name}</h4>
                          <p className="text-xs text-brand-neon-blue">{parsed.email}  |  {parsed.phone}</p>
                        </div>
                        <div>
                          <h5 className="font-bold text-white uppercase text-xs tracking-wider text-brand-purple">Professional Summary</h5>
                          <p className="text-xs text-gray-400 mt-1">{parsed.summary}</p>
                        </div>
                        <div>
                          <h5 className="font-bold text-white uppercase text-xs tracking-wider text-brand-purple">Experience</h5>
                          <p className="text-xs text-gray-400 mt-1 whitespace-pre-line">{parsed.experience}</p>
                        </div>
                        <div>
                          <h5 className="font-bold text-white uppercase text-xs tracking-wider text-brand-purple">Skills</h5>
                          <p className="text-xs text-gray-400 mt-1">{parsed.skills}</p>
                        </div>
                      </div>
                    );
                  } catch (e) {
                    return previewFile.content;
                  }
                })()
              ) : (
                previewFile.content
              )}
            </div>

            <div className="p-4 border-t border-white/5 bg-brand-black/40 flex justify-end gap-3">
              <button 
                onClick={() => setPreviewFile(null)}
                className="px-4 py-2 bg-brand-graphite text-gray-300 hover:text-white rounded-xl text-xs"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  handleDownloadSavedFile(previewFile);
                  setPreviewFile(null);
                }}
                className="px-4 py-2 bg-brand-neon-blue text-brand-black font-semibold rounded-xl text-xs flex items-center gap-1"
              >
                <Download className="h-3.5 w-3.5" /> Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
