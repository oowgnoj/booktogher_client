import React, { ReactElement } from "react";

interface IBook {
  _id: string;
  thumbnail: string;
  authors: string;
  title: string;
}

interface IProps {
  book: IBook;
  deleteEvent: any;
  isPlaceHolder: string;
}

class BooksEntry extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  public handleDelete() {
    this.props.deleteEvent(this.props.book._id);
  }

  public render(): ReactElement {
    const { book } = this.props;
    return (
      <div
        className={"writecuration_books_bookentry" + this.props.isPlaceHolder}
      >
        <img
          src={book.thumbnail}
          alt={book.title}
          onClick={this.handleDelete}
          style={{ width: "120px", height: "auto" }}
          className="image"
        />
        <div className="middle">
          <span uk-icon="icon: close; ratio: 1.7" className="text"></span>
        </div>
        <div
          className="bookentry_title"
          style={{ width: "120px", textAlign: "center", marginTop: "10px" }}
        >
          <b>
            {book.title.length < 10
              ? book.title
              : book.title.slice(0, 9) + ".."}
          </b>
        </div>
        <div
          className="bookentry_author"
          style={{ width: "120px", textAlign: "center", marginBottom: "10px" }}
        >
          {book.authors.length < 10
            ? book.authors
            : book.authors.slice(0, 9) + ".."}
        </div>
      </div>
    );
  }
}

export default BooksEntry;
