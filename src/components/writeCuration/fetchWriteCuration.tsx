import {
  IBook,
  ICuration,
  ICurationsPost,
  IReviewWithBooks,
  IReviews
} from "../shared/Types";

const url: string = "http://booktogether.ap-northeast-2.elasticbeanstalk.com";

export const fetchPostCuration = (callback: any, body: ICurationsPost): any => {
  return fetch(`${url}/curations`, {
    body: JSON.stringify(body),
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then((response: Response) => response.json())
    .then((result: ICuration) => {
      callback(result._id);
    });
};

export const fetchMyReview = (callback: any, userId: string): any => {
  fetch(`${url}/reviews?author=${userId}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  })
    .then((res: Response) => res.json())
    .then((res: IReviews) => {
      callback(res);
    });
};

export const fetchMyLikesReview = (callback: any): any => {
  fetch(`${url}/reviews?list_type=my_likes`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  })
    .then((res: Response) => res.json())
    .then((res: IReviews) => {
      callback(res);
    });
};

export const fetchReviewsSearch = (callback: any, search: string): void => {
  fetch(`${url}/reviews/search?query=${search}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  })
    .then((res: Response) => res.json())
    .then((res: IReviews) => {
      callback(res);
    });
};
