export interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
}

export interface CreateNoteInput {
  title: string;
  content: string;
}

export interface UpdateNoteInput {
  id: string;
  title?: string;
  content?: string;
}
