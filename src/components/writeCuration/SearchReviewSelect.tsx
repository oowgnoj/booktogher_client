import React, { ReactElement } from "react";
import { IBooks, IReviewWithBooks } from "../shared/Types";
import "../writeReview/Modal.scss";

interface IProps {
  reviews: IReviewWithBooks[];
  clicked: any;
}

class SearchReviewSelect extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
    }
  }
  public render(): ReactElement {
    const MyReviewList: ReactElement[] = this.props.reviews.map(
      (info: IReviewWithBooks, index:number) => {
        return (
          <div className="book-select" key={index} onClick={e => this.props.clicked(e)}>
            <div key ={info._id} className="review-detail">
              <h5>{info.title}</h5>
              <div>{info.author.name}</div>
              <div>{info.contents.replace(/<[^>]*>?/gm, '')}</div>    
            </div>
          </div>
        );
      }
    );
    return (
      <div>
        <div className="content">{MyReviewList}</div>
      </div>
    );
  }
}

export default SearchReviewSelect;