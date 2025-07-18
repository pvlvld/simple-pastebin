export type IPaste = {
  id?: number;
  name: string;
  content: string;
  views?: number;
  isDeleted?: boolean;
};

export type ICreatePaste = Pick<IPaste, 'name' | 'content'>;

export type IUpdatePaste = Partial<Pick<IPaste, 'name' | 'content'>>;

export type IPasteResponse = Required<Omit<IPaste, 'isDeleted'>>;
