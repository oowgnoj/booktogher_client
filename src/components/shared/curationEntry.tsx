import React, { ReactElement } from "react";
import { ICuration } from "./../shared/Types";
import "./curationEntry.css";
interface IProps {
  curation: ICuration;
}

const CurationEntry: React.FC<IProps> = ({
  curation
}: IProps): ReactElement => {
  console.log(curation);

  return (
    <dl className="uk-description-list uk-description-list-divider">
      <dt className="table">
        <img
          className="uk-border-circle"
          width="50"
          height="50"
          src="https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170456794/76519872-little-boy-bare-chest-smiling.jpg"
        />
        <span>{curation.title}</span> <span>{curation.contents}</span>
        <span className="author">{curation.author.name}</span>
      </dt>
      {/* <dd>{curation.contents}</dd>
      <dt>Description term</dt>
      <dd>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </dd>
      <dt>Description term</dt>
      <dd>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </dd> */}
    </dl>
  );
};

export default CurationEntry;
