import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { IReview, IReviews, IReviewBook, IReviewProps } from "./Types";

const UserHistoryReview = ({ reviews, books }: IReviewProps): ReactElement => {
  const list: any = reviews.map((review: IReview, index: number) => {
    if (review.published) {
      console.log("books ?", books);
      console.log("books[index] ?", books[index]);
      return (
        <div className="history_reviews_review">
          <Link
            to={`/review/${review._id}`}
            style={{ textDecoration: "none", color: "#919191" }}
          >
            <div style={{ display: "inline-block" }}>
              {/*  <img
                src={
                  books[index]
                    ? books[index][0]
                      ? books[index][0].thumbnail
                      : "https://img.icons8.com/cute-clipart/2x/book.png"
                    : "https://img.icons8.com/cute-clipart/2x/book.png"
                }
                alt={"책표지"}
                style={{ width: "40px", paddingTop: "0px" }}
              /> */}
            </div>
            <div style={{ display: "inline-block" }}>
              <span style={{ fontWeight: "bold", color: "gray" }}>
                <span
                  style={{
                    color: "skyblue",
                    marginLeft: "15px",
                    marginRight: "5px"
                  }}
                >
                  {books[index]
                    ? books[index]
                        .map((book: IReviewBook) => book.title)
                        .join(", ")
                    : null}
                </span>
                <span>{review.title}</span>
              </span>
              <span
                style={{
                  fontSize: "13px",
                  display: "block",
                  marginLeft: "15px"
                }}
              >
                {review.contents.replace(/<[^>]*>?/gm, "").slice(0, 300) +
                  "..."}
              </span>
            </div>
          </Link>
          <hr />
        </div>
      );
    }
  });
  return (
    <div>
      <div className="history_reviews">{list}</div>
    </div>
  );
};

export default UserHistoryReview;
