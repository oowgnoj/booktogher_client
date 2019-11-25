import React, { ReactElement } from "react";
import Button from "./Button";
import { Grid } from "@material-ui/core";

import {
  IUserInfo,
  IBookToRead,
  IBookReading,
  IBookFinished
} from "./../shared/Types";
import "./BookEntry.css";

interface IProps {
  toRead?: IBookToRead | null;
  reading?: IBookReading | null;
  finished?: IBookFinished | null;
  getCurrentBookID: (
    bookInfo: object,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => void;
}

const BookEntry: React.FC<IProps> = ({
  toRead,
  reading,
  finished,
  getCurrentBookID
}: IProps): ReactElement => {
  // console.log(toRead, reading, finished);
  // const total = () => {
  //   if (toRead) {
  //     return toRead;
  //   } else if (reading) {
  //     return reading;
  //   } else {
  //     return finished;
  //   }
  // };

  if (toRead) {
    return (
      <div className="content-holder">
        <img className="book-image" src={toRead.book.thumbnail} />
        <p className="title-text">{toRead.book.title}</p>
        <p className="author-text">{toRead.book.authors}</p>
        <Button
          status={"toRead"}
          bookID={toRead.book}
          getCurrentBookID={getCurrentBookID}
        />
      </div>
    );
  }
  if (reading) {
    return (
      <div className="content-holder">
        <img className="book-image" src={reading.book.thumbnail} />
        <p className="title-text">{reading.book.title}</p>
        <p className="author-text">{reading.book.authors}</p>
        <Button
          status={"reading"}
          bookID={reading.book}
          getCurrentBookID={getCurrentBookID}
        />
      </div>
    );
  }
  if (finished) {
    return (
      <div className="content-holder">
        <img className="book-image" src={finished.book.thumbnail} />
        <p className="title-text">{finished.book.title}</p>
        <p className="author-text">{finished.book.authors}</p>
        <Button
          status={"finished"}
          bookID={finished.book}
          getCurrentBookID={getCurrentBookID}
        />
      </div>
    );
  }
  return <div>리스트가 비어있습니다.</div>;
};

export default BookEntry;
