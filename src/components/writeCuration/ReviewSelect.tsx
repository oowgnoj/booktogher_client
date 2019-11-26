import React, { ReactElement } from "react";
import { IBooks, IReviewWithBooks,IUserInfo } from "../shared/Types";
import { connect } from "react-redux";
import { fetchMyReview } from "./fetchWriteCuration"
import "../writeReview/Modal.scss";
import MyReviewSelect from "./MyReviewSelect";
import MyLikesReviewSelect from "./MyReviewSelect";
import SearchReviewSelect from "./SearchReviewSelect";
import Store from "../../Redux/configureStore";


interface IState {
  reviews: IReviewWithBooks[];
  title: string;
  myReviews: IReviewWithBooks[];
  selectedReviews: IReviewWithBooks[];
  isOpen: boolean;
  navSelect: string;
  userId: string;
}

interface IProps {
  addReviews: any;
  user: IUserInfo;
}

class ReviewSelect extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      reviews: [
        {
          _id: "",
          author: {
            _id: "",
            image: "",
            name: "",
            profile: ""
          },
          title: "",
          books: [{
            _id: "",
            authors: [""],
            contents: "",
            thumbnail: "",
            title: "",
          }],
          contents: "",
          thumbnail: "",
          likes: [""]
        }
      ],
      title: "",
      myReviews: [
        {
          _id: "1234",
          author: {
            _id: "",
            image: "",
            name: "",
            profile: ""
          },
          title: "",
          books: [{
            _id: "",
            authors: [""],
            contents: "",
            thumbnail: "",
            title: "",
          }],
          contents: "",
          thumbnail: "",
          likes: [""]
        }],
      selectedReviews: [{
        _id: "",
        author: {
          _id: "",
          image: "",
          name: "",
          profile: ""
        },
        title: "",
        books: [{
          _id: "",
          authors: [""],
          contents: "",
          thumbnail: "",
          title: "",
        }],
        contents: "",
        thumbnail: "",
        likes: [""]
      }],
      isOpen: true,
      navSelect: "myReview",
      userId: this.props.user._id
    };
    this.clickSelectedBook = this.clickSelectedBook.bind(this);
    this.clickConfirm = this.clickConfirm.bind(this);
  }

  public clickSelectedBook(e: any, myReviews: any): void {
    const index: number = e.target.value;
    const clickedReveiw: IReviewWithBooks = this.state.myReviews[index]

    this.setState({
      selectedReviews: [...this.state.selectedReviews, clickedReveiw]
    });
  }

  public clickConfirm(): void {
    this.props.addReviews(this.state.selectedReviews.slice(1));
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // public componentDidMount(): void {
  //   // this.setState({userId: this.props.user._id})
  //   // const setStateMyReview = (res: any): void => {
  //   //   this.setState({ myReviews : res });
  //   // };
    

  //   // fetchMyReview(setStateMyReview, "5dd526c965a18c467e20e210")

  // }

  public componentDidUpdate(prevProps: any): void {
    if (this.props.user._id !== prevProps.user._id) {
      const setStateMyReview = (res: any): void => {
        this.setState({ myReviews : res });
      }; 
      fetchMyReview(setStateMyReview, this.props.user._id)
    }
  }

  public render(): ReactElement {
    console.log(Store.getState())
    // console.log(this.state.userId)
    // console.log(this.props.user._id)
    return (
      <div>
        {this.state.isOpen ? (
          <div className="Modal-overlay">
            <div className="Modal">
            <div className="button-wrap">
                <button onClick={this.clickConfirm}> Confirm </button>
              </div>
              <div>
                <ul>
                  <li></li>
                </ul> 
              </div>
              {this.state.navSelect === "myReview" ? 
              <MyReviewSelect reviews ={this.state.myReviews} clicked={this.clickSelectedBook}/>
              : null}
              {this.state.navSelect === "myLikesReview" ? 
              <MyLikesReviewSelect reviews ={this.state.myReviews} clicked={this.clickSelectedBook}/>
              : null}
              {this.state.navSelect === "searchReview" ? 
              <SearchReviewSelect reviews ={this.state.myReviews} clicked={this.clickSelectedBook}/>
              : null}
            </div>
            
          </div>      
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state: any): any {
  return {
    user: state.user.User
  };
}

export default connect(mapStateToProps,null)(ReviewSelect);

