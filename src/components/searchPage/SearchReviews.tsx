import React, { ReactElement } from "react";
import { Link } from "react-router-dom"
import { IBooks, IReviewWithBooks } from "../shared/Types";
import { fetchReviewSearch } from "../shared/Fetch";
import "./SearchBook.css"

interface IState {
  reviews: IReviewWithBooks[];
  title: string;
  searchTitle : string;
}

class SearchReviews extends React.Component<{}, IState> {
  constructor({}) {
    super({});
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
          title: "",
          books: [{
            _id: "",
            authors: [""],
            contents: "",
            thumbnail: "",
            title: "",
          }],
          contents: "",
          thumbnail: "",
          likes: [""]
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
      this.setState({ reviews: res , searchTitle: this.state.title});
    };
    fetchReviewSearch(setStateBook, this.state.title);
  }

  public render(): ReactElement {
    const searchBookList: ReactElement[] = this.state.reviews.map(
      (info: IReviewWithBooks) => {
        return (
          <div key ={info._id} className="review-detail">
            <Link to = {`/review/${info._id}`}>
              <h5>{info.title}</h5>
              <div>{info.author.name}</div>
              <div>{info.contents.replace(/<[^>]*>?/gm, '')}</div>
            </Link>     
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
            placeholder="서평 제목을 입력해 주세요"
            value={this.state.title}
            onChange={this.handleChangeTitle}
          ></input>
        </div>
        <button onClick={this.clickSearchButton}>검색</button>
        <div className="search-result">
          {this.state.searchTitle === "" ? 
          null  :  
          <h3 className = "search-result-title">{this.state.searchTitle}에 대한 서평</h3>}
          {searchBookList}
        </div>
      </div>
    )
  }
}
export default SearchReviews;