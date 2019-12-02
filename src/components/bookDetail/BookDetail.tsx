import React, { ReactElement } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { IBookDetail, IRating } from "../shared/Types";
import { fetchBookDetail, fetchBookRating } from "./fetchBookdetail";
import BookInfo from "./BookInfo";
import BookReview from "./BookReview";
import CleanLoading from "../shared/CleanLoading"
import "./BookDetail.css";

interface IMatchParams {
  id: string;
}

interface IState {
  bookInfo: IBookDetail;
  ratings: IRating[];
}

class BookDetail extends React.Component<
  RouteComponentProps<IMatchParams>,
  IState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      bookInfo: {
        _id: "",
        authors: [""],
        contents: "",
        datetime: "",
        isbn: "",
        price: 0,
        publisher: "",
        sale_price: 0,
        status: "",
        thumbnail: "",
        title: "",
        translators: [""],
        url: ""
      },
      ratings: [
        {
          book: "", // book id
          avg_rating: 0,
          user_rating: {
            _id: "", // rating id
            rating: 0
          }
        }
      ]
    };
  }
  public componentDidMount(): void {
    const setStateBook = (res: any): void => {
      window.scroll(0, 0);
      this.setState({ bookInfo: res });
    };
    const setStateRating = (res: any): void => {
      this.setState({ ratings: res });
    };
    fetchBookDetail(setStateBook, this.props.match.params.id);
    fetchBookRating(setStateRating, this.props.match.params.id);
  }

  public render(): ReactElement {
    window.scroll(0, 0);
    return (
      <div>
        {this.state.bookInfo._id === "" ? 
        <CleanLoading /> :
        <div className="book-detail-area">
        <div className="book-cover"></div>
        <BookInfo bookInfo={this.state.bookInfo} rating={this.state.ratings} />
        <BookReview id={this.props.match.params.id} />
      </div>}
      </div>
      
    );
  }
}

export default BookDetail;
