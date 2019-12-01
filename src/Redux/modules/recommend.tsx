import { handleActions } from "redux-actions";

const RECOMMEND_PENDING_REVIEW: string = "recommend/PENDING_REVIEW";
const RECOMMEND_SUCCESS_REVIEW: string = "recommend/SUCCESS_REVIEW";
const RECOMMEND_FAILURE_REVIEW: string = "recommend/FAILURE_REVIEW";

const RECOMMEND_PENDING_CURATION: string = "recommend/PENDING_CURATION";
const RECOMMEND_SUCCESS_CURATION: string = "recommend/SUCCESS_CURATION";
const RECOMMEND_FAILURE_CURATION: string = "recommend/FAILURE_CURATION_";

function getReviewsAPI(): Promise<Response> {
  return fetch(
    "https://server.booktogether.org/reviews?list_type=recommended",
    {
      credentials: "include"
    }
  );
}

function getCurationsAPI(): Promise<Response> {
  return fetch(
    "https://server.booktogether.org/curations?list_type=recommended",
    {
      credentials: "include"
    }
  );
}

export const updateReviewsRecommend = (): any => (
  dispatch: any
): Promise<void> => {
  dispatch({ type: RECOMMEND_PENDING_REVIEW });

  return getReviewsAPI()
    .then((response: Response) => response.json())
    .then((result: IReview) => {
      dispatch({
        payload: result,
        type: RECOMMEND_SUCCESS_REVIEW
      });
    })
    .catch((err: Response) => {
      dispatch({
        payload: err,
        type: RECOMMEND_FAILURE_REVIEW
      });
    });
};

export const updateCurationsRecommend = (): any => (
  dispatch: any
): Promise<void> => {
  dispatch({ type: RECOMMEND_PENDING_CURATION });

  return getCurationsAPI()
    .then((response: Response) => response.json())
    .then((result: ICuration) => {
      dispatch({
        payload: result,
        type: RECOMMEND_SUCCESS_CURATION
      });
    })
    .catch((err: Response) => {
      dispatch({
        payload: err,
        type: RECOMMEND_FAILURE_CURATION
      });
    });
};

interface IAuthor {
  _id: string;
  image: string;
  name: string;
  profile: string;
}

interface ICuration {
  _id: string;
  author: IAuthor;
  contents: string;
  likes: string[];
  published: boolean;
  title: string;
}

interface IReview {
  id: string;
  author: IAuthor;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}

interface IData {
  curation: ICuration[];
  review: IReview[];
}

interface IState {
  pending: boolean;
  error: boolean;
  data: IData;
}

const initialState: IState = {
  data: {
    curation: [],
    review: []
  },
  error: false,
  pending: false
};

export default handleActions(
  {
    [RECOMMEND_PENDING_REVIEW]: (state: IState, action: any): IState => {
      return {
        ...state,
        error: false,
        pending: true
      };
    },
    [RECOMMEND_SUCCESS_REVIEW]: (state: IState, action: any): IState => {
      return {
        data: { ...state.data, review: action.payload },
        error: false,
        pending: false
      };
    },
    [RECOMMEND_FAILURE_REVIEW]: (state: IState, action: any): IState => {
      return {
        ...state,
        error: true,
        pending: false
      };
    },
    [RECOMMEND_PENDING_CURATION]: (state: IState, action: any): IState => {
      return {
        ...state,
        error: false,
        pending: true
      };
    },
    [RECOMMEND_SUCCESS_CURATION]: (state: IState, action: any): IState => {
      return {
        data: { ...state.data, curation: action.payload },
        error: false,
        pending: false
      };
    },
    [RECOMMEND_FAILURE_CURATION]: (state: IState, action: any): IState => {
      return {
        ...state,
        error: true,
        pending: false
      };
    }
  },
  initialState
);

/*
[
  {
    _id: "ObjectId",
    author: {
      _id: "ObjectId",
      image: "http://...",
      name: "박종우",
      profile: "저는 박종우라고 합니다."
    },
    contents: "이 컬렉션은...",
    likes: ["user-id1", "user-id2"],
    published: false,
    title: "가을바람 쐬며 읽기 좋은 책"
  },
 컬렉션 더 보기 (19)...
]


/*
1) 메인 > fetch > recommended "TYPE : recommend/UPDATE"
*/
