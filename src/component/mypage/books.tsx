import React from "react";
import { fakeUser } from "../../fakeData/fake";
import Entry from "./bookSimpleEntry";
import Column from "./Column";
import BookList from "./BookList";
import {
  IBookToRead,
  IBookReading,
  IBookFinished,
  IUserInfo
} from "./../shared/Types";

interface IBooks {
  toRead: IBookToRead[];
  reading: IBookReading[];
  finished: IBookFinished[];
}
interface IProps {
  User: IUserInfo;
}

const Books: React.FC<IProps> = ({ User }) => {
  const state = fakeUser;

  return (
    <div>
      <BookList User={User} />
    </div>
  );
};

export default Books;
