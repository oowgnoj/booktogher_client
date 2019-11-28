import React, { ReactElement } from "react";
import { Link } from "react-router-dom"
import { IBooks, IReviewWithBooks } from "../shared/Types";
import { fetchReviewSearch } from "../shared/Fetch";
import "./SearchBook.css"

interface IState {
  reviews: IReviewWithBooks[];
  searchTitle : string;
}

interface IProps {
  reviews: IReviewWithBooks[];
  searchTitle: string;
}

class SearchReviews extends React.Component<IProps, IState> {
  constructor(props:IProps) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      searchTitle : this.props.searchTitle
    }
  }

  public componentDidUpdate(prevProps: any): void {
    if (this.props.reviews !== prevProps.reviews) {
      this.setState({ reviews: this.props.reviews }); 
    }
  }

  public render(): ReactElement {
    const searchReviewList: ReactElement[] = this.props.reviews.map(
      (info: IReviewWithBooks) => {
        return (
          <div key ={info._id} className="review-detail">
            <Link to = {`/review/${info._id}`}>
              <h5>{info.title}</h5>
              <div>{info.author.name}</div>
              <div>{info.contents.replace(/<[^>]*>?/gm, '')}</div>
            </Link>     
        </div>
        );
      }
    );
    return (
      <div className = "search-book">
        <div className="search-result">
          {this.props.reviews.length === 0 ? 
          <div>서평 검색 결과가 없습니다.</div> :
          searchReviewList}
        </div>
      </div>
    )
  }
}
export default SearchReviews;