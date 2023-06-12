import { MouseEvent } from 'react';

export interface CategoryProps {
  id?: string;
  category: React.ReactNode | string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export const buttonCategory: Partial<CategoryProps>[] = [
  {
    id: '1',
    category: 'Adventure',
  },
  {
    id: '2',
    category: 'Contemporary',
  },
  {
    id: '3',
    category: 'Romance',
  },
  {
    id: '4',
    category: 'Fantasy',
  },
  {
    id: '5',
    category: 'Dystopian',
  },
  {
    id: '6',
    category: 'Mystery',
  },
  {
    id: '7',
    category: 'Horror',
  },
  {
    id: '8',
    category: 'Thriller',
  },
  {
    id: '9',
    category: 'Paranormal',
  },
  {
    id: '10',
    category: 'Historical Fi',
  },
  {
    id: '11',
    category: 'Scifi',
  },
  {
    id: '12',
    category: 'Memoir',
  },
  {
    id: '13',
    category: 'Sports',
  },
];
