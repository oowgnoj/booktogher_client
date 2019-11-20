import React, { ReactElement } from "react";
import { IUserInfo } from "./../shared/Types";
interface Props {
  userInfo: IUserInfo;
}

const Info: React.FC<Props> = ({ userInfo }): ReactElement => {
  return (
    <div className="uk-panel" style={{ width: 300 }}>
      <img
        className="uk-align-left uk-margin-remove-adjacent"
        src="https://image.shutterstock.com/image-vector/people-icon-260nw-522300817.jpg"
        width="100"
        height="100"
        alt="Example image"
      />
      <p>{userInfo.name}</p>
      <p>{userInfo.profile}</p>
    </div>
  );
};

export default Info;
