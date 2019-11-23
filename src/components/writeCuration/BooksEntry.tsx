import React, { ReactElement } from "react";
import ReactHtmlParser from "react-html-parser";

interface IBook {
  _id: string;
  thumbnail: string;
  authors: string[];
  title: string;
  contents: string;
}

interface IProps {
  book: IBook;
  deleteEvent: any;
}

class BooksEntry extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  public handleDelete() {
    console.log("entry 에서 아이디 찍어보기 : ", this.props.book._id);
    this.props.deleteEvent(this.props.book._id);
  }

  public render(): ReactElement {
    const { book } = this.props;
    return (
      <div className="writecuration_books_bookentry">
        <img
          src={book.thumbnail}
          alt={book.title}
          onClick={this.handleDelete}
        />
        <div className="bookentry_title">{book.title}</div>
        {book.authors.map(author =>
          ReactHtmlParser(`<div className="bookentry_author">${author}</div>`)
        )}
      </div>
    );
  }
}

export default BooksEntry;
