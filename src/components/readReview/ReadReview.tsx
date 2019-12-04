import React, { ReactElement } from "react";
import { RouteComponentProps } from "react-router";
import Review from "./Review";
import BookInfo from "./BookInfo";
import RecoReview from "./RecoReview";
import UserInfo from "./UserInfo";
import CleanLoading from "../shared/CleanLoading";

import { IReview, IBook, IRating } from "./../shared/Types";
import {
  fetchReview,
  fetchReviewBook,
  fetchBookReviewList
} from "./fetchReview";

interface IMatchParams {
  id: string;
}

interface IProps {
  review: IReview;
  bookList: IBook[];
  bookId: string[];
}

class ReadReview extends React.Component<
  RouteComponentProps<IMatchParams>,
  IProps
> {
  constructor(props: any) {
    super(props);
    this.state = {
      bookList: [
        {
          _id: "",
          authors: [],
          contents: "",
          thumbnail: "",
          title: ""
        }
      ],
      review: {
        _id: "",
        author: {
          _id: "",
          image: "",
          name: "",
          profile: ""
        },
        contents: "",
        likes: [],
        published: true,
        thumbnail: "",
        title: ""
      },
      bookId: [""]
    };
  }
  public componentDidMount(): void {
    const setStateReview = (res: any): void => {
      this.setState({ review: res });
    };
    fetchReview(setStateReview, this.props.match.params.id);

    const setStateBook = (res: any): void => {
      this.setState({ bookList: res });
      res.map((book: IBook) => {
        this.setState({ bookId: [book._id] });
      });
    };
    fetchReviewBook(setStateBook, this.props.match.params.id);
  }

  public componentDidUpdate(prevProps: any): void {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const setStateReview = (res: any): void => {
        this.setState({ review: res });
      };
      fetchReview(setStateReview, this.props.match.params.id);

      const setStateBook = (res: any): void => {
        this.setState({ bookList: res });
        res.map((book: IBook) => {
          this.setState({ bookId: [book._id] });
        });
      };
      fetchReviewBook(setStateBook, this.props.match.params.id);
    }
  }

  public render(): any {
    window.scroll(0, 0);
    return (
      <div>
        {this.state.review._id === "" ? (
          <CleanLoading />
        ) : (
          <div>
            <Review review={this.state.review} bookList={this.state.bookList} />
            <BookInfo bookList={this.state.bookList} />
            <RecoReview
              bookId={this.state.bookId}
              reviewId={this.state.review._id}
            />
            {/* <UserInfo review={this.state.review} /> */}
          </div>
        )}
      </div>
    );
  }
}

export default ReadReview;
