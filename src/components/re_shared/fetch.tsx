import {
  ICuration,
  ICurationsPost,
  IReview,
  IBookReview,
  ISearchBook
} from "../re_shared/interfaces";

const url: string = "https://server.booktogether.org";

// shared : likes

export const deleteLikes = (callback: any, id: string): any => {
  return fetch(`${url}/curations/${id}/likes`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  }).then((response: Response) => {
    if (response.status === 204) {
      callback();
    }
  });
};

export const postLikes = (callback: any, id: string): any => {
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

// shared : book modal

export const fetchBookSearch = (callback: any, title: string): any => {
  fetch(`${url}/books/search?query=${title}`)
    .then((res: Response) => res.json())
    .then((res: ISearchBook) => {
      callback(res.books);
    });
};