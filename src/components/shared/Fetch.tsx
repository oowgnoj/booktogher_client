import { IBookSearch } from "./Types";
import { IReviews } from "./Types";

const url: string = "http://booktogether.ap-northeast-2.elasticbeanstalk.com";

export const fetchBookSearch = (callback: any, title: string): any => {
  fetch(`${url}/books/search?query=${title}`)
    .then((res: Response) => res.json())
    .then((res: IBookSearch) => {
      callback(res.books);
    });
};
export const fetchReview = (callback?: any, id?: string): any => {
  fetch(`${url}/reviews?list_type=personal`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: IReviews) => {
      callback(res);
    });
};
