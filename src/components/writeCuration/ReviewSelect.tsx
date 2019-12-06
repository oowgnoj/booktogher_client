import React, { ReactElement, MouseEvent } from "react";
import {
  IBooks,
  IReviewSearchWithBooks,
  IReview,
  IUserInfo,
  IReviewSearchBook,
  IReviewSearch
} from "../shared/Types";
import {
  reviews,
  reviewsBooks,
  selectedReviewsForCuration
} from "../shared/InitialStates";
import { connect } from "react-redux";
import {
  fetchMyReview,
  fetchMyLikesReview,
  fetchReviewsSearch
} from "./fetchWriteCuration";
import MyReviewSelect from "./MyReviewSelect";
import SearchReviewSelect from "./SearchReviewSelect";
import "./ReviewModal.scss";
import { flexbox } from "@material-ui/system";

interface IState {
  reviews: IReviewSearchWithBooks[];
  title: string;
  myReviews: IReview[];
  myReviewsBooks: IReviewSearchBook[][];
  myLikesReviews: IReview[];
  myLikesReviewsBooks: IReviewSearchBook[][];
  selectedReviews: IReviewSearchWithBooks[];
  search: string;
  isOpen: boolean;
  navSelect: string;
  userId: string;
}

interface IProps {
  addReviews: any;
  close: any;
  user: IUserInfo;
}

