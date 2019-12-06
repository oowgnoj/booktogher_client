import React, { ReactElement } from "react";
import { IBookDetail, IRating, IUserInfo } from "../shared/Types";
import { connect } from "react-redux";
import { updateUserInfo } from "../../Redux/modules/user";
import "./BookDetail.css";
import { instanceOf } from "prop-types";
import userInfo from "../shared/userInfo";

interface IProps {
  bookInfo: IBookDetail;
  rating: IRating[];
  user: IUserInfo;
  updateUserInfo: (data: any) => void;
}

interface INewBook {
  book: string;
}


const BookInfo = ({ bookInfo, rating, user, updateUserInfo } :IProps): ReactElement => {
    const bookAvgRating: ReactElement[]  = rating.map((info:IRating)=>{
      return( 
        <span> {Math.round(info.avg_rating)} </span>
      )
    })
    const bookUserRating: any = rating.map((info:IRating)=>{
      if(info.user_rating !== null){
        return(
          <span> {info.user_rating.rating} </span>
        )
      } else {
        return undefined
      }
    })
    const toRead: any = user.to_read;
    
    const handleAddToRead = () : void=>{
      if(user._id === undefined){
        alert("로그인 후 추가 해주세요")
      } else {
        const newBook: INewBook ={ book : bookInfo._id }
        toRead.push(newBook);
        const data: any = {
          to_read : toRead
        }
        updateUserInfo(data);
        alert("읽고 싶은 책에 추가 되었습니다.")
      } 
    }


    const bookAuther: ReactElement[] = bookInfo.authors.map((author:string) =>{
      return(
        <span>{`${author}, `}</span>
      )
    })

    const bookTranslator: ReactElement[] = bookInfo.translators.map((translator:string) =>{
      return(
        <span>{`${translator} `}</span>
      )
    })
 console.log(bookUserRating)
  return (
    <div className ="bookInfo-wrap">
        <div className="book-detail-book-title">
          <img src={bookInfo.thumbnail} width="140px"  />
          <b>{bookInfo.title}</b>
          <span 
            uk-icon="heart"
            uk-tooltip="읽고싶은책추가"
            className ="book-like"
            onClick={handleAddToRead}
          ></span>
        </div>
        <div className="">
          <div className="rating-render-box">서로모임 평점{bookAvgRating}</div>
          {bookUserRating[0] !== undefined ? 
          <div className="rating-render-box">나의 평점{bookUserRating}</div> 
          : <div className="rating-render-box01"></div>}
          
          <div className="bookInfo-detail">
            <div>저자 : {` ${
                bookInfo.authors.length > 1
                  ? bookInfo.authors[0] + " 외"
                  : bookInfo.authors[0]
              }`}</div>
            {bookInfo.translators.length !== 0 ? 
              <div>통역 : {bookTranslator}</div>
              : null}
            <div>출판사 : {bookInfo.publisher}</div>
            <div>판매가격 : {bookInfo.price}</div>
            <div className="book-desc">책 소개 : {bookInfo.contents}</div>
          </div>         
        </div>
      </div>

  );
};

function mapStateToProps(state: any): any {
  return {
    user: state.user.User
  };
}

function mapDispatchToProps(dispatch: any): any {
  return {
    updateUserInfo: (bookStatus: any): void =>
      dispatch(updateUserInfo(bookStatus))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookInfo);