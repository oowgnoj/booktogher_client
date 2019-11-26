import { IAuthor, ICuration, IReview } from "./Types";

export const author: IAuthor = {
  _id: "",
  image: "",
  name: "",
  profile: ""
};

export const curations: ICuration[] = [
  {
    _id: "",
    author,
    contents: "",
    likes: [""],
    title: ""
  }
];

export const reviews: IReview[] = [
  {
    _id: "",
    author,
    contents: "",
    likes: [""],
    published: true,
    thumbnail: "",
    title: ""
  }
];
