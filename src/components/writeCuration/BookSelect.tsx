import React, { ReactElement } from "react";
import { IBookState, IBook } from "../writeReview/writeInterface";
import { fetchBookSearch } from "../writeReview/fetchWrite";
import "../writeReview/Modal.scss";

interface ISelected {
  _id: string;
  title: string;
  authors: string;
  thumbnail: string;
}

interface IState {
  books: IBook[];
  title: string;
  selectBooksId: string[];
  selectBooksTitle: string[];
  selectedBooks: ISelected[];
  isOpen: boolean;
}

interface IProps {
  addBooks: any;
}

class BookSelect extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      books: [
        {
          _id: "book-id1",
          authors: ["이모양"],
          contents: "타입스크립트와의 싸움을 펼치는 이야기이다",
          thumbnail:
            "http://image.kyobobook.co.kr/images/book/large/598/l9788936433598.jpg",
          title: "채식주의자"
        },
        {
          _id: "book-id2",
          authors: ["이기기"],
          contents: "리액크 퀼에 대하여 공부해봅시다",

          thumbnail:
            "http://image.kyobobook.co.kr/images/book/large/304/l9791196814304.jpg",
          title: "너에게만 좋은 사람이 되고 싶어"
        }
      ],
      title: "",
      selectBooksId: [""],
      selectBooksTitle: [""],
      selectedBooks: [{ _id: "", title: "", authors: "", thumbnail: "" }],
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
    const img = e.target.src;
    console.log("idtitle", idTitle);

    const newBook = {
      _id: idTitle[0],
      title: idTitle[1],
      authors: idTitle[2],
      thumbnail: img
    };

    const bookList: ISelected[] = this.state.selectedBooks.slice();
    bookList.push(newBook);

    this.setState({
      selectedBooks: bookList
    });
  }

  public clickConfirm(): void {
    const selectedBooks = this.state.selectedBooks.slice(1);
    this.props.addBooks(selectedBooks);
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  public render(): ReactElement {
    const searchBookList: ReactElement[] = this.state.books.map(
      (info: IBook) => {
        return (
          <div className="book-select" key={info._id}>
            <img
              src={info.thumbnail}
              width="100px"
              alt={`${info._id}:${info.title}:${
                info.authors.length > 1
                  ? info.authors[0] + " 외"
                  : info.authors[0]
              }`}
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
