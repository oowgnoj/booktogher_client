import React, { ReactElement, useState } from "react";
import NavBar from "./navBar";
import ReviewEntry from "./../shared/reviewEntry";
import CurationEntry from "./../shared/curationEntry";
import { fakeReviews, fakeCuration } from "./../../fakeData/fake";
import { ICuration, IReview } from "./../shared/Types";

const MyLikes: React.FC = (): ReactElement => {
  const [navBar, setNavBar] = useState<string>("review");

  const handleActive = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void => {
    setNavBar(e.currentTarget.id);
  };

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
