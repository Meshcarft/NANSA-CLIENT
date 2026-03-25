export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  tags: string[];
  createdAt: string;
  logoUrl?: string;
  description?: string;
  type?: string;
  experienceLevel?: string;
  deadline?: string;
}
