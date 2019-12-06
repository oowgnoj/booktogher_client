import React, { ReactElement } from "react";
import { defaultUserimg } from "../re_shared/defaultImages";

interface IProps {
  page: string;
  image: string;
  name: string;
  profile: string;
  handleHistoryClick?: () => void;
}

const UserInfo: React.FC<IProps> = ({
  page,
  image,
  name,
  profile,
  handleHistoryClick
}: IProps): ReactElement => {
  const userImg: string = image ? image : defaultUserimg;

  return (
    <div className={`${page}_user`} onClick={handleHistoryClick}>
      <img alt={name} src={userImg} className={`${page}_user cropped`} />
      <p className={`${page}_user name`}>
        by <b>{name}</b> 님
      </p>
      <p className={`${page}_user profile`}>{profile}</p>
    </div>
  );
};

export default UserInfo;
