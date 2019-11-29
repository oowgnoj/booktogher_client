import React, { ReactElement } from "react";
import BookSelect from "./BookSelect";

const Modal: React.FC = (props: any): ReactElement => {
  return <BookSelect addBooks={props.addBooks} />;
};
export default Modal;
