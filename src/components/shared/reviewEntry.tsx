import React, { ReactElement } from "react";
import "../../../node_modules/uikit/dist/css/uikit.css";
import { IReview, IReviewBook } from "./Types";
import { Link } from "react-router-dom";
import "./curationEntry.css";

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
          <span style={{ color: "blue" }}>{books ? books[0].title : ""}</span>
          {Review.title}{" "}
          <span style={{ color: "#696969	", fontSize: "15px" }}>
            {from === "likes" ? Review.author.name : ""}
          </span>
        </dt>
        <dd style={{ color: "#808080	", fontSize: "20px" }}>
          {" "}
          {Review.contents.length > 120
            ? Review.contents.replace(/<[^>]*>?/gm, "").slice(0, 100) + "..."
            : Review.contents.replace(/<[^>]*>?/gm, "")}{" "}
        </dd>
      </dl>
    </Link>
  );
};

export default ReviewEntry;
