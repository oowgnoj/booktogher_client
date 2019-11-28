import React, { ReactElement, useState, useEffect } from "react";
import NavBar from "./navBar";
import ReviewEntry from "./../shared/reviewEntry";
import CurationEntry from "./../shared/curationEntry";
import { fakeReviews, fakeCuration } from "./../../fakeData/fake";
import { ICuration, IReview } from "./../shared/Types";
import { fetchReviewLikes, fetchCurationLikes } from "./../shared/Fetch";
import { connect } from "react-redux";
import "./index.css";

const MyLikes: React.FC = (props: any): ReactElement => {
  const [navBar, setNavBar] = useState<string>("review");
  const [myCuration, setCuration] = useState<ICuration[]>(fakeCuration);
  const [myReview, setReview] = useState<IReview[]>(fakeReviews);

  useEffect(() => {
    fetchReviewLikes(setReview);
  }, []);

  useEffect(() => {
    fetchCurationLikes(setCuration);
  }, []);

  const handleActive = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void => {
    setNavBar(e.currentTarget.id);
  };

  return (
    <div className="wrapper">
      <h2 style={{ fontWeight: "bold", margin: "0" }}>my likes</h2>
      <hr />
      <NavBar handleActive={handleActive} />
      {navBar === "review"
        ? myReview.map((el: IReview) => {
            console.log("review");
            return <ReviewEntry Review={el} />;
          })
        : myCuration.map((el: ICuration) => {
            console.log("curation");
            return <CurationEntry curation={el} />;
          })}
    </div>
  );
};

function mapStateToProps(state: any): any {
  return {
    user: state.user.User
  };
}

export default connect(mapStateToProps)(MyLikes);
