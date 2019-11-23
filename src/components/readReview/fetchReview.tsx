import { IReview, IBook } from "./reviewInterface";

const url: string = "http://booktogether.ap-northeast-2.elasticbeanstalk.com";

export const fetchReview = (callback: any, id: string): any => {
  fetch(`${url}/reviews/${id}`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: IReview) => {
      callback(res);
    });
};

export const fetchReviewBook = (callback: any, id: string): any => {
  fetch(`${url}/books?review=${id}`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: IBook[]) => {
      console.log('fetch',res)
      callback(res);
    });
};

export const fetchBookReviewList = (callback: any, id: string): any => {
  fetch(`${url}/reviews?book=${id}`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: IReview[]) => {
      callback(res);
    });
};
