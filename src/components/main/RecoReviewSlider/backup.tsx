import React, { ReactElement } from "react";
import "./index.css";
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
  review: IReview[];
}

const Slider: React.SFC<IProps> = ({ review }: IProps): ReactElement => {
  return (
    <div className="main_slider">
      <img
        src="https://images.unsplash.com/photo-1535954741680-a2e24eb05418?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
        alt=""
        className="slider_img"
      />
      <div
        className="slider_text uk-position-relative uk-visible-toggle"
        tabIndex={-1}
        uk-slideshow="autoplay: true; animation: pull"
      >
        <ul
          className="uk-slideshow-items"
          uk-height-viewport="offset-top: true; offset-bottom: 30"
        >
          <li>
            <p className="slider_text_author">
              서로모임의 {review[0] ? review[0].author.name : "정혜경"} 님께서
              작성해주신 서평입니다.
            </p>
            <h3 className="slider_text_title">
              {review[0] ? review[0].title : "혜경님 서평 제목"}
            </h3>

            <p className="slider_text_contents">
              {review[0]
                ? review[0].contents.replace(/<[^>]*>?/gm, "")
                : "서평 본문"}
            </p>
          </li>
          <li>
            <p className="slider_text_author">
              서로모임의 {review[1] ? review[1].author.name : "정승권"} 님께서
              작성해주신 서평입니다.
            </p>
            <h3 className="slider_text_title">
              {review[1] ? review[1].title : "승권님 서평 제목"}
            </h3>

            <p className="slider_text_contents">
              {review[1]
                ? review[1].contents.replace(/<[^>]*>?/gm, "")
                : "서평 본문"}
            </p>
          </li>
          <li>
            <p className="slider_text_author">
              서로모임의 {review[2] ? review[2].author.name : "박종우"} 님께서
              작성해주신 서평입니다.
            </p>
            <h3 className="slider_text_title">
              {review[2] ? review[2].title : "종우님 서평 제목"}
            </h3>

            <p className="slider_text_contents">
              {review[2]
                ? review[2].contents.replace(/<[^>]*>?/gm, "")
                : "서평 본문"}
            </p>
          </li>
        </ul>

        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous
          uk-slideshow-item="previous"
        >
          <span uk-icon="chevron-left"></span>
        </a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next
          uk-slideshow-item="next"
        >
          <span uk-icon="chevron-right"></span>
        </a>
      </div>
      {/*  <div className="uk-card uk-card-body">
        <p>
          서로모임의 {review ? review.author.name : "작가 서명"} 님께서
          작성해주신 서평입니다.
        </p>
        <h3 className="uk-card-title">{review ? review.title : "서평 제목"}</h3>

        <p style={{ color: "gray", fontSize: "25px" }}>
          {review ? review.contents.replace(/<[^>]*>?/gm, "") : "서평 본문"}
        </p>
      </div> */}

      {/*   <div className="main_slider_image">
        <img
          src="https://images.unsplash.com/photo-1535954741680-a2e24eb05418?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt=""
          width="680px"
        />
      </div>
      <div className="uk-card uk-card-body" style={{ paddingLeft: "30px" }}>
        <p
          style={{
            color: "gray",
            marginBottom: "-10px",
            fontSize: "20px"
          }}
        >
          서로모임의 {review ? review.author.name : "작가 서명"} 님께서
          작성해주신 서평입니다.
        </p>
        <h3 className="uk-card-title">{review ? review.title : "서평 제목"}</h3>

        <p style={{ color: "gray", fontSize: "25px" }}>
          {review ? review.contents.replace(/<[^>]*>?/gm, "") : "서평 본문"}
        </p>
      </div> */}
    </div>
  );
};

export default Slider;

/*


<div className="uk-section-default">
        <div
          className="uk-section uk-light uk-background-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"
          }}
        >
          <div className="uk-container">
            <h3 style={{ color: "gray" }}>
              {review ? review.title : "서평 제목"}
            </h3>
            <div className="uk-grid-match uk-child-width-1-3@m" uk-grid>
              <div>
                <p style={{ color: "gray" }}>
                  {review ? review.author.name : "작가 서명"}
                </p>
              </div>
              <div>
                <p style={{ color: "gray" }}>
                  {review
                    ? review.contents.replace(/<[^>]*>?/gm, "")
                    : "서평 본문"}
                </p>
              </div>
              <div>
                <p style={{ color: "gray" }}>
                  혜경님 슬라이더 좀 만들어주세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>







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
