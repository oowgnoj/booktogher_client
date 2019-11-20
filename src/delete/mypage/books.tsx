import React, { ReactElement } from "react";
import { fakeUser } from "../../fakeData/fake";
import BookList from "./BookList";
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
  const state: IUserInfo = fakeUser;

  return (
    <div>
      <BookList User={User} />
    </div>
  );
};

export default Books;
