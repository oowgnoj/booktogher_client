import React, { ReactElement } from "react";

interface Ibook {
  id: number;
  authors: string[];
  thumbnail: string;
  title: string;
}
interface IbookReading extends Ibook {
  start: string;
  goal: string;
}
interface IbookFinished extends Ibook {
  start: string;
  end: string;
}

interface IuserInfo {
  id: number;
  name: string;
  email: string;
  image: string;
  profile: string;
  to_read: Ibook[];
  reading: IbookReading[];
  finished: IbookFinished[];
  numBooksGoal: number;
  numReviewsGoal: number;
}

function Info(props: IuserInfo): ReactElement {
  return (
    <div className="uk-panel">
      <img
        className="uk-align-left uk-margin-remove-adjacent"
        src="https://image.shutterstock.com/image-vector/people-icon-260nw-522300817.jpg"
        width="225"
        height="150"
        alt="Example image"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}

export default Info;
