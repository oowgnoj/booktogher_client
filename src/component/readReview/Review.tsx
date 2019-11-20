import React, { ReactElement } from "react";
import { IProps,IReview,IReviewProps,IBook } from './reviewInterface';
import "./Review.css";

//color 추가 하기 
const Review = ({ review, bookList } : IProps): ReactElement => {
  const bookTitle: JSX.Element[]= bookList.map((info: IBook)=>{
    return (
      <div>
        <b>책 : {info.title} : 평점 {info.rating} 도 </b>
      </div>
      )
  })
  return (
    <div className ="review-area">
      <div className ="title-area">
        <h1 className ="title">
          {review.title}
        </h1>
        <div className ="review-likes">
          <button>수정</button>
        </div>
      </div>
      <div className ="post-area">
        <div className ="book-rating">{bookTitle}</div>
        <div dangerouslySetInnerHTML ={{__html:review.contents}} className ="text-area"></div>
      </div>       
    </div>
  ) 
};

export default Review;