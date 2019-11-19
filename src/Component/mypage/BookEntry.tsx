import React from "react";
import { Droppable, Draggable, DroppableProvided } from "react-beautiful-dnd";

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

interface Props {
  book: IBooks;
  listId: string;
  listType?: string;
  internalScroll?: boolean;
  isCombineEnabled?: boolean;
}

const BookEntry: React.FC = ({ book }) => {
  return console.log(book);
};
// <Droppable
//   droppableId={listId}
//   type={listType}
//   direction="horizontal"
//   isCombineEnabled={false}
// >
//   {dropProvided => (
//     <div {...dropProvided.droppableProps}>
//       <div>
//         <div>
//           <div style={{ display: "flex" }} ref={dropProvided.innerRef}>
//             {book.map((color, index) => (
//               <Draggable key={color} draggableId={color} index={index}>
//                 {dragProvided => (
//                   <div
//                     {...dragProvided.dragHandleProps}
//                     {...dragProvided.draggableProps}
//                     ref={dragProvided.innerRef}
//                   >
//                     <div style={{ backgroundColor: color }}>{color}</div>
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {dropProvided.placeholder}
//           </div>
//         </div>
//       </div>
//     </div>
//   )}
// </Droppable>
//

export default BookEntry;
// export default "HELLO";
