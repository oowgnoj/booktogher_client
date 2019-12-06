import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { IAuthor, IReview, ICuration } from "../shared/Types";
import {
  updateReviewsRecommend,
  updateCurationsRecommend
} from "../../Redux/modules/recommend";
import { connect } from "react-redux";
import RecoReviewList from "./RecoReviewList";
import RecoCurationList from "./RecoCurationList";
import Store from "../../Redux/configureStore";
import "./layout.css";
import "./index.css";
import logo from "../../Asset/images/log.png";
import MainSkeleton from "./MainSkeleton";

interface IState {
  curation: ICuration[];
  review: IReview[];
}

class Layout extends React.Component {
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
      <div className="main-body">
        <div className="main-cover">
          <img
            src={logo}
            alt="로고"
            style={{
              width: "100px",
              marginTop: "26px",
              marginLeft: "80px",
              marginBottom: "20px",
              display: "inline-block"
            }}
          />
          <div className="main-title">
            가장 훌륭한 벗은
            <br /> 가장 좋은 책이다
          </div>
          <div className="main-review">
            {filteredReview[0] ? (
              <div>
                <span style={{ color: "#D15947" }}>서로모임 추천 서평</span>
                <div
                  className="slider_text uk-position-relative uk-visible-toggle"
                  tabIndex={-1}
                  uk-slideshow="autoplay: true; animation: fade"
                  style={{ padding: "0" }}
                >
                  <ul className="uk-slideshow-items main-review-ul">
                    <li>
                      <Link
                        to={
                          filteredReview[0]
                            ? `review/${filteredReview[0]._id}`
                            : "/"
                        }
                      >
                        <h3>
                          {filteredReview[0] ? filteredReview[0].title : ""}
                        </h3>
                        <span>
                          by{" "}
                          {filteredReview[0]
                            ? filteredReview[0].author.name
                            : ""}
                        </span>
                        <div>
                          {filteredReview[0]
                            ? filteredReview[0].contents.replace(
                                /<[^>]*>?/gm,
                                ""
                              ).length > 150
                              ? filteredReview[0].contents
                                  .replace(/<[^>]*>?/gm, "")
                                  .replace(/&nbsp;/g, " ")
                                  .slice(0, 150) + "..."
                              : filteredReview[0].contents
                                  .replace(/<[^>]*>?/gm, "")
                                  .replace(/&nbsp;/g, " ")
                            : "서평 본문"}
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={
                          filteredReview[1]
                            ? `review/${filteredReview[1]._id}`
                            : "/"
                        }
                      >
                        <h3>
                          {filteredReview[1] ? filteredReview[1].title : ""}
                        </h3>
                        <span>
                          by{" "}
                          {filteredReview[1]
                            ? filteredReview[1].author.name
                            : ""}
                        </span>
                        <div>
                          {filteredReview[1]
                            ? filteredReview[1].contents
                                .replace(/<[^>]*>?/gm, "")
                                .replace(/&nbsp;/g, " ").length > 150
                              ? filteredReview[1].contents
                                  .replace(/<[^>]*>?/gm, "")
                                  .replace(/&nbsp;/g, " ")
                                  .slice(0, 150) + "..."
                              : filteredReview[1].contents
                                  .replace(/<[^>]*>?/gm, "")
                                  .replace(/&nbsp;/g, " ")
                            : "서평 본문"}
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={
                          filteredReview[2]
                            ? `review/${filteredReview[2]._id}`
                            : "/"
                        }
                      >
                        <h3>
                          {filteredReview[2] ? filteredReview[2].title : ""}
                        </h3>
                        <span>
                          by{" "}
                          {filteredReview[2]
                            ? filteredReview[2].author.name
                            : ""}
                        </span>
                        <div>
                          {filteredReview[2]
                            ? filteredReview[2].contents
                                .replace(/<[^>]*>?/gm, "")
                                .replace(/&nbsp;/g, " ").length > 150
                              ? filteredReview[2].contents
                                  .replace(/<[^>]*>?/gm, "")
                                  .slice(0, 150) + "..."
                              : filteredReview[2].contents
                                  .replace(/<[^>]*>?/gm, "")
                                  .replace(/&nbsp;/g, " ")
                            : "서평 본문"}
                        </div>
                      </Link>
                    </li>
                  </ul>
                  <a
                    className="uk-position-center-left-out uk-position-small "
                    href="#"
                    uk-slidenav-previous
                    uk-slideshow-item="previous"
                  >
                    <span
                      uk-icon="chevron-left"
                      style={{ color: "gray", paddingBottom: "100px" }}
                    ></span>
                  </a>
                  <a
                    className="uk-position-center-right-out uk-position-small "
                    href="#"
                    uk-slidenav-next
                    uk-slideshow-item="next"
                  >
                    <span
                      uk-icon="chevron-right"
                      style={{ color: "gray", paddingBottom: "100px" }}
                    ></span>
                  </a>
                </div>
              </div>
            ) : (
              <MainSkeleton />
            )}
          </div>
        </div>

        <div className="main-link">
          <h2>책으로 모인 사람들의 공간 서로모임입니다.</h2>
          <div>
            서로모임에 오신 분들께 당신만의 서평과 북 큐레이션을 공유하여
            주세요.{" "}
          </div>
          <Link to="/postreview">
            <div
              className="uk-button uk-button-default uk-button-large main-link-button"
              style={{ fontSize: "16px", color: "#D15947" }}
            >
              서평 쓰러 가기
              <span uk-icon="pencil" style={{ marginLeft: "5px" }}></span>
            </div>
          </Link>
          <Link to="/postcuration">
            <div
              className="uk-button uk-button-default uk-button-large main-link-button"
              style={{ fontSize: "16px", color: "#D15947" }}
            >
              큐레이션 쓰러 가기
              <span uk-icon="pencil" style={{ marginLeft: "5px" }}></span>
            </div>
          </Link>
        </div>

        <div className="main-reco-review">
          <h2>서로모임의 추천 서평</h2>
          <div className="main-reco-review-list">
            <RecoReviewList reviews={filteredReview.slice(3)} />
          </div>
        </div>

        <div className="main-reco-curation">
          <h3>서로모임에 오신 분들께서 작성해주신 큐레이션입니다.</h3>
          <div className="main-reco-curation-list">
            <RecoCurationList curations={filteredCuration.slice(1, 5)} />
          </div>
        </div>
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
