export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-brand-black text-white">
      <h1 className="text-4xl font-bold font-sans text-brand-neon-blue mb-4">404 - PAGE NOT FOUND</h1>
      <p className="text-gray-400 font-mono mb-8 text-sm">THE REQUESTED SUITE UTILITY WAS NOT LOCATED.</p>
      <a href="/" className="px-6 py-3 bg-brand-neon-blue text-black font-mono text-xs uppercase tracking-wider rounded hover:opacity-90 transition">
        RETURN TO WORKSPACE
      </a>
    </div>
  );
}
