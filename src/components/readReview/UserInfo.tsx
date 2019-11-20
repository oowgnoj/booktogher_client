import React, { ReactElement } from "react";
import { IProps, IReviewProps } from "./reviewInterface";
import "./UserInfo.css";

const UserInfo = ({ review }: IReviewProps): ReactElement => {
  return (
    <div className="user-area">
      <h4>작가 소개</h4>
      <div className="user-info">
        <img src={review.author.image} width="80px" />
        <div className="user-name">{review.author.name}</div>
        <div className="user-detail">{review.author.profile}</div>
      </div>
    </div>
  );
};

export default UserInfo;
