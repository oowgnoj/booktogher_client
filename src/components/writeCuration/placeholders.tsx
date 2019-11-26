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

interface IReview {
  _id: string;
  author: IAuthor;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}

interface IAuthor {
  _id: string;
  image: string;
  name: string;
  profile: string;
}

export const placeholdersReview: IReview[] = [
  {
    _id: "ObjectId",
    author: {
      _id: "12345",
      image:
        "https://icons-for-free.com/iconfiles/png/128/anonymous+app+contacts+open+line+profile+user+icon-1320183042822068474.png",
      name: "정승권",
      profile: "저는 이런..."
    },
    contents:
      "인간은 변할 수 있고, 누구나 행복해 질 수 있다. 그렇다 서평 테스트 길게 들어가면 더 좋을 것 같다. 벌써 2차 배포까지 와버렸다",
    likes: ["userid1", "userid2"],
    published: true,
    thumbnail: "blue",
    title: "미움받을 용기에 대해"
  }
];

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
