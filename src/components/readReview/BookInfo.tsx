import React, { ReactElement } from "react";
import { Link } from 'react-router-dom'
import { IBook } from "./../shared/Types"
import "./BookInfo.css";

interface IBookState{
  bookList :IBook[]
}
const BookInfo = ({ bookList }: IBookState): ReactElement => {
  const book: JSX.Element[] = bookList.map((info: IBook) => {
    return (
      <div>
        <div className="book-img" key={info._id}>
          <Link to ={`/book/${info._id}`} >
            <img src={info.thumbnail} width="120px" height="150px" alt={info.title}/>
          </Link>
        </div>
        <div className="book-info-area">
          <div className="book-title">
            <b>제목 : {info.title}</b>
          </div>
          <div className="book-authors">저자 :  
          {` ${
                info.authors.length > 1
                  ? info.authors[0] + " 외"
                  : info.authors[0]
              }`}
          {/* {info.authors.map((author:string) =>{
              return(
                <span>{` ${author},`}</span>
              )
            })}
             */}
            </div>
          <div className="book-contents">책 소개 : {info.contents}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="book-info">
      <h4>책 소개</h4>
      <div className="book-detail">{book}</div>
    </div>
  );
};

export default BookInfo;
