import React, { ReactElement } from "react";
import Paper from "./Paper";
import Image from "./Image";
import "./index.css";

import main_image_one from "../../../Asset/images/main_1.png";
import main_image_two from "../../../Asset/images/main_2.png";

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

const index: number = -1;

const Slider: React.SFC<IProps> = ({ review }: IProps): ReactElement => {
  return (
    <div className="main_slider">
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabIndex={index}
        uk-slider
      >
        <ul className="uk-slider-items uk-grid">
          <li className="uk-width-4-5">
            <div className="uk-panel">
              <img src={main_image_one} alt="" />
              <div className="uk-position-center uk-text-center">
                <h2 uk-slider-parallax="x: 100,-100">{review.title}</h2>
                <p uk-slider-parallax="x: 200,-200">{review.contents}</p>
              </div>
            </div>
          </li>
          <li className="uk-width-4-5">
            <div className="uk-panel">
              <img src={main_image_two} alt="" />
              <div className="uk-position-center uk-text-center">
                <h2 uk-slider-parallax="x: 100,-100">{review.title}</h2>
                <p uk-slider-parallax="x: 200,-200">{review.contents}</p>
              </div>
            </div>
          </li>
        </ul>

        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous
          uk-slider-item="previous"
        ></a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next
          uk-slider-item="next"
        ></a>
      </div>
    </div>
  );
};

export default Slider;
