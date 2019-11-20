export interface IAuthor {
  _id: string;
  image: string;
  name: string;
  profile: string;
}

export interface IReview {
  _id: string;
  author: IAuthor;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}

export interface IProps {
  review: IReview;
  bookList: IBook[];
}

export interface IReviewProps {
  review: IReview;
}
export interface IBookState {
  bookList: IBook[];
}
export interface IReviewState {
  reviewList: IReview[];
}

export interface IBook {
  _id: string;
  authors: [string];
  contents: string;
  rating: number;
  thumbnail: string;
  title: string;
}
