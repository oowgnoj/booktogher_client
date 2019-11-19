import * as React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderbooks } from "./reorder";
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

const App: React.FC<IProps> = ({ User }) => {
  const [bookList, setBookList] = React.useState<IBooks>(userBookData);
  const bookListFromProps = {
    to_read: User.to_read,
    reading: User.reading,
    finished: User.finished
  };

  return (
    <div>
      <DragDropContext
        onDragEnd={({ destination, source }) => {
          // // dropped outside the list
          if (!destination) {
            return;
          }
          setBookList(reorderbooks(bookList, source, destination));
        }}
      >
        <div>
          <BookEntry />
          {/* {Object.entries(bookList).map(([k, v]) => (
            <BookEntry
              internalScroll
              key={k}
              listId={k}
              listType="CARD"
              books={bookList}
            />
          ))} */}
        </div>
      </DragDropContext>
    </div>
  );
};

export default App;

const App = () => {
  const [rows, setRows] = React.useState([
    { id: aId, label: "a", urls: [] },
    {
      id: unrankedId,
      label: "unranked",
      urls: [
        "https://www.ssbwiki.com/images/thumb/b/b3/Olimar_SSBU.png/500px-Olimar_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/b/b0/Olimar-Alt4_SSBU.png/500px-Olimar-Alt4_SSBU.png"
      ]
    }
  ]);

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => {
        // // dropped outside the list
        if (!destination) {
          return;
        }

        setRows(reorderRows(rows, source, destination));
      }}
    >
      <div>
        <button
          onClick={() => {
            setRows([
              {
                id: generate(),
                label: "",
                urls: []
              },
              ...rows
            ]);
          }}
        >
          add row
        </button>
        {rows.map(row => (
          <AuthorList
            internalScroll
            key={row.id}
            listId={row.id}
            listType="CARD"
            row={row}
          />
        ))}
      </div>
    </DragDropContext>
  );
};
