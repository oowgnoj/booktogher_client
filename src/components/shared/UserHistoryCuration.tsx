import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { ICuration, ICurations } from "./Types";

const UserHistoryCuration = ({ curations }: ICurations): ReactElement => {
  const list: any = curations.map((curation: ICuration) => {
    return (
      <div className="history_curations_curation">
        <Link
          to={`/curation/${curation._id}`}
          style={{ textDecoration: "none", color: "#919191" }}
        >
          <div style={{ fontWeight: "bold", color: "gray" }}>
            {curation.title}
          </div>
          <div style={{ fontSize: "13px" }}>
            {curation.contents.replace(/<[^>]*>?/gm, "").slice(0, 50) + "..."}
          </div>
        </Link>
        <hr />
      </div>
    );
  });
  return (
    <div>
      <div className="history_curations">{list}</div>
    </div>
  );
};

export default UserHistoryCuration;
