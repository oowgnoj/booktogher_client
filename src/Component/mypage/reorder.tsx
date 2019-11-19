import { DraggableLocation } from "react-beautiful-dnd";
import { IBookToRead, IBookReading, IBookFinished } from "./../shared/Types";

interface IBooks {
  toRead: IBookToRead[];
  reading: IBookReading[];
  finished: IBookFinished[];
}

interface BookList {}
// a little function to help us with reordering the result
export const reorder = (
  list: any[],
  startIndex: number,
  endIndex: number
): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const reorderbooks = (
  books: { [key: string]: string[] },
  source: DraggableLocation,
  destination: DraggableLocation
) => {
  const current = [...books[source.droppableId]];
  const next = [...books[destination.droppableId]];
  const target = current[source.index];

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index);
    return {
      ...books,
      [source.droppableId]: reordered
    };
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1);
  // insert into next
  next.splice(destination.index, 0, target);

  return {
    ...books,
    [source.droppableId]: current,
    [destination.droppableId]: next
  };
};
export default "hi";
