import React, { ReactElement } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import BookEntry from "./BookEntry";
import { userBookData } from "./../../fakeData/fake";

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

const App: React.FC<IProps> = ({ User }: IProps): ReactElement => {
  const [bookList, setBookList] = React.useState<IBooks>(userBookData);
  // const UserLoginInfo: UserState = User;
  return (
    <div>
      {User.to_read.map((el: IBookToRead) => (
        <BookEntry key={el.book._id} to_read={el} />
      ))}
    </div>
  );
};

export default App;
