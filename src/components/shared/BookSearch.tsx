import React, { ReactElement } from "react";
import { IBooks, IBook } from "./Types";
import { fetchBookSearch } from "./../shared/Fetch";
import "./../writeReview/Modal.scss";

interface IState {
  books: IBook[];
  title: string;
  selectBooksId: string[];
  selectBooksTitle: string[];
  isOpen: boolean;
}

class BookSelect extends React.Component<{}, IState> {
  constructor({}) {
    super({});
    this.state = {
      books: [
        {
          _id: "book-id1",
          authors: ["이모양"],
          contents: "타입스크립트와의 싸움을 펼치는 이야기이다",
          thumbnail:
            "http://sungsan.info/wp-content/uploads/2018/06/%EB%8F%99%EC%A0%84-%ED%95%98%EB%82%98-%EC%B1%85%ED%91%9C%EC%A7%80.jpg",
          title: "타입스트립트"
        },
        {
          _id: "book-id2",
          authors: ["이기기"],
          contents: "리액크 퀼에 대하여 공부해봅시다",
          thumbnail:
            "http://sungsan.info/wp-content/uploads/2018/06/%EB%8F%99%EC%A0%84-%ED%95%98%EB%82%98-%EC%B1%85%ED%91%9C%EC%A7%80.jpg",
          title: "리액트 퀼 사용법"
        }
      ],
      title: "",
      selectBooksId: [""],
      selectBooksTitle: [""],
      isOpen: true
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.clickSearchButton = this.clickSearchButton.bind(this);
    this.clickSelectedBook = this.clickSelectedBook.bind(this);
    this.clickConfirm = this.clickConfirm.bind(this);
  }

  public handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ title: e.target.value });
  }

  public clickSearchButton(): void {
    const setStateBook = (res: any): void => {
      this.setState({ books: res });
    };
    fetchBookSearch(setStateBook, this.state.title);
  }

  public clickSelectedBook(e: any): void {
    const idTitle = e.target.alt.split(":");
    this.setState({
      selectBooksId: this.state.selectBooksId.concat([idTitle[0]]),
      selectBooksTitle: this.state.selectBooksTitle.concat([idTitle[1]])
    });
  }

  public clickConfirm(): void {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  public render(): ReactElement {
    const searchBookList: ReactElement[] = this.state.books.map(
      (info: IBook) => {
        return (
          <div className="book-select">
            <img
              src={info.thumbnail}
              width="80px"
              alt={`${info._id}:${info.title}`}
              onClick={e => this.clickSelectedBook(e)}
            />
            <div>{info.title}</div>
          </div>
        );
      }
    );

    const selectBookId: string[] = this.state.selectBooksId.slice(1);
    const selectBookTitle: string[] = this.state.selectBooksTitle.slice(1);

    return (
      <div>
        {this.state.isOpen ? (
          <div className="Modal-overlay">
            <div className="Modal">
              <p className="title">
                <input
                  type="text"
                  className="search-box"
                  placeholder="책 제목을 입력해 주세요"
                  value={this.state.title}
                  onChange={this.handleChangeTitle}
                ></input>
                <button onClick={this.clickSearchButton}>검색</button>
              </p>
              {this.state.selectBooksTitle.length === 1 ? (
                <h5>책을 선택해주세요.</h5>
              ) : (
                <h5>{selectBookTitle}를 선택하셨습니다.</h5>
              )}
              <div className="content">{searchBookList}</div>
              <div className="button-wrap">
                <button onClick={this.clickConfirm}> Confirm </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default BookSelect;
