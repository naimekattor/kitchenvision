export interface BlogPost {
  id: number;
  author: string;
  category: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string;
  views?: number;
  read_time: number;
  created_at: string;
  updated_at?: string;
  image_url?: string;
}
