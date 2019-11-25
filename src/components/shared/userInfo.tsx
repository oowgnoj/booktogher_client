import React, { ReactElement, useState } from "react";
import { IUserInfo } from "./../shared/Types";
interface Props {
  userInfo: IUserInfo;
}

const Info: React.FC<Props> = ({ userInfo }): ReactElement => {
  const [userInfoState, setUserInfoState] = useState<IUserInfo>(userInfo);

  return (
    <div className="uk-panel" style={{ width: 300 }}>
      <article className="uk-comment uk-comment-primary">
        <header
          className="uk-comment-header uk-grid-medium uk-flex-middle"
          uk-grid
        >
          <div className="uk-width-auto">
            <img
              className="uk-comment-avatar"
              src="images/avatar.jpg"
              width="80"
              height="80"
              alt=""
            />
          </div>
          <div className="uk-width-expand">
            <h4 className="uk-comment-title uk-margin-remove">
              <a className="uk-link-reset" href="#">
                Author
              </a>
            </h4>
            <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
              <li>
                <a href="#">12 days ago</a>
              </li>
              <li>
                <a href="#">Reply</a>
              </li>
            </ul>
          </div>
        </header>
        <div className="uk-comment-body">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Info;
