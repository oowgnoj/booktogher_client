import {
  IBook,
  IBookSearch,
  IReview,
  IReviewSearch,
  IReviews,
  IReviewBook,
  ICuration
} from "./Types";

const url: string = "http://booktogether.ap-northeast-2.elasticbeanstalk.com";

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
      console.log(res);
      callback(res);
    });
};

export const fetchCuration = (callback?: any, id?: string): any => {
  console.log("id", id);
  fetch(`${url}/curations?author=${id}`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: ICuration[]) => {
      console.log("from fetch", res);
      callback(res);
    });
};
export const fetchReviewLikes = (callback?: any, id?: string): any => {
  fetch(`${url}/reviews?list_type=mylikes`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: IReviews) => {
      callback(res);
    });
};
export const fetchCurationLikes = (callback?: any, id?: string): any => {
  fetch(`${url}/curations?list_type=mylikes`, {
    credentials: "include"
  })
    .then((res: Response) => res.json())
    .then((res: ICuration) => {
      callback(res);
    });
};

export const fetchReviewSearch = (callback: any, title: string): any => {
  fetch(`${url}/reviews/search?query=${title}`)
    .then((res: Response) => res.json())
    .then((res: IReviewSearch) => {
      callback(res.reviews);
    });
};

export const fetchGetCurations = (callback: any, authorId: string): any => {
  fetch(`${url}/curations?author=${authorId}`)
    .then((res: Response) => res.json())
    .then((res: IReviews) => callback(res));
};

export const fetchGetReviews = (
  reviewCallback: any,
  bookCallback: any,
  authorId: string
): any => {
  fetch(`${url}/reviews?author=${authorId}`)
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
