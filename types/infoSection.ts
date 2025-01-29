export type InfoSection = {
  id: number;
  title: string;
  subtitle: string;
  text?: string;
  phone?: string;
  email?: string;
  avatar?: React.ReactElement;
  schedule?: { label: string; value: string }[];
  imageSrc: string;
  link?: {
    path: string;
    text: string;
    showIcon?: boolean;
    icon?: React.ReactNode;
  };
}