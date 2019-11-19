import React from "react";
import "../../../node_modules/uikit/dist/css/uikit.css";
import { useDrag, DragSourceMonitor } from "react-dnd";
import ItemTypes from "./ItemTypes";

interface IBook {
  id: string;
  authors: string[];
  thumbnail: string;
  title: string;
}
interface IBookReading extends IBook {
  start: string;
  goal: string;
}
interface IBookFinished extends IBook {
  start: string;
  end: string;
}
interface IUserInfo {
  id: string;
  name: string;
  email: string;
  image: string;
  profile: string;
  to_read: IBook[];
  reading: IBookReading[];
  finished: IBookFinished[];
  numBooksGoal: number;
  numReviewsGoal: number;
}

interface Props {
  Info: IBook;
}

const ReviewEntry: React.FC<Props> = ({ Info }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { Info, type: ItemTypes.TO_READ },
    end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={drag} style={{ opacity }}>
      <img src={Info.thumbnail} style={{ width: 150, height: 200 }} />
    </div>
  );
};

export default ReviewEntry;
