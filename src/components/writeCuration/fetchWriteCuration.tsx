import { IBook, ICuration, ICurationsPost } from "../shared/Types";

export const fetchPostCuration = (callback: any, body: ICurationsPost): any => {
  return fetch(
    "http://booktogether.ap-northeast-2.elasticbeanstalk.com/curations",
    {
      body: JSON.stringify(body),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    }
  )
    .then((response: Response) => response.json())
    .then((result: ICuration) => {
      callback(result._id);
    });
};
