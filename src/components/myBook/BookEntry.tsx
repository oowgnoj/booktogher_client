import React, { ReactElement } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IBookToRead, IBookReading, IBookFinished } from "./../shared/Types";
import "./BookEntry.css";

interface IProps {
  toRead?: IBookToRead | null;
  reading?: IBookReading | null;
  finished?: IBookFinished | null;
  getCurrentBookID: (
    bookInfo: object,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => void;

  getImgBookId: (bookInfo: object) => void;
}

const BookEntry: React.FC<IProps> = ({
  toRead,
  reading,
  finished,
  getCurrentBookID,
  getImgBookId
}: IProps): ReactElement => {
  if (toRead) {
    return (
      <div className="content-holder">
        {console.log(toRead)}
        <div className="image-container">
          <img className="book-image" src={toRead.book.thumbnail} />
          <div className="overlay">
            <button
              className="delete-button"
              style={{
                width: "40px",
                height: "40px",
                background: "transparent",
                border: "none"
              }}
              onClick={(
                e: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ): void => {
                getImgBookId(toRead.book);
              }}
            >
              <img
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAAD4CAMAAAB1y+ICAAAAeFBMVEX39/cBAQEAAAD9/f38/Pyamprv7++ioqKFhYW4uLhra2sNDQ3q6uqIiIgFBQWsrKx9fX3a2tpkZGRzc3PGxsZOTk5ZWVkpKSk2Njbi4uKSkpLS0tIfHx9BQUFxcXFiYmKVlZVISEi+vr49PT0wMDDLy8uwsLATExOn+LhaAAAEjUlEQVR4nO2d62LiIBBGdYZGrbbWu9Ferdr3f8NNutt2M2ACQoS23/lLgTnhEkhS6XQAAACAb4Fi7mT1dJhV7DCbYR4dZytq4v56nBfKKcOd3kOjxwfrqyxdG876ZYxdO8o/nY3StFHq2V7kU6ffSXDg8Pbe0eSfzTy5puGrM0z+2vQTk1HTM1VKmUXs6Ku8nGvybrPP0hk0ykulkFnFNviEl34qhcxDImOGb3xVCpnHJGTU/Oxh/58LHZOQCaBSyoxiexQ9bBZCpZBZRm8YNQnSLGXDzGNPzOY5rHmRbMizjtwwxmYhGvYH28kJ8u3uxrh0i90whtFCtNoV28bTcali43l41W2ijxgtpHKt2Hx9lWEtGnkqUwM9oLHd1eWdLtOL2TD8qMXzbBsPj6UMLaK6aOG82IfDU5mZWgy1kVy4EE0c5qKRdiW28WYytZPBOE1F2iRIvXguxWQkghm4BKMOMnvE7TLfyS7mOKvKLhrxDsNPIpZ7t1j4QeSPuCXjhV8sciajfUIujjcIOfhp9Y1d5HiDi01Nza9RNJemHCK/1scsXtycY5JdrS1ePFRjcafrWMB+4/5qoFzGOofiLtM9owDLhfiXiraITQaijZOM2iar4vyUQ96Q08JpeRHsQVFLuDQM95JW6dKNw44vwNPuNqHrH+QyhUuKwCVNfq3L5ge4fOwSkm+Xz0hPt8fdycV4UnxGWfMM6ssldrQNfIRZ09fk/jt14JImcEkTuKQJXNIELmnyi1wCP/v2paH+Opc+DSvcincSt0NbaiO0LmUo6u+K1Lo9maoi98rUY2VJlp/6fmySZ7aFsPgWgq5l/adVDO0kXewzn4zQoYiB5mKfWeDlEgC4mIFLOOBiBi7hgIsZuIQDLmbgEo7LusjPuyR+6Zd04Y3YZIkviMp/pqhwV01XPZE+E+mXdBHfWtOVSBffoshvP9RYpEtXuMAFLnCBC1zgAhe4wAUucIELXOACF7jABS5wgQtc4AIXuMAFLnCBC1zgAhe4wAUucIELXOACF7jABS5wgQtc4AIXuMAFLnCBC1zgAhe4wAUucIELXOACF7jABS5wgQtc4AIXuLi4VNFdqugu9b+DlZCL9ptcCbt0FFeRvycs02UoDen4jTszcAkHXMzAJRxwMWP4ff6AkTajucw8XJ7r10ttE7J+be134bPLtfPK3U5GrqDmoiw6uJxM7It2HDAdPaofycL2l2wY2Sxd2nq48K0szWMmca68Lysnn17B4lD5orzFSFsNt4Hi7Ek7Bb7mWESLEnfSpbg4s10+ap15eayOrHrsdxXPO1Y+CHrFNUdvWmA+LTWCSNfvTvlOlsy5nES5n0pCR/LSo/8U+paGjO9oKVGHNHoZHQPc2dLoZSF6WCmzjC9Dr4Fu0OohtgytwpiULKKOGaJ1Fm7dVKzL4skQPQVdAfLRfC++hEnwnTln0xg2RZ3LPPw2g7fLEwulFkXo5dDKhklxvlldYFn5xf3NpL3NEnM+6C/Xb7dtM9wv+8dcfwkSFu2VSWtc8jEJAAAAAAAAAAAAAAAAAAAi8wdXlLHCed2ryQAAAABJRU5ErkJggg=="
                }
              />
            </button>
            <div className="text"></div>
          </div>
        </div>
        <Link to={`/book/${toRead.book._id}`} className="title-text">
          <p style={{ color: "black" }}>{toRead.book.title}</p>
        </Link>
        <p className="author-text">
          {toRead.book.authors.length > 1
            ? toRead.book.authors[0] + " 외"
            : toRead.book.authors[0]}
        </p>
        <Button
          status={"toRead"}
          bookID={toRead.book}
          getCurrentBookID={getCurrentBookID}
        />
      </div>
    );
  }
  if (reading) {
    return (
      <div className="content-holder">
        <div className="image-container">
          <img className="book-image" src={reading.book.thumbnail} />
          <div className="overlay">
            <button
              className="delete-button"
              style={{
                width: "40px",
                height: "40px",
                background: "transparent",
                border: "none"
              }}
              onClick={(
                e: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ): void => {
                getImgBookId(reading.book);
              }}
            >
              <img
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAAD4CAMAAAB1y+ICAAAAeFBMVEX39/cBAQEAAAD9/f38/Pyamprv7++ioqKFhYW4uLhra2sNDQ3q6uqIiIgFBQWsrKx9fX3a2tpkZGRzc3PGxsZOTk5ZWVkpKSk2Njbi4uKSkpLS0tIfHx9BQUFxcXFiYmKVlZVISEi+vr49PT0wMDDLy8uwsLATExOn+LhaAAAEjUlEQVR4nO2d62LiIBBGdYZGrbbWu9Ferdr3f8NNutt2M2ACQoS23/lLgTnhEkhS6XQAAACAb4Fi7mT1dJhV7DCbYR4dZytq4v56nBfKKcOd3kOjxwfrqyxdG876ZYxdO8o/nY3StFHq2V7kU6ffSXDg8Pbe0eSfzTy5puGrM0z+2vQTk1HTM1VKmUXs6Ku8nGvybrPP0hk0ykulkFnFNviEl34qhcxDImOGb3xVCpnHJGTU/Oxh/58LHZOQCaBSyoxiexQ9bBZCpZBZRm8YNQnSLGXDzGNPzOY5rHmRbMizjtwwxmYhGvYH28kJ8u3uxrh0i90whtFCtNoV28bTcali43l41W2ijxgtpHKt2Hx9lWEtGnkqUwM9oLHd1eWdLtOL2TD8qMXzbBsPj6UMLaK6aOG82IfDU5mZWgy1kVy4EE0c5qKRdiW28WYytZPBOE1F2iRIvXguxWQkghm4BKMOMnvE7TLfyS7mOKvKLhrxDsNPIpZ7t1j4QeSPuCXjhV8sciajfUIujjcIOfhp9Y1d5HiDi01Nza9RNJemHCK/1scsXtycY5JdrS1ePFRjcafrWMB+4/5qoFzGOofiLtM9owDLhfiXiraITQaijZOM2iar4vyUQ96Q08JpeRHsQVFLuDQM95JW6dKNw44vwNPuNqHrH+QyhUuKwCVNfq3L5ge4fOwSkm+Xz0hPt8fdycV4UnxGWfMM6ssldrQNfIRZ09fk/jt14JImcEkTuKQJXNIELmnyi1wCP/v2paH+Opc+DSvcincSt0NbaiO0LmUo6u+K1Lo9maoi98rUY2VJlp/6fmySZ7aFsPgWgq5l/adVDO0kXewzn4zQoYiB5mKfWeDlEgC4mIFLOOBiBi7hgIsZuIQDLmbgEo7LusjPuyR+6Zd04Y3YZIkviMp/pqhwV01XPZE+E+mXdBHfWtOVSBffoshvP9RYpEtXuMAFLnCBC1zgAhe4wAUucIELXOACF7jABS5wgQtc4AIXuMAFLnCBC1zgAhe4wAUucIELXOACF7jABS5wgQtc4AIXuMAFLnCBC1zgAhe4wAUucIELXOACF7jABS5wgQtc4AIXuLi4VNFdqugu9b+DlZCL9ptcCbt0FFeRvycs02UoDen4jTszcAkHXMzAJRxwMWP4ff6AkTajucw8XJ7r10ttE7J+be134bPLtfPK3U5GrqDmoiw6uJxM7It2HDAdPaofycL2l2wY2Sxd2nq48K0szWMmca68Lysnn17B4lD5orzFSFsNt4Hi7Ek7Bb7mWESLEnfSpbg4s10+ap15eayOrHrsdxXPO1Y+CHrFNUdvWmA+LTWCSNfvTvlOlsy5nES5n0pCR/LSo/8U+paGjO9oKVGHNHoZHQPc2dLoZSF6WCmzjC9Dr4Fu0OohtgytwpiULKKOGaJ1Fm7dVKzL4skQPQVdAfLRfC++hEnwnTln0xg2RZ3LPPw2g7fLEwulFkXo5dDKhklxvlldYFn5xf3NpL3NEnM+6C/Xb7dtM9wv+8dcfwkSFu2VSWtc8jEJAAAAAAAAAAAAAAAAAAAi8wdXlLHCed2ryQAAAABJRU5ErkJggg=="
                }
              />
            </button>
            <div className="text">
              {reading.start ? reading.start.slice(5, 10) : ""}
            </div>
          </div>
        </div>
        <Link to={`/book/${reading.book._id}`} className="title-text">
          <p style={{ color: "black" }}>{reading.book.title}</p>
        </Link>
        <p className="author-text">
          {reading.book.authors.length > 1
            ? reading.book.authors[0] + " 외"
            : reading.book.authors[0]}
        </p>
        <Button
          status={"reading"}
          bookID={reading.book}
          getCurrentBookID={getCurrentBookID}
        />
      </div>
    );
  }
  if (finished) {
    return (
      <div className="content-holder">
        <div className="image-container">
          <img className="book-image" src={finished.book.thumbnail} />
          <div className="overlay">
            <button
              className="delete-button"
              style={{
                width: "40px",
                height: "40px",
                background: "transparent",
                border: "none",
                fontSize: "13px"
              }}
              onClick={(
                e: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ): void => {
                getImgBookId(finished.book);
              }}
            >
              <img
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAAD4CAMAAAB1y+ICAAAAeFBMVEX39/cBAQEAAAD9/f38/Pyamprv7++ioqKFhYW4uLhra2sNDQ3q6uqIiIgFBQWsrKx9fX3a2tpkZGRzc3PGxsZOTk5ZWVkpKSk2Njbi4uKSkpLS0tIfHx9BQUFxcXFiYmKVlZVISEi+vr49PT0wMDDLy8uwsLATExOn+LhaAAAEjUlEQVR4nO2d62LiIBBGdYZGrbbWu9Ferdr3f8NNutt2M2ACQoS23/lLgTnhEkhS6XQAAACAb4Fi7mT1dJhV7DCbYR4dZytq4v56nBfKKcOd3kOjxwfrqyxdG876ZYxdO8o/nY3StFHq2V7kU6ffSXDg8Pbe0eSfzTy5puGrM0z+2vQTk1HTM1VKmUXs6Ku8nGvybrPP0hk0ykulkFnFNviEl34qhcxDImOGb3xVCpnHJGTU/Oxh/58LHZOQCaBSyoxiexQ9bBZCpZBZRm8YNQnSLGXDzGNPzOY5rHmRbMizjtwwxmYhGvYH28kJ8u3uxrh0i90whtFCtNoV28bTcali43l41W2ijxgtpHKt2Hx9lWEtGnkqUwM9oLHd1eWdLtOL2TD8qMXzbBsPj6UMLaK6aOG82IfDU5mZWgy1kVy4EE0c5qKRdiW28WYytZPBOE1F2iRIvXguxWQkghm4BKMOMnvE7TLfyS7mOKvKLhrxDsNPIpZ7t1j4QeSPuCXjhV8sciajfUIujjcIOfhp9Y1d5HiDi01Nza9RNJemHCK/1scsXtycY5JdrS1ePFRjcafrWMB+4/5qoFzGOofiLtM9owDLhfiXiraITQaijZOM2iar4vyUQ96Q08JpeRHsQVFLuDQM95JW6dKNw44vwNPuNqHrH+QyhUuKwCVNfq3L5ge4fOwSkm+Xz0hPt8fdycV4UnxGWfMM6ssldrQNfIRZ09fk/jt14JImcEkTuKQJXNIELmnyi1wCP/v2paH+Opc+DSvcincSt0NbaiO0LmUo6u+K1Lo9maoi98rUY2VJlp/6fmySZ7aFsPgWgq5l/adVDO0kXewzn4zQoYiB5mKfWeDlEgC4mIFLOOBiBi7hgIsZuIQDLmbgEo7LusjPuyR+6Zd04Y3YZIkviMp/pqhwV01XPZE+E+mXdBHfWtOVSBffoshvP9RYpEtXuMAFLnCBC1zgAhe4wAUucIELXOACF7jABS5wgQtc4AIXuMAFLnCBC1zgAhe4wAUucIELXOACF7jABS5wgQtc4AIXuMAFLnCBC1zgAhe4wAUucIELXOACF7jABS5wgQtc4AIXuLi4VNFdqugu9b+DlZCL9ptcCbt0FFeRvycs02UoDen4jTszcAkHXMzAJRxwMWP4ff6AkTajucw8XJ7r10ttE7J+be134bPLtfPK3U5GrqDmoiw6uJxM7It2HDAdPaofycL2l2wY2Sxd2nq48K0szWMmca68Lysnn17B4lD5orzFSFsNt4Hi7Ek7Bb7mWESLEnfSpbg4s10+ap15eayOrHrsdxXPO1Y+CHrFNUdvWmA+LTWCSNfvTvlOlsy5nES5n0pCR/LSo/8U+paGjO9oKVGHNHoZHQPc2dLoZSF6WCmzjC9Dr4Fu0OohtgytwpiULKKOGaJ1Fm7dVKzL4skQPQVdAfLRfC++hEnwnTln0xg2RZ3LPPw2g7fLEwulFkXo5dDKhklxvlldYFn5xf3NpL3NEnM+6C/Xb7dtM9wv+8dcfwkSFu2VSWtc8jEJAAAAAAAAAAAAAAAAAAAi8wdXlLHCed2ryQAAAABJRU5ErkJggg=="
                }
              />
            </button>
            <div className="text">
              {finished.start ? finished.start.slice(5, 10) : "시작일 미정"}~
              {finished.end.slice(5, 10)}
            </div>
          </div>
        </div>
        <Link to={`/book/${finished.book._id}`} className="title-text">
          <p style={{ color: "black" }}>{finished.book.title}</p>
        </Link>{" "}
        <p className="author-text">
          {finished.book.authors.length > 1
            ? finished.book.authors[0] + " 외"
            : finished.book.authors[0]}
        </p>
        <Button
          status={"finished"}
          bookID={finished.book}
          getCurrentBookID={getCurrentBookID}
        />
      </div>
    );
  }
  return <div>리스트가 비어있습니다.</div>;
};

export default BookEntry;
