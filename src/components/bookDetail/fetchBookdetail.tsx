import { IBookDetail, IReviews } from "../shared/Types";

const url: string = "http://booktogether.ap-northeast-2.elasticbeanstalk.com";

export const fetchBookDetail = (callback: any, id: string): any => {
  fetch(`${url}/books/${id}`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: IBookDetail) => {
      callback(res);
    });
};

export const fetchBookReview = (callback: any, id: string): any => {
  fetch(`${url}/reviews?book=${id}`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: IReviews) => {
      callback(res);
    });
};