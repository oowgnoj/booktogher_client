import React, { ReactElement } from "react";
import { Redirect, Link } from "react-router-dom";
import { IReview, IReviewProps, IBook } from "./reviewInterface";
import { IRating } from "./../shared/Types";
import {
  fetchReviewLikes,
  fetchDeleteLikes,
  fetchBookRatings,
  fetchDeleteReview
} from "./fetchReview";
import { connect } from "react-redux";
import UserHistoryModal from "../shared/UserHistoryModal";
import "./Review.css";

export interface IProps {
  review: IReview;
  bookList: IBook[];
  user: any;
}

interface IState {
  likes: boolean;
  edit: boolean;
  likesNum: number;
  bookRating: IRating[];
  redirect: boolean;
  historyModal: boolean;
}

class Review extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      bookRating: [],
      edit: false,
      likes: false,
      likesNum: this.props.review.likes.length,

      redirect: false,
      historyModal: false
    };
    this.handleClickLikes = this.handleClickLikes.bind(this);
    this.handleDeleteLikes = this.handleDeleteLikes.bind(this);
    this.handleDeleteReview = this.handleDeleteReview.bind(this);
    this.handleHistoryClick = this.handleHistoryClick.bind(this);
    this.detectHistoryModal = this.detectHistoryModal.bind(this);
  }

  public handleClickLikes(): void {
    const setStateLikesNum = (res: any): void => {
      return res;
    };
    if (this.props.user._id === undefined) {
      alert("로그인 후 좋아요 해주세요");
    } else if (!this.state.likes) {
      fetchReviewLikes(setStateLikesNum, this.props.review._id);
      this.setState({ likes: !this.state.likes });
      this.setState({ likesNum: this.state.likesNum + 1 });
    }
  }

  public handleDeleteLikes(): void {
    const setStateLikesMinus = (res: any): void => {
      return res;
    };
    if (this.state.likes) {
      fetchDeleteLikes(setStateLikesMinus, this.props.review._id);
      this.setState({ likes: !this.state.likes });
      this.setState({ likesNum: this.state.likesNum - 1 });
    }
  }

  public handleDeleteReview(): void {
    const redirectHome = (): void => {
      this.setState({ redirect: true });
    };
    fetchDeleteReview(redirectHome, this.props.review._id);
    alert("서평이 삭제됩니다");
  }

  public handleHistoryClick(): void {
    this.setState({ historyModal: true });
  }

  public detectHistoryModal(): void {
    this.setState({ historyModal: false });
  }

  public componentDidMount(): void {
    if (this.props.user._id === this.props.review.author._id) {
      this.setState({ edit: true });
    }
    if (this.props.review.likes.includes(this.props.user._id)) {
      this.setState({ likes: true });
    }
    const setStateRating = (res: any): void => {
      this.setState({ bookRating: res });
    };
    var bookIdStr: string = "";
    const bookId: any = this.props.bookList.map((info: IBook) => {
      bookIdStr += `books[]=${info._id}&`;
      return info._id;
    });
    bookIdStr += `user=${this.props.review.author._id}`;
    fetchBookRatings(setStateRating, bookIdStr);
  }

  public componentDidUpdate(prevProps: any): void {
    if (this.props.user._id) {
      if (this.props.user._id !== prevProps.user._id) {
        if (this.props.user._id === this.props.review.author._id) {
          this.setState({ edit: true });
        }
        if (this.props.review.likes.includes(this.props.user._id)) {
          this.setState({ likes: true });
        }
      }
      if (this.props.review !== prevProps.review) {
        if (this.props.user._id === this.props.review.author._id) {
          this.setState({ edit: true });
        }
      }
      if (this.props.review.likes !== prevProps.review.likes) {
        this.setState({ likesNum: this.props.review.likes.length });
        if (this.props.review.likes.includes(this.props.user._id)) {
          this.setState({ likes: true });
        }
      }
    }
    if (this.props.bookList !== prevProps.bookList) {
      const setStateRating = (res: any): void => {
        this.setState({ bookRating: res });
      };
      var bookIdStr: string = "";
      const bookId: any = this.props.bookList.map((info: IBook) => {
        bookIdStr += `books[]=${info._id}&`;
        return info._id;
      });
      bookIdStr += `user=${this.props.review.author._id}`;
      fetchBookRatings(setStateRating, bookIdStr);
    }
  }

  public render(): ReactElement {
    const { bookList, review } = this.props;
    const bookTitle: JSX.Element[] = bookList.map(
      (info: IBook, index: number) => {
        return (
          <div key={info._id}>
            <b>
              책 : {info.title}
              {this.state.bookRating.length
                ? this.state.bookRating[index].user_rating !== null
                  ? `  -  평점 ${this.state.bookRating[index].user_rating.rating}`
                  : null
                : null}
            </b>
          </div>
        );
      }
    );
    const style: any = {
      backgroundColor: review.thumbnail
    };

    return (
      <div className="review-area">
        {this.state.redirect ? <Redirect to="/" /> : null}
        {this.state.historyModal ? (
          <UserHistoryModal
            author={this.props.review.author}
            handleClose={this.detectHistoryModal}
          />
        ) : null}
        <div className="review-cover" style={style}>
          <div className="title-area">
            <h1 className="title">{review.title}</h1>
            <div className="review-likes">
              {this.props.review.published === false ? (
                <span className="published">비공개</span>
              ) : (
                <span
                  style={{ margin: "-2px 10px 0 0", cursor: "pointer" }}
                  onClick={() =>
                    (window as any).sendLink(
                      review.title,
                      review.author.name,
                      window.location.href
                    )
                  }
                >
                  <img
                    style={{ width: "25px" }}
                    src="https://i0.wp.com/forhappywomen.com/wp-content/uploads/2018/11/%EC%82%B0%EB%B6%80%EC%9D%B8%EA%B3%BC-%ED%8F%AC%ED%95%B4%ED%94%BC%EC%9A%B0%EB%A8%BC-%EB%AC%B8%EC%9D%98-%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%8C%EB%9F%AC%EC%8A%A4%EC%B9%9C%EA%B5%AC-%EB%B2%84%ED%8A%BC.png?resize=586%2C586&ssl=1"
                  ></img>
                </span>
              )}
              {this.state.likes ? (
                <span
                  uk-icon="heart"
                  className="heartLike"
                  onClick={this.handleDeleteLikes}
                ></span>
              ) : (
                <span
                  uk-icon="heart"
                  className="unheartLike"
                  onClick={this.handleClickLikes}
                ></span>
              )}
              <div className="likes-num">{this.state.likesNum}</div>

              {this.state.edit ? (
                <div className="button-area">
                  <button className="modify-button">
                    <Link to={`/editReview/${review._id}`}>수정</Link>
                  </button>
                  <button
                    className="modify-button"
                    onClick={this.handleDeleteReview}
                  >
                    삭제
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="post-area">
          <div
            style={{ fontStyle: "italic", cursor: "pointer", width: "150px" }}
            onClick={this.handleHistoryClick}
          >
            by {review.author.name}
          </div>
          <div className="book-rating">{bookTitle}</div>
          <div
            dangerouslySetInnerHTML={{ __html: review.contents }}
            className="text-area"
          ></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any): any {
  return {
    user: state.user.User
  };
}

export default connect(mapStateToProps, null)(Review);
