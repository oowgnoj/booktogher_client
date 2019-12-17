import React, { ReactElement, useEffect } from "react";
import { Link } from "react-router-dom";
import { ICuration, ICurations } from "./Types";

const UserHistoryCuration = ({ curations }: ICurations): ReactElement => {
  const list: any =
    curations.length > 0
      ? curations.map((curation: ICuration) => {
          return (
            <div className="history_curations_curation">
              <Link
                to={`/curation/${curation._id}`}
                style={{ textDecoration: "none", color: "#919191" }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    color: "gray",
                    textAlign: "left"
                  }}
                >
                  {curation.title}
                </div>
                <div style={{ fontSize: "13px", textAlign: "left" }}>
                  {curation.contents.replace(/<[^>]*>?/gm, "").slice(0, 50) +
                    "..."}
                </div>
              </Link>
              <hr />
            </div>
          );
        })
      : "해당 유저가 작성한 큐레이션 정보가 없습니다";

  return (
    <div>
      <div className="history_curations" style={{ textAlign: "left" }}>
        {list}
      </div>
    </div>
  );
};

export default UserHistoryCuration;
