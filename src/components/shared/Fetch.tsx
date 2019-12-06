import {
  IBook,
  IBookReview,
  IBookSearch,
  ICuration,
  IReview,
  IReviews,
  IReviewBook,
  IReviewSearch
} from "./Types";

const url: string = "https://server.booktogether.org";

export const fetchBookSearch = (callback: any, title: string): any => {
  fetch(`${url}/books/search?query=${title}`)
    .then((res: Response) => res.json())
    .then((res: IBookSearch) => {
      callback(res.books);
    });
};

export const fetchReview = (callback?: any, id?: string): any => {
  fetch(`${url}/reviews?author=${id}`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: IReviews[]) => {
      callback(res);
    });
};

export const fetchCuration = (callback?: any, id?: string): any => {
  fetch(`${url}/curations?author=${id}`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: ICuration[]) => {
      callback(res);
    });
};

export const fetchReviewLikes = (callback?: any, id?: string): any => {
  fetch(`${url}/reviews?list_type=my_likes`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: IReviews) => {
      callback(res);
    });
};

export const fetchCurationLikes = (callback?: any, id?: string): any => {
  fetch(`${url}/curations?list_type=my_likes`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: ICuration) => {
      callback(res);
    });
};

export const fetchReviewSearch = (callback: any, title: string): any => {
  fetch(`${url}/reviews/search?query=${title}`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: IReviewSearch) => {
      callback(res.reviews);
    });
};

export const fetchGetCurations = (callback: any, authorId: string): any => {
  fetch(`${url}/curations?author=${authorId}`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: IReviews) => callback(res));
};

export const fetchGetReviews = (callback: any, authorId: string): any => {
  fetch(`${url}/reviews?author=${authorId}`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((reviewsRes: IReview[]) => {
      const promises: any = reviewsRes.map((review: IReview) => {
        return fetch(`${url}/books?review=${review._id}`);
      });
      Promise.all(promises).then((res: any) => {
        Promise.all(res.map((el: any) => el.json())).then((booksRes: any) => {
          const booksInfo: IReviewBook[][] = booksRes.map((books: IBook[]) =>
            books.map((book: IBook) => {
              return {
                _id: book._id,
                thumbnail: book.thumbnail,
                title: book.title
              };
            })
          );

          callback(reviewsRes, booksInfo);
        });
      });
    });
};
export const fetchGetReviewLikes = (
  reviewCallback: any,
  bookCallback: any
): any => {
  fetch(`${url}/reviews?list_type=my_likes`, { credentials: "include" })
    .then((res: Response) => res.json())
    .then((res: IReview[]) => {
      reviewCallback(res);
      const promises: any = res.map((review: IReview) => {
        return fetch(`${url}/books?review=${review._id}`);
      });
      Promise.all(promises).then((res: any) => {
        Promise.all(res.map((el: any) => el.json())).then(res => {
          bookCallback(res);
        });
      });
    });
};

// export const fetchCheckUserStatus = (callback: any): any => {
//   fetch(`${url}/user`, { credentials: "include" }).then((res: Response) => {
//     (res);
//     if (res.status === 200) {
//       callback(true);
//     } else {
//       callback(false);
//     }
//   });
// };
