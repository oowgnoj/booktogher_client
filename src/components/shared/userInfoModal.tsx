import React, { ReactElement, useState } from "react";
import { IUserInfo } from "./../shared/Types";
import { connect } from "react-redux";
import { updateUserInfo, updateUserImg } from "./../../Redux/modules/user";
import { IUserEditInfo } from "./../../Redux/Types";
import { Input } from "antd";
const { TextArea } = Input;

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
  const [userImg, setUserImg] = useState<any>("");
  const [nameState, setName] = useState<string>(user.name);
  const [emailState, setEmail] = useState<string>(user.email);
  const [passwordState, setPassword] = useState<string>("");
  const [passwordCheckState, setPasswordCheck] = useState<string>("");
  const [profileState, setProfile] = useState<string>(user.profile);

  // handle change email and username (input box)
  const changeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.id === "name") {
      setName(event.target.value);
    } else if (event.target.id === "email") {
      setEmail(event.target.value);
    } else if (event.target.id === "password-1") {
      setPassword(event.target.value);
    } else if (event.target.id === "password-2") {
      setPasswordCheck(event.target.value);
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
      profile: profileState,
      password: passwordState
    };
    if (passwordState === passwordCheckState) {
      if (!userImg) {
        updateUserInfo(updated);
      } else {
        updateUserImg(userImg);
        updateUserInfo(updated);
      }
      handleClose(e);
    } else {
      alert("password가 일치하지 않습니다.");
    }
  };

  return (
    <div>
      <div
        className="uk-modal-body"
        uk-overflow-auto
        style={{ paddingLeft: "200px", paddingRight: "200px" }}
      >
        <div
          style={{
            width: "40%",
            height: "350px",
            float: "left"
          }}
        >
          <img
            src={
              user.image === null
                ? "https://cdn2.iconfinder.com/data/icons/bussiness-management-supersolid/24/add_add_contact_create_new_person_user_add_friend-512.png"
                : user.image
            }
            style={{ width: "350px", height: "350px" }}
          />
        </div>
        <div>
          <div>
            <form>
              <fieldset
                className="uk-fieldset"
                style={{
                  backgroundColor: "white",
                  borderTop: "none",
                  paddingLeft: "0"
                }}
              >
                <div>
                  <span>name</span>
                  <input
                    className="uk-input"
                    id="name"
                    type="text"
                    defaultValue={user.name}
                    style={{ display: "inline-block", margin: "5px 0 10px 0"}}
                    onChange={changeInputValue}
                  />
                </div>
                <div>
                  <span>password</span>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input"
                      id="password-1"
                      type="password"
                      style={{ display: "inline-block", margin: "5px 0 10px 0" }}
                      onChange={changeInputValue}
                    />
                  </div>
                </div>
                <div>
                  <span>check</span>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input"
                      id="password-2"
                      type="password"
                      style={{ display: "inline-block", margin: "5px 0 10px 0" }}
                      onChange={changeInputValue}
                    />
                  </div>
                </div>

                <span style={{ display: "inline-block", float: "left" }}>
                  profile :{" "}
                </span>
                <TextArea
                  className="uk-textarea"
                  defaultValue={user.profile}
                  style={{
                    display: "inline-block",
                    width: "460px",
                    overflow: "auto",
                    resize: "none",
                    float: "left",
                    margin: "5px 0 10px 10px"
                  }}
                  onChange={changeProfileValue}
                ></TextArea>
                <br />
                <input
                  className="fileInput"
                  type="file"
                  onChange={handleImageChange}
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <div className="uk-modal-footer uk-text-right">
        <button
          className="uk-button uk-button-default uk-modal-close"
          type="button"
          onClick={handleClose}
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
