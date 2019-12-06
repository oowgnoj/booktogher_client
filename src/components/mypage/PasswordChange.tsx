import React, { ReactElement } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import { changeUserPassword } from "../../Redux/modules/user";
import { IUserInfo } from "../shared/Types";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: "white",
      border: "1px solid #fff",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  })
);

interface IProps {
  user: IUserInfo;
  changeUserPassword: (user: object, newPassword: string) => void;
}

const ChangePasswordModal: React.FC<IProps> = ({
  user,
  changeUserPassword
}: IProps): ReactElement => {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const [oldPasswordState, setOldpassword] = React.useState<any>("");
  const [passwordState, setpasswordState] = React.useState<any>("");
  const [checkState, setcheckState] = React.useState<any>("");

  const handleOpen = (): void => {
    if (user.accountType === "standard") {
      setOpen(true);
    } else {
      alert("소셜로그인 회원은 비밀번호를 변경할 수 없습니다.");
    }
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleSubmit = (): void => {
    if (passwordState === checkState) {
      const userInfo = { user: user._id, password: oldPasswordState };
      changeUserPassword(userInfo, passwordState);
      handleClose();
    } else {
      alert("비밀번호 재입력값이 다릅니다.");
    }
  };
  const changeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.id === "password") {
      setpasswordState(event.target.value);
    } else if (event.target.id === "passwordCheck") {
      setcheckState(event.target.value);
    } else if (event.target.id === "oldPassword") {
      setOldpassword(event.target.value);
    }
  };
  return (
    <div style={{ display: "inline-block" }}>
      <button
        className="uk-button uk-button-default uk-modal-close"
        style={{
          border: "none",
          paddingLeft: "15px",
          color: "rgb(75,88,50)",
          display: "inline-block"
        }}
        onClick={handleOpen}
      >
        비밀번호 변경
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div>
          <div style={modalStyle} className={classes.paper}>
            <span>oldpassword</span>
            <input
              className="uk-input"
              id="oldPassword"
              type="password"
              style={{ display: "inline-block", margin: "5px 0 10px 0" }}
              onChange={changeInputValue}
            />
            <span>password</span>
            <input
              className="uk-input"
              id="password"
              type="password"
              style={{ display: "inline-block", margin: "5px 0 10px 0" }}
              onChange={changeInputValue}
            />
            <span>check</span>
            <div className="uk-form-controls">
              <input
                className="uk-input"
                id="passwordCheck"
                type="password"
                style={{ display: "inline-block", margin: "5px 0 10px 0" }}
                onChange={changeInputValue}
              />
            </div>
            <button
              className="uk-button uk-button-default uk-modal-close"
              style={{
                border: "none",
                color: "rgb(75,88,50)",
                display: "inline-block"
              }}
              onClick={handleClose}
            >
              취소
            </button>
            <button
              className="uk-button uk-button-primary"
              style={{
                border: "none",
                color: "white",
                display: "inline-block",
                float: "right",
                textAlign: "center"
              }}
              onClick={handleSubmit}
            >
              비밀번호 변경
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

function mapDispatchToProps(dispatch: any): any {
  return {
    changeUserPassword: (user: object, newPassword: string): void =>
      dispatch(changeUserPassword(user, newPassword))
  };
}

export default connect(null, mapDispatchToProps)(ChangePasswordModal);
