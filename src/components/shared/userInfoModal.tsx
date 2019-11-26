import React, { ReactElement, useState } from "react";
import { IUserInfo } from "./../shared/Types";
import { connect } from "react-redux";
import { updateUserInfo, updateUserImg } from "./../../Redux/modules/user";
import { IUserEditInfo } from "./../../Redux/Types";

interface IProps {
  handleClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  user: IUserInfo;
  updateUserInfo: (user: IUserEditInfo) => void;
  updateUserImg: (img: any) => void;
}

const EditUserInfo: React.FC<IProps> = ({
  handleClose,
  user,
  updateUserInfo,
  updateUserImg
}: IProps): ReactElement => {
  const [userInfo, setUserInfo] = useState<IUserInfo>(user);
  const [userImg, setUserImg] = useState<any>("");

  // handle change email and username (input box)
  const changeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const updatedUser: IUserInfo = Object.assign({}, user);
    event.target.id === "name"
      ? (updatedUser.name = event.target.value)
      : (updatedUser.email = event.target.value);
    setUserInfo(updatedUser);
  };

  // handle change profile (text area)
  const changeProfileValue = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const updatedUser: IUserInfo = Object.assign({}, user);
    updatedUser.profile = event.target.value;
    setUserInfo(updatedUser);
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserImg(event!.target!.files![0]);
  };

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const { name, email, profile } = userInfo;
    const userInfoUpdated = { name, email, profile };
    if (!userImg) {
      updateUserInfo(userInfo);
    } else {
      updateUserImg(userImg);
      updateUserInfo(userInfo);
    }
  };

  return (
    <div>
      <div className="uk-modal-header">
        <h2 className="uk-modal-title">user information</h2>
      </div>

      <div className="uk-modal-body" uk-overflow-auto>
        <form>
          <fieldset
            className="uk-fieldset"
            style={{
              width: "500px",
              backgroundColor: "white"
            }}
          >
            <div className="uk-margin">
              <input
                className="uk-input"
                type="text"
                defaultValue={user.name}
                onChange={changeInputValue}
                id="name"
              />
            </div>
            <div className="uk-margin">
              <input
                className="uk-input"
                type="text"
                defaultValue={user.email}
                id="email"
                onChange={changeInputValue}
              />
            </div>

            <div className="uk-margin">
              <textarea
                className="uk-textarea"
                defaultValue={user.profile}
                onChange={changeProfileValue}
              ></textarea>
              <input
                className="fileInput"
                type="file"
                onChange={handleImageChange}
              />
              <button
                className="submitButton"
                type="submit"
                onClick={handleSubmit}
              >
                Upload Image
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      <div className="uk-modal-footer uk-text-right">
        <button
          className="uk-button uk-button-default uk-modal-close"
          type="button"
        >
          Cancel
        </button>
        <button
          className="uk-button uk-button-primary"
          type="button"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch: any): any {
  return {
    updateUserImg: (img: File): void => dispatch(updateUserImg(img)),
    updateUserInfo: (userInfo: IUserEditInfo): void =>
      dispatch(updateUserInfo(userInfo))
  };
}

export default connect(null, mapDispatchToProps)(EditUserInfo);
