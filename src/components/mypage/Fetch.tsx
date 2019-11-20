import { IReviews } from "./../shared/Types";

export const fetchReview = (callback: any, id: string): any => {
  fetch(`https://localhost:3000/reviews/reviews?list_type=recommended`)
    .then((res: Response) => res.json())
    .then((res: IReviews) => {
      callback(res);
    });
};
