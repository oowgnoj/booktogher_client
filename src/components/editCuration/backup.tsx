import React, { ReactElement } from "react";
// import { Redirect, Route, RouteComponentProps } from "react-router-dom";
// import BooksList from "./BooksList";
// import ReviewsList from "./ReviewsList";
// import ReadCuration from "../readCuration/index";
// import "./index.css";
// import Books from "../mypage/books";
// import {
//   ICuration,
//   ICurationsPost,
//   IReview,
//   IPatchBody
// } from "../shared/Types";
// import {
//   fetchCuration,
//   fetchBooks,
//   fetchReviews,
//   fetchEditCuration
// } from "./fetchEditCuration";
// import Modal from "./BookSelect";
// import ReviewModal from "./ReviewSelect";

// interface IBook {
//   _id: string;
//   thumbnail: string;
//   authors: string;
//   title: string;
// }

// interface IBody {
//   title: string;
//   contents: string;
//   books: string[];
//   reviews: string[];
// }

// interface ISelectedBook {
//   _id: string;
//   title: string;
//   authors: string;
//   thumbnail: string;
// }

// interface ISelectedReview {
//   reviewId: string;
//   reviewTitle: string;
//   reviewContents: string;
//   reviewAuthor: string;
//   reviewAuthorImage: string;
// }

// interface IState {
//   title: string;
//   contents: string;
//   books: IBook[];
//   reviews: IReview[];
//   bookModal: boolean;
//   reviewModal: boolean;
//   isPatched: boolean;
//   curationId: string;
// }

// interface IMatchParams {
//   id: string;
// }

// class WriteCuration extends React.Component<
//   RouteComponentProps<IMatchParams>,
//   IState
// > {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       books: [{ _id: "", authors: "", thumbnail: "", title: "" }],
//       contents: "",
//       reviews: [
//         {
//           _id: "",
//           author: { _id: "", image: "", name: "", profile: "" },
//           contents: "",
//           likes: [],
//           published: true,
//           thumbnail: "",
//           title: ""
//         }
//       ],
//       title: "",
//       bookModal: false,
//       reviewModal: false,
//       isPatched: false,
//       curationId: ""
//     };
//     this.bookDelete = this.bookDelete.bind(this);
//     this.reviewDelete = this.reviewDelete.bind(this);
//     this.handleTitle = this.handleTitle.bind(this);
//     this.handleContent = this.handleContent.bind(this);
//     this.handlePatch = this.handlePatch.bind(this);
//     this.handleBookSelect = this.handleBookSelect.bind(this);
//     this.handleReviewSelect = this.handleReviewSelect.bind(this);
//     this.addBooks = this.addBooks.bind(this);
//     this.addReviews = this.addReviews.bind(this);
//   }

//   public componentDidMount(): void {
//     const getCurationInfo = (result: ICuration): void => {
//       this.setState({ contents: result.contents, title: result.title });
//     };
//     const getBookInfo = (result: IBook[]): void => {
//       this.setState({ books: result });
//     };
//     const getReviewInfo = (result: IReview[]): void => {
//       this.setState({ reviews: result });
//     };
//     fetchCuration(getCurationInfo, this.props.match.params.id);
//     fetchBooks(getBookInfo, this.props.match.params.id);
//     fetchReviews(getReviewInfo, this.props.match.params.id);
//   }

//   public bookDelete(bookId: string): void {
//     const currentBookList: IBook[] = this.state.books.slice();
//     for (let i: number = 0; i < currentBookList.length; i++) {
//       if (currentBookList[i]._id === bookId) {
//         currentBookList.splice(i, 1);
//       }
//     }
//     this.setState({ books: currentBookList });
//   }

//   public reviewDelete(reviewId: string): void {
//     const currentReviewList: IReview[] = this.state.reviews.slice();
//     for (let i: number = 0; i < currentReviewList.length; i++) {
//       if (currentReviewList[i]._id === reviewId) {
//         currentReviewList.splice(i, 1);
//       }
//     }
//     this.setState({ reviews: currentReviewList });
//   }

