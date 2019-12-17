import React, { ReactElement } from "react";
import { IBook } from "../re_shared/interfaces";
import BooksEntry from "../re_sharedComponents/bookEntry";

interface IProps {
  books: IBook[];
}

const BooksList: React.FC<IProps> = ({ books }: IProps): ReactElement => {
  return (
    <div className="readCuration_bookslist">
      <div className="readcuration_books_booklist_wrapper">
        {books.map((book: IBook, index: number) => {
          return <BooksEntry book={book} key={index} />;
        })}
      </div>
    </div>
  );
};

export default BooksList;
