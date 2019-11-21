import React, { ReactElement } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
interface Row {
  id: string;
  label: string;
  books: any;
}

interface IProps {
  row: Row;
  listId: string;
  listType?: string;
  internalScroll?: boolean;
  isCombineEnable?: boolean;
}

const BookList: React.FC<IProps> = ({
  listId,
  listType,
  row
}: IProps): ReactElement => {
  return (
    <Droppable
      droppableId={listId}
      type={listType}
      direction="horizontal"
      isCombineEnabled={false}
    >
      {dropProvided => (
        <div {...dropProvided.droppableProps}>
          <div
            style={{
              display: "flex",
              backgroundColor: "white",
              margin: 20,
              minHeight: 150
            }}
            ref={dropProvided.innerRef}
          >
            {row.books.map((book: any, index: any) => (
              <Draggable
                key={book.book.thumbnail}
                draggableId={book.book.thumbnail}
                index={index}
              >
                {dragProvided => (
                  <div
                    {...dragProvided.dragHandleProps}
                    {...dragProvided.draggableProps}
                    ref={dragProvided.innerRef}
                  >
                    <img
                      style={{
                        width: 120,
                        height: 174,
                        margin: 7,
                        boxShadow: "inset 0 -3em 3em rgba(0,0,0,0.1)"
                      }}
                      src={book.book.thumbnail}
                    />
                  </div>
                )}
              </Draggable>
            ))}

            {dropProvided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default BookList;
