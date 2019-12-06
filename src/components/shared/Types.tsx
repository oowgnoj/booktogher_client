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
  start?: string;
  goal?: string;
}
export interface IBookFinished {
  book: IUserBook;
  start: string;
  end: string;
}
export interface ISelectedBook {
  _id: string;
  title: string;
  authors: string;
  thumbnail: string;
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
  accountType: string;
}

interface ISimple_toRead {
  book: string;
}
interface ISimple_reading {
  book: string;
  start: string;
  goal: string;
}
interface ISimple_finished {
  book: string;
  start: string;
  end: string;
}

export interface NumbookRead {
  name: string;
  numOf: number;
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
  user: string;
  review: string;
}

export interface IReviewWithBooks {
  _id: string;
  author: IAuthor;
  title: string;
  books: IBook[];
  contents: string;
  thumbnail: string;
  likes: string[];
}

export interface IReviewSearch {
  // *** GET /reviews/search
  results_count: number;
  pageable_count: number;
  current_page: number;
  reviews: IReview[];
  is_end: boolean;
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

/* ------ user history modal ------ */

export interface IAuthorProps {
  // props interface for userhistorymodal
  author: IAuthor;
  handleClose: any;
}

export interface IReviewBook {
  // states interface for userhistorymodal
  _id: string;
  title: string;
  thumbnail: string;
}

export interface IReviewProps {
  // props interface for userhistorymodal
  reviews: IReview[];
  books: IReviewBook[][];
}

export interface IHistoryStates {
  // states interface for userhistorymodal
  author: IAuthor;
  curations: ICuration[];
  reviews: IReview[];
  reviewsBooks: IReviewBook[][];
  tab: string;
  isOpen: boolean;
}

/* ------ review search modal ------ */

export interface IReviewSearchBook {
  // only for review search modal
  _id: string;
  title: string;
}

export interface IReviewSearchWithBooks {
  // only for review search modal
  _id: string;
  books: IReviewSearchBook[];
  likes: string[];
  contents: string;
  published: boolean;
  thumbnail: string;
  author: IAuthor;
  title: string;
}

export interface IReviewSearchWithBooksRes {
  // only for review search modal
  current_page: number;
  is_end: boolean;
  pageable_count: number;
  results_count: number;
  reviews: IReviewSearchWithBooks[];
}

/* ------- read curation ------- */

export interface IBookReview {
  // *** GET /books?review={id}
  _id: string;
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
}

/* ------- write curation ------- */

export interface IBookSelectedCuration {
  _id: string;
  authors: string;
  thumbnail: string;
  title: string;
}

/* ------- edit curation ------- */

export interface IPatchBody {
  title: string;
  contents: string;
  books: string[];
  reviews: string[];
}

export interface ISelectedReview {
  reviewId: string;
  reviewTitle: string;
  reviewContents: string;
  reviewAuthor: string;
  reviewAuthorImage: string;
}

export interface IEditCurationState {
  title: string;
  contents: string;
  books: IBookSelectedCuration[];
  reviews: IReviewSearchWithBooks[];
  bookModal: boolean;
  reviewModal: boolean;
  isPatched: boolean;
  curationId: string;
}

/* ------- find & change password ------- */

export interface IEmailBody {
  email: string;
}

export interface IPasswordBody {
  password: string;
}

export interface ITokenUser extends IUserInfo {
  resetPasswordToken: string;
  resetPasswordExpires: number;
}
