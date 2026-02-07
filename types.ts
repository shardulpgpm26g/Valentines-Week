export interface Option {
  id: string;
  label: string;
  letterFragment: string;
  summaryLabel?: string; // Short version for the summary card if needed, otherwise use label
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  summaryKey: string; // "Favorite me", "You'd brag I'm", etc.
}

export type AppStep = 'intro' | 'quiz' | 'results' | 'final';

export interface Answers {
  [questionId: number]: string; // Maps question ID to selected Option ID
}
