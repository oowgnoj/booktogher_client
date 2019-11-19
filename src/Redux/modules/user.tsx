import { handleActions } from "redux-actions";

const LOGIN_PENDING: string = "login/PENDING_LOGIN";
const LOGIN_SUCCESS: string = "login/SUCCESS_LOGIN";
const LOGIN_FAILURE: string = "login/FAILURE_LOGIN";

const LOGOUT_PENDING: string = "logout/PENDING_LOGOUT";
const LOGOUT_SUCCESS: string = "logout/SUCCESS_LOGOUT";
const LOGOUT_FAILURE: string = "logout/FAILURE_LOGOUT";

const GETINFO_PENDING: string = "getinfo/PENDING_GETINFO";
const GETINFO_SUCCESS: string = "getinfo/SUCCESS_GETINFO";
const GETINFO_FAILURE: string = "getinfo/FAILURE_GETINFO";

const UPDATEINFO_PENDING: string = "getinfo/PENDING_UPDATEINFO";
const UPDATEINFO_SUCCESS: string = "getinfo/SUCCESS_UPDATEINFO";
const UPDATEINFO_FAILURE: string = "getinfo/FAILURE_UPDATEINFO";

function loginAPI(): Promise<Response> {
  return fetch("http://localhost:3000/login");
}

function logoutAPI(): Promise<Response> {
  return fetch("http://localhost:3000/logout");
}

function getInfoAPI(): Promise<Response> {
  return fetch("http://localhost:3000/getinfo");
}

function updateInfoAPI(userInfo: IUserInfo): Promise<Response> {
  // const temp = JSON.parse(userInfo)
//   var params :string= Object.keys(userInfo).reduce(key => key+'='+userInfo[key])
//   return fetch("http://localhost:3000/updateInfo",{
//     method: 'PATCH',
//     body: params
//   });
// }

export const requestLogin = (): any => (dispatch: any): Promise<void> => {
  dispatch({ type: LOGIN_PENDING });

  return loginAPI()
    .then((response: Response) => response.json())
    .then((result: boolean) => {
      dispatch({
        payload: {
          isLoggedIn: true
        },
        type: LOGIN_SUCCESS
      });
    })
    .then(() => getInfoAPI())
    .then((response: Response) => response.json())
    .then((result: IUserInfo) => {
      dispatch({
        payload: {
          User: result
        },
        type: GETINFO_SUCCESS
      });
    })
    .catch((err: Response) => {
      dispatch({
        payload: {
          isLoggedIn: false
        },
        type: LOGIN_FAILURE
      });
    });
};

export const requestLogout = (): any => (dispatch: any): Promise<void> => {
  dispatch({ type: LOGOUT_PENDING });

  return loginAPI()
    .then((response: Response) => response.json())
    .then((result: boolean) => {
      dispatch({
        payload: {
          isLoggedIn: false
        },
        type: LOGOUT_SUCCESS
      });
    })
    .catch((err: Response) => {
      dispatch({
        payload: {
          isLoggedIn: true
        },
        type: LOGOUT_FAILURE
      });
    });
};

// export const updateUserInfo = (): any => (dispatch: any): Promise<void> => {
//   dispatch({ type: LOGOUT_PENDING });
//   return updateInfoAPI()
//     .then((response: Response) => response.json())
//     .then((result: boolean) => {
//       dispatch({
//         payload: {
//           isLoggedIn: false
//         },
//         type: LOGOUT_SUCCESS
//       });
//     })
//     .catch((err: Response) => {
//       dispatch({
//         payload: {
//           isLoggedIn: true
//         },
//         type: LOGOUT_FAILURE
//       });
//     });
// };

interface IBoook {
  _id: string;
  authors: string[];
  thumbnail: string;
  title: string;
}

interface IToRead {
  book: IBoook;
}

interface IBoookReading {
  book: IBoook;
  start: string;
  goal: string;
}
interface IBoookFinished {
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
  reading: IBoookReading[];
  finished: IBoookFinished[];
  numBooksGoal: number;
  numReviewsGoal: number;
}

interface IState {
  User: IUserInfo;
  isLoggedIn: boolean;
}

const initialState: IState = {
  User: {
    _id: "ObjectId",
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
  isLoggedIn: false
};

export default handleActions(
  {
    [LOGIN_PENDING]: (state: IState, action: any): IState => {
      return {
        ...state,
        isLoggedIn: false
      };
    },
    [LOGIN_SUCCESS]: (state: IState, action: any): IState => {
      return {
        ...state,
        isLoggedIn: true
      };
    },
    [LOGIN_FAILURE]: (state: IState, action: any): IState => {
      return {
        ...state,
        isLoggedIn: false
      };
    },
    [LOGOUT_PENDING]: (state: IState, action: any): IState => {
      return {
        ...state,
        isLoggedIn: true
      };
    },
    [LOGOUT_SUCCESS]: (state: IState, action: any): IState => {
      return {
        ...state,
        isLoggedIn: false
      };
    },
    [LOGOUT_FAILURE]: (state: IState, action: any): IState => {
      return {
        ...state,
        isLoggedIn: true
      };
    },
    [GETINFO_SUCCESS]: (state: IState, action: any): IState => {
      return {
        User: action.payload.User,
        isLoggedIn: true
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
