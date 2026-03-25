export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  reviews: number;
  skills: string[];
  imageUrl: string;
  isAI?: boolean;
  bio?: string;
  price?: number;
  availableSlots?: number;
  category?: string;
}

export type MentorCategory = "all" | "it" | "design" | "business" | "ai";
