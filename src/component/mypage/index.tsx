import React, { ReactElement, useState } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import { fakeReviews, fakeUser } from "../../fakeData/fake";
import "./../../../node_modules/uikit/dist/css/uikit.css";
import UserInfo from "../shared/userInfo";
import NavBar from "./navBar";
import Reviews from "./reviews";
import Books from "./books";
import ProgressBar from "./progressBar";

// Books
interface IAuthorInfo {
  id: string;
  image: string;
  name: string;
  profile: string;
}

interface IUserReview {
  id: string;
  author: IAuthorInfo;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}

// Users
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

type activeCompt = ReactElement;
export const Mypage: React.FC = (): ReactElement => {
  const [myInfo, setInfo] = useState<IUserInfo>(fakeUser);
  const [myReview, setReview] = useState<IUserReview[]>(fakeReviews);
  const [active, setActive] = useState<string>("review");

  let activeComp: ReactElement = <Reviews userReviews={fakeReviews}></Reviews>;

  const handleActive = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) =>
    setActive(e.currentTarget.id);

  if (active === "review") {
    activeComp = <Reviews userReviews={fakeReviews}></Reviews>;
  } else if (active === "books") {
    activeComp = (
      <DndProvider backend={HTML5Backend}>
        <Books Info={myInfo}></Books>{" "}
      </DndProvider>
    );
  } else if (active === "stats") {
    return <ProgressBar UserInfo={myInfo}></ProgressBar>;
  }

  return (
    <div>
      <UserInfo userInfo={myInfo}></UserInfo>
      <NavBar handleActive={handleActive} />
      {activeComp}{" "}
    </div>
  );
};

export default Mypage;

// import React, { useState, useCallback } from "react";
// import { NativeTypes } from "react-dnd-html5-backend";
// import Dustbin from "./Dustbin";
// import Box from "./Box";
// import ItemTypes from "./ItemTypes";
// import update from "immutability-helper";

// interface DustbinState {
//   accepts: string[];
//   lastDroppedItem: any;
// }

// interface BoxState {
//   name: string;
//   type: string;
// }

// export interface DustbinSpec {
//   accepts: string[];
//   lastDroppedItem: any;
// }
// export interface BoxSpec {
//   name: string;
//   type: string;
// }
// export interface ContainerState {
//   droppedBoxNames: string[];
//   dustbins: DustbinSpec[];
//   boxes: BoxSpec[];
// }

// const Container: React.FC = () => {
//   const [dustbins, setDustbins] = useState<DustbinState[]>([
//     { accepts: [ItemTypes.GLASS], lastDroppedItem: null },
//     { accepts: [ItemTypes.FOOD], lastDroppedItem: null },
//     {
//       accepts: [ItemTypes.PAPER, ItemTypes.GLASS, NativeTypes.URL],
//       lastDroppedItem: null
//     },
//     { accepts: [ItemTypes.PAPER, NativeTypes.FILE], lastDroppedItem: null }
//   ]);

//   const [boxes] = useState<BoxState[]>([
//     { name: "Bottle", type: ItemTypes.GLASS },
//     { name: "Banana", type: ItemTypes.FOOD },
//     { name: "Magazine", type: ItemTypes.PAPER }
//   ]);

//   const [droppedBoxNames, setDroppedBoxNames] = useState<string[]>([]);

//   function isDropped(boxName: string) {
//     return droppedBoxNames.indexOf(boxName) > -1;
//   }

//   const handleDrop = useCallback(
//     (index: number, item: { name: string }) => {
//       const { name } = item;
//       setDroppedBoxNames(
//         update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
//       );
//       setDustbins(
//         update(dustbins, {
//           [index]: {
//             lastDroppedItem: {
//               $set: item
//             }
//           }
//         })
//       );
//     },
//     [droppedBoxNames, dustbins]
//   );

//   return (
//     <div>
//       <div style={{ overflow: "hidden", clear: "both" }}>
//         {dustbins.map(({ accepts, lastDroppedItem }, index) => (
//           <Dustbin
//             accept={accepts}
//             lastDroppedItem={lastDroppedItem}
//             onDrop={item => handleDrop(index, item)}
//             key={index}
//           />
//         ))}
//       </div>

//       <div style={{ overflow: "hidden", clear: "both" }}>
//         {boxes.map(({ name, type }, index) => (
//           <Box
//             name={name}
//             type={type}
//             isDropped={isDropped(name)}
//             key={index}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Container;
// export default "hi";
