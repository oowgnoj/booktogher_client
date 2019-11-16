import React, { ReactElement } from "react";

//User
interface IbeforeRead {
  id: number;
  authors: string[];
  thumbnail: string;
  title: string;
}
interface IstartRead {
  id: number;
  authors: string[];
  thumbnail: string;
  title: string;
  start: string;
  goal: string;
}
interface IfinishRead {
  id: number;
  authors: string[];
  thumbnail: string;
  title: string;
  start: string;
  end: string;
}
interface IuserInfo {
  id: number;
  name: string;
  email: string;
  image: string;
  profile: string;
  to_read: IbeforeRead[];
  reading: IstartRead[];
  finished: IfinishRead[];
  numBooksGoal: number;
  numReviewsGoal: number;
}

type IuserInfoObj = { [key: string]: IuserInfo };

function Books(props: { data: IuserInfoObj }): ReactElement {
  console.log(props.data);
  return <div>'hello'</div>;
}

export default Books;
