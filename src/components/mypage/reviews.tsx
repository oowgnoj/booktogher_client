import React, { ReactElement } from "react";
import Entry from "./reviewEntry";
import { IReview } from "./../shared/Types";
import { Link } from "react-router-dom";
interface IProps {
  userReviews: IReview[];
}

const Reviews: React.FC<IProps> = ({ userReviews }: IProps): ReactElement => {
  return (
    <div>
      {userReviews.map((el: IReview) => (
        <Link to={`review/${el._id}`}>
          <Entry Review={el} />
        </Link>
      ))}
    </div>
  );
};

export default Reviews;
