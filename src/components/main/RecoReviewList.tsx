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
  const publishedReviews: IReview[] = reviews.filter(
    (review: IReview) => review.published
  );
  const reviewList: React.ReactElement[] = publishedReviews.map(
    (review: IReview, index: number) => (
      <RecoReviewEntry review={review} key={index} />
    )
  );

  console.log("publishedReviews ? ", publishedReviews);

  return (
    <div className="main_review_list">
      <div className="uk-child-width-1-2@s  uk-flex uk-flex-center" uk-grid>
        {reviewList.slice(0, 4)}
      </div>
    </div>
  );
};

export default RecoReviewList;
