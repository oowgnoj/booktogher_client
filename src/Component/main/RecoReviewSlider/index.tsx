import React, { ReactElement } from "react";
// import Paper from "./Paper";
// import Image from "./Image";

// import main_image_one from "../../../Asset/images/main_1.png";
// import main_image_two from "../../../Asset/images/main_2.png";

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
      <div className="uk-section-default">
        <div
          className="uk-section uk-light uk-background-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1462&q=80)"
          }}
        >
          <div className="uk-container">
            <h3>{review.title}</h3>
            <div className="uk-grid-match uk-child-width-1-3@m" uk-grid>
              <div>
                <p>{review.author.name}</p>
              </div>
              <div>
                <p>{review.contents.replace(/<[^>]*>?/gm, "")}</p>
              </div>
              <div>
                <p>혜경님 슬라이더 좀 만들어주세요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

/*

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
                <p uk-slider-parallax="x: 200,-200">
                  {review.contents.replace(/<[^>]*>?/gm, "")}
                </p>
              </div>
            </div>
          </li>
          <li className="uk-width-4-5">
            <div className="uk-panel">
              <img src={main_image_two} alt="" />
              <div className="uk-position-center uk-text-center">
                <h2 uk-slider-parallax="x: 100,-100">{review.title}</h2>
                <p uk-slider-parallax="x: 200,-200">
                  {review.contents.replace(/<[^>]*>?/gm, "")}
                </p>
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

*/
