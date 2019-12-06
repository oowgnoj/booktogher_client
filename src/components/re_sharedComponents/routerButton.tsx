import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { IRouterButton } from "../re_shared/interfaces";

const RouterButton: React.FC<IRouterButton> = ({
  page,
  path,
  param,
  btnName
}: IRouterButton): ReactElement => {
  return (
    <Link to={`/${path}/${param}`}>
      <button className={`${page}_routerbutton`}>{btnName}</button>
    </Link>
  );
};

export default RouterButton;
