import React from 'react';
import { SAMPLE_TRANSCRIPT } from '../constants';

interface TranscriptInputProps {
  value: string;
  onChange: (value: string) => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
}

export const TranscriptInput: React.FC<TranscriptInputProps> = ({
  value,
  onChange,
  onAnalyze,
  isAnalyzing,
}) => {
  
  const handleDownloadSample = () => {
    const blob = new Blob([SAMPLE_TRANSCRIPT], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dreame_sample_transcript.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    // Removed window.confirm to ensure the button reacts immediately
    onChange('');
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:border-gray-300 transition-colors">
      <div className="bg-gray-50 px-5 py-4 border-b border-gray-100 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <span className="text-lg">📜</span>
            <h2 className="font-bold text-gray-800">Source Transcript</h2>
        </div>
        
        <div className="flex items-center gap-2">
            {value && (
                <button 
                  type="button"
                  onClick={handleClear}
                  disabled={isAnalyzing}
                  className="text-xs font-medium text-gray-500 bg-white hover:bg-red-50 hover:text-red-600 px-3 py-1.5 rounded-full border border-gray-200 transition-colors flex items-center gap-1"
                  title="Clear text"
                >
                  <span>🗑️</span>
                  <span className="hidden sm:inline">Clear</span>
                </button>
            )}
            <button 
              type="button"
              onClick={handleDownloadSample}
              className="text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full border border-blue-200 transition-colors flex items-center gap-1 group/btn"
              title="Download a sample file to test the tool"
            >
              <span>📥</span>
              <span>Try this Template</span>
            </button>
        </div>
      </div>
      
      <div className="flex-1 relative bg-white">
        <textarea
          className="w-full h-full p-6 resize-none border-none focus:ring-0 text-sm font-mono text-gray-600 leading-relaxed bg-transparent placeholder-gray-300"
          placeholder={`Paste YouTube transcript here...

Example format:
0:00 Intro
0:15 The suction power on this Dreame model is incredible...
1:20 However, it struggles with cables...`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={isAnalyzing}
        />
        {/* Helper watermark if empty */}
        {!value && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5 flex flex-col items-center">
                <span className="text-6xl">📝</span>
            </div>
        )}
      </div>

      <div className="p-4 bg-gray-50 border-t border-gray-100">
        <button
          type="button"
          onClick={onAnalyze}
          disabled={!value.trim() || isAnalyzing}
          className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2 tracking-wide
            ${!value.trim() || isAnalyzing 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-[#FF0000] hover:bg-[#D90000] text-white hover:shadow-md active:transform active:scale-[0.98]'
            }`}
        >
          {isAnalyzing ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>🔮 ANALYZING...</span>
            </>
          ) : (
            <>
              <span className="text-lg">✨</span>
              <span>GENERATE INSIGHTS</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};