import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { IAuthor, ICuration } from "../shared/Types";

interface IProps {
  curation: ICuration;
}

const RecoCurationEntry = ({ curation }: IProps): ReactElement => {
  const path: string = `/curation/${curation._id}`;
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <div className="main_review_list_review" style={{ marginLeft: "5%" }}>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top crop">
            <img src={curation.author.image} alt="" className="cropped" />
          </div>
          <div className="uk-card-body" style={{ height: "80px" }}>
            <h3
              className="uk-card-title"
              style={{ fontSize: "1em", textAlign: "center" }}
            >
              {curation.title.length > 30
                ? curation.title.slice(0, 30) + "..."
                : curation.title}
            </h3>
            {/* <p>{curation.content}</p> */}
            <p
              style={{
                textAlign: "right",
                color: "lightgray",
                fontSize: "0.8em"
              }}
            >
              보러가기
            </p>
          </div>
        </div>

        {/* 
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img
              width="100"
              height="100"
              src={curation.author.image}
              alt=""
              className="img_center uk-border-circle"
            />
          </div>
          <div className="uk-card-body" style={{ height: "150px" }}>
            <h3 className="uk-card-title">
              
            </h3>
            <p>{curation.content}</p>
            <p style={{ textAlign: "right", color: "lightgray" }}>보러가기</p>
          </div>
        </div> */}
      </div>
    </Link>
  );
};

export default RecoCurationEntry;
