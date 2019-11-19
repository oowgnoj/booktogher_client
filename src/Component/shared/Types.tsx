// user
// 사이드바(유저정보), 마이페이지(유저정보, 읽고싶은책, 통계)

export interface IUserBoook {
  _id: string;
  authors: string[];
  thumbnail: string;
  title: string;
}

export interface IToRead {
  book: IUserBoook;
}

export interface IBoookReading {
  book: IUserBoook;
  start: string;
  goal: string;
}

export interface IBoookFinished {
  book: IUserBoook;
  start: string;
  end: string;
}

export interface IUserInfo {
  _id: string;
  email: string;
  name: string;
  image: string;
  profile: string;
  to_read: IToRead[];
  reading: IBoookReading[];
  finished: IBoookFinished[];
  numBooksGoal: number;
  numReviewsGoal: number;
}

// book
// 서평쓰기 (책선택), 서평읽기 (책소개)

export interface IBook {
  _id: string;
  authors: string[];
  contents: string;
  thumbnail: string;
  title: string;
}

export interface IBookSearch {
  results_count: number;
  pageable_count: number;
  current_page: number;
  is_end: boolean;
  books: IBook[];
}

export interface IBookDetail {
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
  _id: string;
  author: IAuthor;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}

export interface IReviews {
  reviews: IReview[];
}

export interface IReviewSearch {
  results_count: number;
  pageable_count: number;
  current_page: number;
  reviews: I;R
}

// curation

export interface ICuration {
  _id: string;
  author: IAuthor;
  contents: string;
  likes: string[];
  published: boolean;
  title: string;
}

// curations 부분은 2차 배포 진행하며 더 수정될 수 있어 보여서 우선 생략함

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
  ratings: IRating[];
}

export interface IRatingPost {
  _id: string;
  book: string;
  user: string;
  rating: number;
}

// export interface IReviews {
//   review: IReview[]
// }
// export interface IBooks{
//   bookList: IBook[];
// }
// export interface IReviewState {
//   reviewList: IReview[];
// }

// export interface IBookState {
//   bookList: IBook[];
// }

// export interface IBook {
//   id: string;
//   authors: [string];
//   contents: string;
//   rating: number;
//   thumbnail: string;
//   title: string;
// }

// interface IState {
//   User: IUserInfo;
//   isLoggedIn: boolean;
// }
// export interface IAuthor {
//     id: string;
//     image: string;
//     name: string;
//     profile: string;
//   }

//   export interface IReview {
//     id: string;
//     author: IAuthor;
//     contents: string;
//     likes: string[];
//     published: boolean;
//     thumbnail: string;
//     title: string;
//   }

//   export interface IProps {
//     review: IReview;
//   }
//   export interface IBookState {
//     bookList : IBook[];
//   }
//   export interface IReviewState {
//     reviewList: IReview[];
//   }

//   export interface IBook {
//     id: string;
//     authors: [ string ];
//     contents: string;
//     rating: number;
//     thumbnail: string;
//     title: string;
//   }
//   export interface IAuthor {
//     id: string;
//     image: string;
//     name: string;
//     profile: string;
//   }

//   export interface IReview {
//     id: string;
//     author: IAuthor;
//     contents: string;
//     likes: string[];
//     published: boolean;
//     thumbnail: string;
//     title: string;
//   }

//   export interface IProps {
//     review: IReview;
//   }
//   export interface IBookState {
//     bookList : IBook[];
//   }
//   export interface IReviewState {
//     reviewList: IReview[];
//   }

//   export interface IBook {
//     id: string;
//     authors: [ string ];
//     contents: string;
//     rating: number;
//     thumbnail: string;
//     title: string;
//   }
//   export interface IAuthor {
//     id: string;
//     image: string;
//     name: string;
//     profile: string;
//   }

//   export interface IReview {
//     id: string;
//     author: IAuthor;
//     contents: string;
//     likes: string[];
//     published: boolean;
//     thumbnail: string;
//     title: string;
//   }

//   export interface IProps {
//     review: IReview;
//   }
//   export interface IBookState {
//     bookList : IBook[];
//   }
//   export interface IReviewState {
//     reviewList: IReview[];
//   }
