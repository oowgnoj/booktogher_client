import React, { ReactElement } from "react";

interface IAuthor {
  id: string;
  image: string;
  name: string;
  profile: string;
}

interface ICollection {
  id: string;
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
        <img src={collection.author.image} alt="" />
      </div>
      <div className="uk-card-body">
        <h3 className="uk-card-title">{collection.title}</h3>
        <p>{collection.content}</p>
        <p>보러가기</p>
      </div>
    </div>
  </div>
);

export default RecoCollectionEntry;
