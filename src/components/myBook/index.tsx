import React, { useState, useEffect, ReactElement } from "react";
import { fakeUser, UserDB } from "../../fakeData/fake";

import BookSelect from "./../shared/BookSearch";
import {
  IUserInfo,
  IBookToRead,
  IBookReading,
  IBookFinished
} from "./../shared/Types";
import ProgressBar from "./ProgressBar";
import NavBar from "./NavBar";
import BookEntry from "./BookEntry";

interface IProps {
  User: IUserInfo;
}

const Books: React.FC = (): ReactElement => {
  const toRead: any = UserDB.to_read;
  const reading: any = UserDB.reading;
  const finished: any = UserDB.finished;

  const [userBooks, setUserBooks] = React.useState([toRead, reading, finished]);

  const [searchBox, setbookSearchBox] = useState<boolean>(false); // handle book select box
  const [bookStatus, setStatus] = useState<string>("to_read");

  // change user's book status

  const getCurrentBookID = (
    bookInfo: any,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void => {
    changeBookStatus(bookInfo._id, e.currentTarget.id);
  };

  const changeBookStatus = (bookId: string, target: string): void => {
    let tempObj: string = "";
    const newUserBooks = userBooks.map(array => {
      return array.filter((obj: any) => {
        if (obj.book._id.toString() === bookId.toString()) {
          tempObj = obj.book;
        }
        return obj.book._id.toString() !== bookId.toString();
      });
    });
    let index: number;
    if (target === "to_read") {
      index = 0;
    } else if (target === "reading") {
      index = 1;
    } else {
      index = 2;
    }
    newUserBooks[index].push({ book: tempObj });
    setUserBooks([...newUserBooks]);
  };

  // handle active tab
  const handleActive = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void => {
    setStatus(e.currentTarget.id);
  };

  // search box
  let temp: ReactElement = <p></p>;

  const handleSearchBox = (): void => {
    setbookSearchBox(!searchBox);
  };
  if (searchBox) {
    temp = <BookSelect />;
  }

  // rendering :  need refactoring
  if (bookStatus === "to_read") {
    console.log(userBooks);
    return (
      <div className="wrapper">
        <ProgressBar UserInfo={UserDB} />
        <NavBar handleActive={handleActive} />
        {userBooks[0].map((el: IBookToRead) => {
          return <BookEntry toRead={el} getCurrentBookID={getCurrentBookID} />;
        })}
      </div>
    );
  } else if (bookStatus === "reading") {
    console.log(userBooks);

    return (
      <div className="wrapper">
        <ProgressBar UserInfo={UserDB} />
        <NavBar handleActive={handleActive} />
        {userBooks[1].map((el: IBookReading) => {
          return <BookEntry reading={el} getCurrentBookID={getCurrentBookID} />;
        })}
      </div>
    );
  } else {
    console.log(userBooks);

    return (
      <div className="wrapper">
        <ProgressBar UserInfo={UserDB} />
        <NavBar handleActive={handleActive} />
        {userBooks[2].map((el: IBookFinished) => {
          return (
            <BookEntry finished={el} getCurrentBookID={getCurrentBookID} />
          );
        })}
      </div>
    );
  }
};

export default Books;
