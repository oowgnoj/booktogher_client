import book1 from "./assets/ph_1.jpeg";
import book2 from "./assets/ph_2.jpeg";
import book3 from "./assets/ph_3.jpeg";
import book4 from "./assets/ph_4.jpeg";
import book5 from "./assets/ph_5.jpeg";
import book6 from "./assets/ph_6.jpeg";
import { string } from "prop-types";

interface IBook {
  _id: string;
  authors: string;
  thumbnail: string;
  title: string;
}

export const placeholders: IBook[] = [
  {
    _id: "1",
    authors: "김연수",
    thumbnail: book1,
    title: "청춘의 문장들"
  },
  {
    _id: "2",
    authors: "도로테드몽프레",
    thumbnail: book2,
    title: "깜깜한 밤"
  },
  {
    _id: "3",
    authors: "알베르 까뮈",
    thumbnail: book3,
    title: "이방인"
  },
  {
    _id: "4",
    authors: "한나 아렌트",
    thumbnail: book4,
    title: "어두운 시대의 사람들"
  },
  {
    _id: "5",
    authors: "한나 아렌트",
    thumbnail: book5,
    title: "인간의 조건"
  },
  {
    _id: "6",
    authors: "안경숙",
    thumbnail: book6,
    title: "사랑이 나에게"
  }
];
