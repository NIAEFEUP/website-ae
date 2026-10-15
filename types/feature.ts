import { ReactElement, ReactNode } from 'react';

export type Feature = {
  id: number;
  icon: string | ReactElement;  
  title: string;
  description?: string | ReactNode;
  details?: string[]; 
  href?: string;
  category?: string;
  cozecareBooking?: string;
};
