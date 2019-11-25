import { ICuration, ICurationsPost, IReview } from "../shared/Types";

interface IBook {
  _id: string;
  authors: string[];
  contents: string;
  thumbnail: string;
  title: string;
}

export const fetchCuration = (callback: any, id: string): any => {
  return fetch(
    `http://booktogether.ap-northeast-2.elasticbeanstalk.com/curations/${id}`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/text"
      },
      method: "GET"
    }
  )
    .then((response: Response) => response.json())
    .then((result: ICuration) => {
      callback(result);
    });
};

export const fetchBooks = (callback: any, id: string): any => {
  return fetch(
    `http://booktogether.ap-northeast-2.elasticbeanstalk.com/books?curation=${id}`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/text"
      },
      method: "GET"
    }
  )
    .then((response: Response) => response.json())
    .then((result: IBook[]) => {
      callback(result);
    });
};

export const fetchReviews = (callback: any, id: string): any => {
  return fetch(
    `http://booktogether.ap-northeast-2.elasticbeanstalk.com/reviews?curation=${id}`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/text"
      },
      method: "GET"
    }
  )
    .then((response: Response) => response.json())
    .then((result: IReview[]) => {
      callback(result);
    });
};

export const fetchEditCuration = (callback: any, body: ICurationsPost): any => {
  return fetch(
    "http://booktogether.ap-northeast-2.elasticbeanstalk.com/curations",
    {
      body: JSON.stringify(body),
      credentials: "include",
      headers: {
        "Content-Type": "application/text"
      },
      method: "PATCH"
    }
  )
    .then((response: Response) => response.json())
    .then((result: ICuration) => {
      callback(result._id);
    });
};
