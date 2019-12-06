import React, { ReactElement, useState, useEffect, useRef } from "react";
import NavBar from "./navBar";
import ReviewEntry from "./../shared/reviewEntry";
import CurationEntry from "./../shared/curationEntry";
import { fakeReviews, fakeCuration } from "./../../fakeData/fake";
import { ICuration, IReview, IReviewBook } from "./../shared/Types";
import { fetchGetReviewLikes, fetchCurationLikes } from "./../shared/Fetch";
import { reviewsBooks, reviews, curations } from "./../shared/InitialStates";
import { connect } from "react-redux";
import "./index.css";

const MyLikes: React.FC = (props: any): ReactElement => {
  const [navBar, setNavBar] = useState<string>("review");
  const [myCuration, setCuration] = useState<ICuration[]>(curations);
  const [myReview, setReview] = useState<IReview[]>(reviews);
  const [reviewBooks, setReviewBooks] = useState<IReviewBook[][]>(reviewsBooks);
  const [userID, setUserID] = useState<string>("");

  useEffect(() => {
    setUserID(props.user._id);
  });
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      fetchGetReviewLikes(setReview, setReviewBooks);
    } else {
      didMountRef.current = true;
    }
  }, [userID]);

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
      {console.log(props.user)}
      <h2 style={{ fontFamily: "Nanum Myeongjo, serif", fontWeight: "bold" }}>
        나의 좋아요
      </h2>
      <hr />
      <NavBar handleActive={handleActive} />
      {navBar === "review"
        ? myReview.map((el: IReview, index: number) => {
            return (
              <ReviewEntry
                Review={el}
                from={"likes"}
                books={reviewBooks[index]}
              />
            );
          })
        : myCuration.map((el: ICuration) => {
            return <CurationEntry curation={el} from={"likes"} />;
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
