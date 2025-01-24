import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isAdmin = ({ req: { user } }) => (user && user.role === 'admin');
export const isStaff = ({ req: { user } }) => (user && (user.role === 'staff' || user.role === 'admin'));
export const isMerchant = ({ req: { user } }) => (user && (user.role === 'merchant' || user.role === 'admin' || user.role === 'staff'));
