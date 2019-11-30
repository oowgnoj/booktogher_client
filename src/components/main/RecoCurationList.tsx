import React, { ReactElement } from "react";
import RecoCurationEntry from "./RecoCurationEntry";
import { IAuthor, ICuration } from "../shared/Types";

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
      <div className="uk-child-width-1-4@s uk-flex uk-flex-center" uk-grid>
        {collectionList}
      </div>
    </div>
  );
};

export default RecoCurationList;
