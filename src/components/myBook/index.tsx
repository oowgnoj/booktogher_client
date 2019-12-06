import React, { useState, useEffect, ReactElement, useRef } from "react";
import { connect } from "react-redux";

import "./myBook.css";

import {
  IUserInfo,
  IBookToRead,
  IBookReading,
  IBookFinished
} from "./../shared/Types";

import NavBar from "./NavBar";
import BookEntry from "./BookEntry";
import BookHistory from "./BookHistory";
import BookSelect from "./../writeCuration/BookSelect";
import { updateUserInfo } from "../../Redux/modules/user";
import { modifyForm } from "./../shared/helper";
import moment from "moment";

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
  const [showBookHistory, setBookHistory] = useState<string>("close");

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
  let temp: ReactElement = <span style={{ display: "inline-block" }}></span>;
  const handleSearchBox = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    showSearchBook("open");
  };
  if (searchBook === "open") {
    temp = (
      <BookSelect
        addBooks={addBooks}
        close={() => {
          showSearchBook("close");
        }}
      />
    );
  }

  // 독서 history
  const handleshowBookHistory = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setBookHistory("open");
    setStatus("open");
  };

  const getImgBookId = (bookInfo: any): void => {
    const deletedBook = userBooks.map(array => {
      return array.filter((obj: any) => {
        return obj.book._id.toString() !== bookInfo._id;
      });
    });
    props.updateUserInfo(modifyForm(deletedBook));
  };

  // change user's book status
  const getCurrentBookID = (
    bookInfo: any,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void => {
    changeBookStatus(bookInfo._id, e.currentTarget.id);
  };

  const changeBookStatus = (bookId: string, target: string): void => {
    let tempObj: string = "";
    let tempStart: string = "";
    const newUserBooks = userBooks.map(array => {
      return array.filter((obj: any) => {
        if (obj.book._id.toString() === bookId.toString()) {
          tempObj = obj.book;
          tempStart = obj.start;
        }
        return obj.book._id.toString() !== bookId.toString();
      });
    });
    let index: number = 100;
    let today = moment().format("MM/DD/YYYY");

    if (target === "to_read") {
      index = 0;
      newUserBooks[index].push({ book: tempObj });
    } else if (target === "reading") {
      index = 1;
      newUserBooks[index].push({ book: tempObj, start: today });
    } else if (target === "finished") {
      index = 2;
      newUserBooks[index].push({ book: tempObj, start: tempStart, end: today });
    }

    setUserBooks([...newUserBooks]);
    props.updateUserInfo(modifyForm(newUserBooks));
  };

  // patch modified user book status

  const mounted: React.MutableRefObject<boolean | undefined> = useRef<
    boolean
  >();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setUserBooks([
        props.user.to_read,
        props.user.reading,
        props.user.finished
      ]);
    }
  }, [props.user]);

  // handle active tab
  const handleActive = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void => {
    setStatus(e.currentTarget.id);
    setBookHistory("close");
  };

  // rendering :  need refactoring
  let whichBookRender: ReactElement;

  if (bookStatus === "to_read") {
    whichBookRender = userBooks[0].map((el: IBookToRead) => {
      return (
        <BookEntry
          toRead={el}
          getCurrentBookID={getCurrentBookID}
          getImgBookId={getImgBookId}
        />
      );
    });
  } else if (bookStatus === "reading") {
    whichBookRender = userBooks[1].map((el: IBookReading) => {
      return (
        <BookEntry
          reading={el}
          getCurrentBookID={getCurrentBookID}
          getImgBookId={getImgBookId}
        />
      );
    });
  } else if (bookStatus === "finished") {
    whichBookRender = userBooks[2].map((el: IBookFinished) => {
      return (
        <BookEntry
          finished={el}
          getCurrentBookID={getCurrentBookID}
          getImgBookId={getImgBookId}
        />
      );
    });
  } else {
    whichBookRender = <div></div>;
  }

  let tempBookHistory: ReactElement = <div></div>;
  if (showBookHistory === "open") {
    tempBookHistory = <BookHistory User={props.user} />;
  }
  let tempBookAddButton: ReactElement = <div></div>;
  if (bookStatus === "to_read") {
    tempBookAddButton = (
      <div style={{ paddingTop: "10px", display: "inline-block" }}>
        <button id="toRead" onClick={handleSearchBox} className="addBookbutton">
          책 추가
        </button>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <h2 style={{ fontFamily: "Nanum Myeongjo, serif", fontWeight: "bold" }}>
        나의 서재
        <button
          className="uk-button uk-button-default"
          style={{ float: "right" }}
          onClick={handleshowBookHistory}
        >
          나의 독서 history
        </button>
      </h2>
      <hr style={{ marginTop: "5px", marginBottom: "0" }} />
      {temp}
      <NavBar handleActive={handleActive} />
      {tempBookAddButton}
      {whichBookRender}
      {tempBookHistory}
    </div>
  );
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
