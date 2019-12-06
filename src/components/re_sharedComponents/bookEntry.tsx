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

/*
BookSelectModal,
curationRead,
curationWrite,
myBooks,
searchResult
 */

const BookEntry: React.FC<IProps> = ({ book }: IProps): ReactElement => {
  const path: string = `/book/${book._id}`;
  const title: string =
    book.title.length < 10 ? book.title : book.title.slice(0, 9);
  const authors: string | string[] =
    book.authors.length < 10 ? book.authors : book.authors.slice(0, 9) + "..";
  const image: string = book.thumbnail;

  return (
    <Link to={path}>
      <div className="readcuration_bookentry">
        <img src={image} alt={title} className="image" />
        <div className="readcuration_bookentry_title">
          <b>{title}</b>
        </div>
        <div className="readcuration_bookentry_author">{authors}</div>
      </div>
    </Link>
  );
};

export default BookEntry;
