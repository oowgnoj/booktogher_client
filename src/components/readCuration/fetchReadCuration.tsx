import {
  ICuration,
  ICurationsPost,
  IReview,
  IBookReview
} from "../shared/Types";

const url: string = "http://booktogether.ap-northeast-2.elasticbeanstalk.com";

interface IBook {
  _id: string;
  authors: string[];
  contents: string;
  thumbnail: string;
  title: string;
}

export const fetchCuration = (callback: any, id: string): any => {
  return fetch(`${url}/curations/${id}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  })
    .then((response: Response) => response.json())
    .then((result: ICuration) => {
      callback(result);
    });
};

export const fetchBooks = (callback: any, id: string): any => {
  return fetch(`${url}/books?curation=${id}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  })
    .then((response: Response) => response.json())
    .then((result: IBook[]) => {
      callback(result);
    });
};

export const fetchGetBooksOfReviews = (
  callback: any,
  reviewIds: string[],
  reviews: IReview[]
): any => {
  const promises: any = reviewIds.map((reviewId: string) => {
    return fetch(`${url}/books?review=${reviewId}`, { credentials: "include" });
  });
  Promise.all(promises).then((res: any) => {
    Promise.all(res.map((el: any) => el.json())).then((books: any) => {
      callback(reviews, books);
    });
  });
};

export const fetchReviews = (callback: any, id: string): any => {
  return fetch(`${url}/reviews?curation=${id}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  })
    .then((response: Response) => response.json())
    .then((reviews: IReview[]) => {
      const reviewIds: string[] = reviews.map((review: IReview) => review._id);
      fetchGetBooksOfReviews(callback, reviewIds, reviews);
    });
};

export const fetchDelete = (callback: any, id: string): any => {
  return fetch(`${url}/curations/${id}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
    .then((response: Response) => {
      console.log("큐레이션 삭제 성공! , response", response);
      callback();
    })
    .catch((err: Error) => {
      console.log("큐레이션 삭제 실패! , err", err);
      callback();
    });
};

export const fetchPostCuration = (callback: any, body: ICurationsPost): any => {
  return fetch(`${url}/curations`, {
    body: JSON.stringify(body),
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  }).then((response: Response) => callback());
};

export const fetchDeleteLikes = (callback: any, id: string): any => {
  return fetch(`${url}/curations/${id}/likes`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  }).then((response: Response) => callback());
};

export const fetchPostLikes = (callback: any, id: string): any => {
  return fetch(`${url}/curations/${id}/likes`, {
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
