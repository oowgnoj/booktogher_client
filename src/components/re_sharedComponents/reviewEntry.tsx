import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";
import { IReview, IReviewBook } from "./../re_shared/interfaces";

interface IProps {
  Review: IReview;
  from: string;
  books: IReviewBook[];
}

/*
issue =>  
ReviewSelectModal,
UserHistoryModal,
curationRead,
curationWrite,
myLikes : with book
myReview,
searchResult
*/

const ReviewEntry: React.FC<IProps> = ({
  Review,
  from,
  books
}: IProps): ReactElement => {
  const path: string = `/review/${Review._id}`;
  const title: string = Review.title;
  const authorName: string = from === "myReview" ? "" : Review.author.name;
  const contents: string = Review.contents; // 줄인버전 helper function
  const bookName: string = books ? books[0].title : "";
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <dl>
        <dt>
          {bookName} + ' ' + {title}
          <span>{authorName}</span>
        </dt>
        <dd>{contents}</dd>
      </dl>
    </Link>
  );
};

export default ReviewEntry;
