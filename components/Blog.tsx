"use client";

import React from "react";
import { 
  BookOpen, 
  Search, 
  Clock, 
  ArrowLeft, 
  ChevronRight, 
  Share2, 
  Bookmark, 
  Star,
  User,
  ExternalLink,
  Flame,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { BlogPost } from "../app/types";

interface BlogProps {
  blogPosts: BlogPost[];
  selectedBlogPost: BlogPost | null;
  onSelectPost: (post: BlogPost | null) => void;
  onSearch: (query: string) => void;
}

export default function Blog({ 
  blogPosts, 
  selectedBlogPost, 
  onSelectPost,
  onSearch 
}: BlogProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [copied, setCopied] = React.useState(false);

  const categories = ["All", "Career Planning", "AI Copywriting", "SaaS Utilities"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleShare = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Render Deep Article Reading View
  if (selectedBlogPost) {
    const relatedPosts = blogPosts.filter(p => p.id !== selectedBlogPost.id && p.category === selectedBlogPost.category).slice(0, 2);

    return (
      <div className="space-y-8 pb-10 max-w-4xl mx-auto">
        {/* Back button */}
        <button 
          onClick={() => onSelectPost(null)}
          className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-brand-neon-blue font-semibold transition-colors bg-white/5 px-3 py-1.5 rounded-xl border border-white/5 hover:border-brand-neon-blue/20"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Articles</span>
        </button>

        {/* Hero Meta */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs text-brand-neon-blue font-mono">
            <span className="px-2.5 py-0.5 rounded-lg bg-brand-neon-blue/10 border border-brand-neon-blue/20 uppercase font-bold">{selectedBlogPost.category}</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {selectedBlogPost.readTime} read time</span>
          </div>
          
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight">
            {selectedBlogPost.title}
          </h1>

          <div className="flex items-center justify-between py-4 border-y border-white/5 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple font-bold">
                {selectedBlogPost.author[0]}
              </div>
              <div>
                <p className="font-semibold text-white">By {selectedBlogPost.author}</p>
                <p className="text-[10px] text-gray-500">Professional SaaS Columnist</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={handleShare}
                className="p-2 bg-brand-graphite text-gray-400 hover:text-white rounded-lg border border-white/5 hover:border-brand-neon-blue/20 text-[11px] flex items-center gap-1"
              >
                <Share2 className="h-3.5 w-3.5" /> 
                <span>{copied ? "Copied Link!" : "Share"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Structured SEO Article Markup Content */}
        <div className="prose prose-invert max-w-none text-gray-300 text-sm leading-relaxed space-y-6">
          <p className="text-base text-white/90 italic font-sans border-l-4 border-brand-neon-blue pl-4 bg-white/5 py-3 rounded-r-xl">
            "{selectedBlogPost.excerpt}"
          </p>
          <div className="whitespace-pre-line font-sans space-y-4">
            {selectedBlogPost.content}
          </div>
        </div>

        {/* Sub Newsletter Form inside the post */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 border-brand-purple/20 mt-12 bg-gradient-to-tr from-brand-charcoal to-brand-black">
          <div className="space-y-1 max-w-sm">
            <h4 className="font-display font-bold text-sm text-white">Loved this article?</h4>
            <p className="text-gray-400 text-[11px]">Get our next optimization secrets instantly delivered right to your inbox weekly.</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input type="email" placeholder="professional@email.com" className="bg-brand-black border border-white/10 rounded-lg text-xs px-3 py-2 w-full focus:outline-none focus:border-brand-purple text-white" />
            <button className="px-4 py-2 bg-brand-purple text-white font-bold text-xs rounded-lg shrink-0">Subscribe</button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="pt-10 border-t border-white/5 space-y-6">
            <h3 className="font-display font-bold text-lg text-white flex items-center gap-1.5">
              <Flame className="h-4 w-4 text-orange-500 animate-pulse" /> Related Career Guides
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <div 
                  key={post.id}
                  onClick={() => { onSelectPost(post); window.scrollTo(0,0); }}
                  className="glass-panel glass-panel-hover rounded-2xl p-5 space-y-4 cursor-pointer"
                >
                  <span className="text-[10px] font-mono font-bold text-brand-neon-blue uppercase">{post.category}</span>
                  <h4 className="font-bold text-white text-sm hover:text-brand-neon-blue transition-colors line-clamp-1">{post.title}</h4>
                  <p className="text-gray-400 text-xs line-clamp-2">{post.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-10">
      {/* Search Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-display font-bold text-3xl text-white flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-brand-neon-blue" />
            SEO Career & Conversion Insights
          </h1>
          <p className="text-gray-400 text-xs">Unlock tactical guidelines to bypass Applicant Tracking Systems, configure PDFs, and boost performance.</p>
        </div>

        {/* Search Input bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              onSearch(e.target.value);
            }}
            placeholder="Search tactical articles..."
            className="w-full pl-10 pr-4 py-2.5 bg-brand-charcoal border border-white/5 rounded-xl text-white text-xs placeholder-gray-500 focus:outline-none focus:border-brand-neon-blue"
          />
        </div>
      </div>

      {/* Category Toggles */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-[10px] uppercase font-bold">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl border transition-all shrink-0 ${activeCategory === cat ? 'bg-brand-neon-blue/15 border-brand-neon-blue/40 text-brand-neon-blue' : 'bg-brand-charcoal border-white/5 text-gray-400 hover:text-white'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid */}
      {filteredPosts.length === 0 ? (
        <div className="h-64 flex flex-col items-center justify-center text-center p-6 text-gray-500">
          <BookOpen className="h-8 w-8 text-brand-purple animate-pulse mb-2" />
          <p className="text-xs">No articles matched your current query or category filter.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              onClick={() => { onSelectPost(post); window.scrollTo(0,0); }}
              className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between cursor-pointer space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span className="text-brand-neon-blue font-bold">{post.category}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>
                <h3 className="font-semibold text-white group-hover:text-brand-neon-blue transition-colors text-sm line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span>By {post.author}</span>
                <span className="text-brand-neon-blue font-semibold hover:underline flex items-center gap-0.5 text-[11px]">
                  Read Article <ChevronRight className="h-3 w-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
