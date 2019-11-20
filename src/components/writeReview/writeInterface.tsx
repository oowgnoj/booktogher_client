export interface IBookState {
  bookList : IBook[];
}

export interface IBook {
  id: string;
  authors: [ string ];
  contents: string;
  rating: number;
  thumbnail: string;
  title: string;
}