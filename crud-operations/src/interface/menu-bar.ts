import { MouseEvent, ReactNode } from 'react';

export interface IMenuBar {
  id: number;
  name: string;
  icon?: ReactNode;
  onClick: (e: MouseEvent<HTMLElement>) => void;
}
