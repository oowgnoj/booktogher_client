import React, { ReactElement } from "react";
import "../../../node_modules/uikit/dist/css/uikit.css";
import { IReview, IReviewBook } from "./Types";
import { Link } from "react-router-dom";
import "./curationEntry.css";
import { Skeleton } from "@material-ui/lab";
import Skeleton_review from "./ListSkeleton";

interface IProps {
  Review: IReview;
  from: string;
  books: IReviewBook[];
}
const ReviewEntry: React.FC<IProps> = ({
  Review,
  from,
  books
}: IProps): ReactElement => {
  const path: string = `/review/${Review._id}`;
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <dl className="uk-description-list">
        <dt style={{ fontSize: "25px" }}>
          {" "}
          <span style={{ color: "skyblue" }}>
            {books ? books[0].title + " " : ""}
          </span>
          {Review.title ? (
            Review.title
          ) : (
            <Skeleton_review />
            // <Skeleton variant="text" width={"50%"} height={40} />
          )}{" "}
          <span style={{ color: "#696969	", fontSize: "15px" }}>
            {from === "likes" ? Review.author.name : ""}
          </span>
        </dt>
        <dd style={{ color: "#808080	", fontSize: "20px" }}>
          {" "}
          {Review.contents.length
            ? Review.contents.replace(/<[^>]*>?/gm, "").slice(0, 100) + "..."
            : [<Skeleton variant="text" width={"90%"} height={25} />]}
        </dd>
      </dl>
    </Link>
  );
};

export default ReviewEntry;
