import { MouseEvent } from 'react';
import { CATEGORIES } from '@constants/categories';

export interface CategoryProps {
  id?: string;
  category: React.ReactNode | string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export const prosCategory: Partial<CategoryProps>[] = [
  {
    id: '1',
    category: CATEGORIES.ADVENTURE,
  },
  {
    id: '2',
    category: CATEGORIES.CONTEMPORARY,
  },
  {
    id: '3',
    category: CATEGORIES.ROMANCE,
  },
  {
    id: '4',
    category: CATEGORIES.FANTASY,
  },
  {
    id: '5',
    category: CATEGORIES.DYSTOPIAN,
  },
  {
    id: '6',
    category: CATEGORIES.MYSTERY,
  },
  {
    id: '7',
    category: CATEGORIES.HORROR,
  },
  {
    id: '8',
    category: CATEGORIES.THRILLER,
  },
  {
    id: '9',
    category: CATEGORIES.PARANORMAL,
  },
  {
    id: '10',
    category: CATEGORIES.HISTORICAL_FI,
  },
  {
    id: '11',
    category: CATEGORIES.SCIFI,
  },
  {
    id: '12',
    category: CATEGORIES.MEMOIR,
  },
  {
    id: '13',
    category: CATEGORIES.SPORTS,
  },
];
