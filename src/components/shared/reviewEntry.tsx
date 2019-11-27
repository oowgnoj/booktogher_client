import React, { ReactElement } from "react";
import "../../../node_modules/uikit/dist/css/uikit.css";
import { IReview } from "./Types";
import { Link } from "react-router-dom";

interface IProps {
  Review: IReview;
}
const ReviewEntry: React.FC<IProps> = ({ Review }: IProps): ReactElement => {
  const path: string = `/review/${Review._id}`;
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <dl
        className="uk-description-list"
        style={{
          borderBottom: "solid",
          borderColor: "#D3D3D3",
          borderBottomWidth: "1px"
        }}
      >
        <dt style={{ fontSize: "25px" }}>
          {" "}
          {Review.title}{" "}
          <span style={{ color: "#696969	", fontSize: "15px" }}>
            {Review.author.name}
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
