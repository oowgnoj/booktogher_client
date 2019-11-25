import React, { ReactElement } from "react";
import { ICuration } from "./../shared/Types";

interface IProps {
  curation: ICuration;
}

const CurationEntry: React.FC<IProps> = ({
  curation
}: IProps): ReactElement => {
  return (
    <dl className="uk-description-list">
      <dt>Description term</dt>
      <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
      <dt>Description term</dt>
      <dd>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </dd>
      <dt>Description term</dt>
      <dd>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </dd>
    </dl>
  );
};

export default CurationEntry;
