import React, { ReactElement, useState } from "react";
import { IUserInfo } from "./../shared/Types";
import { connect } from "react-redux";
import { updateUserInfo, updateUserImg } from "./../../Redux/modules/user";
import { IUserEditInfo } from "./../../Redux/Types";
import { UserInfo } from "os";

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
  const [nameState, setName] = useState<string>("");
  const [emailState, setEmail] = useState<string>("");
  const [profileState, setProfile] = useState<string>("");

  // handle change email and username (input box)
  const changeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.id === "name") {
      setName(event.target.value);
    } else if (event.target.id === "email") {
      setEmail(event.target.value);
    }
  };

  // handle change profile (text area)
  const changeProfileValue = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setProfile(event.target.value);
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserImg(event!.target!.files![0]);
  };

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    let updated: any = {
      name: nameState,
      email: emailState,
      profile: profileState
    };
    if (!userImg) {
      updateUserInfo(updated);
    } else {
      console.log("image");

      updateUserImg(userImg);
      updateUserInfo(updated);
    }
    handleClose(e);
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
            <div>
              <input
                className="uk-input"
                type="text"
                defaultValue={user.name}
                onChange={changeInputValue}
                id="name"
              />
            </div>
            <div>
              <input
                className="uk-input"
                type="text"
                defaultValue={user.email}
                id="email"
                onChange={changeInputValue}
              />
            </div>

            <div>
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
