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
      <dl
        className="uk-description-list"
        style={{
          borderBottom: "solid",
          borderColor: "#D3D3D3",
          borderBottomWidth: "1px"
        }}
      >
        <dt style={{ fontSize: "25px" }}>
          {" "}
          {curation.title}{" "}
          <span style={{ color: "#696969", fontSize: "15px" }}>
            {curation.author.name}
          </span>
        </dt>{" "}
        {/* <dd style={{ color: "grey" }}>{curation.author.name}</dd> */}
        <dd style={{ color: "#808080	", fontSize: "20px" }}>
          {curation.contents}
        </dd>
      </dl>
    </Link>
  );
};

export default CurationEntry;
