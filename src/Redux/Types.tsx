interface ILogIn {
  email: string;
  password: string;
}

interface IBoook {
  _id: string;
  authors: string[];
  thumbnail: string;
  title: string;
}

interface IToRead {
  book: IBoook;
}

interface IBookReading {
  book: IBoook;
  start: string;
  goal: string;
}
interface IBookFinished {
  book: IBoook;

  start: string;
  end: string;
}
export interface IUserInfo {
  _id: string;
  name: string;
  email: string;
  image: string;
  profile: string;
  to_read: IToRead[];
  reading: IBookReading[];
  finished: IBookFinished[];
  numBooksGoal: number;
  numReviewsGoal: number;
}

export interface IUserInfoOnly {
  _id: string;
  name: string;
  email: string;
  image: string;
  profile: string;
  numBooksGoal: number;
  numReviewsGoal: number;
}

export interface IUserEditInfo {
  name: string;
  email: string;
  profile: string;
}

interface IUserBookOnly {
  to_read: IToRead[];
  reading: IBookReading[];
  finished: IBookFinished[];
}

interface IError {
  message: string;
  status: number;
  type: string;
}

interface IErrorResponse {
  error: IError;
}

export default interface IState {
  User: IUserInfo;
  pending: boolean;
  error: string;
}

export const initialState: IState = {
  User: {
    _id: "",
    email: "",
    image: "",
    name: "",
    profile: "",
    to_read: [
      {
        book: {
          _id: "5dd45f75d7c3d6fd48730deb",
          authors: [""],
          thumbnail: "",
          title: ""
        }
      }
    ],
    reading: [
      {
        book: {
          _id: "5dd45f75d7c3d6fd48730deb",
          authors: [""],
          thumbnail: "",
          title: ""
        },
        start: "",
        goal: ""
      }
    ],
    finished: [
      {
        book: {
          _id: "5dd45f75d7c3d6fd48730deb",
          authors: [""],
          thumbnail: "",
          title: ""
        },
        start: "",
        end: ""
      }
    ],
    numBooksGoal: 10,
    numReviewsGoal: 10
  },
  pending: false,
  error: ""
};
