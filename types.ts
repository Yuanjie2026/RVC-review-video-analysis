export enum AnalysisStatus {
  IDLE = 'IDLE',
  ANALYZING = 'ANALYZING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface AnalysisResponse {
  markdown: string;
}

export interface AnalysisRequest {
  transcript: string;
  videoTitle?: string;
}