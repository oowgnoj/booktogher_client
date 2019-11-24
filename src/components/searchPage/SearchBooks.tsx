import React, { ReactElement } from "react";
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { IBooks, IBook, IUserInfo,IBookReading } from "../shared/Types";
import { fetchBookSearch} from "./../shared/Fetch";
import "./SearchBook.css"

interface IState {
  books: IBook[];
  title: string;
  searchTitle: string;
  reading: IBookReading[];
  to_read: IBookReading[];
}

interface IProps {
  reading: IBookReading[];
  to_read: IBookReading[];
}

class SearchBooks extends React.Component<IProps, IState> {
  constructor(props:any) {
    super(props);
    this.state = {
      books: [
        {
          _id: "",
          authors: [""],
          contents: "",
          thumbnail:
            "",
          title: ""
        }
      ],
      reading: this.props.reading,
      searchTitle: "",
      title: '',
      to_read: this.props.to_read,
      
    }
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.clickSearchButton = this.clickSearchButton.bind(this);
  }

  public handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ title: e.target.value });
  }

  public clickSearchButton(): void {
    const setStateBook = (res: any): void => {
      this.setState({ books: res , searchTitle: this.state.title});
    };
    fetchBookSearch(setStateBook, this.state.title);
  }

  public render(): ReactElement {
    const searchBookList: ReactElement[] = this.state.books.map(
      (info: IBook) => {
        return (
          <div className="book-select">
            <Link to = {`/book/${info._id}`}>
            <img
              src={info.thumbnail}
              width="80px"
              alt={`${info.title}`}
            />
            <div>{info.title}</div>
            </Link>
          </div>
        );
      }
    );
    const readingBook:ReactElement[] = this.state.reading.map(
      (info: IBookReading) => {
        return (
          <div className="book-select">
            <Link to = {`/book/${info.book._id}`}>
            <img
              src={info.book.thumbnail}
              width="80px"
              alt={`${info.book.title}`}
            />
            <div>{info.book.title}</div>
            </Link>
          </div>
        )
      })
    return (
      <div className = "search-book">
        <div className = "search-input">
          <input
            type="text"
            className="search-box"
            placeholder="책 제목을 입력해 주세요"
            value={this.state.title}
            onChange={this.handleChangeTitle}
          ></input>
        </div>
        <button onClick={this.clickSearchButton}>검색</button>
        <div className="search-result">
          {this.state.searchTitle === "" ? 
          readingBook :  
          <h3 className = "search-result-title">{this.state.searchTitle}에 대한 책</h3>}
          {searchBookList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state :any) :any => {
  return {
      reading: state.user.User.reading,
      to_read: state.user.User.to_read
  };
}

export default connect(mapStateToProps)(SearchBooks);