import { IBookDetail, IReviews, IRatings } from "../shared/Types";

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

export const fetchBookRating = (callback: any, id: string): any => {
  fetch(`${url}/ratings?books[]=${id}`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: IRatings) => {
      callback(res);
    });
};

export const fetchAddToRead = (id: string): any => {
  fetch(`${url}/user`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "PATCH"
  })
    .then((res: Response) => res.json())
    .then((res: any) => {
      console.log(res);
    });
};