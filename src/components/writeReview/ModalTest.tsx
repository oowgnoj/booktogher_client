import React, { ReactElement } from "react";
import WritePost from './WritePost'
import Modal from './Modal';

const ModalTest: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <Modal />
    </div>
  );
};

export default ModalTest;