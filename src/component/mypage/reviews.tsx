import React, { ReactElement } from "react";
import Entry from "./reviewEntry";

interface IauthorInfo {
  id: number;
  image: string;
  name: string;
  profile: string;
}

interface IuserReview {
  id: number;
  author: IauthorInfo;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}

function Review(props: IuserReview[]): ReactElement {
  console.log(props);
  return <div>'hello'</div>;
}

export default Review;
