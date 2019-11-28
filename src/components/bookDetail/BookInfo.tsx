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

const BookInfo = ({
  bookInfo,
  rating,
  user,
  updateUserInfo
}: IProps): ReactElement => {
  const bookAvgRating = rating.map((info: IRating) => {
    return <div>평점 : {info.avg_rating}</div>;
  });
  const bookUserRating = rating.map((info: IRating) => {
    if (info.user_rating !== null) {
      return <div>평점 : {info.user_rating.rating}</div>;
    } else {
      return <div>평점 : 0</div>;
    }
  });
  const toRead: any = user.to_read;

  const handleAddToRead = (): void => {
    if (user._id === undefined) {
      alert("로그인 후 추가 해주세요");
    } else {
      const newBook: INewBook = { book: bookInfo._id };
      toRead.push(newBook);
      const data: any = {
        to_read: toRead
      };
      updateUserInfo(data);
      alert("읽고 싶은 책에 추가 되었습니다.");
    }
  };

  return (
    <div className="bookInfo-wrap">
      <div className="book-title">
        <img src={bookInfo.thumbnail} width="120px" height="150px" />
        <b>{bookInfo.title}</b>
      </div>
      <div className="">
        <div>서로모임 평점{bookAvgRating}</div>
        <div>나의 평점{bookUserRating}</div>
        <button className="book-like" onClick={handleAddToRead}>
          읽고싶은책추가
        </button>
        <div className="bookInfo-detail">
          <div>저자 : {bookInfo.authors}</div>
          <div>통역 : {bookInfo.translators}</div>
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
