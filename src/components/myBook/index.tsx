import React, { useState, useEffect, ReactElement } from "react";
import { connect } from "react-redux";

import {
  IUserInfo,
  IBookToRead,
  IBookReading,
  IBookFinished
} from "./../shared/Types";

import ProgressBar from "./ProgressBar";
import NavBar from "./NavBar";
import BookEntry from "./BookEntry";
import BookSelect from "./../writeCuration/BookSelect";
import { updateUserInfo, requestUserInfo } from "../../Redux/modules/user";
import { modifyForm } from "./../shared/helper";

interface IProps {
  User: IUserInfo;
  updateUserInfo: (data: any) => void;
  props: any;
}

const Books: React.FC<IProps> = (props: any): ReactElement => {
  const toRead: any = props.user.to_read;
  const reading: any = props.user.reading;
  const finished: any = props.user.finished;

  const [userBooks, setUserBooks] = React.useState([toRead, reading, finished]);
  const [bookStatus, setStatus] = useState<string>("to_read");
  const [searchBook, showSearchBook] = useState<string>("close");

  const addBooks = (newBooks: any): any => {
    const newBookAdded: any = [...userBooks];
    for (const book of newBooks) {
      newBookAdded[0].push({ book });
    }
    setUserBooks(newBookAdded);
    showSearchBook("close"); // close search box
    props.updateUserInfo(modifyForm(newBookAdded));
  };

  // handle search box
  let temp: ReactElement = <p></p>;
  const handleSearchBox = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    showSearchBook("open");
    requestUserInfo();
  };
  if (searchBook === "open") {
    temp = <BookSelect addBooks={addBooks} />;
  }

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
    props.updateUserInfo(modifyForm(userBooks));
  };

  // patch modified user book status

  useEffect(() => {
    setUserBooks([props.user.to_read, props.user.reading, props.user.finished]);
  }, [props.user]);

  // useEffect(() => {
  //   props.updateUserInfo(modifyForm(userBooks));
  // }, [userBooks]);

  // handle active tab
  const handleActive = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void => {
    setStatus(e.currentTarget.id);
  };
  // rendering :  need refactoring
  if (bookStatus === "to_read") {
    return (
      <div className="wrapper">
        {console.log("여기", props)}
        {temp}
        <button id="toRead" onClick={handleSearchBox}>
          책 추가
        </button>
        <ProgressBar UserInfo={props.user} />
        <NavBar handleActive={handleActive} />
        {userBooks[0].map((el: IBookToRead) => {
          return <BookEntry toRead={el} getCurrentBookID={getCurrentBookID} />;
        })}
      </div>
    );
  } else if (bookStatus === "reading") {
    return (
      <div className="wrapper">
        <ProgressBar UserInfo={props.user} />
        <NavBar handleActive={handleActive} />
        {userBooks[1].map((el: IBookReading) => {
          return <BookEntry reading={el} getCurrentBookID={getCurrentBookID} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        {/* {temp} */}
        <ProgressBar UserInfo={props.user} />
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

function mapStateToProps(state: any): any {
  return {
    user: state.user.User
  };
}

function mapDispatchToProps(dispatch: any): any {
  return {
    updateUserInfo: (bookStatus: any): void =>
      dispatch(updateUserInfo(bookStatus))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
