export interface IBookState {
  books: IBook[];
}

export interface IBook {
  _id: string;
  authors: [string];
  contents: string;
  thumbnail: string;
  title: string;
}
