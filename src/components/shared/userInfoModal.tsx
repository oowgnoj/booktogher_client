import React, { ReactElement, useState } from "react";
import { IUserInfo } from "./../shared/Types";
import { connect } from "react-redux";
import { updateUserInfo, updateUserImg } from "./../../Redux/modules/user";
import { IUserEditInfo } from "./../../Redux/Types";
import { UserInfo } from "os";
import { borderTop } from "@material-ui/system";

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
      <div
        className="uk-modal-body"
        uk-overflow-auto
        style={{ paddingLeft: "100px", paddingRight: "0" }}
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
              user.image
                ? user.image
                : "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjRpvrUmIzmAhXQfd4KHUDHCOcQjRx6BAgBEAQ&url=http%3A%2F%2Fgetdrawings.com%2Fdefault-user-icon&psig=AOvVaw2wj9hItFTx3GEcLK-_4BHh&ust=1575005978900259"
            }
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
                  float: "right",
                  paddingTop: "50px",
                  paddingLeft: "10px"
                }}
              >
                <div style={{ float: "left", display: "block" }}>
                  <span style={{ display: "inline-block" }}>name : </span>
                  <input
                    className="uk-input"
                    style={{
                      display: "inline-block",
                      width: "150px",
                      border: "none"
                    }}
                    type="text"
                    defaultValue={user.name}
                    onChange={changeInputValue}
                    id="name"
                  />
                </div>
                <br />

                <br />
                <span style={{ display: "inline-block", float: "left" }}>
                  profile :{" "}
                </span>
                <textarea
                  className="uk-textarea"
                  defaultValue={user.profile}
                  style={{
                    display: "inline-block",
                    width: "250px",
                    borderColor: "transparent",
                    overflow: "auto",
                    resize: "none",
                    float: "left"
                  }}
                  onChange={changeProfileValue}
                ></textarea>
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
