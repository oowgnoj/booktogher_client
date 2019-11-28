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
        <div
          className="uk-child-width-1-2@s"
          uk-grid
          style={{ paddingRight: "100px", paddingLeft: "100px" }}
        >
          <img
            src={
              props.user.User.image
                ? props.user.User.image
                : "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjRpvrUmIzmAhXQfd4KHUDHCOcQjRx6BAgBEAQ&url=http%3A%2F%2Fgetdrawings.com%2Fdefault-user-icon&psig=AOvVaw2wj9hItFTx3GEcLK-_4BHh&ust=1575005978900259"
            }
            style={{
              display: "inline-block",
              width: "40%",
              height: "350px",
              margin: "0",
              padding: "0",
              marginTop: "0",
              boxSizing: "border-box",
              opacity: "80%"
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
              marginTop: "0",
              verticalAlign: "top",
              backgroundColor: "white"
            }}
          >
            {console.log(props.user.User)}{" "}
            <img
              src={
                props.user.User.image
                  ? props.user.User.image
                  : "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjRpvrUmIzmAhXQfd4KHUDHCOcQjRx6BAgBEAQ&url=http%3A%2F%2Fgetdrawings.com%2Fdefault-user-icon&psig=AOvVaw2wj9hItFTx3GEcLK-_4BHh&ust=1575005978900259"
              }
              style={{
                borderRadius: "50%",
                width: "75px",
                height: "75px",
                marginRight: "10px",
                display: "inline-block"
              }}
            />
            <p
              style={{
                display: "inline-block",
                margin: 0,
                verticalAlign: "top",
                marginTop: "10px"
              }}
            >
              <span>{props.user.User.name} </span> <br />
              <button
                className="uk-button uk-button-default"
                onClick={handleActive}
                style={{
                  float: "right",
                  height: "auto",
                  padding: 0,
                  fontSize: "13px",
                  color: "blue",
                  borderColor: "blue"
                }}
              >
                change info
              </button>
            </p>
            {props.user.User.profile === "" ? (
              <p>유저 프로필을 입력해주세요. </p>
            ) : (
              <p style={{ fontStyle: "italic" }}>{props.user.User.profile} </p>
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
