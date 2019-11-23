import React, { ReactElement } from "react";
import { IBooks, IBook } from "../shared/Types";
import { fetchBookSearch } from "./../shared/Fetch";
import "./SearchBook.css"

interface IState {
  books: IBook[];
  title: string;
  searchTitle : string;
}

class SearchBooks extends React.Component<{}, IState> {
  constructor({}) {
    super({});
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
      title: '',
      searchTitle : ""
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
            <img
              src={info.thumbnail}
              width="80px"
              alt={`${info.title}`}
            />
            <div>{info.title}</div>
          </div>
        );
      }
    );
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
          null  :  
          <h3 className = "search-result-title">{this.state.searchTitle}에 대한 책</h3>}
          {searchBookList}
        </div>
      </div>
    )
  }
}
export default SearchBooks;