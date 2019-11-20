import React, { ReactElement } from "react";
import RecoCollectionEntry from "./RecoCollectionEntry";

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
  collections: ICollection[];
}

const RecoCollectionList: React.SFC<IProps> = ({
  collections
}: IProps): ReactElement => {
  const collectionList: React.ReactElement[] = collections.map(
    (collection: ICollection, index: number) => (
      <RecoCollectionEntry collection={collection} key={index} />
    )
  );
  return (
    <div className="main_collection_list">
      <div className="uk-child-width-1-2@m  uk-flex uk-flex-center" uk-grid>
        {collectionList}
      </div>
    </div>
  );
};

export default RecoCollectionList;
