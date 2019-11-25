import { IBook, ICuration, ICurationsPost, IReviewWithBooks } from "../shared/Types";

export const fetchPostCuration = (callback: any, body: ICurationsPost): any => {
  return fetch(
    "http://booktogether.ap-northeast-2.elasticbeanstalk.com/curations",
    {
      body: JSON.stringify(body),
      credentials: "include",
      headers: {
        "Content-Type": "application/text"
      },
      method: "POST"
    }
  )
    .then((response: Response) => response.json())
    .then((result: ICuration) => {
      callback(result._id);
    });
};

const url: string = "http://booktogether.ap-northeast-2.elasticbeanstalk.com";

export const fetchMyReview = (callback: any, userId: string): any => {
  fetch(`${url}/reviews?author=${userId}`)
    .then((res: Response) => res.json())
    .then((res: IReviewWithBooks[]) => {
      callback(res);
    });
};
