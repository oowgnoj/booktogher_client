import React, { ReactElement } from "react";
import { Redirect, Route } from "react-router-dom";
import BooksList from "./BooksList";
import ReadCuration from "../readCuration/index";
import "./index.css";
import Books from "../mypage/books";
import { ICuration, ICurationsPost, IReview } from "../shared/Types";
import { fetchPostCuration } from "./fetchWriteCuration";
import Modal from "./BookSelect";

interface IBook {
  _id: string;
  thumbnail: string;
  authors: string;
  title: string;
}

interface IBody {
  title: string;
  contents: string;
  books: string[];
  reviews: string[];
}

interface ISelectedBook {
  _id: string;
  title: string;
  authors: string;
  thumbnail: string;
}

interface ISelectedReview {
  reviewId: string;
  reviewTitle: string;
  reviewContents: string;
  reviewAuthor: string;
  reviewAuthorImage: string;
}

interface IState {
  title: string;
  contents: string;
  books: IBook[];
  reviews: IReview[];
  bookModal: boolean;
  reviewModal: boolean;
  isPosted: boolean;
  curationId: string;
}

class WriteCuration extends React.Component<{}, IState> {
  constructor({}) {
    super({});
    this.state = {
      books: [{ _id: "", authors: "", thumbnail: "", title: "" }],
      contents: "",
      reviews: [],
      title: "",
      bookModal: false,
      reviewModal: false,
      isPosted: false,
      curationId: ""
    };
    this.bookDelete = this.bookDelete.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleBookSelect = this.handleBookSelect.bind(this);
    this.addBooks = this.addBooks.bind(this);
  }

  public bookDelete(bookId: string): void {
    const currentBookList: IBook[] = this.state.books.slice();
    for (let i: number = 0; i < currentBookList.length; i++) {
      if (currentBookList[i]._id === bookId) {
        currentBookList.splice(i, 1);
      }
    }
    this.setState({ books: currentBookList });
  }

  public handleTitle(event: React.ChangeEvent<HTMLInputElement>): void {
    console.log("books 상태 궁금해!", this.state.books);
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

  public handlePost(): void {
    const postBody: IBody = {
      title: this.state.title,
      contents: this.state.contents,
      books: this.state.books.map((book: IBook) => book._id),
      reviews: this.state.reviews.map((review: IReview) => review._id)
    };
    console.log("post 하는 body ?", postBody);
    const getPostedId = (id: string): void =>
      this.setState({ curationId: id, isPosted: true });

    fetchPostCuration(getPostedId, postBody);
  }

  public addBooks = (selectedBooks: ISelectedBook): any => {
    const newBooks: ISelectedBook[] =
      this.state.books.length !== 0 && this.state.books[0]._id
        ? this.state.books.concat(selectedBooks)
        : this.state.books.slice(1).concat(selectedBooks);
    this.setState({ books: newBooks, bookModal: false });
  };

  public render(): ReactElement {
    return (
      <div className="writecuration">
        {this.state.bookModal ? <Modal addBooks={this.addBooks} /> : null}
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
                height: "150px",
                width: "100%",
                border: "none",
                fontSize: "50px"
              }}
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
              resize: "none",
              height: "300px",
              width: "100%",
              border: "none",
              fontSize: "20px"
            }}
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
