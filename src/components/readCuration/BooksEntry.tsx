import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface IBook {
  _id: string;
  authors: string[];
  contents: string;
  thumbnail: string;
  title: string;
}

interface IProps {
  book: IBook;
}

class BooksEntry extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render(): ReactElement {
    const { book } = this.props;
    return (
      <Link to={`/book/${book._id}`} style={{ textDecoration: "none" }}>
        <div className="readcuration_bookentry">
          <img
            src={book.thumbnail}
            alt={book.title}
            style={{ width: "120px", height: "auto" }}
            className="image"
          />
          <div
            className="readcuration_bookentry_title"
            style={{
              width: "120px",
              textAlign: "center",
              marginTop: "10px",
              textDecoration: "none",
              color: "gray"
            }}
          >
            <b>
              {book.title.length < 10
                ? book.title
                : book.title.slice(0, 9) + ".."}
            </b>
          </div>
          <div
            className="readcuration_bookentry_author"
            style={{
              width: "120px",
              textAlign: "center",
              marginBottom: "10px",
              textDecoration: "none",
              color: "gray"
            }}
          >
            {book.authors.length < 10
              ? book.authors
              : book.authors.slice(0, 9) + ".."}
          </div>
        </div>
      </Link>
    );
  }
}

export default BooksEntry;
