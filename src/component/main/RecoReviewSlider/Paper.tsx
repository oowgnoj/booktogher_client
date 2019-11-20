import React, { ReactElement } from "react";
// import Typography from "./Typography";

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

const Paper: React.SFC<IProps> = ({ review }: IProps): ReactElement => {
  return (
    <div className="main_slider_paper">
      <div>{review.title}</div>
      <div>{review.author.name}</div>
      <div dangerouslySetInnerHTML={{ __html: review.contents }}></div>
    </div>
  );
};

export default Paper;
