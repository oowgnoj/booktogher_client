import React, { ReactElement, MouseEvent } from "react";
import {
  IBooks,
  IReviewWithBooks,
  IReview,
  IUserInfo,
  IReviewSearch
} from "../shared/Types";
import { connect } from "react-redux";
import {
  fetchMyReview,
  fetchMyLikesReview,
  fetchReviewsSearch
} from "./fetchWriteCuration";
import MyReviewSelect from "./MyReviewSelect";
import { flexbox } from "@material-ui/system";

interface IState {
  reviews: IReview[];
  title: string;
  myReviews: IReview[];
  myLikesReviews: IReview[];
  selectedReviews: IReview[];
  search: string;
  isOpen: boolean;
  navSelect: string;
  userId: string;
}

interface IProps {
  addReviews: any;
  user: IUserInfo;
}

class ReviewSelect extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      reviews: [
        {
          _id: "",
          author: {
            _id: "",
            image: "",
            name: "",
            profile: ""
          },
          contents: "",
          likes: [""],
          published: true,
          thumbnail: "",
          title: ""
        }
      ],
      title: "",
      myReviews: [
        {
          _id: "",
          author: {
            _id: "",
            image: "",
            name: "",
            profile: ""
          },
          contents: "",
          likes: [""],
          published: true,
          thumbnail: "",
          title: ""
        }
      ],
      myLikesReviews: [
        {
          _id: "",
          author: {
            _id: "",
            image: "",
            name: "",
            profile: ""
          },
          contents: "",
          likes: [""],
          published: true,
          thumbnail: "",
          title: ""
        }
      ],
      selectedReviews: [
        {
          _id: "",
          author: {
            _id: "",
            image: "",
            name: "",
            profile: ""
          },
          contents: "",
          likes: [""],
          published: true,
          thumbnail: "",
          title: ""
        }
      ],
      search: "",
      isOpen: true,
      navSelect: "myReview",
      userId: this.props.user._id
    };
    this.clickSelectedBook = this.clickSelectedBook.bind(this);
    this.clickConfirm = this.clickConfirm.bind(this);
    this.handleNavSelect = this.handleNavSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  public componentDidMount() {
    const setStateMyLikesReview = (res: any): void => {
      const newReviews = res.slice();
      console.log("내가 좋아하는 서평 mylikes fetch 결과", newReviews);
      this.setState({ myLikesReviews: newReviews });
    };
    fetchMyLikesReview(setStateMyLikesReview);

    const setStateMyReview = (res: any): void => {
      const newReviews = res.slice();
      console.log("내가 쓴 서평 myreview fetch 결과", newReviews);
      this.setState({ myReviews: newReviews });
    };
    fetchMyReview(setStateMyReview, this.props.user._id);
  }

  public handleNavSelect(e: MouseEvent): void {
    const tab = e.currentTarget.id;
    console.log(tab);
    this.setState({ navSelect: tab });
  }

  public clickSelectedBook(e: any, myReviews: any): void {
    const index: number = e.currentTarget.id;
    const clickedReveiw: IReview = this.state.myReviews[index];

    this.setState({
      selectedReviews: [...this.state.selectedReviews, clickedReveiw]
    });
  }

  public clickConfirm(): void {
    console.log(
      "컨펌 누르는 순간 쓰기 컴포넌트로 넘어가는 배열이 궁금해",
      this.state.selectedReviews.slice(1)
    );
    this.props.addReviews(this.state.selectedReviews.slice(1));
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  public handleChange(event: any): void {
    this.setState({ search: event.target.value });
  }

  public handleSearch(): void {
    console.log("this.state", this.state);
    const search = this.state.search;
    const searchedReviews = (result: IReviewSearch): void => {
      const newReviews = result.reviews.slice();
      console.log("newReviews", newReviews);
      this.setState({ reviews: newReviews });
    };
    fetchReviewsSearch(searchedReviews, search);
  }

  public render(): ReactElement {
    return (
      <div>
        {this.state.isOpen ? (
          <div className="Review-Modal-overlay">
            <div className="Review-Modal">
              <div className="Review-button-wrap">
                <button onClick={this.clickConfirm}> Confirm </button>
              </div>
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
                      <span id="myReview" onClick={this.handleNavSelect}>
                        내가 쓴 서평
                      </span>
                    </li>
                    <li>
                      <span id="myLikesReview" onClick={this.handleNavSelect}>
                        좋아요 한 서평
                      </span>
                    </li>
                    <li>
                      <span id="searchReview" onClick={this.handleNavSelect}>
                        모든 서평 검색
                      </span>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
              {this.state.navSelect === "myReview" ? (
                <MyReviewSelect
                  reviews={this.state.myReviews}
                  clicked={this.clickSelectedBook}
                />
              ) : null}
              {this.state.navSelect === "myLikesReview" ? (
                <MyReviewSelect
                  reviews={this.state.myLikesReviews}
                  clicked={this.clickSelectedBook}
                />
              ) : null}
              {this.state.navSelect === "searchReview" ? (
                <div>
                  <input
                    type="text"
                    placeholder="서평을 검색하세요"
                    style={{
                      width: "80%",
                      textAlign: "center",
                      marginTop: "50px",
                      marginLeft: "60px",
                      marginBottom: "30px"
                    }}
                    onChange={this.handleChange}
                  />
                  <button
                    className="uk-button uk-button-text"
                    onClick={this.handleSearch}
                  >
                    검색
                  </button>
                  {this.state.reviews[0]._id ? (
                    <MyReviewSelect
                      reviews={this.state.reviews}
                      clicked={this.clickSelectedBook}
                    />
                  ) : null}
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
