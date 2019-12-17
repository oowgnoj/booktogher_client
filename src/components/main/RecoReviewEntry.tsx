import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { textAlign } from "@material-ui/system";

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
            <div className="uk-card" style={{ height: "300px" }}>
              <h3
                className="uk-card-title"
                style={{ fontSize: "1.2em", textAlign: "left" }}
              >
                <span
                  style={{
                    color: "#5b88b2",
                    fontSize: "60%",
                    marginRight: "5px"
                  }}
                >
                  서평
                </span>{" "}
                {review.title}
              </h3>

              <p
                style={{
                  color: "gray",
                  fontSize: "0.9em",
                  textAlign: "justify",
                  lineHeight: "1.6",
                  marginTop: "30px"
                }}
              >
                {review.contents.length > 120
                  ? review.contents
                      .replace(/<[^>]*>?/gm, "")
                      .replace(/&nbsp;/g, " ")
                      .slice(0, 100) + "..."
                  : review.contents
                      .replace(/<[^>]*>?/gm, "")
                      .replace(/&nbsp;/g, " ")}
              </p>
              <p
                style={{
                  color: "gray",
                  textAlign: "right",
                  marginTop: "-10px",
                  marginBottom: "-10px",
                  fontSize: "0.7em",
                  fontStyle: "italic"
                }}
              >
                by {review.author.name}
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
