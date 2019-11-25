import { IBookSearch, IReviewSearch } from "./Types";

const url: string = "http://booktogether.ap-northeast-2.elasticbeanstalk.com";

export const fetchBookSearch = (callback: any, title: string): any => {
  fetch(`${url}/books/search?query=${title}`)
    .then((res: Response) => res.json())
    .then((res: IBookSearch) => {
      callback(res.books);
    });
};

export const fetchReviewSearch = (callback: any, title: string): any => {
  fetch(`${url}/reviews/search?query=${title}`)
    .then((res: Response) => res.json())
    .then((res: IReviewSearch) => {
      callback(res.reviews);
    });
};

