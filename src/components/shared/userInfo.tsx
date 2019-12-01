import React, { ReactElement, useState } from "react";
import Modal from "./userInfoModal";
import UserCard from "./userCard";
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
          <UserCard user={props.user.User} handleActive={handleActive} />
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
