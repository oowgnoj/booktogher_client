import React, { ReactElement } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import { updateUserInfo } from "../../Redux/modules/user";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 30;
  const left = 30;

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

const SimpleModal: React.FC = (props: any): ReactElement => {
  const classes = useStyles();

  const [goal, setgoal] = React.useState<number>(10);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);

    props.updateUserInfo({ numBooksGoal: goal });
  };

  const handleGoal = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setgoal(Number(event.target.value));
  };
  return (
    <div style={{ display: "inline-block" }}>
      <button
        className="uk-button uk-button-default"
        style={{
          border: "none",
          paddingLeft: "15px",
          color: "rgb(75,88,50)",
          display: "inline-block"
        }}
        onClick={handleOpen}
      >
        목표 설정
      </button>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">독서 목표를 설정해주세요</h2>
          <p id="simple-modal-description">
            당신의 독서 목표는 몇권인가요?{" "}
            <input onChange={handleGoal} defaultValue={10} />
          </p>
          <button
            className="uk-button uk-button-default"
            style={{ border: "none", float: "right" }}
            onClick={handleClose}
          >
            목표 설정
          </button>
        </div>
      </Modal>
    </div>
  );
};

function mapDispatchToProps(dispatch: any): any {
  return {
    updateUserInfo: (numBooksGoal: number): void =>
      dispatch(updateUserInfo(numBooksGoal))
  };
}

export default connect(null, mapDispatchToProps)(SimpleModal);
