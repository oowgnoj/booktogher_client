import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { requestUserInfo } from "../../Redux/modules/user";
import { Redirect, Route, RouteComponentProps, Link } from "react-router-dom";

import BooksList from "./BooksList";
import ReviewsList from "./ReviewsList";
import UserHistoryModal from "../shared/UserHistoryModal";

import { IAuthor, ICuration, IReview, IBookReview } from "../shared/Types";
import { string } from "prop-types";
import Clean from "../shared/CleanLoading";

import {
  fetchCuration,
  fetchBooks,
  fetchReviews,
  fetchDelete,
  fetchDeleteLikes,
  fetchPostLikes
} from "./fetchReadCuration";
import "./index.css";
import { author } from "../shared/InitialStates";

interface IBook {
  _id: string;
  authors: string[];
  contents: string;
  thumbnail: string;
  title: string;
}

interface IState {
  curation: ICuration;
  books: IBook[];
  reviews: IReview[];
  isDeleted: boolean;
  historyModal: boolean;
  reviewsBooks: IBookReview[][];
}

type IMatchParams = {
  id: string;
};

type IParams = RouteComponentProps<IMatchParams> & {
  userId: string;
};

class ReadCuration extends React.Component<IParams, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      curation: {
        _id: "",
        author: { _id: "", image: "", name: "", profile: "" },
        contents: "",
        likes: [],
        title: ""
      },
      books: [
        { _id: "", authors: [""], contents: "", thumbnail: "", title: "" }
      ],
      reviews: [],
      reviewsBooks: [],
      isDeleted: false,
      historyModal: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleLikes = this.handleLikes.bind(this);
    this.handleHistoryClick = this.handleHistoryClick.bind(this);
    this.detectHistoryModal = this.detectHistoryModal.bind(this);
  }

  public componentDidMount(): void {
    const getCurationInfo = (result: ICuration): void => {
      this.setState({ curation: result });
    };
    const getBookInfo = (result: IBook[]): void => {
      this.setState({ books: result });
    };
    const getReviewInfo = (
      reviews: IReview[],
      books: IBookReview[][]
    ): void => {
      this.setState({ reviews, reviewsBooks: books });
    };
    console.log("this.props.match.params.id : ", this.props.match.params.id);
    fetchCuration(getCurationInfo, this.props.match.params.id);
    fetchBooks(getBookInfo, this.props.match.params.id);
    fetchReviews(getReviewInfo, this.props.match.params.id);
  }

  public componentDidUpdate(prevProps: any): void {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      // do something
      const getCurationInfo = (result: ICuration): void => {
        this.setState({ curation: result });
      };
      const getBookInfo = (result: IBook[]): void => {
        this.setState({ books: result });
      };
      const getReviewInfo = (result: IReview[]): void => {
        this.setState({ reviews: result });
      };
      console.log("this.props.match.params.id : ", this.props.match.params.id);
      fetchCuration(getCurationInfo, this.props.match.params.id);
      fetchBooks(getBookInfo, this.props.match.params.id);
      fetchReviews(getReviewInfo, this.props.match.params.id);
      this.setState({ historyModal: false });
    }
  }

  public handleDelete(): void {
    const deleted = (): void => {
      this.setState({ isDeleted: true });
    };
    fetchDelete(deleted, this.props.match.params.id);
  }

  public handleLikes(): void {
    const newCuration: ICuration = this.state.curation;
    const newLikesList: string[] = this.state.curation.likes.slice();
    if (this.state.curation.likes.includes(this.props.userId)) {
      const deleteLikes = (): void => {
        const userIndex: number = newLikesList.indexOf(this.props.userId);
        newLikesList.splice(userIndex, 1);
        newCuration.likes = newLikesList;
        this.setState({ curation: newCuration });
      };
      fetchDeleteLikes(deleteLikes, this.props.match.params.id);
    } else {
      const postLikes = (): void => {
        newLikesList.push(this.props.userId);
        newCuration.likes = newLikesList;
        this.setState({ curation: newCuration });
      };
      fetchPostLikes(postLikes, this.props.match.params.id);
    }
  }

  public handleHistoryClick(): void {
    this.setState({ historyModal: true });
  }

  public detectHistoryModal(): void {
    this.setState({ historyModal: false });
  }

  public render(): ReactElement {

    const { curation, books, reviews, reviewsBooks } = this.state;
    return (
      <div className="readCuration">
        {this.state.historyModal ? (
          <UserHistoryModal
            author={this.state.curation.author}
            handleClose={this.detectHistoryModal}
          />
        ) : null}
        {this.state.isDeleted ? <Redirect to="/" /> : null}
        <div
          className="readCuration_header_likes"
          style={{
            marginLeft: "7%",
            marginTop: "38px",
            float: "left",
            clear: "right"
          }}
        >
          {curation.likes.includes(this.props.userId) ? (
            <span
              uk-icon="icon: heart; ratio: 1.5"
              onClick={this.handleLikes}
              className="heart"
            ></span>
          ) : (
            <span
              uk-icon="icon: heart; ratio: 1.5"
              onClick={this.handleLikes}
            ></span>
          )}

          <span style={{ marginLeft: "13px", fontSize: "20px" }}>
            {curation.likes ? curation.likes.length : "좋아요 수"}
          </span>
        </div>
        {curation.author._id === this.props.userId ? (
          <div
            style={{
              marginLeft: "80%",
              display: "flex",
              marginTop: "-10px"
            }}
          >
            <div className="readCuration_header_modify">
              <Link to={`/editcuration/${this.props.match.params.id}`}>
                <button className="uk-button uk-button-default uk-button-small">
                  수정
                </button>
              </Link>
            </div>
            <div
              className="readCuration_header_delete"
              style={{ paddingLeft: "10px" }}
            >
              <button
                className="uk-button uk-button-default uk-button-small"
                onClick={this.handleDelete}
              >
                삭제
              </button>
            </div>
          </div>
        ) : null}
        <div className="readCuration_header">
          <div
            className="readCuration_header_title"
            style={{
              fontFamily: "Nanum Myeongjo, serif",
              marginTop: "39px",
              marginLeft: "1%",
              height: "200px",
              width: "80%",
              fontSize: "2.4em",
              display: "inline"
            }}
          >
            {curation.title ? curation.title : "큐레이션 제목"}
          </div>

    const { curation, books, reviews } = this.state;
    if (!curation.author._id) {
      return <Clean />;
    } else {
      return (
        <div className="readCuration">
          {this.state.historyModal ? (
            <UserHistoryModal
              author={this.state.curation.author}
              handleClose={this.detectHistoryModal}
            />
          ) : null}
          {this.state.isDeleted ? <Redirect to="/" /> : null}

          <div
            className="readCuration_header_likes"
            style={{
              marginTop: "1%",
              float: "right",
              alignSelf: "right",
              display: "flex",
              width: "20%"
            }}
          >

            <img
              src={
                curation.author.image
                  ? curation.author.image
                  : "https://icons-for-free.com/iconfiles/png/128/anonymous+app+contacts+open+line+profile+user+icon-1320183042822068474.png"
              }
              alt={curation.author.name}
              width="80px"
              className="readCuration_cropped"
            />

            <p
              className="readCuration_header_user_name"
              style={{
                fontStyle: "italic",
                fontSize: "0.9em",
                fontFamily: "Nanum Myeongjo, serif",
                display: "inline-block"
              }}
            >
              by <b>{curation.author.name}</b> 님
            </p>

            {curation.likes.includes(this.props.userId) ? (
              <span
                uk-icon="icon: heart; ratio: 1.5"
                onClick={this.handleLikes}
                className="heart"
              ></span>
            ) : (
              <span
                uk-icon="icon: heart; ratio: 1.5"
                onClick={this.handleLikes}
              ></span>
            )}

            <span style={{ marginLeft: "13px", fontSize: "20px" }}>
              {curation.likes ? curation.likes.length : "좋아요 수"}
            </span>
          </div>
          <div className="readCuration_header">
            <div
              className="readCuration_header_title"
              style={{
                marginTop: "39px",
                marginLeft: "1px",
                height: "150px",
                width: "100%",
                fontSize: "50px"
              }}
            >
              {curation.title ? curation.title : "제목을 입력해주세요"}
            </div>
            <div
              className="readCuration_header_user"
              style={{
                float: "right",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
              }}
              onClick={this.handleHistoryClick}
            >
              <img
                src={
                  curation.author.image
                    ? curation.author.image
                    : "https://icons-for-free.com/iconfiles/png/128/anonymous+app+contacts+open+line+profile+user+icon-1320183042822068474.png"
                }
                alt={curation.author.name}
                width="80px"
              />

              <p
                className="readCuration_header_user_name"
                style={{ fontStyle: "italic" }}
              >
                by <b>{curation.author.name}</b> 님
              </p>
              {curation.author._id === this.props.userId ? (
                <div>
                  <span className="readCuration_header_modify">
                    <Link to={`/editcuration/${this.props.match.params.id}`}>
                      <button
                        className="uk-button uk-button-text"
                        style={{ marginRight: "30px" }}
                      >
                        수정
                      </button>
                    </Link>
                  </span>
                  <span className="readCuration_header_delete">
                    <button
                      className="uk-button uk-button-text"
                      onClick={this.handleDelete}
                    >
                      삭제
                    </button>
                  </span>
                </div>
              ) : null}
            </div>

          </div>
        <div
          className="readCuration_contents"
          style={{
            marginTop: "50px",
            marginLeft: "1px",
            height: "300px",
            width: "50%",
            fontSize: "1.1em",
            lineHeight: "1.8em"
          }}
        >
          {curation.contents ? curation.contents : "큐레이션 본문"}
        </div>
        <BooksList books={books} />
        <ReviewsList reviews={reviews} books={reviewsBooks} />
      </div>
    );

      );
    }

  }
}
function mapStateToProps(state: any): any {
  return {
    userId: state.user.User._id
  };
}

export default connect(mapStateToProps, null)(ReadCuration);
