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
    const reviewList: any = this.state.reviews.map((info: IReview) => {
      if(info.published !== false){
        return(
          <div key ={info._id} className="review-detail">
            <Link to={`/review/${info._id}`}><h4>{info.title}</h4></Link>
            <div>{info.author.name}</div>
            <div>{info.contents.replace(/<[^>]*>?/gm, '')}</div>        
          </div>
          ) 
        }   
      })
    return (
      <div className ="book-reveiw">
        <h4>이 책의 서평들</h4>
        <div>{this.state.reviews.length === 0 ?
        "이 책의 서평이 없습니다." : reviewList}</div>
      </div>
    );
  }
};

export default BookReview;