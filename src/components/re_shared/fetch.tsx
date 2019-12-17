import {
  ICuration,
  ICurationsPost,
  IReview,
  IBookReview
} from "../shared/Types";

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
