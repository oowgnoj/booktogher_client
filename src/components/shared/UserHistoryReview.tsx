import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { IReview, IReviews, IReviewBook, IReviewProps } from "./Types";
import { textAlign } from "@material-ui/system";

const UserHistoryReview = ({ reviews, books }: IReviewProps): ReactElement => {
  const list: any =
    reviews.length > 0
      ? reviews.map((review: IReview, index: number) => {
          if (review.published) {
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
                  <div style={{ display: "inline-block", textAlign: "left" }}>
                    <span style={{ fontWeight: "bold", color: "gray" }}>
                      <span
                        style={{
                          color: "skyblue",
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
                        textAlign: "left"
                      }}
                    >
                      {review.contents.replace(/<[^>]*>?/gm, "").slice(0, 150) +
                        "..."}
                    </span>
                  </div>
                </Link>
                <hr />
              </div>
            );
          }
        })
      : "해당 유저가 작성한 서평이 없습니다.";
  return (
    <div>
      <div className="history_reviews" style={{ textAlign: "left" }}>
        {list}
      </div>
    </div>
  );
};

export default UserHistoryReview;
