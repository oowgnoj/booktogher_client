import React, { ReactElement } from "react";
import "../writeReview/Modal.scss";
import BookSelect from "./BookSelect";

const Modal: React.FC = (props: any): ReactElement => {
  return <BookSelect addBooks={props.addBooks} close={props.close} />;
};
export default Modal;
