import React, { ReactElement } from "react";
import BookSelect from "./BookSelect";

const Modal: React.FC = (props: any): ReactElement => {
  return <BookSelect addBooks={props.addBooks} />;
};
export default Modal;

// const ModalTest: React.FC = (props: any): ReactElement => {
//   return (
//     <div className="App">
//       <Modal addBooks={props.addBooks} />
//     </div>
//   );
// };

// export default ModalTest;
