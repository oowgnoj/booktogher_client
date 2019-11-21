import { IReviews } from "./../shared/Types";

export const fetchReview = (callback?: any, id?: string): any => {
  fetch(
    `http://booktogether.ap-northeast-2.elasticbeanstalk.com/reviews?list_type=personal`,
    {
      credentials: "include"
    }
  )
    .then((res: Response) => res.json())
    .then((res: IReviews) => {
      callback(res);
    });
};
