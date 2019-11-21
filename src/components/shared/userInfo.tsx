import React, { ReactElement, useState } from "react";
import { IUserInfo } from "./../shared/Types";
interface Props {
  userInfo: IUserInfo;
}

const Info: React.FC<Props> = ({ userInfo }): ReactElement => {
  const [userInfoState, setUserInfoState] = useState<IUserInfo>(userInfo);

  return (
    <div className="uk-panel" style={{ width: 300 }}>
      <img
        className="uk-align-left uk-margin-remove-adjacent"
        src="https://image.shutterstock.com/image-vector/people-icon-260nw-522300817.jpg"
        width="100"
        height="100"
        alt="Example image"
      />
      <p>name : {userInfo.name}</p>
      <p>email : {userInfo.email}</p>
      <p>profile : {userInfo.profile}</p>
      <button>유저 정보 수정</button>
    </div>
  );
};

export default Info;
