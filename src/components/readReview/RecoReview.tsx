import React, { ReactElement } from "react";
import { IReviewState, IReview } from "./reviewInterface";
import RecoReviewCard from "./RecoReviewCard";
import "./RecoReview.css";
import { fetchBookReviewList } from "./fetchReview";

interface IProps {
  bookId: string[];
  reviewId : string;
}

class RecoReview extends React.Component<IProps, IReviewState> {
  constructor(props: any) {
    super(props);
    this.state = {
      reviewList: [
        {
          _id: "",
          author: {
            _id: "",
            image: "",
            name: "",
            profile: ""
          },
          contents: "",
          likes: [],
          published: true,
          thumbnail: "",
          title: ""
        }
      ],
    };
  }

  public componentDidMount(): void {
   
      const setStateReviewList = (res: any): void => {
        this.setState({ reviewList: res });
      };
      if(this.props.bookId[0] !== ""){
        fetchBookReviewList(setStateReviewList, this.props.bookId[0]);
      }
  }

  public componentDidUpdate(prevProps: any): void {
    if (this.props.bookId !== prevProps.bookId) {
      const setStateReviewList = (res: any): void => {
        this.setState({ reviewList: res });
      };
      if(this.props.bookId[0] !== ""){
        fetchBookReviewList(setStateReviewList, this.props.bookId[0]);
      }
    }
  }
  
  public render(): ReactElement {
    console.log(this.props.bookId[0])
    const reviewCard: any = this.state.reviewList.map((info: IReview) => {
      if(this.props.reviewId !== info._id && info.published !== false){
        return (
          <div key ={info._id}>
             <RecoReviewCard review={info}/>
          </div>       
        )
      }      
    })

    return (
      <div className="recoReview-area">
        <h4>이 책의 다른 서평들</h4>
        <div className="uk-flex uk-flex-left@s uk-flex-wrap recoReview-list" uk-grid>
          {this.state.reviewList.length === 1 ? 
          "이 책의 서평이 없습니다.": reviewCard} </div>
      </div>
    );
  }
}

export default RecoReview;
