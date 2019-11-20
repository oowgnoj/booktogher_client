import React, { ReactElement } from "react";
import { Droppable, Draggable, DroppableProvided } from "react-beautiful-dnd";

import { IBookToRead, IBookReading, IBookFinished } from "./../shared/Types";

interface IProps {
  to_read?: IBookToRead;
  reading?: IBookReading;
  finish?: IBookFinished;
}

export const BookEntry: React.FC<IProps> = ({
  to_read,
  reading,
  finish
}: IProps): ReactElement => {
  let temp: ReactElement = <div></div>;

  if (to_read) {
    temp = (
      <div>
        <h2>toRead</h2>
        <p>{to_read.book.title} </p>
      </div>
    );
  } else if (reading) {
    temp = (
      <div>
        <h2>toRead</h2>
        <p>{reading.book.title} </p>
      </div>
    );
  } else if (finish) {
    temp = (
      <div>
        <h2>toRead</h2>
        <p>{finish.book.title} </p>
      </div>
    );
  }

  return (
    <div>
      <div>{temp}</div>
    </div>
  );
};

export default BookEntry;
