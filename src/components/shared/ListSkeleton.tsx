import React, { ReactElement } from "react";
import { Skeleton } from "@material-ui/lab";

const SkeletonList: React.FC = (props: any): ReactElement => {
  return (
    <div>
      <div>
        <Skeleton variant="text" width={"35%"} height={40} />
        <Skeleton variant="text" width={"60%"} height={25} />
      </div>
      <div>
        <Skeleton variant="text" width={"35%"} height={40} />
        <Skeleton variant="text" width={"60%"} height={25} />
      </div>
      <div>
        <Skeleton variant="text" width={"35%"} height={40} />
        <Skeleton variant="text" width={"60%"} height={25} />
      </div>
      <div>
        <Skeleton variant="text" width={"35%"} height={40} />
        <Skeleton variant="text" width={"60%"} height={25} />
      </div>
      <div>
        <Skeleton variant="text" width={"35%"} height={40} />
        <Skeleton variant="text" width={"60%"} height={25} />
      </div>
    </div>
  );
};
export default SkeletonList;
