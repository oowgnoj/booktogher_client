import React, { ReactElement } from "react";
import { IBookState, IBook } from './reviewInterface'
import "./BookInfo.css";

const BookInfo = ({ bookList } : IBookState): ReactElement => {
  const book: JSX.Element[] = bookList.map((info: IBook)=>{
    return (
      <div>
        <div className="book-img"><img src = {info.thumbnail} width ="120px" height ="150px"/></div>
        <div className="book-info-area">
          <div className="book-title"><b>제목 : {info.title}</b></div>
          <div className="book-authors">저자 : {info.authors}</div>
          <div className="book-rating">평점 : {info.rating} 도</div>
          <div className="book-contents">책 소개 : {info.contents}</div>
        </div>
      </div>      
    )
  })
  return (
    <div className="book-info">
      <h4>책 소개</h4>
      <div className= "book-detail">{book}</div>
    </div>
  )
};

export default BookInfo;