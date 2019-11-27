import React, { ReactElement } from "react";
import { ICuration } from "./../shared/Types";
import "./curationEntry.css";
import { Link } from "react-router-dom";

interface IProps {
  curation: ICuration;
}

const CurationEntry: React.FC<IProps> = ({
  curation
}: IProps): ReactElement => {
  console.log(curation);

  const path: string = `/curation/${curation._id}`;
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <dl className="uk-description-list uk-description-list-divider">
        <dt className="table">
          <img
            className="uk-border-circle"
            width="50"
            height="50"
            src={curation.author.image}
          />
          <span>{curation.title}</span> <span>{curation.contents}</span>
          <span className="author">{curation.author.name}</span>
        </dt>
      </dl>
    </Link>
  );
};

export default CurationEntry;
