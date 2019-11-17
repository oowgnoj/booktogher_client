import React, { ReactElement } from "react";

interface IAuthor {
  id: string;
  image: string;
  name: string;
  profile: string;
}

interface IReview {
  id: string;
  author: IAuthor;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}

interface IProps {
  review: IReview;
}

const RecoReviewEntry = ({ review }: IProps): ReactElement => (
  <div className="main_review_list_review">
    <div className="uk-card uk-card-default uk-card-small uk-card-body">
      <h3 className="uk-card-title">서평 {review.title}</h3>
      <p>{review.author.name}</p>
      <p>{review.contents.replace(/<[^>]*>?/gm, "")}</p>
      <p>보러가기</p>
    </div>
  </div>
);

export default RecoReviewEntry;
