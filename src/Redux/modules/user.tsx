import { handleActions } from "redux-actions";

// 6) 마이페이지 > 유저정보 / 읽고싶은책 > user (info)
//     6-1) 읽고싶은책 추가 "TYPE : user/ADDTOREAD"
//     6-2) 읽고싶은책 빼기 "TYPE : user/DELETETOREAD"
// 7) 마이페이지 > 유저정보 / 읽고있는책 > user (info)
//     7-1) 읽고있는책 추가 "TYPE : user/ADDREADING"
//     7-2) 읽고있는책 빼기 "TYPE : user/DELETEREADING"
//     7-3) 날짜 수정 "TYPE : user/EDITREADINGDATE"
// 8) 마이페이지 > 유저정보 / 다읽은책 > user (info)
//     8-1) 다읽은책 추가 "TYPE : user/ADDFINISHED"
//     8-2) 다읽은책 빼기 "TYPE : user/DELETEFINISHED"
//     8-3) 날짜 수정 "TYPE : user/EDITFINISHEDDATE"

// LOGIN & LOGOUT  & UPDATE USERINFO requests

const LOGIN_PENDING: string = "login/PENDING_LOGIN";
const LOGIN_SUCCESS: string = "login/SUCCESS_LOGIN";
const LOGIN_FAILURE: string = "login/FAILURE_LOGIN";

const LOGOUT_PENDING: string = "logout/PENDING_LOGOUT";
const LOGOUT_SUCCESS: string = "logout/SUCCESS_LOGOUT";
const LOGOUT_FAILURE: string = "logout/FAILURE_LOGOUT";

const GETINFO_SUCCESS: string = "getinfo/SUCCESS_GETINFO";
// const GETINFO_PENDING: string = "getinfo/PENDING_GETINFO"; 우선 로그인과 한번에 처리
// const GETINFO_FAILURE: string = "getinfo/FAILURE_GETINFO"; failure 에러도 로그인과 함께

const UPDATEINFO_PENDING: string = "getinfo/PENDING_UPDATEINFO";
const UPDATEINFO_SUCCESS: string = "getinfo/SUCCESS_UPDATEINFO";
const UPDATEINFO_FAILURE: string = "getinfo/FAILURE_UPDATEINFO";

// USER BOOK requests
const ADD_TOREAD_PENDING: string = "user/ADD_TOREAD_PENDING";
const ADD_TOREAD_SUCCESS: string = "user/ADD_TOREAD_SUCCESS";
const ADD_TOREAD_FAILURE: string = "user/ADD_TOREAD_FAILURE";
const DELETE_TOREAD_PENDING: string = "user/DELETE_TOREAD_PENDING";
const DELETE_TOREAD_SUCCESS: string = "user/DELETE_TOREAD_SUCCESS";
const DELETE_TOREAD_FAILURE: string = "user/DELETE_TOREAD_FAILURE";

const ADD_READING_PENDING: string = "user/ADD_READING_PENDING";
const ADD_READING_SUCCESS: string = "user/ADD_READING_SUCCESS";
const ADD_READING_FAILURE: string = "user/ADD_READING_FAILURE";
const DELETE_READING_PENDING: string = "user/DELETE_READING_PENDING";
const DELETE_READING_SUCCESS: string = "user/DELETE_READING_SUCCESS";
const DELETE_READING_FAILURE: string = "user/DELETE_READING_FAILURE";
const EDITDATE_READING_PENDING: string = "user/EDITDATE_READING_PENDING";
const EDITDATE_READING_SUCCESS: string = "user/EDITDATE_READING_SUCCESS";
const EDITDATE_READING_FAILURE: string = "user/EDITDATE_READING_FAILURE";

const ADD_FINISHED_PENDING: string = "user/ADD_FINISHED_PENDING";
const ADD_FINISHED_SUCCESS: string = "user/ADD_FINISHED_SUCCESS";
const ADD_FINISHED_FAILURE: string = "user/ADD_FINISHED_FAILURE";
const DELETE_FINISHED_PENDING: string = "user/DELETE_FINISHED_PENDING";
const DELETE_FINISHED_SUCCESS: string = "user/DELETE_FINISHED_SUCCESS";
const DELETE_FINISHED_FAILURE: string = "user/DELETE_FINISHED_FAILURE";
const EDITDATE_FINISHED_PENDING: string = "user/EDITDATE_FINISHED_PENDING";
const EDITDATE_FINISHED_SUCCESS: string = "user/EDITDATE_FINISHED_SUCCESS";
const EDITDATE_FINISHED_FAILURE: string = "user/EDITDATE_FINISHED_FAILURE";

