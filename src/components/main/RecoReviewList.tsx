import React, { ReactElement } from "react";
import RecoReviewEntry from "./RecoReviewEntry";

interface IAuthor {
  _id: string;
  image: string;
  name: string;
  profile: string;
}

interface IReview {
  _id: string;
  author: IAuthor;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}

interface IProps {
  reviews: IReview[];
}

const RecoReviewList: React.SFC<IProps> = ({
  reviews
}: IProps): ReactElement => {
  const reviewList: React.ReactElement[] = reviews.map(
    (review: IReview, index: number) => (
      <li>
        <RecoReviewEntry review={review} key={index} />
      </li>     
    )
  );

  return (
    <div className="main_review_list">
      <div className="uk-slider">
        <div className="uk-position-relative ">
            <div 
              className="uk-slider-container uk-visible-toggle" 
              tabIndex={-1} 
              uk-slider="autoplay: true; autoplay-interval: 4000">
                <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                  {reviewList.slice(0, 8)}
                </ul>
                <a
                  className="uk-position-center-left-out uk-position-small"
                  href="#"
                  uk-slidenav-previous uk-slider-item="previous"
                >
                  <span uk-icon="chevron-left" style={{ color: "gray", paddingBottom: "100px"}}></span>
                </a>
                  <a
                  className="uk-position-center-right-out uk-position-small"
                  href="#"  
                  uk-slidenav-next uk-slider-item="next"
                >
                  <span uk-icon="chevron-right" style={{ color: "gray", paddingBottom: "100px" }}></span>
                </a>
            </div>           
        </div>
        </div>
      {/* <div
        className="slider_text uk-position-relative uk-visible-toggle"
        tabIndex={-1}
        uk-slideshow="autoplay: true; animation: fade"
        style ={{padding:"0"}}
      >
        <ul className="uk-slideshow-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
        {reviewList.slice(0, 5)}
        </ul>
        <a
          className="uk-position-center-left-out uk-position-small uk-hidden-hover "
          href="#"
          uk-slidenav-previous
          uk-slideshow-item="previous"
        >
          <span uk-icon="chevron-left" style={{ color: "gray", paddingBottom: "100px"}}></span>
        </a>
        <a
          className="uk-position-center-right-out uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next
          uk-slideshow-item="next"
        >
          <span uk-icon="chevron-right" style={{ color: "gray", paddingBottom: "100px" }}></span>
        </a>
      </div> */}
    </div>
  );
};

export default RecoReviewList;
