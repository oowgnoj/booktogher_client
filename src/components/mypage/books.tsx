import React, { useState, useEffect, ReactElement } from "react";
import { fakeUser } from "../../fakeData/fake";
import { DragDropContext } from "react-beautiful-dnd";
import BookList from "./DndBookList";
import { generate } from "shortid";
import { reorderRows } from "./Reorder";
import {
  IBookToRead,
  IBookReading,
  IBookFinished,
  IUserInfo
} from "./../shared/Types";

const unrankedId = generate();
interface IProps {
  User: IUserInfo;
}

const Books: React.FC<IProps> = ({ User }: IProps): ReactElement => {
  const toRead: IBookToRead[] = User.to_read;
  const reading: IBookReading[] = User.reading;
  const finished: IBookFinished[] = User.finished;

  const [rows, setRows] = React.useState([
    {
      id: "1", // columnID
      label: "toRead", // toread, reading, fin
      books: toRead
    },
    {
      id: "2", // columnID
      label: "reading", // toread, reading, fin
      books: reading
    },
    {
      id: "3", // columnID
      label: "finished", // toread, reading, fin
      books: finished
    }
  ]);
  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => {
        // dropped outside  the list
        if (!destination) {
          return;
        }
        setRows(reorderRows(rows, source, destination));
      }}
    >
      <div>
        {rows.map(row => (
          <BookList
            key={row.id}
            listId={row.id}
            listType="CARD"
            row={row}
          ></BookList>
        ))}
      </div>
    </DragDropContext>
  );
};

{
  /* <BookList User={User} /> */
}
export default Books;
