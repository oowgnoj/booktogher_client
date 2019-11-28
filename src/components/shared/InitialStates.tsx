import {
  IAuthor,
  ICuration,
  IReview,
  IReviewBook,
  IReviewSearchWithBooks
} from "./Types";

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

export const reviewsBooks: IReviewBook[][] = [
  [
    {
      _id: "",
      thumbnail: "",
      title: ""
    }
  ]
];

export const selectedReviews: IReviewSearchWithBooks[] = [
  {
    _id: "",
    author: {
      _id: "",
      image: "",
      name: "",
      profile: ""
    },
    books: [{ _id: "", title: "" }],
    contents: "",
    likes: [""],
    published: true,
    thumbnail: "",
    title: ""
  }
];
