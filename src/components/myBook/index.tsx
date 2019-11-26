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

interface IProps {
  User: IUserInfo;
  updateUserInfo: (data: any) => void;
}

const Books: React.FC<IProps> = ({
  User,
  updateUserInfo
}: IProps): ReactElement => {
  const toRead: any = User.to_read;
  const reading: any = User.reading;
  const finished: any = User.finished;

  const [userBooks, setUserBooks] = React.useState([toRead, reading, finished]);
  const [bookStatus, setStatus] = useState<string>("to_read");
  const [searchBook, showSearchBook] = useState<string>("close");
  console.log("user 초기값", userBooks);
  const handleSearchBox = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    showSearchBook("open");
    requestUserInfo();
  };
  // this.state.books.length !== 0 && this.state.books[0]._id
  // ? this.state.books.concat(selectedBooks)
  // : this.state.books.slice(1).concat(selectedBooks);
  const addBooks = (newBooks: any): any => {
    const newBookAdded: any = [...userBooks];
    for (const book of newBooks) {
      newBookAdded[0].push({ book });
    }
    setUserBooks(newBookAdded);
    showSearchBook("close");

    const toReadSimple = newBookAdded[0].map((el: any) => {
      return { book: el.book._id };
    });
    const readingSimple = newBookAdded[1].map((el: any) => {
      return { book: el.book._id, start: el.book.start, goal: el.book.goal };
    });
    const finishedSimple = newBookAdded[2].map((el: any) => {
      return { book: el.book._id, start: el.book.start, end: el.book.end };
    });

    const data = {
      to_read: toReadSimple,
      reading: readingSimple,
      finished: finishedSimple
    };
    console.log(data, " 기존 + 새로운 값 ");
    console.log(User, " 기존 + 새로운 값 ");
    updateUserInfo(data);
    fetch("http://booktogether.ap-northeast-2.elasticbeanstalk.com/user")
      .then(res => res.json())
      .then(res => console.log(res));
  };

  // search box
  // let temp: ReactElement = <p></p>;
  let temp: ReactElement = <p></p>;
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
  };

  // patch modified user book status

  // useEffect(() => {
  //   // to - read
  //   const toReadSimple = userBooks[0].slice[1].map((el: any) => {
  //     return { book: el.book._id };
  //   });
  //   // reading
  //   const readingSimple = userBooks[1].slice[1].map((el: any) => {
  //     return { book: el.book._id, start: el.book.start, goal: el.book.goal };
  //   });
  //   const finishedSimple = userBooks[1].slice[1].map((el: any) => {
  //     return { book: el.book._id, start: el.book.start, end: el.book.end };
  //   });

  //   const data = {
  //     to_read: toReadSimple,
  //     reading: readingSimple,
  //     finished: finishedSimple
  //   };
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
        {console.log("userbook rendering", userBooks[0])}
        {temp}
        <button id="toRead" onClick={handleSearchBox}>
          책 추가
        </button>
        <ProgressBar UserInfo={User} />
        <NavBar handleActive={handleActive} />
        {userBooks[0].map((el: IBookToRead) => {
          return <BookEntry toRead={el} getCurrentBookID={getCurrentBookID} />;
        })}
      </div>
    );
  } else if (bookStatus === "reading") {
    return (
      <div className="wrapper">
        <ProgressBar UserInfo={User} />
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
        <ProgressBar UserInfo={User} />
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
    User: state.user.User
  };
}

function mapDispatchToProps(dispatch: any): any {
  return {
    updateUserInfo: (bookStatus: any): void =>
      dispatch(updateUserInfo(bookStatus)),
    requestUserInfo: (): void => dispatch(requestUserInfo)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
