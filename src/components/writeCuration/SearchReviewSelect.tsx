import React, { ReactElement, ChangeEvent } from "react";
// import { IBooks, IReview } from "../shared/Types";
// import "./Modal.scss";
// import { fetchReviewsSearch } from "./fetchWriteCuration";
// import { textAlign } from "@material-ui/system";

// interface IProps {
//   reviews: IReview[];
//   clicked: any;
// }

// interface IState {
//   search: string;
// }

// class SearchReviewSelect extends React.Component<IProps, IState> {
//   constructor(props: IProps) {
//     super(props);
//     this.state = {
//       search: ""
//     };
//   }

//   public render(): ReactElement {
//     console.log("props 확인 중", this.props.reviews);
//     const MyReviewList: ReactElement[] = this.props.reviews.map(
//       (info: IReview, index: number) => {
//         return (
//           <div>
//             {" "}
//             <div
//               className="book-select"
//               key={index}
//               onClick={e => this.props.clicked(e)}
//             >
//               <div key={info._id} className="review-detail">
//                 <h5>{info.title}뭐지</h5>
//                 <div>{info.author.name}이름</div>
//                 <div>{info.contents.replace(/<[^>]*>?/gm, "")}내용</div>
//               </div>
//             </div>
//           </div>
//         );
//       }
//     );
//     return (
//       <div>
//         <div className="content">{MyReviewList}</div>
//       </div>
//     );
//   }
// }

// export default SearchReviewSelect;
