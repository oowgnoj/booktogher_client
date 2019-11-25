import React, { ReactElement } from "react";
import RecoCurationEntry from "./RecoCurationEntry";

interface IAuthor {
  _id: string;
  image: string;
  name: string;
  profile: string;
}

interface ICuration {
  _id: string;
  author: IAuthor;
  content: string;
  likes: string[];
  published: boolean;
  title: string;
}

interface IProps {
  curations: ICuration[];
}

const RecoCurationList: React.SFC<IProps> = ({
  curations
}: IProps): ReactElement => {
  const collectionList: React.ReactElement[] = curations.map(
    (curation: ICuration, index: number) => (
      <RecoCurationEntry curation={curation} key={index} />
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

export default RecoCurationList;
