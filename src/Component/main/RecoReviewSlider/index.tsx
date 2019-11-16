import React, { ReactElement } from "react";
import Paper from "./Paper";
import Image from "./Image";
import "./index.css";
/* 
import main_image_one from "../../../Asset/images/main_1.png";
import main_image_two from "../../../Asset/images/main_2.png"; */

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

const Slider: React.SFC<IProps> = ({ review }: IProps): ReactElement => {
  return (
    <div className="main_slider">
      <Image />
      <Paper review={review} />
    </div>
  );
};

export default Slider;
