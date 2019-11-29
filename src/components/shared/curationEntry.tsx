import React, { ReactElement } from "react";
import { ICuration } from "./../shared/Types";
import "./curationEntry.css";
import { Link } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";
interface IProps {
  curation: ICuration;
  from: string;
}

const CurationEntry: React.FC<IProps> = ({
  curation,
  from
}: IProps): ReactElement => {
  console.log(curation);

  const path: string = `/curation/${curation._id}`;
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <dl className="uk-description-list">
        <dt style={{ fontSize: "25px" }}>
          {" "}
          {curation.title ? (
            curation.title
          ) : (
            <Skeleton variant="text" width={"35%"} height={40} />
          )}{" "}
          <span style={{ color: "#696969", fontSize: "15px" }}>
            {from === "likes" ? curation.author.name : ""}
          </span>
        </dt>{" "}
        {/* <dd style={{ color: "grey" }}>{curation.author.name}</dd> */}
        <dd style={{ color: "#808080	", fontSize: "20px" }}>
          {curation.contents
            ? curation.contents
            : [<Skeleton variant="text" width={"60%"} height={25} />]}
        </dd>
      </dl>
    </Link>
  );
};

export default CurationEntry;
