import React, { useState, useEffect, ReactElement } from "react";
import { fakeUser, UserDB } from "../../fakeData/fake";
import { DragDropContext } from "react-beautiful-dnd";
// import { generate } from "shortid";
import { reorderRows } from "./Reorder";
import BookSelect from "./../shared/BookSearch";
import BookList from "./DndBookList";
import {
  IBookToRead,
  IBookReading,
  IBookFinished,
  IUserInfo
} from "./../shared/Types";

interface IProps {
  User: IUserInfo;
}

const Books: React.FC<IProps> = ({ User }: IProps): ReactElement => {
  const toRead: IBookToRead[] = User.to_read;
  const reading: IBookReading[] = User.reading;
  const finished: IBookFinished[] = User.finished;
  const [selectBox, setSelectBox] = useState<Boolean>(false);
  const handleSelctBox = (): void => {
    setSelectBox(!selectBox);
  };
  let temp: ReactElement = <p></p>;

  const [rows, setRows] = React.useState([
    {
      books: toRead,
      id: "1", // columnID
      label: "toRead" // toread, reading, fin
    },
    {
      books: reading,
      id: "2", // columnID
      label: "reading" // toread, reading, fin
    },
    {
      books: finished,
      id: "3", // columnID
      label: "finished" // toread, reading, fin
    }
  ]);

  if (selectBox) {
    temp = <BookSelect />;
  }

  return (
    <div>
      {console.log(rows)}
      <button
        style={{ width: "100px", height: "100px" }}
        onClick={handleSelctBox}
      >
        책을 선택해주세요
      </button>
      {temp}
      <DragDropContext
        onDragEnd={({ destination, source }: any): void => {
          // dropped outside  the list
          if (!destination) {
            return;
          }
          setRows(reorderRows(rows, source, destination));
        }}
      >
        <div>
          {rows.map(row => (
            <BookList key={row.id} listId={row.id} listType="CARD" row={row} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

{
  /* <BookList User={User} /> */
}
export default Books;
