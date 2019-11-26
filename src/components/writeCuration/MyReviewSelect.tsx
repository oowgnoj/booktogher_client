import React, { ReactElement } from "react";
import { IBooks, IReview } from "../shared/Types";
import "./ReviewModal.scss";

interface IProps {
  reviews: IReview[];
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
            style={{ marginLeft: "30px", marginBottom: "0px" }}
          >
            <li>
              <article>
                <header style={{ display: "flex" }}>
                  <div>
                    <img
                      className="uk-comment-avatar"
                      src={
                        info.author.image
                          ? info.author.image
                          : "https://icons-for-free.com/iconfiles/png/128/anonymous+app+contacts+open+line+profile+user+icon-1320183042822068474.png"
                      }
                      width="80"
                      height="80"
                      alt=""
                      style={{ marginRight: "30px" }}
                    />
                  </div>

                  <div>
                    <h4
                      className="uk-comment-title uk-margin-remove"
                      style={{ paddingTop: "15px" }}
                    >
                      {info.title}
                    </h4>
                    <p className="uk-comment-meta uk-margin-remove-top">
                      {info.author.name}
                    </p>
                  </div>
                </header>
                <div style={{ marginTop: "20px" }}>
                  <p>{info.contents.replace(/<[^>]*>?/gm, "")}</p>
                </div>
              </article>
            </li>
            <hr
              style={{
                color: "gray",

                height: 1
              }}
            />
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
