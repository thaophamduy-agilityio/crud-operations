import { MouseEvent } from 'react';

export interface ICategory {
  id: string;
  categoryName: React.ReactNode | string;
  onClick: (e: MouseEvent<HTMLElement>) => void;
}
