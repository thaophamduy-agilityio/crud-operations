import { MouseEvent } from 'react';
import { CATEGORIES } from '@constants/categories';

export interface CategoryProps {
  id?: string;
  categoryName: React.ReactNode | string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export const categoryList: Partial<CategoryProps>[] = [
  {
    id: '1',
    categoryName: CATEGORIES.ADVENTURE,
  },
  {
    id: '2',
    categoryName: CATEGORIES.CONTEMPORARY,
  },
  {
    id: '3',
    categoryName: CATEGORIES.ROMANCE,
  },
  {
    id: '4',
    categoryName: CATEGORIES.FANTASY,
  },
  {
    id: '5',
    categoryName: CATEGORIES.DYSTOPIAN,
  },
  {
    id: '6',
    categoryName: CATEGORIES.MYSTERY,
  },
  {
    id: '7',
    categoryName: CATEGORIES.HORROR,
  },
  {
    id: '8',
    categoryName: CATEGORIES.THRILLER,
  },
  {
    id: '9',
    categoryName: CATEGORIES.PARANORMAL,
  },
  {
    id: '10',
    categoryName: CATEGORIES.HISTORICAL_FI,
  },
  {
    id: '11',
    categoryName: CATEGORIES.SCIFI,
  },
  {
    id: '12',
    categoryName: CATEGORIES.MEMOIR,
  },
  {
    id: '13',
    categoryName: CATEGORIES.SPORTS,
  },
];
