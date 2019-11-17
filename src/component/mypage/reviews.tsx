import React from "react";
import Entry from "./reviewEntry";

interface IAuthor {
  id: string;
  image: string;
  name: string;
  profile: string;
}

interface IUserReview {
  id: string;
  author: IAuthor;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}

interface Props {
  userReviews: IUserReview[];
}

const Reviews: React.FC<Props> = ({ userReviews }) => {
  console.log(userReviews);
  return (
    <div>
      {userReviews.map(el => (
        <Entry reviewEntry={el} />
      ))}
    </div>
  );
};

export default Reviews;
