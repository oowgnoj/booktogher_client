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
        {this.props.books.map((book: IBook, index: number) => {
          return <BooksEntry book={book} key={index} />;
        })}
      </div>
    );
  }
}

export default BooksList;
