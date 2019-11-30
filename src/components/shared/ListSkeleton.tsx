import React, { ReactElement } from "react";
import { Skeleton } from "@material-ui/lab";

const SkeletonList: React.FC = (props: any): ReactElement => {
  return (
    <div>
      <div
        className="uk-description-list"
        style={{ paddingBottom: "10px", marginBottom: "20px" }}
      >
        <Skeleton variant="text" width={"70%"} height={45} />
        <Skeleton variant="text" width={"60%"} height={25} />
      </div>
      <div className="uk-description-list">
        <Skeleton variant="text" width={"60%"} height={45} />
        <Skeleton variant="text" width={"60%"} height={25} />
      </div>
      <div className="uk-description-list">
        <Skeleton variant="text" width={"50%"} height={45} />
        <Skeleton variant="text" width={"60%"} height={25} />
      </div>
      <div className="uk-description-list">
        <Skeleton variant="text" width={"35%"} height={45} />
        <Skeleton variant="text" width={"60%"} height={25} />
      </div>
      <div className="uk-description-list">
        <Skeleton variant="text" width={"35%"} height={45} />
        <Skeleton variant="text" width={"60%"} height={25} />
      </div>
    </div>
  );
};
export default SkeletonList;
