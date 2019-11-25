// user
// 사이드바(유저정보), 마이페이지(유저정보, 읽고싶은책, 통계)

interface IUserBook {
  _id: string;
  authors: string[];
  thumbnail: string;
  title: string;
}

export interface IBookToRead {
  book: IUserBook;
}

export interface IBookReading {
  book: IUserBook;
  start: string;
  goal: string;
}
export interface IBookFinished {
  book: IUserBook;
  start: string;
  end: string;
}

export interface IUserInfo {
  // *** GET /user
  _id: string;
  email: string;
  name: string;
  image: string;
  profile: string;
  to_read: IBookToRead[];
  reading: IBookReading[];
  finished: IBookFinished[];
  numBooksGoal: number;
  numReviewsGoal: number;
}

// book
// 서평쓰기 (책선택), 서평읽기 (책소개)
interface ISearchBook {
  results_count: number;
  pageable_count: number;
  current_page: number;
  is_end: boolean;
  books: [
    {
      _id: string;
      authors: [string];
      contents: string;
      thumbnail: string;
      title: string;
    }
  ];
}
export interface IBook {
  _id: string;
  authors: string[];
  rating: number;
  contents: string;
  thumbnail: string;
  title: string;
}

export interface IBooks {
  // *** GET /books
  books: IBook[];
}

export interface IBookSearch {
  // *** GET /books/search
  results_count: number;
  pageable_count: number;
  current_page: number;
  is_end: boolean;
  books: IBook[];
}

export interface IBookDetail {
  // *** GET /books/:id
  _id: string;
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
}

// review

export interface IAuthor {
  _id: string;
  image: string;
  name: string;
  profile: string;
}

export interface IReview {
  // *** GET /reviews/:id
  _id: string;
  author: IAuthor;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}

export interface IReviews {
  // *** GET /reviews
  reviews: IReview[];
}

export interface IReviewLike {
  user_id: string;
  review_id: string;
}

export interface IReviewWithBooks {
  id: string;
  author: IAuthor;
  title: string;
  books: IBook[];
  contents: string;
  thumbnail: string;
  likes: IReviewLike[];
}

export interface IReviewSearch {
  // *** GET /reviews/search
  results_count: number;
  pageable_count: number;
  current_page: number;
  reviews: IReviewWithBooks[];
}

// curation

export interface ICuration {
  // *** GET /curations/:id
  _id: string;
  author: IAuthor;
  contents: string;
  likes: string[];
  title: string;
}

export interface ICurations {
  // *** GET /curations
  curations: ICuration[];
}

// curations POST 부분은 2차 배포 진행하며 더 수정될 수 있어 보여서 우선 생략함

export interface ICurationsPost {
  books: string[];
  contents: string;
  reviews: string[];
  title: string;
}

// ratings

export interface IUserRating {
  _id: string;
  rating: number;
}

export interface IRating {
  book: string; // book id
  avg_rating: number;
  user_rating: IUserRating;
}

export interface IRatings {
  // *** GET /ratings
  ratings: IRating[];
}

export interface IRatingPost {
  // *** POST /ratings
  _id: string;
  book: string;
  user: string;
  rating: number;
}
