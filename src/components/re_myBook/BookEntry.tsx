import React, { ReactElement } from "react";
import Button from "./../myBook/Button";
import { Link } from "react-router-dom";
import { IBookToRead, IBookReading, IBookFinished } from "./../shared/Types";
import "./../myBook/BookEntry.css";
import BookStats from "../myBook/BookHistory";

/*

1. Props 하나로 통일하면서 위에서 하나로 내려주기, type 도 통일
2. return 되는 부분을 통일한다
  (1) 정확한 차이점?
  
  to_read : text class 
  reading : text라는 class 
  finished : 


  reading 
  {reading.start ? reading.start.slice(5, 10) : ""}

  finished
  {finished.start ? finished.start.slice(5, 10) : "시작일 미정"}~
  {finished.end.slice(5, 10)}
3. 삭제하는 함수 수정하기
 */

interface IProps {
  book: any;
  status: string;

  getCurrentBookID: (
    bookInfo: object,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => void;

  getImgBookId: (bookInfo: object) => void;
}

const BookEntry: React.FC<IProps> = ({
  book,
  status,
  getCurrentBookID,
  getImgBookId
}: IProps): ReactElement => {
  let textInHoverImg: ReactElement;
  switch (status) {
    case "reading":
      textInHoverImg = <div>{book.start ? book.start.slice(5, 10) : ""}</div>;
      break;
    case "finished":
      textInHoverImg = (
        <div>
          {book.start ? book.start.slice(5, 10) : "시작일 미정"}~
          {book.end.slice(5, 10)}
        </div>
      );
      break;
    default:
      textInHoverImg = <div></div>;
  }

  return (
    <div className="content-holder">
      <div className="image-container">
        <img className="book-image" src={book.book.thumbnail} />
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
              getImgBookId(book.book);
            }}
          >
            <img
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAAD4CAMAAAB1y+ICAAAAeFBMVEX39/cBAQEAAAD9/f38/Pyamprv7++ioqKFhYW4uLhra2sNDQ3q6uqIiIgFBQWsrKx9fX3a2tpkZGRzc3PGxsZOTk5ZWVkpKSk2Njbi4uKSkpLS0tIfHx9BQUFxcXFiYmKVlZVISEi+vr49PT0wMDDLy8uwsLATExOn+LhaAAAEjUlEQVR4nO2d62LiIBBGdYZGrbbWu9Ferdr3f8NNutt2M2ACQoS23/lLgTnhEkhS6XQAAACAb4Fi7mT1dJhV7DCbYR4dZytq4v56nBfKKcOd3kOjxwfrqyxdG876ZYxdO8o/nY3StFHq2V7kU6ffSXDg8Pbe0eSfzTy5puGrM0z+2vQTk1HTM1VKmUXs6Ku8nGvybrPP0hk0ykulkFnFNviEl34qhcxDImOGb3xVCpnHJGTU/Oxh/58LHZOQCaBSyoxiexQ9bBZCpZBZRm8YNQnSLGXDzGNPzOY5rHmRbMizjtwwxmYhGvYH28kJ8u3uxrh0i90whtFCtNoV28bTcali43l41W2ijxgtpHKt2Hx9lWEtGnkqUwM9oLHd1eWdLtOL2TD8qMXzbBsPj6UMLaK6aOG82IfDU5mZWgy1kVy4EE0c5qKRdiW28WYytZPBOE1F2iRIvXguxWQkghm4BKMOMnvE7TLfyS7mOKvKLhrxDsNPIpZ7t1j4QeSPuCXjhV8sciajfUIujjcIOfhp9Y1d5HiDi01Nza9RNJemHCK/1scsXtycY5JdrS1ePFRjcafrWMB+4/5qoFzGOofiLtM9owDLhfiXiraITQaijZOM2iar4vyUQ96Q08JpeRHsQVFLuDQM95JW6dKNw44vwNPuNqHrH+QyhUuKwCVNfq3L5ge4fOwSkm+Xz0hPt8fdycV4UnxGWfMM6ssldrQNfIRZ09fk/jt14JImcEkTuKQJXNIELmnyi1wCP/v2paH+Opc+DSvcincSt0NbaiO0LmUo6u+K1Lo9maoi98rUY2VJlp/6fmySZ7aFsPgWgq5l/adVDO0kXewzn4zQoYiB5mKfWeDlEgC4mIFLOOBiBi7hgIsZuIQDLmbgEo7LusjPuyR+6Zd04Y3YZIkviMp/pqhwV01XPZE+E+mXdBHfWtOVSBffoshvP9RYpEtXuMAFLnCBC1zgAhe4wAUucIELXOACF7jABS5wgQtc4AIXuMAFLnCBC1zgAhe4wAUucIELXOACF7jABS5wgQtc4AIXuMAFLnCBC1zgAhe4wAUucIELXOACF7jABS5wgQtc4AIXuLi4VNFdqugu9b+DlZCL9ptcCbt0FFeRvycs02UoDen4jTszcAkHXMzAJRxwMWP4ff6AkTajucw8XJ7r10ttE7J+be134bPLtfPK3U5GrqDmoiw6uJxM7It2HDAdPaofycL2l2wY2Sxd2nq48K0szWMmca68Lysnn17B4lD5orzFSFsNt4Hi7Ek7Bb7mWESLEnfSpbg4s10+ap15eayOrHrsdxXPO1Y+CHrFNUdvWmA+LTWCSNfvTvlOlsy5nES5n0pCR/LSo/8U+paGjO9oKVGHNHoZHQPc2dLoZSF6WCmzjC9Dr4Fu0OohtgytwpiULKKOGaJ1Fm7dVKzL4skQPQVdAfLRfC++hEnwnTln0xg2RZ3LPPw2g7fLEwulFkXo5dDKhklxvlldYFn5xf3NpL3NEnM+6C/Xb7dtM9wv+8dcfwkSFu2VSWtc8jEJAAAAAAAAAAAAAAAAAAAi8wdXlLHCed2ryQAAAABJRU5ErkJggg=="
              }
            />
          </button>
          <div className="text">{textInHoverImg}</div>
        </div>
      </div>
      <Link to={`/book/${book.book._id}`} className="title-text">
        <p style={{ color: "black" }}>{book.book.title}</p>
      </Link>
      <p className="author-text">
        {book.book.authors.length > 1
          ? book.book.authors[0] + " 외"
          : book.book.authors[0]}
      </p>
      <Button
        status={status}
        bookID={book.book}
        getCurrentBookID={getCurrentBookID}
      />
    </div>
  );

  return <div>{console.log(book, status)}리스트가 비어있습니다.</div>;
};

export default BookEntry;
