import {
  IBook,
  ICuration,
  ICurationsPost,
  IReviewBook,
  IReviewWithBooks,
  IReviewSearch,
  IReviewSearchBook,
  IReviewSearchWithBooksRes,
  IReview,
  IReviews
} from "../shared/Types";
import { reviews } from "../shared/InitialStates";

const url: string = "https://server.booktogether.org";

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
    .then((reviewsRes: IReview[]) => {
      const published: any = reviewsRes.filter(
        (review: IReview) => review.published
      );
      const promises: any = published.map((review: IReview) => {
        return fetch(`${url}/books?review=${review._id}`);
      });
      Promise.all(promises).then((res: any) => {
        Promise.all(res.map((el: any) => el.json())).then((booksRes: any) => {
          const booksInfo: IReviewSearchBook[][] = booksRes.map(
            (books: IBook[]) =>
              books.map((book: IBook) => {
                return {
                  _id: book._id,
                  title: book.title
                };
              })
          );
          callback(published, booksInfo);
        });
      });
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
    .then((reviewsRes: IReview[]) => {
      const published: any = reviewsRes.filter(
        (review: IReview) => review.published
      );
      const promises: any = published.map((review: IReview) => {
        return fetch(`${url}/books?review=${review._id}`);
      });
      Promise.all(promises).then((res: any) => {
        Promise.all(res.map((el: any) => el.json())).then((booksRes: any) => {
          const booksInfo: IReviewSearchBook[][] = booksRes.map(
            (books: IBook[]) =>
              books.map((book: IBook) => {
                return {
                  _id: book._id,
                  title: book.title
                };
              })
          );
          callback(published, booksInfo);
        });
      });
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
    .then((reviewsRes: IReviewSearchWithBooksRes) => {
      const published = reviewsRes.reviews.filter(
        (review: any) => review.published
      );
      callback(published);
    });
};
