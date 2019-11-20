import React, { ReactElement } from "react";
import Entry from "./reviewEntry";
import { IReview } from "./../shared/Types";

interface IProps {
  userReviews: IReview[];
}

const Reviews: React.FC<IProps> = ({ userReviews }: IProps): ReactElement => {
  return (
    <div>
      {userReviews.map((el: IReview) => (
        <Entry Review={el} />
      ))}
    </div>
  );
};

export default Reviews;
