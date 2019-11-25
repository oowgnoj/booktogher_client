import React, { ReactElement } from "react";
import { ICuration } from "./../shared/Types";
import Entry from "./../shared/curationEntry";

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

const Curation: React.FC = (): ReactElement => {
  return (
    <div className="wrapper">
      {fakeCurations.map((el: ICuration) => {
        return <Entry curation={el} />;
      })}
    </div>
  );
};

export default Curation;