function loginAPI(mail: string, pw: string): Promise<Response> {
  return fetch(
    "http://booktogether.ap-northeast-2.elasticbeanstalk.com/auth/login",
    {
      body: JSON.stringify({
        email: mail,
        password: pw
      }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    }
  );
}

function logoutAPI(): Promise<Response> {
  return fetch(
    "http://booktogether.ap-northeast-2.elasticbeanstalk.com/books/auth/logout",
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    }
  );
}

function getInfoAPI(): Promise<Response> {
  return fetch("http://booktogether.ap-northeast-2.elasticbeanstalk.com/user", {
    credentials: "include"
  });
}

function updateInfoAPI(userInfo: IUserInfoOnly): Promise<Response> {
  return fetch("http://localhost:3000/user", {
    body: JSON.stringify(userInfo),
    credentials: "include",
    method: "PATCH"
  });
}

function updateUserBookAPI(userBook: IUserBookOnly): Promise<Response> {
  return fetch("http://localhost:3000/user", {
    body: JSON.stringify(userBook),
    method: "PATCH"
  });
}

export const requestLogin = (mail: string, pw: string): any => (
  dispatch: any
): Promise<void> => {
  dispatch({ type: LOGIN_PENDING });

  return loginAPI(mail, pw)
    .then((response: Response) => response.json())
    .then((result: boolean) => {
      console.log("로그인 요청 보냈고 잘 왔어 : result ?", result);
      dispatch({
        type: LOGIN_SUCCESS
      });
    })
    .then(() => getInfoAPI())
    .then((response: Response) => response.json())
    .then((result: IUserInfo) => {
      console.log("유저정보 요청 보냈고 잘 왔어 : result ?", result);
      sessionStorage.setItem("userInfo", JSON.stringify(result));
      dispatch({
        payload: result,
        type: GETINFO_SUCCESS
      });
    })
    .catch((err: Response) => {
      dispatch({
        payload: err,
        type: LOGIN_FAILURE
      });
    });
};

export const requestLogout = (): any => (dispatch: any): Promise<void> => {
  dispatch({ type: LOGOUT_PENDING });

  return logoutAPI()
    .then((response: Response) => response.json())
    .then((result: boolean) => {
      dispatch({
        type: LOGOUT_SUCCESS
      });
    })
    .catch((err: Response) => {
      dispatch({
        payload: err,
        type: LOGOUT_FAILURE
      });
    });
};

// * UPDATE user information  *

export const updateUserInfo = (userInfo: IUserInfoOnly): any => (
  dispatch: any
): Promise<void> => {
  dispatch({ type: UPDATEINFO_PENDING });

  return updateInfoAPI(userInfo)
    .then((response: Response) => response.json())
    .then((result: IUserInfo) => {
      dispatch({
        payload: result,
        type: UPDATEINFO_SUCCESS
      });
    })
    .catch((err: Response) => {
      dispatch({
        payload: err,
        type: UPDATEINFO_FAILURE
      });
    });
};

// * UPDATE user book information *
// export const updateUserBook = (userBook: IUserBookOnly): any => (
//   dispatch: any
// ): Promise<void> => {
//   dispatch({ type: UPDATEINFO_PENDING });

