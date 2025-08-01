import { ReactNode } from 'react';

export interface IMenuBar {
  id: number;
  name: string;
  icon?: ReactNode;
  onClick: (id: number) => void;
}
