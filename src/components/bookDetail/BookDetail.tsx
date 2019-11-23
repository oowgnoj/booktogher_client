import React, { ReactElement } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { IBookDetail } from "../shared/Types";
import { fetchBookDetail } from "./fetchBookdetail";
import BookInfo from './BookInfo'
import BookReview from "./BookReview";
import "./BookDetail.css";

interface IMatchParams {
  id: string;
}

interface IState {
  bookInfo : IBookDetail
}

class BookDetail extends React.Component<RouteComponentProps<IMatchParams>,IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      bookInfo :{
        _id: "",
        authors: [ "" ],
        contents: "",
        datetime: "",
        isbn: "",
        price: 0,
        publisher: "",
        sale_price: 0,
        status: "",
        thumbnail: "",
        title: "",
        translators: [ "" ],
        url: "",
      }     
    }
  }
  public componentDidMount(): void {
    const setStateBook = (res: any): void => {
      this.setState({ bookInfo: res });
    };
    fetchBookDetail(setStateBook, this.props.match.params.id);
  }

  public render(): ReactElement {
    return (
      <div className = "book-detail-area">
        <div className="book-cover"></div>
        <BookInfo bookInfo = {this.state.bookInfo}/>
        <BookReview id = {this.props.match.params.id} />
      </div>
    )
  }
}

export default BookDetail;
