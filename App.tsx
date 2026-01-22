import React, { useState } from 'react';
import { Header } from './components/Header';
import { TranscriptInput } from './components/TranscriptInput';
import { AnalysisResult } from './components/AnalysisResult';
import { analyzeTranscript } from './services/geminiService';
import { AnalysisStatus } from './types';

export default function App() {
  const [transcript, setTranscript] = useState('');
  const [result, setResult] = useState('');
  const [status, setStatus] = useState<AnalysisStatus>(AnalysisStatus.IDLE);
  const [isGuideOpen, setIsGuideOpen] = useState(true);

  const handleAnalyze = async () => {
    if (!transcript.trim()) return;

    // Validation: Check if the content looks like a transcript with timestamps
    // Matches patterns like "0:00", "12:30", "1:05:20"
    const hasTimestamp = /\d+:\d{2}/.test(transcript);

    if (!hasTimestamp) {
      setResult("⚠️ Invalid Data Format\n\nThe input does not appear to be a valid YouTube transcript. Please ensure the text includes timestamps (e.g., '0:15 ...').\n\nThis tool strictly requires timestamped data to map UX feedback to specific video moments.");
      setStatus(AnalysisStatus.ERROR);
      return;
    }

    setStatus(AnalysisStatus.ANALYZING);
    setResult('');

    try {
      const analysisText = await analyzeTranscript(transcript);
      setResult(analysisText);
      setStatus(AnalysisStatus.SUCCESS);
    } catch (error) {
      console.error(error);
      setResult('Failed to connect to AI service. Please check your API key and try again.');
      setStatus(AnalysisStatus.ERROR);
    }
  };

  return (
    // Responsive Layout Strategy:
    // Mobile/Small: min-h-screen with flex-col (Page scrolls vertically)
    // Desktop (md+): h-screen with overflow-hidden (App-like fixed layout)
    <div className="min-h-screen md:h-screen flex flex-col bg-[#F9F9F9] font-sans md:overflow-hidden">
      <Header />
      
      {/* Main Container */}
      <main className="flex-1 flex flex-col w-full max-w-[99%] mx-auto p-2 md:p-3 gap-3 md:min-h-0">
        
        {/* Collapsible Guide Section */}
        <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out flex-shrink-0 ${isGuideOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 border-0'}`}>
          <div className="px-3 py-3 md:px-4 md:py-3 relative">
             <button 
              onClick={() => setIsGuideOpen(false)}
              className="absolute top-2 right-2 text-gray-300 hover:text-gray-500 p-1.5 hover:bg-gray-50 rounded-full transition-colors"
              title="Close Guide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
              <span className="text-xl">🧭</span>
              <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Quick Start Guide</h2>
            </div>

            {/* Guide Grid: 3 columns on ALL screens, but on mobile we hide descriptions to save vertical space */}
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              
              <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                <div className="bg-red-50 text-red-500 p-1.5 md:p-2 rounded-2xl text-lg shadow-sm group-hover:scale-110 transition-transform duration-200">📺</div>
                <div className="w-full px-0 md:px-2 flex flex-col items-center md:block">
                  <h3 className="font-bold text-gray-900 text-[10px] md:text-xs uppercase mb-0 md:mb-0.5 text-center">1. Get Transcript</h3>
                  {/* Hide description on very small screens, show on md+ */}
                  <p className="hidden md:block text-[11px] text-gray-500 leading-relaxed text-left">
                    Go to YouTube &rarr; Click "...more" &rarr; Select "Show transcript"
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                <div className="bg-blue-50 text-blue-500 p-1.5 md:p-2 rounded-2xl text-lg shadow-sm group-hover:scale-110 transition-transform duration-200">📋</div>
                <div className="w-full px-0 md:px-2 flex flex-col items-center md:block">
                  <h3 className="font-bold text-gray-900 text-[10px] md:text-xs uppercase mb-0 md:mb-0.5 text-center">2. Copy & Paste</h3>
                  <p className="hidden md:block text-[11px] text-gray-500 leading-relaxed text-left">
                    Copy the full text and paste it into the left input box.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                <div className="bg-purple-50 text-purple-500 p-1.5 md:p-2 rounded-2xl text-lg shadow-sm group-hover:scale-110 transition-transform duration-200">💎</div>
                <div className="w-full px-0 md:px-2 flex flex-col items-center md:block">
                  <h3 className="font-bold text-gray-900 text-[10px] md:text-xs uppercase mb-0 md:mb-0.5 text-center">3. Generate Insights</h3>
                  <p className="hidden md:block text-[11px] text-gray-500 leading-relaxed text-left">
                    Click the ✨ button to get pros & cons analyzed.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Guide Toggle */}
        {!isGuideOpen && (
          <div className="flex justify-center -mt-2 mb-1 z-10 flex-shrink-0">
             <button 
              onClick={() => setIsGuideOpen(true)}
              className="bg-white border border-gray-200 text-[10px] font-bold text-gray-400 px-3 py-0.5 rounded-full shadow-sm hover:text-red-500 hover:border-red-200 transition-colors flex items-center gap-1 uppercase tracking-wider"
            >
              <span>Show Guide</span>
            </button>
          </div>
        )}

        {/* Workspace - Responsive Grid */}
        {/* Mobile: Stacked with natural height (min-h). Desktop: Side-by-side with internal scrolling. */}
        <div className="flex-1 flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-4 md:min-h-0">
          
          {/* Left Column: Input */}
          <div className="h-[500px] md:h-full overflow-hidden flex flex-col flex-shrink-0">
            <TranscriptInput 
              value={transcript} 
              onChange={setTranscript}
              onAnalyze={handleAnalyze}
              isAnalyzing={status === AnalysisStatus.ANALYZING}
            />
          </div>

          {/* Right Column: Output */}
          <div className="h-[500px] md:h-full overflow-hidden flex flex-col flex-shrink-0">
            <AnalysisResult 
              status={status} 
              result={result} 
            />
          </div>
        </div>
      </main>
    </div>
  );
}