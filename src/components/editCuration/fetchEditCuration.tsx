import {
  IBook,
  ICuration,
  ICurationsPost,
  IReview,
  IReviewSearchBook,
  IReviewSearchWithBooks
} from "../shared/Types";

const url: string = "https://server.booktogether.org";

export const fetchCuration = (callback: any, id: string): any => {
  return fetch(`${url}/curations/${id}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/text"
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
      "Content-Type": "application/text"
    },
    method: "GET"
  })
    .then((response: Response) => response.json())
    .then((result: IBook[]) => {
      callback(result);
    });
};

// export const fetchReviews = (callback: any, id: string): any => {
//   return fetch(`${url}/reviews?curation=${id}`, {
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/text"
//     },
//     method: "GET"
//   })
//     .then((response: Response) => response.json())
//     .then((result: IReview[]) => {
//       callback(result);
//     });
// };

export const fetchReviews = (callback: any, id: string): any => {
  fetch(`${url}/reviews?curation=${id}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  })
    .then((res: Response) => res.json())
    .then((reviewsRes: any) => {
      if (reviewsRes.length > 0) {
        const published: any = reviewsRes.filter((review: IReview) => {
          return review.published;
        });
        const promises: any = published.map((review: IReview) => {
          return fetch(`${url}/books?review=${review._id}`);
        });
        Promise.all(promises).then((res: any) => {
          Promise.all(res.map((el: any) => el.json())).then((booksRes: any) => {
            booksRes.forEach((books: IBook[], index: number) => {
              const basicInfo = books.map((book: IBook) => {
                return { id: book._id, title: book.title };
              });
              published[index].books = basicInfo;
            });
            callback(published);
          });
        });
      } else {
        callback([]);
      }
    });
};

export const fetchEditCuration = (
  callback: any,
  id: string,
  body: ICurationsPost
): any => {
  return fetch(`${url}/curations/${id}`, {
    body: JSON.stringify(body),
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    method: "PATCH"
  })
    .then((response: Response) => response.json())
    .then((result: ICuration) => {
      callback(result._id);
    });
};
