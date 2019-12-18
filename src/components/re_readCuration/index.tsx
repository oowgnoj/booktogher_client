import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import BooksList from "./BooksList";
import ReviewsList from "./ReviewsList";
import UserHistoryModal from "../re_shared/UserHistoryModal";
import CleanLoading from "../re_shared/CleanLoading";
import {
  IBook,
  ICuration,
  IReview,
  IBookReview,
  IUserInfo
} from "../shared/Types";

import {
  fetchCuration,
  fetchBooks,
  fetchReviews,
  fetchDelete
} from "../readCuration/fetchReadCuration";
import "./index.css";
import { books, curation } from "../shared/InitialStates";
import LikesButton from "../re_sharedComponents/likes";
import EditButton from "../re_sharedComponents/routerButton";
import AuthorInfo from "../re_sharedComponents/userInfo";

interface IState {
  curation: ICuration;
  books: IBook[];
  reviews: IReview[];
  isDeleted: boolean;
  historyModal: boolean;
  reviewsBooks: IBookReview[][];
}

type IMatchParams = {
  id: string;
};

type IParams = RouteComponentProps<IMatchParams> & {
  user: IUserInfo;
};

class ReadCuration extends React.Component<IParams, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      curation,
      books,
      reviews: [],
      reviewsBooks: [],
      isDeleted: false,
      historyModal: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleHistoryClick = this.handleHistoryClick.bind(this);
    this.detectHistoryModal = this.detectHistoryModal.bind(this);
  }

  public initialFetches(): void {
    window.scroll(0, 0);
    const getCurationInfo = (result: ICuration): void => {
      this.setState({ curation: result });
    };
    const getBookInfo = (result: IBook[]): void => {
      this.setState({ books: result });
    };
    const getReviewInfo = (
      reviews: IReview[],
      books: IBookReview[][]
    ): void => {
      this.setState({ reviews, reviewsBooks: books });
    };

    fetchCuration(getCurationInfo, this.props.match.params.id);
    fetchBooks(getBookInfo, this.props.match.params.id);
    fetchReviews(getReviewInfo, this.props.match.params.id);
  }

  public componentDidMount(): void {
    this.initialFetches();
  }

  public componentDidUpdate(prevProps: any): void {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.initialFetches();
      this.setState({ historyModal: false });
    }
  }

  public handleDelete(): void {
    const deleted = (): void => {
      this.setState({ isDeleted: true });
    };
    fetchDelete(deleted, this.props.match.params.id);
  }

  public handleHistoryClick(): void {
    this.setState({ historyModal: true });
  }

  public detectHistoryModal(): void {
    this.setState({ historyModal: false });
  }

  public render(): ReactElement {
    const { curation, books, reviews, reviewsBooks } = this.state;
    const { user } = this.props;
    const { author } = curation;
    const { historyModal } = this.state;
    return (
      <div>
       {/*  <CleanLoading display={Boolean(curation._id)} />
        <div className="readCuration">
          <UserHistoryModal
            author={this.state.curation.author}
            handleClose={this.detectHistoryModal}
            display={historyModal}
          /> */}
           {this.state.curation._id === "" ? (
          <CleanLoading  display={Boolean(curation._id)}/>
        ) : (
          <div className="readCuration">
            {this.state.historyModal ? (
              <UserHistoryModal
                author={this.state.curation.author}
                handleClose={this.detectHistoryModal}
                display={historyModal}
              />
            ) : null}

          <div className="readCuration_header_likes">
            <LikesButton
              page="readCuration"
              contentId={curation._id}
              userId={user._id}
              likes={curation.likes}
            />
          </div>
          {curation.author._id === this.props.user._id ? (
            <div>
              <EditButton
                page="readCuration"
                path="editCuration"
                param={curation._id}
                btnName="수정"
              />
              <div className="readCuration_header_delete">
                <button
                  className="uk-button uk-button-default uk-button-small"
                  onClick={this.handleDelete}
                >
                  삭제
                </button>
              </div>
            </div>
          ) : null}
          <div className="readCuration_header">
            <div className="readCuration_header_title">{curation.title}</div>
            <AuthorInfo
              image={author.image}
              page="readCuration"
              name={author.name}
              profile={author.profile}
              handleHistoryClick={this.handleHistoryClick}
            />
          </div>
          <div className="readCuration_contents">{curation.contents}</div>
          <BooksList books={books} />
          <ReviewsList reviews={reviews} books={reviewsBooks} />
        </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state: any): any {
  return {
    user: state.user.User
  };
}

export default connect(mapStateToProps, null)(ReadCuration);
