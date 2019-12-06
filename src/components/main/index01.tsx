import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { IAuthor, IReview, ICuration } from "../shared/Types";
import Sidebar from "../sidebar/index";
import Slider from "./RecoReviewSlider/index";
import RecoReviewList from "./RecoReviewList";
import RecoCurationList from "./RecoCurationList";
import { useDispatch } from "react-redux";
import {
  updateReviewsRecommend,
  updateCurationsRecommend
} from "../../Redux/modules/recommend";
import { updateUserInfo } from "../../Redux/modules/user";
import Store from "../../Redux/configureStore";

import "./index.css";
import { connect } from "react-redux";
import { any } from "prop-types";
import { border } from "@material-ui/system";
import logo from "../../Asset/images/logo.png";

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

interface IState {
  curation: ICuration[];
  review: IReview[];
}

class Main extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount(): void {
    Store.dispatch(updateReviewsRecommend());
    Store.dispatch(updateCurationsRecommend());
    window.scroll(0, 0);
  }

  public render(): ReactElement {
    const props: any = this.props;
    const filteredReview: IReview[] = props.review.filter(
      (review: IReview) => review.published && review.author
    );
    const filteredCuration: ICuration[] = props.curation.filter(
      (curation: ICuration) => curation.author
    );

    return (
      <div className="main">
        <img
          src={logo}
          alt="로고"
          style={{
            width: "100px",
            marginTop: "-80px",
            marginLeft: "48%",
            marginBottom: "20px"
          }}
        />
        <Slider review={filteredReview} />

        <div className="" style={{ marginTop: "0px" }}>
          <Link to="/postreview">
            <div
              style={{
                width: "40%",
                display: "inline-block",
                textAlign: "center",
                paddingTop: "30px",
                paddingBottom: "5px",
                backgroundColor: "#fff",
                marginLeft: "8%",
                border: "1px solid #ddd",
                color: "#696969"
              }}
            >
              {/* <div className="uk-dark uk-background-muted uk-padding"> */}
              {/* <h3>서평</h3> */}
              {/* <p>
                  서평을 작성해주세요. 서로모임에 오신 분들께 서평을
                  공유해주세요.
                </p> */}
              {/* <button
                className="uk-button uk-button-default uk-button-large "
                style={{ width: "50%" }}
              > */}
              <p>
                서평 쓰러가기
                <span uk-icon="pencil" style={{ marginLeft: "2%" }}></span>
              </p>
              <p style={{ fontSize: "13px" }}>
                서평을 작성해주세요. 서로모임에 오신 분들께 서평을 공유해주세요.
              </p>
              {/* </button> */}
            </div>
            {/* </div> */}
          </Link>
          <Link to="/postcuration">
            <div
              style={{
                width: "40%",
                display: "inline-block",
                textDecoration: "none",
                textAlign: "center",
                paddingTop: "30px",
                paddingBottom: "5px",
                backgroundColor: "#fff",
                marginLeft: "3%",
                border: "1px solid #ddd",
                color: "#696969"
              }}
            >
              {/* <div className="uk-dark uk-background-muted uk-padding"> */}
              {/* <h3>큐레이션</h3> */}
              {/*  <p>
                  큐레이션을 등록해주세요. 책과 서평으로 구성된 당신의 북
                  플레이리스트를 공유하여 주세요.
                </p> */}
              {/* <button className="uk-button uk-button-default uk-button-large "> */}
              <p>
                큐레이션 등록하러 가기
                <span uk-icon="pencil" style={{ marginLeft: "2%" }}></span>
                <p style={{ fontSize: "13px" }}>
                  책과 서평으로 구성된 당신의 북 플레이리스트를 공유하여 주세요.
                </p>
              </p>
              {/* </button> */}
            </div>
            {/* </div> */}
          </Link>
        </div>

        <div className="main_review_list_start">
          <div
            className="main_recocollection_title"
            style={{
              marginTop: "80px",
              marginBottom: "60px",
              fontSize: "1.3em",
              textAlign: "center"
            }}
          >
            서로모임의 추천 서평
          </div>
          <RecoReviewList reviews={filteredReview.slice(3)} />
        </div>

        <div className="main_recocollection_div">
          <div
            className="main_recocollection_title"
            style={{
              marginTop: "80px",
              marginBottom: "60px",
              fontSize: "1.3em"
            }}
          >
            서로모임에 오신 분들께서 작성해주신 큐레이션입니다.
          </div>
        </div>
        <RecoCurationList curations={filteredCuration.slice(1, 5)} />
      </div>
    );
  }
}

// interface IAAuthor {
//   _id: string;
//   image: string;
//   name: string;
//   profile: string;
// }

// interface ICAuration {
//   _id: string;
//   author: IAAuthor;
//   contents: string;
//   likes: string[];
//   published: boolean;
//   title: string;
// }

// interface IRAeview {
//   id: string;
//   author: IAAuthor;
//   contents: string;
//   likes: string[];
//   published: boolean;
//   thumbnail: string;
//   title: string;
// }

// interface IDAata {
//   curation: ICAuration[];
//   review: IRAeview[];
// }

// interface ISAtate {
//   data: IDAata;
//   error: boolean;
//   pending: boolean;
// }

function mapStateToProps(state: any): any {
  return {
    curation: state.recommend.data.curation.slice(0, 5),
    review: state.recommend.data.review
  };
}

function mapDispatchToProps(dispatch: any): any {
  return {
    updateCurationsRecommend: (): any => dispatch(updateCurationsRecommend()),
    updateReviewsRecommend: (): any => dispatch(updateReviewsRecommend())
  };
} //

export default connect(mapStateToProps, mapDispatchToProps)(Main);
