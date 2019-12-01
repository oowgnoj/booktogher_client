import { IReview, IBook } from "./reviewInterface";
import { IReviewLike, IRating } from "./../shared/Types";

const url: string = "https://server.booktogether.org";

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

export const fetchReviewLikes = (callback: any, id: string): any => {
  fetch(`${url}/reviews/${id}/likes`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then((res: Response) => res.json())
    .then((res: IReviewLike) => {
      callback(res);
    });
};

export const fetchDeleteLikes = (callback: any, id: string): any => {
  fetch(`${url}/reviews/${id}/likes`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  }).then((res: Response) => callback(res));
};

export const fetchBookRatings = (callback: any, id: string): any => {
  fetch(`${url}/ratings?${id}`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: IRating) => {
      callback(res);
    });
};

export const fetchDeleteReview = (callback: any, id: string): any => {
  fetch(`${url}/reviews/${id}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  }).then((res: Response) => callback());
};
