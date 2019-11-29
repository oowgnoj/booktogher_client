import React, { ReactElement } from "react";
import "./RecoReviewCard.css";
import { Link } from "react-router-dom";

const RecoReviewCard = ({ review }: any): ReactElement => {
  return (

    <a href={`/review/${review._id}`} style={{ textDecoration: "none" }}>
      <div className="review_review_list_review">
        <div className="" uk-grid>
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
      </div>
    </a>
    // <div className="recoReview-card">
    //     <div className="recoReview-header">
    //         <div className="recoReview-img">
    //             <img 
    //               className="uk-border-circle" 
    //               width="40" 
    //               height="40" 
    //               src={review.author.image}
    //               alt={review.title}/>
    //         </div>
    //         <div className="recoReview-body">
    //             <h5 className="recoReview-title">{review.title}</h5>  
    //         </div>
    //     </div>
    //     <div className="recoReview-footer">
    //     <Link to={`/review/${review._id}`}><div className="uk-button uk-button-text">Read more</div></Link>
    //     </div>
    // </div>
  ) 

};

export default RecoReviewCard;
