import React, { ReactElement, useEffect, useState, useRef } from "react";
import { ICuration, IUserInfo } from "./../shared/Types";
import { fetchCuration } from "./../shared/Fetch";
import Entry from "./../shared/curationEntry";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./index.css";
const fakeCurations: ICuration[] = [
  {
    _id: "ObjectId",
    author: {
      _id: "ObjectId",
      image: "http://...",
      name: "박종우",
      profile: "저는 박종우라고 합니다."
    },
    contents: "이 큐레이션은...",
    likes: ["user-id1", "user-id2"],
    title: "가을바람 쐬며 읽기 좋은 책"
  },
  {
    _id: "ObjectId",
    author: {
      _id: "ObjectId",
      image: "http://...",
      name: "박종우",
      profile: "저는 박종우라고 합니다."
    },
    contents: "이 큐레이션은...",
    likes: ["user-id1", "user-id2"],
    title: "가을바람 쐬며 읽기 좋은 책"
  }
];

interface IProps {
  user: IUserInfo;
}
const Curation: React.FC<IProps> = (props: any): ReactElement => {
  const [myCuration, setMyCuration] = useState<ICuration[]>(fakeCurations);

  useEffect(() => {
    fetchCuration(setMyCuration, props.user._id);
  }, [props.user._id]);

  return (
    <div className="wrapper">
      <h2 style={{ fontWeight: "bold" }}>
        your curations{" "}
        <button
          className="uk-button uk-button-default"
          style={{ float: "right" }}
        >
          <Link to={"/postcuration"} style={{ color: "black" }}>
            서평 쓰러가기
          </Link>
        </button>
      </h2>

      <hr style={{ marginTop: "5px" }} />
      {myCuration.length ? (
        myCuration.map((el: ICuration) => {
          return <Entry curation={el} />;
        })
      ) : (
        <div>없습니다</div>
      )}
    </div>
  );
};

function mapStateToProps(state: any): any {
  return {
    user: state.user.User
  };
}

export default connect(mapStateToProps)(Curation);
