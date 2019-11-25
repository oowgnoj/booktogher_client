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
          _id: "ObjectId",
          authors: ["도스토예프스키"],
          thumbnail:
            "https://search1.kakaocdn.net/thumb/C116x164.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F540827%3Ftimestamp%3D20190123173021%3Fmoddttm=201911201710",
          title: "죄와 벌"
        }
      }
    ],
    reading: [
      {
        book: {
          _id: "ObjectId",
          authors: ["톨스토이"],
          thumbnail:
            "https://search1.kakaocdn.net/thumb/C116x164.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F540827%3Ftimestamp%3D20190123173021%3Fmoddttm=201911201704",
          title: "안나 카레리나"
        },
        start: "10/29/2019",
        goal: "12/13/2019"
      },
      {
        book: {
          _id: "ObjectId",
          authors: ["톨스토이"],
          thumbnail:
            "https://search1.kakaocdn.net/thumb/C116x164.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5103586%3Fmoddttm=201911201745",
          title: "안나 카레리나"
        },
        start: "",
        goal: ""
      }
    ],
    finished: [
      {
        book: {
          _id: "ObjectId",
          authors: ["단테"],
          thumbnail:
            "https://search1.kakaocdn.net/thumb/C116x164.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F521168%3Ftimestamp%3D20190807120942%3Fmoddttm=201911201701",
          title: "신곡"
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
