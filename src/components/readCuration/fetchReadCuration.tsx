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
        "Content-Type": "application/json"
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
        "Content-Type": "application/json"
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
        "Content-Type": "application/json"
      },
      method: "GET"
    }
  )
    .then((response: Response) => response.json())
    .then((result: IReview[]) => {
      callback(result);
    });
};

export const fetchDelete = (callback: any, id: string): any => {
  return fetch(
    `http://booktogether.ap-northeast-2.elasticbeanstalk.com/reviews?curation=${id}`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    }
  )
    .then((response: Response) => {
      console.log("큐레이션 삭제 성공! , response", response);
      callback();
    })
    .catch((err: Error) => {
      console.log("큐레이션 삭제 실패! , err", err);
      callback();
    });
};

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
  ).then((response: Response) => callback());
};

export const fetchDeleteLikes = (callback: any, id: string): any => {
  return fetch(
    `http://booktogether.ap-northeast-2.elasticbeanstalk.com/curations/${id}/likes`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    }
  ).then((response: Response) => callback());
};

export const fetchPostLikes = (callback: any, id: string): any => {
  return fetch(
    `http://booktogether.ap-northeast-2.elasticbeanstalk.com/curations/${id}/likes`,
    {
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
