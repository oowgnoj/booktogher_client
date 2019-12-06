import React, { ReactElement } from "react";
import { Skeleton } from "@material-ui/lab";

const MainSkeleton: React.FC = (props: any): ReactElement => {
  return (
    <div>
      <div>
        <span>
          <Skeleton width="33%" />
        </span>
        <div
          className="slider_text uk-position-relative uk-visible-toggle"
          tabIndex={-1}
          uk-slideshow="autoplay: true; animation: fade"
          style={{ padding: "0" }}
        >
          <Skeleton width="55%" height="37px" />{" "}
          <ul
            className="uk-slideshow-items main-review-ul"
            style={{ marginBottom: "20px" }}
          >
            <li>
              <h3>
                <Skeleton height="30px" width="20%" />
              </h3>
              <span>
                <Skeleton
                  style={{ margin: "0px" }}
                  width="100%"
                  height="30px"
                />
                <Skeleton
                  style={{ margin: "0px" }}
                  width="100%"
                  height="30px"
                />
                <Skeleton
                  style={{ margin: "0px" }}
                  width="100%"
                  height="30px"
                />
                <Skeleton
                  style={{ margin: "0px" }}
                  width="100%"
                  height="30px"
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MainSkeleton;
