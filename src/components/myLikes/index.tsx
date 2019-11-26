import React, { ReactElement, useState, useEffect } from "react";
import NavBar from "./navBar";
import ReviewEntry from "./../shared/reviewEntry";
import CurationEntry from "./../shared/curationEntry";
import { fakeReviews, fakeCuration } from "./../../fakeData/fake";
import { ICuration, IReview } from "./../shared/Types";
import { fetchCurationLikes, fetchReviewLikes } from "./../shared/Fetch";

const MyLikes: React.FC = (): ReactElement => {
  const [navBar, setNavBar] = useState<string>("review");
  const [myCurations, setMyCuration] = useState<IReview[]>(fakeReviews);
  const [myReviews, setMyReview] = useState<ICuration[]>(fakeCuration);

  const handleActive = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void => {
    setNavBar(e.currentTarget.id);
  };
  useEffect(() => {
    fetchReviewLikes(setMyReview);
    fetchCurationLikes(setMyCuration);
  }, []);
  return (
    <div className="wrapper">
      <NavBar handleActive={handleActive} />
      {navBar === "review"
        ? fakeReviews.map((el: IReview) => {
            return <ReviewEntry Review={el} />;
          })
        : fakeCuration.map((el: ICuration) => {
            return <CurationEntry curation={el} />;
          })}
    </div>
  );
};

export default MyLikes;
