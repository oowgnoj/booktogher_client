import React, { ReactElement, useEffect, useState } from "react";
import { fakeReviews } from "./../../fakeData/fake";

import Entry from "./../shared/reviewEntry";
import { IReview } from "./../shared/Types";
import { Link } from "react-router-dom";
import { fetchReview } from "./../shared/Fetch";
import "./index.css";

interface IProps {
  userReviews: IReview[];
}

const Reviews: React.FC = (): ReactElement => {
  // const [myReview, setReview] = useState<IReview[]>(fakeReviews);
  // useEffect(() => {
  //   fetchReview(setReview);
  // }, []);
  return (
    <div className="wrapper">
      {fakeReviews.map((el: IReview) => (
        <Entry Review={el} />
      ))}
    </div>
  );
};

export default Reviews;
