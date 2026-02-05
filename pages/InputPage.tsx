import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';
import { Bar, Radar, Line } from 'react-chartjs-2';
import { getStrategyAnalysis } from '../services/geminiService';
import { Link } from 'react-router-dom';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler);

const InputPage: React.FC = () => {
  const [pivotInput, setPivotInput] = useState('');
  const [pivotResult, setPivotResult] = useState('');
  const [isPivotLoading, setIsPivotLoading] = useState(false);

  const [adContext, setAdContext] = useState('FanFix Promotion');
  const [adResult, setAdResult] = useState('');
  const [isAdLoading, setIsAdLoading] = useState(false);

  const [analysisResult, setAnalysisResult] = useState('');
  const [isAnalysisLoading, setIsAnalysisLoading] = useState(false);

  const handleGeneratePivot = async () => {
    if (!pivotInput) return;
    setIsPivotLoading(true);
    const prompt = `Chase Sterling just reached this milestone: "${pivotInput}". 
    Suggest 3 specific content hooks that bridge this project with his "Wellness Authority" pivot. 
    Example: If he's in a forest thriller, suggest content about 'Earthing' or 'Survival Fitness'. 
    Format: Short bullet points with a catchy title for each.`;
    
    const result = await getStrategyAnalysis(prompt);
    setPivotResult(result);
    setIsPivotLoading(false);
  };

  const handleGenerateAdCopy = async () => {
    setIsAdLoading(true);
    const prompt = `Generate 2 high-conversion Google Ads headlines (30 chars max) and 1 description (90 chars max) for Chase Sterling. 
    Campaign focus: ${adContext}. Use psychological triggers for celebrity fans (e.g., 'Exclusive access', 'Official', 'Join Chase').`;
    
    const result = await getStrategyAnalysis(prompt);
    setAdResult(result);
    setIsAdLoading(false);
  };

  const handleAnalyzePivot = async () => {
    setIsAnalysisLoading(true);
    const prompt = `Analyze the transition of Chase Sterling from a 'Hallmark Romance Lead' to a 'Modern Wellness Lifestyle Guide'. 
    Why is this better for revenue scalability? Mention the difference between entertainment fans vs lifestyle customers. Max 3 sentences.`;
    
    const result = await getStrategyAnalysis(prompt);
    setAnalysisResult(result);
    setIsAnalysisLoading(false);
  };

  // Chart Data
  const socialData = {
    labels: ['Instagram Base', 'Facebook Reach', 'Twitter/X Eng.', 'FanFix Conversion'],
    datasets: [{
      label: 'Audience Reach',
      data: [82000, 15000, 12000, 5000],
      backgroundColor: ['#06b6d4', '#0891b2', '#0f172a', '#f97316'],
    }]
  };

  const pivotData = {
    labels: ['Romance Factor', 'Approachability', 'Wellness Cred', 'Lead Power', 'Market Scope'],
    datasets: [{
      label: 'Romance Archetype',
      data: [95, 80, 20, 90, 40],
      backgroundColor: 'rgba(15, 23, 42, 0.2)',
      borderColor: '#0f172a',
      borderWidth: 1,
    }, {
      label: 'Wellness Pivot',
      data: [40, 90, 95, 80, 95],
      backgroundColor: 'rgba(6, 182, 212, 0.2)',
      borderColor: '#06b6d4',
      borderWidth: 2,
    }]
  };

  const revenueData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'FanFix (Volume)',
      data: [2000, 8000, 15000, 25000],
      borderColor: '#f97316',
      backgroundColor: 'rgba(249, 115, 22, 0.1)',
      fill: true,
      tension: 0.4
    }, {
      label: 'Direct Sales (Value)',
      data: [5000, 7000, 12000, 20000],
      borderColor: '#06b6d4',
      backgroundColor: 'rgba(6, 182, 212, 0.1)',
      fill: true,
      tension: 0.4
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' as const },
    },
    scales: {
      y: { beginAtZero: true }
    }
  };

  const radarOptions = {
     responsive: true,
     maintainAspectRatio: false,
     plugins: { legend: { position: 'bottom' as const } },
  };

  return (
    <div className="font-mono bg-cyan-50 min-h-screen text-slate-800 pb-20">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-bold text-xl md:text-2xl tracking-wider uppercase text-cyan-400">
                Strategy: Sterling
            </div>
            <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
                <Link to="/" className="text-slate-400 hover:text-white transition">Back to Site</Link>
                <a href="#overview" className="hover:text-cyan-400 transition">Overview</a>
                <a href="#ai-lab" className="text-cyan-400 font-bold hover:text-cyan-300 transition">✨ AI Lab</a>
                <a href="#pivot" className="hover:text-cyan-400 transition">Pivot</a>
            </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="overview" className="py-12 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                    Optimizing the <span className="text-cyan-400">Sterling</span> Brand Ecosystem
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                    A comprehensive digital infrastructure analysis moving beyond the traditional actor portfolio. We are transitioning from general publicity to a high-leverage <strong>Wellness & Lifestyle Authority</strong>.
                </p>
                <div className="flex flex-wrap gap-4">
                    <div className="bg-slate-800 border border-cyan-500/30 p-4 rounded-lg">
                        <span className="block text-3xl font-bold text-cyan-400">~120K</span>
                        <span className="text-xs text-slate-400 uppercase tracking-widest">Est. Social Reach</span>
                    </div>
                    <div className="bg-slate-800 border border-orange-500/30 p-4 rounded-lg">
                        <span className="block text-3xl font-bold text-orange-400">High</span>
                        <span className="text-xs text-slate-400 uppercase tracking-widest">Conversion Potential</span>
                    </div>
                </div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10 h-80">
                <Bar data={socialData} options={chartOptions} />
            </div>
        </div>
      </section>

      {/* AI Lab */}
      <section id="ai-lab" className="py-16 bg-cyan-50 border-y border-cyan-100">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">✨ Digital Strategy AI Lab</h2>
                <p className="text-slate-600">Simulate brand pivots and content strategies using the Gemini LLM engine.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Pivot Tool */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                        ✨ Pivot Advisor
                    </h3>
                    <p className="text-sm text-slate-500 mb-4">Input a career milestone to generate wellness-aligned brand hooks.</p>
                    <div className="space-y-4">
                        <input 
                          type="text" 
                          value={pivotInput}
                          onChange={(e) => setPivotInput(e.target.value)}
                          placeholder="e.g. Lead role in a holiday romance set in snowy mountains..." 
                          className="w-full p-3 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-slate-50"
                        />
                        <button 
                          onClick={handleGeneratePivot}
                          disabled={isPivotLoading}
                          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded w-full transition flex justify-center items-center disabled:opacity-50"
                        >
                            {isPivotLoading ? 'Brainstorming...' : 'Generate Pivot Strategy'}
                        </button>
                        {pivotResult && (
                          <div className="mt-4 text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded border border-slate-100 whitespace-pre-wrap">
                            <strong className="text-cyan-600 block mb-2">Analysis:</strong>
                            {pivotResult}
                          </div>
                        )}
                    </div>
                </div>

                {/* Ad Copy Tool */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                        ✨ Ad Copy Architect
                    </h3>
                    <p className="text-sm text-slate-500 mb-4">Generate defensive Google Ads copy to capture high-intent search traffic.</p>
                    <div className="space-y-4">
                        <select 
                          value={adContext}
                          onChange={(e) => setAdContext(e.target.value)}
                          className="w-full p-3 rounded border border-slate-200 bg-slate-50"
                        >
                            <option value="FanFix Promotion">Promote FanFix Subscription</option>
                            <option value="Official Website News">Official Website/News Hub</option>
                            <option value="Wellness Product Launch">Wellness Product Launch</option>
                        </select>
                        <button 
                          onClick={handleGenerateAdCopy}
                          disabled={isAdLoading}
                          className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded w-full transition flex justify-center items-center disabled:opacity-50"
                        >
                           {isAdLoading ? 'Drafting...' : 'Draft High-Intent Ad Copy'}
                        </button>
                        {adResult && (
                          <div className="mt-4 text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded border border-slate-100 whitespace-pre-wrap">
                            <strong className="text-slate-800 block mb-2 uppercase text-xs tracking-wider">Draft Output:</strong>
                            {adResult}
                          </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* The Pivot Section */}
      <section id="pivot" className="py-16 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Brand Pivot</h2>
                <div className="w-24 h-1 bg-cyan-500 mx-auto rounded"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="bg-white border-l-4 border-cyan-500 p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">From "Mystery" to "Vitality"</h3>
                        <p className="text-slate-600">
                            The "Holiday Hunk" niche is strong, but the "Wellness Authority" pivot allows for broader commercial scale and long-term asset value through owned products.
                        </p>
                    </div>
                    {/* AI Narrative Tool Integration */}
                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded shadow-sm">
                        <h4 className="font-bold text-indigo-900 mb-2">✨ AI Strategic Analysis</h4>
                        <p className="text-sm text-indigo-700 italic mb-4">
                          {analysisResult || "Click the button below to generate a real-time narrative analysis of this pivot."}
                        </p>
                        <button 
                          onClick={handleAnalyzePivot}
                          disabled={isAnalysisLoading || !!analysisResult}
                          className="text-xs font-bold uppercase tracking-widest text-indigo-600 hover:text-indigo-800 flex items-center disabled:opacity-50"
                        >
                            {isAnalysisLoading ? 'Analyzing...' : 'Analyze Pivot Potential'}
                        </button>
                    </div>
                </div>
                <div className="h-80">
                    <Radar data={pivotData} options={radarOptions} />
                </div>
            </div>
        </div>
      </section>

      {/* Revenue Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Revenue Architecture</h2>
                <p className="text-lg text-slate-600 max-w-2xl">
                    Optimizing the funnel for recurring FanFix income and high-ticket direct sales.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 h-80 bg-white p-4 rounded-xl shadow-sm">
                    <Line data={revenueData} options={chartOptions} />
                </div>
                <div className="flex flex-col justify-center space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-cyan-500">
                        <h4 className="font-bold text-lg mb-2">1. The FanFix Engine</h4>
                        <p className="text-sm text-slate-600">Focuses on "Behind the Scenes" and casual intimacy. The goal is volume (MRR).</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
                        <h4 className="font-bold text-lg mb-2">2. Owned Platform</h4>
                        <p className="text-sm text-slate-600">Direct sales of wellness guides, event tickets, and premium merch.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      <footer className="bg-slate-950 text-slate-500 py-10 text-center text-sm">
        <p>&copy; 2026 Chase Sterling Strategy Group. Confidential.</p>
      </footer>
    </div>
  );
};

export default InputPage;