import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { IBooks, IReviewWithBooks, IAuthor, IBook } from "../shared/Types";
import { fetchReviewSearch } from "../shared/Fetch";
import "./SearchBook.css";
import { reviews } from "../shared/InitialStates";

export interface IReviewWithBook {
  _id: string;
  author: IAuthor;
  title: string;
  books: IBook[];
  contents: string;
  thumbnail: string;
  published: boolean;
  likes: string[];
}

interface IState {
  reviews: IReviewWithBook[];
  searchTitle: string;
}

interface IProps {
  reviews: IReviewWithBook[];
  searchTitle: string;
}

class SearchReviews extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      searchTitle: this.props.searchTitle
    };
  }

  public componentDidUpdate(prevProps: any): void {
    if (this.props.reviews !== prevProps.reviews) {
      this.setState({ reviews: this.props.reviews });
    }
  }

  public render(): ReactElement {
    const searchReviewList: any = this.props.reviews.map(
      (review: IReviewWithBook) => {
        if (review.published) {
          return (
            <div key={review._id} className="review-detail">
              <Link to={`/review/${review._id}`}>
                <div style={{ display: "inline-block" }}>
                  <img
                    src={
                      review.author.image
                        ? review.author.image
                        : "https://icons-for-free.com/iconfiles/png/128/anonymous+app+contacts+open+line+profile+user+icon-1320183042822068474.png"
                    }
                    alt={review.title}
                    className="writecuration_reviewentry_cropped"
                  />
                  <div className="middle_review">
                    <span
                      uk-icon="icon: close; ratio: 1.7"
                      className="text"
                    ></span>
                  </div>
                  <div
                    className="reviewentry_author"
                    style={{
                      textAlign: "center",
                      marginTop: "0px",
                      marginBottom: "10px",
                      fontFamily: "Nanum Myeongjo, serif",
                      fontSize: "0.8em",
                      textDecoration: "none",
                      color: "gray"
                    }}
                  >
                    {review.author.name}
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-block",
                    textDecoration: "none",
                    color: "gray",
                    position: "absolute",
                    marginLeft: "2%",
                    marginTop: "10px",
                    width: "50%"
                  }}
                >
                  <div className="">
                    <p
                      style={{
                        display: "inline",
                        marginRight: "3%",
                        color: "skyblue",
                        fontSize: "1.2em"
                      }}
                    >
                      {review.books.length > 1
                        ? review.books[0].title + " 외"
                        : review.books[0].title}
                    </p>
                    <p
                      style={{
                        display: "inline",
                        fontSize: "1.2em",
                        width: "80%"
                      }}
                    >
                      {review.title}
                    </p>
                  </div>
                  <div
                    className="reviewentry_contents"
                    style={{ fontSize: "0.9em" }}
                  >
                    <p>
                      {review.contents.length > 120
                        ? review.contents
                            .replace(/<[^>]*>?/gm, "")
                            .replace("&nbsp;", "")
                            .slice(0, 120) + "..."
                        : review.contents
                            .replace(/<[^>]*>?/gm, "")
                            .replace("&nbsp;", "")}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        }
      }
    );
    return (
      <div className="search-book">
        <div className="search-result">
          {this.props.reviews.length === 0 ? (
            <div>서평 검색 결과가 없습니다.</div>
          ) : (
            searchReviewList
          )}
        </div>
      </div>
    );
  }
}
export default SearchReviews;
