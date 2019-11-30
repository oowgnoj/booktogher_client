import React, { ReactElement } from "react";

interface IProps {
  status: string;
  bookID: object;
  getCurrentBookID: (
    bookID: object,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => void;
}

const Button: React.FC<IProps> = ({
  status,
  getCurrentBookID,
  bookID
}: IProps): ReactElement => {
  let firstValue: string;
  let secondValue: string;
  if (status === "toRead") {
    firstValue = "reading";
    secondValue = "finished";
  } else if (status === "reading") {
    firstValue = "to_read";
    secondValue = "finished";
  } else {
    firstValue = "to_read";
    secondValue = "reading";
  }
  return (
    <div className="uk-inline">
      <button
        className="uk-button uk-button-default"
        style={{ height: "40px", fontSize: "10px" }}
        type="button"
      >
        move to
      </button>
      <div uk-dropdown="pos: bottom-justify">
        <ul className="uk-nav uk-dropdown-nav">
          <li
            id={firstValue}
            onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
              getCurrentBookID(bookID, e);
            }}
          >
            <a>{firstValue}</a>
          </li>
          <li
            id={secondValue}
            onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
              getCurrentBookID(bookID, e);
            }}
          >
            <a>{secondValue}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Button;
