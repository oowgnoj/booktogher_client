import React, { ReactElement, useState } from "react";
import { deleteLikes, postLikes } from "../re_shared/fetch";

interface IProps {
  page: string;
  contentId: string;
  userId: string | null;
  likes: string[];
}

const Likes: React.FC<IProps> = ({
  page,
  contentId,
  userId,
  likes
}: IProps): ReactElement => {
  const initialHeartStatus: boolean = userId
    ? likes.includes(userId)
      ? true
      : false
    : false;

  const [isClicked, setClicked] = useState<boolean>(initialHeartStatus);
  const [likesArray, setLikes] = useState<string[]>(likes);

  const handleClick = (): void => {
    if (userId) {
      if (likes.includes(userId)) {
        deleteLikes(() => setClicked(!isClicked), contentId);
        likesArray.splice(likesArray.indexOf(userId), 1);
        setLikes(likesArray);
      } else {
        postLikes(() => setClicked(!isClicked), contentId);
        likesArray.push(userId);
        setLikes(likesArray);
      }
    }
  };

  return (
    <div>
      {console.log(`[userId : ${userId}], contentId : ${contentId}`, likes)};
      <span
        uk-icon="icon: heart; ratio: 1.5"
        onClick={handleClick}
        className={`${page}_likes_heart ${isClicked ? "full" : "empty"}`}
      ></span>
      <span className={`${page}_likes_count`}>{likesArray.length}</span>
    </div>
  );
};

export default Likes;
