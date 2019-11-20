export interface IBookState {
  books : IBook[];
}

export interface IBook {
  _id: string;
  authors: [ string ];
  contents: string;
  rating: number;
  thumbnail: string;
  title: string;
}