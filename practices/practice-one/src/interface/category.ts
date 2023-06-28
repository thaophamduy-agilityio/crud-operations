import { MouseEvent } from 'react';

export interface ICategory {
  id: string;
  categoryName: string;
  total: number | undefined;
  onClick: (e: MouseEvent<HTMLElement>) => void;
}
