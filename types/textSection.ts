export type TextSection = {
  id: number;
  title: string;
  subtitle: string;
  text?: React.ReactNode [];
  phone?: string;
  email?: string;
  schedule?: { label: string; value: string }[];
  buttons?: { url: string; label: string }[];
}