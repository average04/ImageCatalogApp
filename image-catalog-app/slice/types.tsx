export type IImage = {
  id: number;
  name: string;
  description: string;
  date: Date;
  path: string;
};

export type ImageState = {
  filter: "Name" | "Date";
  filterDirection: "asc" | "desc";
  images: IImage[];
};

export type ModalProps = {
  show: boolean;
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
};
