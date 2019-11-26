import React, { ReactElement } from "react";
import { IBookDetail, IRating } from "../shared/Types";
import "./BookDetail.css";

interface IProps {
  bookInfo : IBookDetail;
  rating: IRating[];
}

const BookInfo = ({ bookInfo, rating } :IProps): ReactElement => {
    const bookAvgRating = rating.map((info:IRating)=>{
      return(
        <div>
          평점 : {info.avg_rating}
        </div>
      )
    })
    const bookUserRating = rating.map((info:IRating)=>{
      return(
        <div>
          평점 : {info.user_rating.rating}
        </div>
      )
    })

  return (
    <div className ="bookInfo-wrap">
        <div className="book-title">
          <img src={bookInfo.thumbnail} width="120px" height="150px" />
          <b>{bookInfo.title}</b>
        </div>
        <div className="">
        <div>서로모임 평점{bookAvgRating}</div>
        <div>나의 평점{bookUserRating}</div>
          <button className ="book-like">읽고싶은책추가</button>
          <div className="bookInfo-detail">
            <div>저자 : {bookInfo.authors}</div>
            <div>통역 : {bookInfo.translators}</div>
            <div>ISBN : {bookInfo.isbn}</div>
            <div>출판사 : {bookInfo.publisher}</div>
            <div>판매가격 : {bookInfo.price}</div>

            <div className="book-desc">책 소개 : {bookInfo.contents}</div>
          </div>         
        </div>
    </div>
  );
};

export default BookInfo;