export interface Movie {
  id: string;
  title: string;
  year: number;
  role: string;
  image: string;
  tagline: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

export interface SocialPost {
  id: string;
  platform: 'Instagram' | 'Twitter' | 'TikTok';
  content: string;
  likes: string;
  image?: string;
}

export enum ChatState {
  IDLE = 'IDLE',
  THINKING = 'THINKING',
  RESPONDING = 'RESPONDING',
  ERROR = 'ERROR'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}