//   public handleTitle(event: React.ChangeEvent<HTMLInputElement>): void {
//     const changingTitle: string = event.target.value;
//     this.setState({ title: changingTitle });
//   }

//   public handleContent(event: React.ChangeEvent<HTMLTextAreaElement>): void {
//     const changingContent: string = event.target.value;
//     this.setState({ contents: changingContent });
//   }

//   public handleBookSelect(): void {
//     this.setState({ bookModal: true });
//   }

//   public handleReviewSelect(): void {
//     this.setState({ reviewModal: true });
//   }

//   public handlePatch(): void {
//     const postBody: IBody = {
//       title: this.state.title,
//       contents: this.state.contents,
//       books: this.state.books.map((book: IBook) => book._id),
//       reviews: this.state.reviews.map((review: IReview) => review._id)
//     };
//     const getPatchedId = (id: string): void =>
//       this.setState({ curationId: id, isPatched: true });

//     fetchEditCuration(getPatchedId, this.props.match.params.id, postBody);
//   }

//   public addBooks = (selectedBooks: ISelectedBook): any => {
//     const newBooks: ISelectedBook[] =
//       this.state.books.length !== 0 && this.state.books[0]._id
//         ? this.state.books.concat(selectedBooks)
//         : this.state.books.slice(1).concat(selectedBooks);
//     this.setState({ books: newBooks, bookModal: false });
//   };

//   public addReviews = (selectedReviews: IReview): any => {
//     const newReviews: IReview[] =
//       this.state.reviews.length !== 0 && this.state.reviews[0]._id
//         ? this.state.reviews.concat(selectedReviews)
//         : this.state.reviews.slice(1).concat(selectedReviews);
//     this.setState({ reviews: newReviews, reviewModal: false });
//   };

//   public render(): ReactElement {
//     const { title, contents } = this.state;
//     return (
//       <div className="writecuration">
//         {this.state.bookModal ? <Modal addBooks={this.addBooks} /> : null}
//         {this.state.reviewModal ? (
//           <ReviewModal addReviews={this.addReviews} />
//         ) : null}
//         {this.state.isPatched ? (
//           <Redirect to={`/curation/${this.state.curationId}`} />
//         ) : null}
//         <div className="writecuration_header">
//           <span className="writecuration_header_title">
//             <input
//               type="text"
//               name="title"
//               placeholder="큐레이션의 제목을 입력해주세요"
//               style={{
//                 height: "150px",
//                 width: "100%",
//                 border: "none",
//                 fontSize: "50px"
//               }}
//               value={title}
//               onChange={this.handleTitle}
//             />
//           </span>
//           <span
//             className="writecuration_header_btn"
//             style={{ float: "right", clear: "right" }}
//           >
//             <button
//               className="uk-button uk-button-default"
//               onClick={this.handlePatch}
//             >
//               수정
//             </button>
//           </span>
//         </div>
//         <div className="writecuration_contents">
//           <textarea
//             name="contents"
//             placeholder="큐레이션의 내용을 입력해주세요"
//             style={{
//               resize: "none",
//               height: "300px",
//               width: "100%",
//               border: "none",
//               fontSize: "20px",
//               outline: "none"
//             }}
//             value={contents}
//             onChange={this.handleContent}
//           />
//         </div>
//         <div
//           className="writecuration_books"
//           style={{ backgroundColor: "#ebebeb" }}
//         >
//           <BooksList
//             books={this.state.books}
//             deleteEvent={this.bookDelete}
//             handleBookSelect={this.handleBookSelect}
//           />
//         </div>
//         <div className="writecuration_review">
//           <ReviewsList
//             reviews={this.state.reviews}
//             deleteEvent={this.reviewDelete}
//             handleReviewSelect={this.handleReviewSelect}
//           />
//           <span className="writecuration_review_btn"></span>
//           <span className="writecuration_review_reviewlist">
//             <div className="writecuration_review_reviewentry"></div>
//           </span>
//         </div>
//         <Route path="/curation/:id" component={ReadCuration} />
//       </div>
//     );
//   }
// }

// export default WriteCuration;
