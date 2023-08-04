import { MouseEvent } from 'react';

export interface ICategory {
  id: string;
  name: string;
  total: number | undefined;
  onClick: (e: MouseEvent<HTMLElement>) => void;
}
