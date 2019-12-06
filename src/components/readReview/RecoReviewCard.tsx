import React, { ReactElement } from "react";
import "./RecoReviewCard.css";
import { Link } from "react-router-dom";
import { reviews } from "../shared/InitialStates";

const RecoReviewCard = ({ review }: any): ReactElement => {
  return (

    <a href={`/review/${review._id}`} style={{ textDecoration: "none" }}>
      <div className="review_review_list_review">
          <div>
            <div 
              className="uk-card  uk-card-body" 
              style={{ height: "200px", margin:"20px" }}>
              <h3
                className="uk-card-title"
                style={{ fontSize: "1.1em", textAlign: "left" }}
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
                  textAlign: "justify"
                }}
              >
                {review.contents.length > 80
                  ? review.contents.replace(/<[^>]*>?/gm, "").slice(0, 80) +
                    "..."
                  : review.contents.replace(/<[^>]*>?/gm, "")}
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
    </a>
  ) 

};

export default RecoReviewCard;
