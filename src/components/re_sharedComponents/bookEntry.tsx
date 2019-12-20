import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import {IUserBook} from './../re_shared/interfaces'

interface IBook {
  _id: string;
  authors: string[];
  contents: string;
  thumbnail: string;
  title: string;
}

interface IProps {
  book: IBook | IUserBook
  from: string;
  imgClick: (book: IBook | IUserBook, e: any) => void 
}

/*
BookSelectModal,
curationRead,
curationWrite,
myBooks,
searchResult
 */

const BookEntry: React.FC<IProps> = ({ book, from, imgClick }: IProps): ReactElement => {
  const path: string = `/book/${book._id}`;
  const title: string =
    book.title.length < 10 ? book.title : book.title.slice(0, 9);
  const authors: string | string[] =
    book.authors.length < 10 ? book.authors : book.authors.slice(0, 9) + "..";
  const image: string = book.thumbnail;


  // 1) 선택 (state 올려줘야해서) 2) 삭제  3) 링크
  
  // onclick
  // 상위 : delete, select, 

  return (

      <div className="readcuration_bookentry">
        <img src={image} alt={title} className="image" onClick ={(e : any):void => imgClick(book, e)}/>
        <div className="readcuration_bookentry_title">
        {from === "myBook" ?  <Link to={path}> <b>{title}</b> </Link> : <b>{title}</b>}
        </div>
        <div className="readcuration_bookentry_author">{authors}</div>
      </div>

  );
};

export default BookEntry;
