import React, { ReactElement, useState } from "react";
import Modal from "./userInfoModal";

import { connect } from "react-redux";

interface IProps {
  props: any;
}

const Info: React.FC = (props: any): ReactElement => {
  const [handleEditModal, setEditModal] = useState<boolean>(false);
  console.log(props.user.User.name);

  const handleActive = (e: React.MouseEvent<HTMLLIElement, MouseEvent>): void =>
    setEditModal(!handleEditModal);

  const handleClose = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => setEditModal(!handleEditModal);

  return (
    <div className="uk-panel" style={{ width: "70%" }}>
      {handleEditModal === true ? (
        <Modal handleClose={handleClose} user={props.user.User} />
      ) : (
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
                  {props.user.User.name}
                </a>
              </h4>
              <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                <li>
                  <a href="#">{props.user.User.email}</a>
                </li>
                <li id="fix" onClick={handleActive}>
                  <a>정보수정</a>
                </li>
              </ul>
            </div>
          </header>
          <div className="uk-comment-body">
            <p>{props.user.User.profile}</p>
          </div>
        </article>
      )}
    </div>
  );
};
function mapStateToProps(state: any): any {
  console.log("redux store", state);
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Info);
