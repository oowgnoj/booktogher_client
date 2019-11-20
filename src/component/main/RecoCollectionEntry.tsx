import React, { ReactElement } from "react";

interface IAuthor {
  _id: string;
  image: string;
  name: string;
  profile: string;
}

interface ICollection {
  _id: string;
  author: IAuthor;
  content: string;
  likes: string[];
  published: boolean;
  title: string;
}

interface IProps {
  collection: ICollection;
}

const RecoCollectionEntry = ({ collection }: IProps): ReactElement => (
  <div className="main_review_list_review">
    <div className="uk-card uk-card-default">
      <div className="uk-card-media-top">
        <img
          width="100"
          height="100"
          src={collection.author.image}
          alt=""
          className="img_center uk-border-circle"
        />
      </div>
      <div className="uk-card-body" style={{ height: "150px" }}>
        <h3 className="uk-card-title">
          {collection.title.length > 30
            ? collection.title.slice(0, 30) + "..."
            : collection.title}
        </h3>
        <p>{collection.content}</p>
        <p style={{ textAlign: "right", color: "lightgray" }}>보러가기</p>
      </div>
    </div>
  </div>
);

export default RecoCollectionEntry;
