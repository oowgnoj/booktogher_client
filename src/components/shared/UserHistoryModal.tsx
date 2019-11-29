import React, { Component, MouseEvent } from "react";
import {
  IBook,
  ICuration,
  IReview,
  IReviewBook,
  IAuthorProps,
  IHistoryStates
} from "./Types";
import { curations, reviews, reviewsBooks } from "./InitialStates";
import { fetchGetCurations, fetchGetReviews } from "./Fetch";
import UserHistoryReview from "./UserHistoryReview";
import UserHistoryCuration from "./UserHistoryCuration";

import "./UserHistoryModal.scss";

export default class UserHistoryModal extends Component<
  IAuthorProps,
  IHistoryStates
> {
  constructor(props: IAuthorProps) {
    super(props);
    this.state = {
      author: this.props.author,
      curations,
      reviews,
      reviewsBooks,
      tab: "curations",
      isOpen: true
    };
    this.handleTab = this.handleTab.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  public componentDidMount(): void {
    const setCurations = (response: ICuration[]): void => {
      this.setState({ curations: response });
    };
    const setReviewsBooks = (
      reviews: IReview[],
      books: IReviewBook[][]
    ): void => {
      this.setState({ reviews, reviewsBooks: books });
    };

    fetchGetCurations(setCurations, this.state.author._id);
    fetchGetReviews(setReviewsBooks, this.state.author._id);
  }

  public handleTab(event: MouseEvent): void {
    this.setState({ tab: event.currentTarget.id });
  }

  public handleClose(): void {
    this.props.handleClose();
    this.setState({ isOpen: false });
  }

  public render(): JSX.Element {
    return (
      <div>
        {this.state.isOpen ? (
          <div className="Review-Modal-overlay history_modal">
            <div className="Review-Modal">
              <div className="history_grid">
                <div className="history_modal_close" onClick={this.handleClose}>
                  <span uk-icon="close" style={{ float: "right" }}></span>
                </div>
                <div
                  className="history_modal_info"
                  style={{ textAlign: "center" }}
                >
                  <div className="image-cropper">
                    <img
                      src={
                        this.state.author.image
                          ? this.state.author.image
                          : "https://icons-for-free.com/iconfiles/png/128/anonymous+app+contacts+open+line+profile+user+icon-1320183042822068474.png"
                      }
                      alt={this.state.author.name}
                      style={{
                        width: "100px",
                        marginTop: "30px",
                        marginBottom: "30px"
                      }}
                      className="history_cropped"
                    />
                  </div>
                  <div
                    className="info_name"
                    style={{ margin: "auto", marginBottom: "30px" }}
                  >
                    {this.state.author.name}
                  </div>
                  <div
                    className="info_profile"
                    style={{ margin: "auto", fontStyle: "italic" }}
                  >
                    {this.state.author.profile}
                  </div>
                </div>
                <div className="history_modal_history">
                  <div className="history_tab">
                    <ul className="tab uk-breadcrumb">
                      <li>
                        <span id="curations" onClick={this.handleTab}>
                          큐레이션 보기
                        </span>
                      </li>
                      <li>
                        <span id="reviews" onClick={this.handleTab}>
                          서평 보기
                        </span>
                      </li>
                      <li></li>
                    </ul>
                  </div>
                  <div className="history_list">
                    {this.state.tab === "reviews" ? (
                      <UserHistoryReview
                        reviews={this.state.reviews}
                        books={this.state.reviewsBooks}
                      />
                    ) : null}
                    {this.state.tab === "curations" ? (
                      <UserHistoryCuration curations={this.state.curations} />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
