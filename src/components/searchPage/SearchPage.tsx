import React, { ReactElement } from "react";
import { RouteComponentProps } from "react-router";
import { Redirect } from "react-router-dom";
import { IBook, IReviewWithBooks,IAuthor } from "../shared/Types";
import { fetchBookSearch, fetchReviewSearch } from "./../shared/Fetch";
import SearchBooks from "./SearchBooks";
import SearchReviews from "./SearchReviews";
import "./SearchBook.css";
import { minHeight } from "@material-ui/system";

interface IState {
  books: IBook[];
  reviews: IReviewWithBook[];
  searchTitle: string;
  selectBook: string;
  title: string;
  redirect: boolean;
}

export interface IReviewWithBook {
  _id: string;
  author: IAuthor;
  title: string;
  books: IBook[];
  contents: string;
  thumbnail: string;
  published: boolean;
  likes: string[];
}

interface IMatchParams {
  keyWord: string;
}

class SearchPage extends React.Component<
  RouteComponentProps<IMatchParams>,
  IState
> {
  constructor(props: any) {
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
          books: [
            {
              _id: "",
              authors: [""],
              contents: "",
              thumbnail: "",
              title: ""
            }
          ],
          contents: "",
          published: true,
          thumbnail: "",
          likes: [""]
        }
      ],
      searchTitle: "",
      selectBook: "book",

      title : this.props.match.params.keyWord,
      redirect: false
    }

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleNavSelect = this.handleNavSelect.bind(this);
  }

  public handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ title: e.target.value });
  }

  public handleKeyPress(e: any): any{
    if(e.key === 'Enter'){
      if(this.state.title === this.props.match.params.keyWord){
        e.preventDefault();
      }
      else if(this.state.title !== ""){
        this.setState({redirect: true})
      } 
      else {
        alert("검색어를 입력해주세요")
        e.preventDefault();
      }
    }
  }
  public handleNavSelect(e: any): void {
    this.setState({ selectBook: e.currentTarget.id });
  }

  public componentDidMount(): void {
    const setStateBook = (res: any): void => {
      this.setState({
        books: res,
        searchTitle: this.props.match.params.keyWord
      });
    };
    fetchBookSearch(setStateBook, this.props.match.params.keyWord);
    const setStateReview = (res: any): void => {
      this.setState({ reviews: res });
    };
    fetchReviewSearch(setStateReview, this.state.title);
    this.setState({redirect: false})
  }

  public componentDidUpdate(prevProps: any): void {
    if (prevProps.match.params.keyWord !== this.props.match.params.keyWord) {
      this.setState({title: this.props.match.params.keyWord})
      const setStateBook = (res: any): void => {
        this.setState({ books: res });
      };
      fetchBookSearch(setStateBook, this.props.match.params.keyWord);
      const setStateReview = (res: any): void => {
        this.setState({ reviews: res });
      };
      fetchReviewSearch(setStateReview, this.state.title);
      this.setState({redirect: false})
    } 
  }

  public render(): ReactElement {
    return (
      <div>
        {this.state.redirect ? 
        <Redirect to={`/search/${this.state.title}`}/> 
        :
        <div className = "search-area">
          <div className = "search-input">

            <input
              type="search"
              className="search-box"
              placeholder="검색어를 입력해 주세요"
              value={this.state.title}
              onChange={this.handleChangeTitle}
              onKeyPress={this.handleKeyPress}
            ></input>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "0px 50px",
              cursor: "pointer"
            }}
          >
            <ul
              className="uk-breadcrumb"
              style={{ marginTop: "20px", marginBottom: "25px" }}
            >
              <li></li>
              <li>
                <span id="book" onClick={this.handleNavSelect}>
                  책
                </span>
              </li>
              <li>
                <span id="review" onClick={this.handleNavSelect}>
                  서평
                </span>
              </li>
              <li></li>
            </ul>
          </div>

          {this.state.selectBook ==="book" ? 
        <SearchBooks 
          books={this.state.books}
          searchTitle={this.state.searchTitle} /> 
          :  
        <SearchReviews 
         reviews={this.state.reviews}
         searchTitle={this.state.searchTitle}/> } 
        </div> }       

      </div>
    );
  }
}

export default SearchPage;
