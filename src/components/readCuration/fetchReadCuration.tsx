import {
  ICuration,
  ICurationsPost,
  IReview,
  IBookReview
} from "../shared/Types";

const url: string = "https://server.booktogether.org";

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
      if (reviews.length > 0) {
        const published: IReview[] = reviews.filter(
          (review: IReview) => review.published
        );
        const reviewIds: string[] = published.map(
          (review: IReview) => review._id
        );
        fetchGetBooksOfReviews(callback, reviewIds, published);
      } else {
        callback([], []);
      }
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
      callback();
    })
    .catch((err: Error) => {
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
