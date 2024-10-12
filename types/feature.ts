import { ReactElement } from 'react';

export type Feature = {
  id: number;
  icon: string | ReactElement;  
  title: string;
  description: string;
  details?: string[]; 
  href?: string;
};