class ReviewSelect extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      reviews: selectedReviewsForCuration,
      title: "",
      myReviews: reviews,
      myReviewsBooks: reviewsBooks,
      myLikesReviews: reviews,
      myLikesReviewsBooks: reviewsBooks,
      selectedReviews: selectedReviewsForCuration,
      search: "",
      isOpen: true,
      navSelect: "searchReview",
      userId: this.props.user._id
    };
    this.clickSelectedBook = this.clickSelectedBook.bind(this);
    this.clickConfirm = this.clickConfirm.bind(this);
    this.handleNavSelect = this.handleNavSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.clickClose = this.clickClose.bind(this);
  }

  public componentDidMount(): void {
    const setStateMyLikesReview = (
      reviewsRes: IReview[],
      booksInfo: IReviewSearchBook[][]
    ): void => {
      this.setState({
        myLikesReviews: reviewsRes,
        myLikesReviewsBooks: booksInfo
      });
    };
    fetchMyLikesReview(setStateMyLikesReview);

    const setStateMyReview = (
      reviewsRes: IReview[],
      booksInfo: IReviewSearchBook[][]
    ): void => {
      this.setState({ myReviews: reviewsRes, myReviewsBooks: booksInfo });
    };
    fetchMyReview(setStateMyReview, this.props.user._id);
  }

  public handleNavSelect(e: MouseEvent): void {
    const tab = e.currentTarget.id;

    this.setState({ navSelect: tab });
  }

  public clickSelectedBook(e: any): void {
    const index: number = e.currentTarget.id;
    const { navSelect } = this.state;
    let clickedReview: any;

    if (navSelect === "myReview") {
      clickedReview = this.state.myReviews[index];
      clickedReview.books = this.state.myReviewsBooks[index];
    } else if (navSelect === "myLikesReview") {
      clickedReview = this.state.myLikesReviews[index];
      clickedReview.books = this.state.myLikesReviewsBooks[index];
    } else if (navSelect === "searchReview") {
      clickedReview = this.state.reviews[index];
    }

    if (!this.state.selectedReviews.includes(clickedReview)) {
      this.setState({
        selectedReviews: [...this.state.selectedReviews, clickedReview]
      });
    }
  }

  public clickConfirm(): void {
    this.props.addReviews(this.state.selectedReviews.slice(1));
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  public handleChange(event: any): void {
    this.setState({ search: event.target.value });
  }

  public handleSearch(e: any): void {
    if (e.key === "Enter") {
      if (this.state.search !== "") {
        const search: string = this.state.search;
        const searchedReviews = (
          reviewsRes: IReviewSearchWithBooks[]
        ): void => {
          this.setState({ reviews: reviewsRes });
        };
        fetchReviewsSearch(searchedReviews, search);
        e.preventDefault();
      } else {
        alert("검색어를 입력해주세요");
      }
    }
  }

  public clickClose(): void {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.props.close();
  }

  public render(): ReactElement {
    return (
      <div>
        {this.state.isOpen ? (
          <div className="Review-Modal-overlay">
            <div className="Review-Modal">
              <button
                className="close-button"
                uk-icon="close"
                type="button"
                onClick={this.clickClose}
              ></button>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "0px 50px"
                  }}
                >
                  <ul
                    className="uk-breadcrumb"
                    style={{ marginTop: "20px", marginBottom: "25px" }}
                  >
                    <li></li>
                    <li>
                      <span id="searchReview" onClick={this.handleNavSelect}>
                        모든 서평 검색
                      </span>
                    </li>
                    <li>
                      <span id="myReview" onClick={this.handleNavSelect}>
                        내가 쓴 서평
                      </span>
                    </li>
                    <li>
                      <span id="myLikesReview" onClick={this.handleNavSelect}>
                        좋아요 한 서평
                      </span>
                    </li>

                    <li></li>
                  </ul>
                </div>
              </div>
              <div
                className="Review-button-wrap"
                style={{ marginLeft: "550px" }}
              >
                <button
                  className="uk-button uk-button-default"
                  onClick={this.clickConfirm}
                >
                  {" "}
                  Confirm{" "}
                </button>
              </div>
              {this.state.navSelect === "myReview" ? (
                this.state.myReviews.length > 0 ? (
                  <MyReviewSelect
                    reviews={this.state.myReviews}
                    books={this.state.myReviewsBooks}
                    clicked={this.clickSelectedBook}
                  />
                ) : (
                  <div
                    style={{
                      marginTop: "110px"
                    }}
                  >
                    작성한 서평이 없습니다.
                  </div>
                )
              ) : null}
              {this.state.navSelect === "myLikesReview" ? (
                this.state.myLikesReviews.length > 0 ? (
                  <MyReviewSelect
                    reviews={this.state.myLikesReviews}
                    books={this.state.myLikesReviewsBooks}
                    clicked={this.clickSelectedBook}
                  />
                ) : (
                  <div style={{ marginTop: "110px" }}>
                    좋아요를 클릭한 서평이 없습니다.
                  </div>
                )
              ) : null}
              {this.state.navSelect === "searchReview" ? (
                <div>
                  <div
                    className="searchreview_title"
                    style={{
                      width: "620px",
                      fontSize: "16pt",
                      fontWeight: "bold",
                      color: "#333",
                      padding: "10px",
                      borderBottom: "2px solid rgb(95, 95, 95)"
                    }}
                  >
                    <input
                      type="text"
                      placeholder="서평을 검색하세요"
                      style={{
                        border: "none",
                        textAlign: "center",
                        width: "620px",
                        outline: "none",
                        fontSize: "20px",
                        color: "#333",
                        padding: "10px 0px 0 0px",
                        marginBottom: "10px"
                      }}
                      onChange={this.handleChange}
                      onKeyPress={this.handleSearch}
                    />
                    {/*  <button
                    className="uk-button uk-button-text"
                    onClick={this.handleSearch}
                  >
                    검색
                  </button> */}
                  </div>
                  <div>
                    {this.state.reviews[0] ? (
                      this.state.reviews[0]._id ? (
                        <SearchReviewSelect
                          reviews={this.state.reviews}
                          clicked={this.clickSelectedBook}
                        />
                      ) : null
                    ) : (
                      <div style={{ marginLeft: "240px", marginTop: "50px" }}>
                        서평 검색 결과가 없습니다.
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state: any): any {
  return {
    user: state.user.User
  };
}

export default connect(mapStateToProps, null)(ReviewSelect);
