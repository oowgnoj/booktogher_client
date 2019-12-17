import React, { ReactElement } from "react";
interface IProps {
  display: boolean;
}
const Clean: React.FC<IProps> = ({ display }: IProps): ReactElement => {
  if (display) {
    return <span></span>;
  } else {
    return (
      <div
        style={{ width: "100%", height: "900px", backgroundColor: "#fff" }}
      ></div>
    );
  }
};

export default Clean;
