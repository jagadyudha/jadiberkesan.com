export type modalProps = {
  isOpen: boolean;
  close: (data: boolean) => void;
  children: React.ReactNode;
};

export type ThemeProps = {
  id: string;
  name: string;
  description: string;
  colorCode: Array<string>;
  image: string;
  price: number;
  discount: number;
};