//   return updateInfoAPI(userInfo)
//     .then((response: Response) => response.json())
//     .then((result: IUserInfo) => {
//       dispatch({
//         payload: result,
//         type: UPDATEINFO_SUCCESS
//       });
//     })
//     .catch((err: Response) => {
//       dispatch({
//         payload: err,
//         type: UPDATEINFO_FAILURE
//       });
//     });
// };

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
interface IUserInfo {
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

interface IUserInfoOnly {
  _id: string;
  name: string;
  email: string;
  image: string;
  profile: string;
  numBooksGoal: number;
  numReviewsGoal: number;
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

interface IState {
  User: IUserInfo;
  isLoggedIn: boolean;
  pending: boolean;
  error: string;
}

const initialState: IState = {
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
  isLoggedIn: false,
  pending: false,
  error: ""
};

export default handleActions(
  {
    [LOGIN_PENDING]: (state: IState, action: any): IState => {
      return {
        ...state,
        isLoggedIn: false,
        pending: true
      };
    },
    [LOGIN_SUCCESS]: (state: IState, action: any): IState => {
      return {
        ...state,
        isLoggedIn: true,
        pending: false
      };
    },
    [LOGIN_FAILURE]: (state: IState, action: any): IState => {
      return {
        ...state,
        isLoggedIn: false,
        pending: false
      };
    },
    [LOGOUT_PENDING]: (state: IState, action: any): IState => {
      return {
        ...state,
        isLoggedIn: true,
        pending: true
      };
    },
    [LOGOUT_SUCCESS]: (state: IState, action: any): IState => {
      return {
        ...state,
        error: "",
        isLoggedIn: false,
        pending: false
      };
    },
    [LOGOUT_FAILURE]: (state: IState, action: any): IState => {
      return {
        ...state,
        error: action.payload.err.error.message,
        isLoggedIn: true,
        pending: false
      };
    },
    [GETINFO_SUCCESS]: (state: IState, action: any): IState => {
      return {
        ...state,
        User: action.payload,
        isLoggedIn: true
      };
    },
    [UPDATEINFO_PENDING]: (state: IState, action: any): IState => {
      return {
        ...state,
        pending: true
      };
    },
    [UPDATEINFO_SUCCESS]: (state: IState, action: any): IState => {
      return {
        ...state,
        User: action.payload,
        pending: false
      };
    },
    [UPDATEINFO_FAILURE]: (state: IState, action: any): IState => {
      return {
        ...state,
        error: action.payload.err.error.message,
        pending: false
      };
    }
  },
  initialState
);

/*


비동기 액션 
1. LOGIN
2. GETINFO
3. getinfo

액션




2) 사이드바 > 로그아웃 > user (isloggedin, info) "TYPE : user/LOGOUT"
3) 사이드바 > 로그인 > fetch > user (isloggedin, info) "TYPE : user/LOGIN"
4) 사이드바 > 로그인 > fetch > user (isloggedin, info) "TYPE : user/GETINFO"
5) 마이페이지 > 유저정보 > user (info) "TYPE : user/UPDATEINFO"


6) 마이페이지 > 유저정보 / 읽고싶은책 > user (info)
    6-1) 읽고싶은책 추가 "TYPE : user/ADDTOREAD"
    6-2) 읽고싶은책 빼기 "TYPE : user/DELETETOREAD"
7) 마이페이지 > 유저정보 / 읽고있는책 > user (info)
    7-1) 읽고있는책 추가 "TYPE : user/ADDREADING"
    7-2) 읽고있는책 빼기 "TYPE : user/DELETEREADING"
    7-3) 날짜 수정 "TYPE : user/EDITREADINGDATE"
8) 마이페이지 > 유저정보 / 다읽은책 > user (info)
    8-1) 다읽은책 추가 "TYPE : user/ADDFINISHED"
    8-2) 다읽은책 빼기 "TYPE : user/DELETEFINISHED"
    8-3) 날짜 수정 "TYPE : user/EDITFINISHEDDATE"
*/

/*


const initialState: IState = {
  User: {
    _id: "",
    email: "aaa@gmail.com",
    image: "http://...",
    name: "정혜경",
    profile: "저는 말이죠...",
    to_read: [
      {
        book: {
          _id: "ObjectId",
          authors: ["도스토예프스키"],
          thumbnail: "http://...",
          title: "죄와 벌"
        }
      }
    ],
    reading: [
      {
        book: {
          _id: "ObjectId",
          authors: ["톨스토이"],
          thumbnail: "http://...",
          title: "안나 카레리나"
        },
        start: "10/29/2019",
        goal: "12/13/2019"
      }
    ],
    finished: [
      {
        book: {
          _id: "ObjectId",
          authors: ["단테"],
          thumbnail: "http://...",
          title: "신곡"
        },
        start: "11/15/2019",
        end: "11/24/2019"
      }
    ],
    numBooksGoal: 10,
    numReviewsGoal: 10
  },
  isLoggedIn: true,
  pending: false,
  error: ""
};

*/
