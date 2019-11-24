import React, { ReactElement } from "react";
import { Redirect, Route } from "react-router-dom";
import { ICuration, ICurationsPost, IReview } from "../shared/Types";

interface IBook {
  _id: string;
  thumbnail: string;
  authors: string;
  title: string;
}

interface IBody {
  title: string;
  contents: string;
  books: string[];
  reviews: string[];
}

interface ISelectedBook {
  _id: string;
  title: string;
  authors: string;
  thumbnail: string;
}

interface ISelectedReview {
  reviewId: string;
  reviewTitle: string;
  reviewContents: string;
  reviewAuthor: string;
  reviewAuthorImage: string;
}

interface IState {
  title: string;
  contents: string;
  books: IBook[];
  reviews: IReview[];
  bookModal: boolean;
  reviewModal: boolean;
  isPosted: boolean;
  curationId: string;
}

class ReadCuration extends React.Component<{}, IState> {
  constructor({}) {
    super({});
  }

  public render(): ReactElement {
    return <div className="writecuration"></div>;
  }
}

export default ReadCuration;
