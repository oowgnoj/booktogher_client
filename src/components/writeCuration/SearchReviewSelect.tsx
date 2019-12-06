import React, { ReactElement } from "react";
import { IBooks, IReview, IReviewSearchWithBooks } from "../shared/Types";
import "./ReviewModal.scss";

interface IProps {
  reviews: IReviewSearchWithBooks[];
  clicked: any;
}

class SearchReviewSelect extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public plusClick = (e: any) => {
    const check = e.currentTarget.querySelector(".select-plus");

    if (check.style.opacity === 1) {
      check.style.opacity = 0.4;
    } else {
      check.style.opacity = 1;
    }
  };

  public render(): ReactElement {
    const MyReviewList: ReactElement[] = this.props.reviews.map(
      (info: IReviewSearchWithBooks, index: number) => {
        return (
          <div
            className="book-select"
            key={index}
            id={`${index}`}
            onClick={e => {
              this.props.clicked(e);
              this.plusClick(e);
            }}
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
                        className="writecuration_reviewentry_cropped"
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
                          {info.books.length > 1
                            ? info.books[0].title + " 외"
                            : info.books[0].title}
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
                                  .replace(/&nbsp;/g, " ")
                                  .slice(0, 120) + "..."
                              : info.contents
                                  .replace(/<[^>]*>?/gm, "")
                                  .replace(/&nbsp;/g, " ")}
                          </p>
                        </div>
                      </div>
                    </span>
                    <span
                      className="select-plus"
                      uk-icon="icon: check; ratio: 1.5"
                      /* onClick={this.plusClick} */
                      style={{
                        paddingLeft: "50px",
                        paddingTop: "25px",
                        opacity: "0.4"
                      }}
                    ></span>
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

export default SearchReviewSelect;
