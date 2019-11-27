import React, { useState, useEffect, ReactElement } from "react";
import { IUserInfo } from "./../shared/Types";
import Modal from "./modal_goal";

interface IProps {
  UserInfo: IUserInfo;
}
const ProgressBar: React.FC<IProps> = ({ UserInfo }): ReactElement => {
  const barStyle: object = { width: "50%", display: "inline-block" };
  const [bookGoal, setBookGoal] = useState<number>(10);
  const [essayGoal, setEssayGoal] = useState<number>(10);
  const [showModal, setModal] = useState<boolean>(false);

  const handleBookGoal = (reading: number) => {
    setBookGoal(reading);
  };
  const handleEssayGoal = (reading: number) => {
    setBookGoal(reading);
  };

  const handleGoalModal = (event: React.MouseEvent<HTMLElement>) => {
    setModal(!showModal);
  };

  let ModalPage = <p></p>;
  if (showModal) {
    ModalPage = <Modal />;
  } else {
    ModalPage = <p></p>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ width: "50%", display: "inline-block" }}>독서 목표</p>
      <p style={{ width: "50%", display: "inline-block" }}>서평 목표</p>
      <progress
        id="js-progressbar"
        className="uk-progress"
        value={bookGoal}
        max="100"
        style={barStyle}
      ></progress>
    </div>
  );
};

export default ProgressBar;
