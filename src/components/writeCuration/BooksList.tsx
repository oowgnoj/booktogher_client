import React, { ReactElement } from "react";
import ReactHtmlParser from "react-html-parser";
import BooksEntry from "./BooksEntry";
import book1 from "./placeholders/ph_1.jpeg";
import book2 from "./placeholders/ph_2.jpeg";
import book3 from "./placeholders/ph_3.jpeg";
import book4 from "./placeholders/ph_4.jpeg";
import book5 from "./placeholders/ph_5.jpeg";
import book6 from "./placeholders/ph_6.jpeg";
import "./index.css";

interface IBook {
  _id: string;
  thumbnail: string;
  authors: string[];
  title: string;
  contents: string;
}

interface IProps {
  books: IBook[];
  deleteEvent: any;
}

const placeHolder = `<div className="writecuration_books_bookentry">
    <img src=${book1} alt="" />
    <div className="bookentry_title">청춘의 문장들</div>
    <div className="bookentry_author">김연수</div>
</div>
<div className="writecuration_books_bookentry">
    <img src=${book2} alt="" />
    <div className="bookentry_title">깜깜한 밤</div>
    <div className="bookentry_author">도로테드몽프레</div>
</div>
<div className="writecuration_books_bookentry">
    <img src=${book3} alt="" />
    <div className="bookentry_title">이방인</div>
    <div className="bookentry_author">알베르 까뮈</div>
</div>
<div className="writecuration_books_bookentry">
    <img src=${book4} alt="" />
    <div className="bookentry_title">어두운 시대의 사람들</div>
    <div className="bookentry_author">한나 아렌트</div>
</div>
<div className="writecuration_books_bookentry">
    <img src=${book5} alt="" />
    <div className="bookentry_title">인간의 조건</div>
    <div className="bookentry_author">한나 아렌트</div>
</div>
<div className="writecuration_books_bookentry">
    <img src=${book6} alt="" />
    <div className="bookentry_title">사랑이 나에게</div>
    <div className="bookentry_author">안경숙</div>
</div>`;

class BooksList extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render(): ReactElement {
    const bookList: any =
      this.props.books.length > 0
        ? this.props.books.map((el, index) => (
            <BooksEntry
              book={el}
              deleteEvent={this.props.deleteEvent}
              key={index}
            />
          ))
        : ReactHtmlParser(placeHolder);
    return <span className="writecuration_books_booklist">{bookList}</span>;
  }
}

export default BooksList;
