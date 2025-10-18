
export interface Book {
  id: number;
  title: string;
  author: string;
  coverUrl: string;
  genre: string;
  summary: string;
}

export type View = 'grid' | 'detail' | 'reader';
