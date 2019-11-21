import { DraggableLocation } from "react-beautiful-dnd";

interface Row {
  id: string;
  label: string;
  books: any;
}

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

export const reorderRows = (
  rows: Row[],
  source: DraggableLocation,
  destination: DraggableLocation
) => {
  const current = rows.find(x => x.id === source.droppableId)!;
  const next = rows.find(x => x.id === destination.droppableId)!;
  const target = current.books[source.index];

  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current.books, source.index, destination.index);
    return rows.map(x =>
      x.id === current.id ? { ...x, books: reordered } : x
    );
  }
  current.books.splice(source.index, 1);
  next.books.splice(destination.index, 0, target);

  return rows.map(x => {
    if (current.id === x.id) {
      return {
        ...x,
        books: current.books
      };
    } else if (next.id === x.id) {
      return {
        ...x,
        books: next.books
      };
    }
    return x;
  });
};
