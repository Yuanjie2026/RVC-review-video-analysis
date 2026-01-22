import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { AnalysisStatus } from '../types';

interface AnalysisResultProps {
  status: AnalysisStatus;
  result: string;
}

// Helper to highlight timestamps in text strings
// 辅助函数：高亮文本字符串中的时间戳 (例如 0:15, 1:20:30)
const processTextWithTimestamps = (text: string) => {
  // Regex matches H:MM or HH:MM or H:MM:SS patterns
  // 正则表达式匹配 H:MM 或 HH:MM 或 H:MM:SS 格式
  const timeRegex = /(\d{1,2}:\d{2}(?::\d{2})?)/g;
  
  return text.split(timeRegex).map((part, index) => {
    // Check if the part strictly matches the timestamp format
    // 检查切分后的部分是否严格匹配时间戳格式
    if (/^\d{1,2}:\d{2}(?::\d{2})?$/.test(part)) {
      return (
        <span 
          key={index} 
          // Timestamp badge styling: Blue background, mono font for readability
          // 时间戳样式：淡蓝色背景，等宽字体以提高可读性
          className="inline-flex items-center justify-center bg-blue-50 text-blue-600 font-bold font-mono px-1.5 py-0.5 rounded-md text-xs mx-0.5 border border-blue-100/50 align-baseline select-all"
        >
          {part}
        </span>
      );
    }
    return part;
  });
};

// Component to handle timestamp highlighting in children
// 包装组件：遍历子元素以应用时间戳高亮逻辑
const TextWithHighlights = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {React.Children.map(children, (child) => {
        if (typeof child === 'string') {
          return processTextWithTimestamps(child);
        }
        return child;
      })}
    </>
  );
};

