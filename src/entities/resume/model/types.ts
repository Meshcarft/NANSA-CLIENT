export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  major: string;
  degree: string;
  startDate: string;
  endDate?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  techStack: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface Activity {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface Resume {
  id: string;
  title: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
  experiences: Experience[];
  educations: Education[];
  projects: Project[];
  certifications: Certification[];
  awards: Award[];
  activities: Activity[];
  updatedAt: string;
}
