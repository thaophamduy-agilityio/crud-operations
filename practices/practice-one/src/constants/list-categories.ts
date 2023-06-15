import { MouseEvent } from 'react';
import { CATEGORIES } from '@constants/categories';

export interface CategoryProps {
  id?: string;
  category: React.ReactNode | string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  isFilter: boolean;
}

export const categoryList: Partial<CategoryProps>[] = [
  {
    id: '1',
    category: CATEGORIES.ADVENTURE,
    isFilter: false,
  },
  {
    id: '2',
    category: CATEGORIES.CONTEMPORARY,
    isFilter: false,
  },
  {
    id: '3',
    category: CATEGORIES.ROMANCE,
    isFilter: false,
  },
  {
    id: '4',
    category: CATEGORIES.FANTASY,
    isFilter: false,
  },
  {
    id: '5',
    category: CATEGORIES.DYSTOPIAN,
    isFilter: false,
  },
  {
    id: '6',
    category: CATEGORIES.MYSTERY,
    isFilter: false,
  },
  {
    id: '7',
    category: CATEGORIES.HORROR,
    isFilter: false,
  },
  {
    id: '8',
    category: CATEGORIES.THRILLER,
    isFilter: false,
  },
  {
    id: '9',
    category: CATEGORIES.PARANORMAL,
    isFilter: false,
  },
  {
    id: '10',
    category: CATEGORIES.HISTORICAL_FI,
    isFilter: false,
  },
  {
    id: '11',
    category: CATEGORIES.SCIFI,
    isFilter: false,
  },
  {
    id: '12',
    category: CATEGORIES.MEMOIR,
    isFilter: false,
  },
  {
    id: '13',
    category: CATEGORIES.SPORTS,
    isFilter: false,
  },
];