export const AnalysisResult: React.FC<AnalysisResultProps> = ({ status, result }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:border-gray-300 transition-colors">
      
      {/* 顶部标题栏 (Header Section) */}
      <div className="bg-gray-50 px-5 py-4 border-b border-gray-100 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <span className="text-lg">📊</span>
            <h2 className="font-bold text-gray-800">Results</h2>
        </div>
        {/* Success Badge */}
        {status === AnalysisStatus.SUCCESS && (
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
            <span>Done</span> ✅
          </span>
        )}
      </div>

      <div className="flex-1 overflow-auto bg-white relative">
        
        {/* 状态 1: 空闲状态 (IDLE State) - 显示引导提示 */}
        {status === AnalysisStatus.IDLE && (
          <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-6 select-none p-8">
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-5xl mb-2 shadow-inner border border-gray-100">
                👈
            </div>
            <div className="text-center max-w-xs">
                <h3 className="text-gray-900 font-bold text-lg mb-2">Ready to analyze</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    Paste the YouTube transcript in the left panel to unlock structured insights.
                </p>
            </div>
          </div>
        )}

        {/* 状态 2: 分析中 (ANALYZING State) - 显示加载动画 */}
        {status === AnalysisStatus.ANALYZING && (
          <div className="h-full flex flex-col items-center justify-center p-8">
            <div className="w-full max-w-md flex flex-col items-center gap-6">
                
                {/* Loading Icon & Text */}
                <div className="text-center space-y-2">
                    <div className="text-5xl mb-4 animate-bounce">✨</div>
                    <h3 className="text-xl font-bold text-gray-800">Generating Insights</h3>
                    <p className="text-sm text-gray-500">Analyzing transcript for pros, cons, and timestamps...</p>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden shadow-inner relative">
                    {/* Animated Bar - Indeterminate Animation */}
                    <div 
                        className="h-full bg-gradient-to-r from-red-500 via-red-400 to-red-600 rounded-full absolute top-0 left-0 shadow-sm"
                        style={{
                            width: '30%',
                            animation: 'indeterminate 1.8s infinite ease-in-out'
                        }}
                    ></div>
                </div>
                
                {/* CSS Animation Keyframes for the Progress Bar */}
                <style>{`
                    @keyframes indeterminate {
                        0% { left: -30%; width: 30%; }
                        50% { left: 25%; width: 50%; }
                        100% { left: 100%; width: 30%; }
                    }
                `}</style>
            </div>
          </div>
        )}

        {/* 状态 3: 错误状态 (ERROR State) - 显示错误信息 */}
        {status === AnalysisStatus.ERROR && (
          <div className="h-full flex flex-col items-center justify-center text-red-500 gap-4 p-8">
            <div className="text-5xl">⚠️</div>
            <div className="text-center">
                <p className="font-bold text-lg text-gray-900">Analysis Halted</p>
                <div className="text-sm text-gray-600 mt-2 max-w-xs whitespace-pre-wrap leading-relaxed bg-red-50 p-3 rounded-lg border border-red-100">
                    {result}
                </div>
            </div>
          </div>
        )}

        {/* 状态 4: 成功状态 (SUCCESS State) - 渲染 Markdown 结果 */}
        {status === AnalysisStatus.SUCCESS && (
          <div className="p-6 md:p-8">
             <ReactMarkdown 
                remarkPlugins={[remarkGfm, remarkBreaks]}
                components={{
                    // Custom formatting for Headers to distinct Pros vs Cons
                    // 自定义标题渲染：根据文本内容区分“优势”和“痛点”，应用不同颜色
                    h2: ({node, ...props}) => {
                        const text = String(props.children);
                        const isPros = text.includes('优势') || text.includes('Strengths') || text.includes('Pros');
                        const isCons = text.includes('问题') || text.includes('痛点') || text.includes('Issues') || text.includes('Cons');
                        
                        let borderColor = 'border-gray-200';
                        let textColor = 'text-gray-800';
                        // Emojis removed as requested
                        let bgGradient = '';

                        if (isPros) {
                            borderColor = 'border-green-200';
                            textColor = 'text-green-700';
                            bgGradient = 'from-green-50 to-transparent';
                        } else if (isCons) {
                            borderColor = 'border-red-200';
                            textColor = 'text-red-700';
                            bgGradient = 'from-red-50 to-transparent';
                        }

                        return (
                            <h2 className={`text-xl font-bold mt-8 mb-4 pb-2 border-b-2 ${borderColor} ${textColor} flex items-center gap-2 bg-gradient-to-r ${bgGradient} px-2 rounded-t-lg`}>
                                {props.children}
                            </h2>
                        );
                    },
                    // Better spacing for lists
                    ul: ({node, ...props}) => <ul className="space-y-6 my-6 ml-1" {...props} />,
                    // Cleaner list items with timestamp highlighting and newlines support
                    // 列表项渲染：支持时间戳高亮，优化移动端字体大小
                    // Standardized Font Size: text-sm md:text-[15px]
                    li: ({node, ...props}) => (
                        <li className="flex items-start gap-2 text-[#0F0F0F] leading-tight text-sm md:text-[15px]">
                            <span className="select-none text-gray-300 mt-[2px] text-lg flex-shrink-0">•</span>
                            <span className="whitespace-pre-line block">
                              <TextWithHighlights>{props.children}</TextWithHighlights>
                            </span>
                        </li>
                    ),
                    // Highlighter effect for bold text (Feature Names)
                    // 粗体文本渲染（通常是功能点名称）：添加黄色高亮背景
                    strong: ({node, ...props}) => (
                        <strong className="font-bold text-gray-900 bg-yellow-50 px-1 py-0.5 rounded border border-yellow-100/50 box-decoration-clone">
                            {props.children}
                        </strong>
                    ),
                    // Paragraphs with timestamp highlighting
                    // 段落渲染：同样支持时间戳高亮
                    p: ({node, ...props}) => (
                        <p className="mb-2 text-[#0F0F0F] leading-tight text-sm md:text-[15px]">
                            <TextWithHighlights>{props.children}</TextWithHighlights>
                        </p>
                    )
                }}
             >
               {result}
             </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};