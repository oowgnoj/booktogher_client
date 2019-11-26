import React, { ReactElement } from "react";
import Button from "./Button";
import { Grid } from "@material-ui/core";

import { IBookToRead, IBookReading, IBookFinished } from "./../shared/Types";
import "./BookEntry.css";

interface IProps {
  toRead?: IBookToRead | null;
  reading?: IBookReading | null;
  finished?: IBookFinished | null;
  getCurrentBookID: (
    bookInfo: object,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => void;

  getImgBookId: (bookInfo: object) => void;
}

const BookEntry: React.FC<IProps> = ({
  toRead,
  reading,
  finished,
  getCurrentBookID,
  getImgBookId
}: IProps): ReactElement => {
  if (toRead) {
    return (
      <div className="content-holder">
        <div className="image-container">
          <img className="book-image" src={toRead.book.thumbnail} />
          <img
            src={
              "https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/253990/141-512.png"
            }
            className="del"
            style={{ width: "25px", height: "25px" }}
            onClick={(
              e: React.MouseEvent<HTMLImageElement, MouseEvent>
            ): void => {
              getImgBookId(toRead.book);
            }}
          />
        </div>
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
        <div className="image-container">
          <img className="book-image" src={reading.book.thumbnail} />
          <img
            src={
              "https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/253990/141-512.png"
            }
            className="del"
            style={{ width: "25px", height: "25px" }}
            onClick={(
              e: React.MouseEvent<HTMLImageElement, MouseEvent>
            ): void => {
              getImgBookId(reading.book);
            }}
          />
        </div>
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
        <div className="image-container">
          <img className="book-image" src={finished.book.thumbnail} />
          <img
            src={
              "https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/253990/141-512.png"
            }
            className="del"
            style={{ width: "25px", height: "25px" }}
            onClick={(
              e: React.MouseEvent<HTMLImageElement, MouseEvent>
            ): void => {
              getImgBookId(finished.book);
            }}
          />
        </div>
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
