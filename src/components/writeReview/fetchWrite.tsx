import { IBook } from "./writeInterface";

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

interface IPostReview {
  books: string[]; // book id 목록
  contents: string;
  published: boolean;
  thumbnail: string;
  title: string;
}

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

const url: string = "http://booktogether.ap-northeast-2.elasticbeanstalk.com";

export const fetchBookSearch = (callback: any, title: string): any => {
  fetch(`${url}/books/search?query=${title}`)
    .then((res: Response) => res.json())
    .then((res: ISearchBook) => {
      console.log(res);
      callback(res.books);
    });
};

export const fetchPostReview = (callback: any, post: IPostReview): any => {
  fetch(`${url}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post),
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: IReview) => {
      console.log(res);
      callback(res._id);
    });
};
