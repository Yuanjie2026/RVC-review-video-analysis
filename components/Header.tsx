import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 h-16 flex items-center px-6 shadow-sm">
      <div className="flex items-center gap-3">
        {/* Logo Image Container */}
        {/* Added 'p-1' back to create breathing room around the avatar */}
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden hover:scale-105 transition-transform border border-gray-100 p-1">
          <img 
            src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=DreameRVC1"
            alt="App Logo"
            className="w-full h-full"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#0F0F0F] font-sans leading-none">
            DREAME <span className="text-[#FF0000]">RVC</span> YOUTUBE VIDEO <span className="text-[#FF0000]">ANALYSIS</span>
          </h1>
        </div>
      </div>
    </header>
  );
};