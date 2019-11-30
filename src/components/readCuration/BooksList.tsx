import React, { ReactElement } from "react";
import BooksEntry from "./BooksEntry";

interface IBook {
  _id: string;
  authors: string[];
  contents: string;
  thumbnail: string;
  title: string;
}

interface IProps {
  books: IBook[];
}

class BooksList extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render(): ReactElement {
    return (
      <div
        className="readCuration_bookslist"
        style={{ backgroundColor: "#ebebeb" }}
      >
        <div
          className="readcuration_books_booklist_wrapper"
          style={{
            display: "flex",
            paddingLeft: "17%",
            paddingTop: "30px"
          }}
        >
          {this.props.books.map((book: IBook, index: number) => {
            return <BooksEntry book={book} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default BooksList;
