import React, { ReactElement, useState } from "react";
import Modal from "./userInfoModal";

import { connect } from "react-redux";

interface IProps {
  props: any;
}

const Info: React.FC = (props: any): ReactElement => {
  const [handleEditModal, setEditModal] = useState<boolean>(false);

  const handleActive = (e: React.MouseEvent): void =>
    setEditModal(!handleEditModal);

  const handleClose = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => setEditModal(!handleEditModal);

  return (
    <div className="uk-panel" style={{ width: "100%" }}>
      {handleEditModal === true ? (
        <Modal handleClose={handleClose} user={props.user.User} />
      ) : (
        // <article className="uk-comment uk-comment-primary">
        //   <header
        //     className="uk-comment-header uk-grid-medium uk-flex-middle"
        //     uk-grid
        //   >
        //     <div className="uk-width-auto">
        //       <img
        //         className="uk-comment-avatar"
        //         src="images/avatar.jpg"
        //         width="80"
        //         height="80"
        //         alt=""
        //       />
        //     </div>
        //     <div className="uk-width-expand">
        //       <h4 className="uk-comment-title uk-margin-remove">
        //         <a className="uk-link-reset" href="#">
        //           {props.user.User.name}
        //         </a>
        //       </h4>
        //       <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
        //         <li>
        //           <a href="#">{props.user.User.email}</a>
        //         </li>
        //         <li id="fix" onClick={handleActive}>
        //           <a>정보수정</a>
        //         </li>
        //       </ul>
        //     </div>
        //   </header>
        //   <div className="uk-comment-body">
        //     <p>{props.user.User.profile}</p>
        //     <img src={props.user.User.image} style={{ width: "300px" }} />
        //   </div>
        // </article>
        <div
          className="uk-child-width-1-2@s"
          uk-grid
          style={{ paddingRight: "100px", paddingLeft: "100px" }}
        >
          <img
            src={props.user.User.image}
            style={{
              display: "inline-block",
              width: "40%",
              height: "350px",
              margin: "0",
              padding: "0",
              marginTop: "0",
              boxSizing: "border-box",

              opacity: "70%"
            }}
          />
          <div
            className="uk-dark uk-background-muted uk-padding"
            style={{
              display: "inline-block",
              width: "60%",
              height: "350px",
              margin: "0",
              padding: "50px",
              paddingTop: "20px",
              marginTop: "0",
              verticalAlign: "top"
            }}
          >
            {console.log(props.user.User)}
            <p>
              {" "}
              <img
                src={props.user.User.image}
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  marginRight: "10px"
                }}
              />
              <span>{props.user.User.name} </span>
              <span>
                <button
                  className="uk-button uk-button-default"
                  onClick={handleActive}
                  style={{ border: "none" }}
                >
                  change
                </button>
              </span>
            </p>
            {props.user.User.profile === "" ? (
              <p>유저 프로필을 입력해주세요. </p>
            ) : (
              <p>{props.user.User.profile} </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
function mapStateToProps(state: any): any {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Info);
