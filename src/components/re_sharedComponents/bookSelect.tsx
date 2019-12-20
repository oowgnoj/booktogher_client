import React, { ReactElement } from "react";
import { fetchBookSearch } from "../writeReview/fetchWrite";
import { connect } from 'react-redux';
import "../writeReview/Modal.scss";
import BookEntry from './../re_sharedComponents/bookEntry'
import {IBook, IBookFinished, IUserBook, IUserInfo, IBookReading} from './../re_shared/interfaces'

// interface ISelected {
//   _id: string;
//   title: string;
//   authors: string;
//   thumbnail: string;
// }

interface IState {
  books: IBook[];
  title: string;
  selectBooksId: string[];
  selectBooksTitle: string[];
  selectedBooks: IBook[] | IUserBook[];
  isOpen: boolean;
  to_read: IBookReading[];
  finished: any;
}

interface IProps {
  addBooks: any;
  close: any;
  to_read: IBookReading[];
  finished: any;
}

class BookSelect extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      books: [
        {
          _id: "",
          authors: [""],
          contents: "",
          thumbnail: "",
          title: ""
        }
      ],
      title: "",
      selectBooksId: [""],
      selectBooksTitle: [""],
      selectedBooks: [{ _id: "", title: "", authors: [], contents: "", thumbnail: "" }],
      isOpen: true,
      to_read: this.props.to_read,
      finished: this.props.finished
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.clickSearchButton = this.clickSearchButton.bind(this);
    this.clickSelectedBook = this.clickSelectedBook.bind(this);
    this.clickConfirm = this.clickConfirm.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.clickClose = this.clickClose.bind(this);
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

  public handleKeyPress(e: any): void {
    if (e.key === "Enter") {
      if (this.state.title !== "") {
        const setStateBook = (res: any): void => {
          this.setState({ books: res });
        };
        fetchBookSearch(setStateBook, this.state.title);
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

  public clickSelectedBook(book:IBook | IUserBook, e: any): void {
    console.log(book, e)
    e.currentTarget.style.border = "3px solid rgb(108, 198, 250)";


    const bookList: IBook[] | IUserBook[] = this.state.selectedBooks.slice();
    bookList.push(book);

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
    // 초기값 남아있는거 삭제하고 하위 컴포넌트로 내려주기 위함
    const selectBookId :string[] = this.state.selectBooksId.slice(1)
    const selectBookTitle :string[] = this.state.selectBooksTitle.slice(1)
    const searchResult : IBook[]= this.state.books
        
    const searchBookList: ReactElement[]= this.state.books.map((book: IBook)=>
      <BookEntry book={book} from ='writeReview' imgClick={this.clickSelectedBook} key={book._id} />
    )
    const readingBook:ReactElement[] = this.state.finished.map(
      (info: IBookFinished) =>  <BookEntry book={info.book} from ='writeReview' imgClick={this.clickSelectedBook} key={info.book._id}/>
    )

    return (
      <div>
        {this.state.isOpen ? (
          <div className="Modal-overlay">
            <div className="Modal">
              <p className="title">
                <button
                  uk-icon="close"
                  type="button"
                  onClick={this.clickClose}
                ></button>
                <input
                  type="text"
                  className="search-box"
                  placeholder="책 제목을 입력해 주세요"
                  value={this.state.title}
                  onChange={this.handleChangeTitle}
                  onKeyPress={this.handleKeyPress}
                ></input>
              </p>
              <div className="content">
                {this.state.books.length > 0
                  ? this.state.books[0]._id === ""
                    ? readingBook.length !== 0 ?
                    <div>다 읽은 책 목록
                    <div>{readingBook}</div> </div>:"책을 검색해주세요."
                    : searchBookList
                  : "책 검색 결과가 없습니다."}
              </div>
              <div className="button-wrap">
                <button
                  className="uk-button uk-button-default"
                  onClick={this.clickConfirm}
                >
                  {" "}
                  Confirm{" "}
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state :any) :any => {
  return {
      reading: state.user.User.reading,
      to_read: state.user.User.to_read,
      finished: state.user.User.finished
  };
}

export default connect(mapStateToProps)(BookSelect);
