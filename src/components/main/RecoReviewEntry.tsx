import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface IAuthor {
  _id: string;
  image: string;
  name: string;
  profile: string;
}

interface IReview {
  _id: string;
  author: IAuthor;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}

interface IProps {
  review: IReview;
}

const RecoReviewEntry = ({ review }: IProps): ReactElement => {
  const path: string = `/review/${review._id}`;
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <div className="main_review_list_review">
        <div className="uk-child-width-expand@s uk-text-center" uk-grid>
          <div>
            <div
              className="uk-card uk-card-hover uk-card-body"
              style={{ height: "300px" }}
            >
              <h3 className="uk-card-title">
                <span style={{ color: "skyblue", fontSize: "80%" }}>서평</span>{" "}
                {review.title}
              </h3>
              <p style={{ color: "gray" }}>{review.author.name}</p>
              <p style={{ color: "gray" }}>
                {review.contents.length > 120
                  ? review.contents.replace(/<[^>]*>?/gm, "").slice(0, 100) +
                    "..."
                  : review.contents.replace(/<[^>]*>?/gm, "")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecoReviewEntry;

/*

    <div className="uk-card uk-card-default uk-card-small uk-card-body">
      <h3 className="uk-card-title">서평 {review.title}</h3>
      <p>{review.author.name}</p>
      <p>{review.contents.replace(/<[^>]*>?/gm, "")}</p>
      <p>보러가기</p>
    </div>


*/
