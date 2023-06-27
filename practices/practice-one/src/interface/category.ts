import { MouseEvent } from 'react';

export interface ICategory {
  id: string;
  categoryName: string;
  numberOf: number;
  onClick: (e: MouseEvent<HTMLElement>) => void;
}
