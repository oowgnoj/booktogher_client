import React, { ReactElement } from "react";
import { Redirect, Route } from "react-router-dom";

import BooksList from "./BooksList";
import ReviewsList from "./ReviewsList";
import ReadCuration from "../readCuration/index";
import BookModal from "./BookSelect";
import ReviewModal from "./ReviewSelect";

import {
  IBookSelectedCuration,
  ICuration,
  ICurationsPost,
  IReview,
  IReviewSearchWithBooks
} from "../shared/Types";

import {
  selectedBooksForCuration,
  selectedReviewsForCuration
} from "../shared/InitialStates";

import { fetchPostCuration } from "./fetchWriteCuration";

import "./index.css";

interface IBody {
  title: string;
  contents: string;
  books: string[];
  reviews: string[];
}

interface IState {
  title: string;
  contents: string;
  books: IBookSelectedCuration[];
  reviews: IReviewSearchWithBooks[];
  bookModal: boolean;
  reviewModal: boolean;
  isPosted: boolean;
  curationId: string;
}

class WriteCuration extends React.Component<{}, IState> {
  constructor({}) {
    super({});
    this.state = {
      books: selectedBooksForCuration,
      contents: "",
      reviews: selectedReviewsForCuration,
      title: "",
      bookModal: false,
      reviewModal: false,
      isPosted: false,
      curationId: ""
    };
    this.bookDelete = this.bookDelete.bind(this);
    this.reviewDelete = this.reviewDelete.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleBookSelect = this.handleBookSelect.bind(this);
    this.handleReviewSelect = this.handleReviewSelect.bind(this);
    this.addBooks = this.addBooks.bind(this);
    this.addReviews = this.addReviews.bind(this);
    this.bookModalClose = this.bookModalClose.bind(this);
    this.reviewModalClose = this.reviewModalClose.bind(this);
  }

  public componentDidMount(): void {
    window.scroll(0, 0);
  }

  public bookDelete(bookId: string): void {
    const currentBookList: IBookSelectedCuration[] = this.state.books.slice();
    for (let i: number = 0; i < currentBookList.length; i++) {
      if (currentBookList[i]._id === bookId) {
        currentBookList.splice(i, 1);
      }
    }
    this.setState({ books: currentBookList });
  }

  public reviewDelete(reviewId: string): void {
    const currentReviewList: IReviewSearchWithBooks[] = this.state.reviews.slice();
    for (let i: number = 0; i < currentReviewList.length; i++) {
      if (currentReviewList[i]._id === reviewId) {
        currentReviewList.splice(i, 1);
      }
    }
    this.setState({ reviews: currentReviewList });
  }

  public bookModalClose(): void {
    this.setState({ bookModal: false });
  }

  public reviewModalClose(): void {
    this.setState({ reviewModal: false });
  }

  public handleTitle(event: React.ChangeEvent<HTMLInputElement>): void {
    const changingTitle: string = event.target.value;
    this.setState({ title: changingTitle });
  }

  public handleContent(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    const changingContent: string = event.target.value;
    this.setState({ contents: changingContent });
  }

  public handleBookSelect(): void {
    this.setState({ bookModal: true });
  }

  public handleReviewSelect(): void {
    this.setState({ reviewModal: true });
  }

  public handlePost(): void {

    if (!this.state.title) {
      alert("큐레이션 제목을 등록해주세요");
    } else if (!this.state.contents) {
      alert("큐레이션 본문 내용을 등록해주세요");

    } else if (this.state.books.length === 0 || !this.state.books[0]._id) {
      alert("1권 이상의 책을 선택하여 주세요");

    } else {
      const postBody: IBody = {
        title: this.state.title,
        contents: this.state.contents,
        books: this.state.books.map((book: IBookSelectedCuration) => book._id),

        reviews: this.state.reviews
          ? this.state.reviews[0]._id
            ? this.state.reviews.map((review: IReview) => review._id)
            : []
          : []

      };

      const getPostedId = (id: string): void =>
        this.setState({ curationId: id, isPosted: true });

      fetchPostCuration(getPostedId, postBody);
    }
  }

  public addBooks = (selectedBooks: IBookSelectedCuration): any => {
    const newBooks: IBookSelectedCuration[] =
      this.state.books.length !== 0 && this.state.books[0]._id
        ? this.state.books.concat(selectedBooks)
        : this.state.books.slice(1).concat(selectedBooks);
    this.setState({ books: newBooks, bookModal: false });
  };

  public addReviews = (selectedReviews: IReviewSearchWithBooks[]): any => {
    const newReviews: IReviewSearchWithBooks[] =
      this.state.reviews.length !== 0 && this.state.reviews[0]._id
        ? this.state.reviews.concat(selectedReviews)
        : this.state.reviews.slice(1).concat(selectedReviews);
    this.setState({ reviews: newReviews, reviewModal: false });
  };

  public render(): ReactElement {
    return (
      <div className="writecuration">
        {this.state.bookModal ? (
          <BookModal addBooks={this.addBooks} close={this.bookModalClose} />
        ) : null}
        {this.state.reviewModal ? (
          <ReviewModal
            addReviews={this.addReviews}
            close={this.reviewModalClose}
          />
        ) : null}
        {this.state.isPosted ? (
          <Redirect to={`/curation/${this.state.curationId}`} />
        ) : null}
        <div className="writecuration_header">
          <span className="writecuration_header_title">
            <input
              type="text"
              name="title"
              placeholder="큐레이션의 제목을 입력해주세요"
              style={{
                fontFamily: "Nanum Myeongjo, serif",
                marginTop: "30px",
                marginLeft: "1px",
                width: "80%",
                fontSize: "2.4em",
                display: "inline",
                border: "none"
              }}
              maxLength={22}
              onChange={this.handleTitle}
            />
          </span>
          <span
            className="writecuration_header_btn"
            style={{ float: "right", clear: "right" }}
          >
            <button
              className="uk-button uk-button-default"
              onClick={this.handlePost}
            >
              등록
            </button>
          </span>
        </div>
        <div className="writecuration_contents">
          <textarea
            name="contents"
            placeholder="큐레이션의 내용을 입력해주세요"
            style={{
              marginTop: "50px",
              marginLeft: "1px",
              height: "300px",
              width: "90%",
              fontSize: "1.1em",
              lineHeight: "1.8em",
              resize: "none",
              border: "none",
              outline: "none"
            }}
            maxLength={440}
            onChange={this.handleContent}
          />
        </div>
        <div
          className="writecuration_books"
          style={{ backgroundColor: "#ebebeb" }}
        >
          <BooksList
            books={this.state.books}
            deleteEvent={this.bookDelete}
            handleBookSelect={this.handleBookSelect}
          />
        </div>
        <div className="writecuration_review">
          <ReviewsList
            reviews={this.state.reviews}
            deleteEvent={this.reviewDelete}
            handleReviewSelect={this.handleReviewSelect}
          />
          <span className="writecuration_review_btn"></span>
          <span className="writecuration_review_reviewlist">
            <div className="writecuration_review_reviewentry"></div>
          </span>
        </div>
        <Route path="/curation/:id" component={ReadCuration} />
      </div>
    );
  }
}

export default WriteCuration;
