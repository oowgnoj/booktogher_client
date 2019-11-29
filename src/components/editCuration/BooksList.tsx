import React, { ReactElement } from "react";
import ReactHtmlParser from "react-html-parser";
import BooksEntry from "./BooksEntry";
import { placeholders } from "./placeholders";
import "./index.css";

interface IBook {
  _id: string;
  thumbnail: string;
  authors: string;
  title: string;
}

interface IProps {
  books: IBook[];
  deleteEvent: any;
  handleBookSelect: any;
}

class BooksList extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render(): ReactElement {
    const bookList: any =
      this.props.books[0] && this.props.books[0]._id
        ? this.props.books.map((el, index) => (
            <BooksEntry
              book={el}
              deleteEvent={this.props.deleteEvent}
              isPlaceHolder={" none"}
              key={index}
            />
          ))
        : placeholders.map((el, index) => (
            <BooksEntry
              book={el}
              deleteEvent={this.props.deleteEvent}
              isPlaceHolder={" opacity"}
              key={index}
            />
          ));
    return (
      <div
        className="editcuration_books_booklist_wrapper"
        style={{
          display: "flex",
          paddingLeft: "100px",
          paddingTop: "30px"
        }}
      >
        <span
          className="editcuration_books_btn_wrapper"
          onClick={this.props.handleBookSelect}
        >
          <span className="editcuration_books_btn">
            <span uk-icon="plus"></span>
            <p style={{ fontSize: "0.9em" }}>책 추 가 하 기</p>
          </span>
        </span>
        <span
          className="editcuration_books_booklist"
          style={{
            display: "flex",
            paddingLeft: "8%"
          }}
        >
          {bookList}
        </span>
      </div>
    );
  }
}

export default BooksList;
