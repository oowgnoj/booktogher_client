import React, { ReactElement } from "react";
import { IReviews, IReview } from "../shared/Types";
import { fetchBookReview } from "./fetchBookdetail";
import { Link } from 'react-router-dom'
import "./BookDetail.css";

interface IProps {
  id: string;
}

class BookReview extends React.Component<IProps, IReviews> {
  constructor(props: any) {
    super(props);
    this.state = {
      reviews : [{
        _id: "",
        author: {
          _id: "",
          image: "",
          name: "",
          profile: "",
        },
        contents: "",
        likes: [""],
        published: true,
        thumbnail: "",
        title: "",
      }]
    }
  }

  public componentDidMount(): void {
    const setStateReviews = (res: any): void => {
      this.setState({ reviews : res });
    };
    fetchBookReview(setStateReviews, this.props.id);
  }

  public render(): ReactElement {
    const reviewList: any = this.state.reviews.map((review: IReview) => {
      if(review.published !== false){
        return(
          <a href={`/review/${review._id}`} style={{ textDecoration: "none" }}>
            <div className="book_review_list_review">
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
        }   
      })
    return (
      <div className ="book-reveiw">
        <h4>이 책의 서평들</h4>
        <div className ="uk-flex uk-flex-left@s uk-flex-wrap">
          {this.state.reviews.length === 0 ?
          "이 책의 서평이 없습니다." : reviewList}</div>
      </div>
    );
  }
};

export default BookReview;