import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/index";
import Slider from "./RecoReviewSlider/index";
import RecoReviewList from "./RecoReviewList";
import RecoCurationList from "./RecoCurationList";
import { useDispatch } from "react-redux";
import {
  updateReviewsRecommend,
  updateCurationsRecommend
} from "../../Redux/modules/recommend";
import Store from "../../Redux/configureStore";

import "./index.css";
import { connect } from "react-redux";
import { any } from "prop-types";

// const dispatch = useDispatch()

/*
(서버) 
[1단계] 2개 endpoint 로의 fetch 가 예정되어있음 
reviews?list_type=recommended
collections?list_type=recommended
[2단계]
collection 받은 다음 books?collection_id=각 recommended collection 으로

(스토어)
fetch 받은 데이터를 store.dispatch 로 state 에 반영할 예정
*/

interface IAuthor {
  id: string;
  image: string;
  name: string;
  profile: string;
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

interface ICollection {
  id: string;
  author: IAuthor;
  content: string;
  likes: string[];
  published: boolean;
  title: string;
}

interface IState {
  curation: ICollection[];
  review: IReview[];
}

/* 
interface IProps {
  review: IReview;
} */

// export const Main: React.FC<IState> = (): ReactElement => {
// subscribe
class Main extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount(): void {
    Store.dispatch(updateReviewsRecommend());
    Store.dispatch(updateCurationsRecommend());
  }

  public render(): ReactElement {
    const props: any = this.props;

    return (
      <div className="main">
        <Slider review={props.review[0]} />
        {/*  <Parallax
          id="parallax_top"
          image={
            <img
              src="https://images.unsplash.com/photo-1547331994-d26cb135af48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
              className="main_parallax_image"
            />
          }
        /> */}
        <div className="section_wrapper">
          <div className="section review" style={{ marginLeft: "50px" }}>
            <Link to="/postreview">
              <h2 className="header" style={{ marginTop: "30px" }}>
                서평 쓰러 가기
                <span
                  uk-icon="icon:pencil; ratio: 1.5"
                  style={{ marginLeft: "20px" }}
                ></span>
              </h2>
              <p className="grey-text text-darken-3 lighten-3">
                서평을 작성해주세요.
              </p>
            </Link>
          </div>
          <div className="section curation" style={{ marginLeft: "50px" }}>
            <Link to="/postcuration">
              <h2 className="header" style={{ marginTop: "30px" }}>
                큐레이션 등록하러 가기
                <span
                  uk-icon="icon:pencil; ratio: 1.5"
                  style={{ marginLeft: "20px" }}
                ></span>
              </h2>
              <p className="grey-text text-darken-3 lighten-3">
                당신의 북 플레이리스트를 공유하여 주세요.
              </p>
            </Link>
          </div>
        </div>

        <div className="main_review_list_start">
          <RecoReviewList reviews={props.review.slice(1, 5)} />
          <RecoReviewList reviews={props.review.slice(1, 5)} />
        </div>
        <div className="main_recocollection_div">
          <div
            className="main_recocollection_title"
            style={{
              marginBottom: "50px",
              fontSize: "30px",
              fontFamily: "Song Myung, serif"
            }}
          >
            서로모임에 오신 분들께서 작성해주신 컬렉션입니다.
          </div>
        </div>
        <RecoCurationList curations={props.curation.slice(1, 5)} />
      </div>
    );
  }
}

interface IAAuthor {
  _id: string;
  image: string;
  name: string;
  profile: string;
}

interface ICAuration {
  _id: string;
  author: IAAuthor;
  contents: string;
  likes: string[];
  published: boolean;
  title: string;
}

interface IRAeview {
  id: string;
  author: IAAuthor;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}

interface IDAata {
  curation: ICAuration[];
  review: IRAeview[];
}

interface ISAtate {
  data: IDAata;
  error: boolean;
  pending: boolean;
}

function mapStateToProps(state: any): any {
  return {
    curation: state.recommend.data.curation.slice(0, 5),
    review: state.recommend.data.review.slice(0, 5)
  };
}

function mapDispatchToProps(dispatch: any): any {
  return {
    updateCurationsRecommend: (): any => dispatch(updateCurationsRecommend()),
    updateReviewsRecommend: (): any => dispatch(updateReviewsRecommend())
  };
} //

export default connect(mapStateToProps, mapDispatchToProps)(Main);

/*
<Slider review={props.review[0]} />
<RecoReviewList reviews={props.review.slice(1, 5)} />
<span className="main_recocollection_title">
서로모임에 오신 분들께서 작성해주신 컬렉션입니다.
</span>
<RecoCollectionList collections={props.curation.slice(1, 5)} />
*/
