export interface SummaryItem {
  name: string;
  description: string;
  link?: string;
}

export interface SummaryTableRow {
  category: string;
  description: string;
  examples: Array<{ name: string; link?: string } | string>;
}

export interface ReferenceLink {
  title: string;
  url: string;
}

export interface ReferenceCategory {
  category: string;
  links: ReferenceLink[];
}

export interface TranscriptLine {
  time?: string;
  speaker: 'Zoom' | 'First' | string;
  text: string;
}

export interface PodcastEpisodeData {
  id: string;
  epNumber: number;
  title: string;
  duration: string;
  hosts: string;
  thumbnail?: string;
  youtubeId: string;
  youtubeUrl: string;
  summaryText: string;
  summaryItems: SummaryItem[];
  summaryTable: SummaryTableRow[];
  references: ReferenceCategory[];
  transcript: TranscriptLine[];
}
