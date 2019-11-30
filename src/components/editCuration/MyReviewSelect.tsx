import React, { ReactElement } from "react";
import {
  IBooks,
  IReview,
  IReviewBook,
  IReviewSearchBook
} from "../shared/Types";
import "./ReviewModal.scss";

interface IProps {
  reviews: IReview[];
  books: IReviewSearchBook[][];
  clicked: any;
}

class MyReviewSelect extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  public render(): ReactElement {
    const MyReviewList: ReactElement[] = this.props.reviews.map(
      (info: IReview, index: number) => {
        return (
          <div
            className="book-select"
            key={index}
            id={`${index}`}
            onClick={e => this.props.clicked(e)}
            style={{
              width: "80%",
              height: "auto",
              paddingTop: "0px",
              margin: "0px 10%"
            }}
          >
            <ul style={{ listStyle: "none" }}>
              <li>
                <article>
                  <header style={{ display: "flex" }}>
                    <span
                      style={{
                        display: "inline-block",
                        marginRight: "30px"
                      }}
                    >
                      <img
                        className="editcuration_reviewentry_cropped"
                        src={
                          info.author.image
                            ? info.author.image
                            : "https://icons-for-free.com/iconfiles/png/128/anonymous+app+contacts+open+line+profile+user+icon-1320183042822068474.png"
                        }
                        alt=""
                      />
                      <div
                        style={{
                          textAlign: "center",
                          marginTop: "5px",
                          marginBottom: "10px",
                          fontFamily: "Nanum Myeongjo, serif",
                          fontSize: "0.8em",
                          textDecoration: "none",
                          color: "gray"
                        }}
                      >
                        {info.author.name}
                      </div>
                    </span>
                    <span
                      style={{
                        display: "inline-block",
                        textDecoration: "none",
                        color: "gray",
                        marginLeft: "2%",
                        marginTop: "20px",
                        width: "60%"
                      }}
                    >
                      <div
                        className="reviewentry_title"
                        style={{
                          fontSize: "30px",
                          width: "100%"
                        }}
                      >
                        <p
                          style={{
                            display: "inline",
                            marginRight: "3%",
                            color: "skyblue",
                            fontSize: "20px"
                          }}
                        >
                          {this.props.books[index].length > 0
                            ? this.props.books[index].length > 1
                              ? this.props.books[index][0].title + " 외"
                              : this.props.books[index][0].title
                            : null}
                        </p>
                        <p style={{ display: "inline", fontSize: "20px" }}>
                          {info.title}
                        </p>
                        <div
                          style={{
                            fontSize: "0.5em",
                            marginTop: "5%",
                            width: "100%"
                          }}
                        >
                          <p>
                            {info.contents.length > 120
                              ? info.contents
                                  .replace(/<[^>]*>?/gm, "")
                                  .slice(0, 120) + "..."
                              : info.contents.replace(/<[^>]*>?/gm, "")}
                          </p>
                        </div>
                      </div>
                    </span>
                  </header>
                </article>
                <hr
                  style={{
                    color: "gray",
                    width: "90%",
                    height: 1
                  }}
                />
              </li>
            </ul>
          </div>
        );
      }
    );
    return (
      <div>
        <ul className="content">{MyReviewList}</ul>
      </div>
    );
  }
}

export default MyReviewSelect;
