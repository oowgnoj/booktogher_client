import * as React from "react";
import { Redirect, Route } from "react-router-dom";
import { render } from "react-dom";
import ReactQuill, { Quill } from "react-quill";
import { TwitterPicker } from "react-color";
import "react-quill/dist/quill.snow.css";
import "./writePost.css";
import { fetchPostReview, fetchBookRating } from "./fetchWrite";
import ReadReview from "../readReview/ReadReview";

interface IState {
  body: IWrite;
  colorPicker : boolean;
  rating: number;
  redirect: boolean;
  reviewId: string;
}
interface IWrite {
  books: string[]; // book id 목록
  contents: string;
  published: boolean;
  thumbnail: string;
  title: string;
}

interface IProps {
  bookId: string[];
  bookTitle: string[];
}

class WritePost extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      body: {
        books: this.props.bookId, // book id 목록
        contents: "",
        published: true,
        thumbnail: "#eeeeee",
        title: ""
      },
      colorPicker : false,
      rating: 0,
      redirect: false,
      reviewId: ""
    };
    this.handleChangePost = this.handleChangePost.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleClickPublished = this.handleClickPublished.bind(this);
    this.clickPostSubmit = this.clickPostSubmit.bind(this);
    this.clickPaintBucket = this.clickPaintBucket.bind(this);
    this.handlePublished = this.handlePublished.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this)
  }

  public handleChangePost(value: string): void {
    this.setState({ body: { ...this.state.body, contents: value } });
  }

  public handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      body: {
        ...this.state.body,
        title: e.target.value,
        books: this.props.bookId
      }
    });
  }

  public handleClickPublished(): void {
    this.setState({
      body: { ...this.state.body, published: !this.state.body.published }
    });
  }

  public handleChangeComplete = (color: any) => {
    this.setState({ body: { ...this.state.body, thumbnail: color.hex } });
  };


  public clickPaintBucket(): void {
    this.setState({
      colorPicker : !this.state.colorPicker
    })

  }
 
  public handlePublished(): void {
    this.setState({
      body: {
        ...this.state.body,
        published: !this.state.body.published
      }
    })
  }

  public handleChangeRating(e: any): void{
    this.setState({
      rating: e.target.value
    })
  }

  public clickPostSubmit(): void {
    const redirectReview = (id : string) : any =>{
      this.setState({reviewId : id})
      this.setState({redirect: true })
    }
    const postRating ={
      book : this.state.body.books[0],
      rating: this.state.rating
    }
    fetchPostReview(redirectReview, this.state.body)
    fetchBookRating(postRating)
  }

  public render(): any {
    console.log(this.state.rating)

    const style = {
      backgroundColor : this.state.body.thumbnail
    }

    return (
      <div className="write-area">
        {this.state.redirect ? (
          <Redirect to={`/review/${this.state.reviewId}`} />
        ) : null}

        <div className="write-title-area" style={style}>
          <input
            type="text"
            className="write-title"
            placeholder="제목을 입력하세요"
            value={this.state.body.title}
            onChange={this.handleChangeTitle}
          ></input>

          <div className="submit">
            <span uk-icon="paint-bucket" className="uk-button uk-button-default paint-bucket" onClick = {this.clickPaintBucket}></span>
              
            {this.state.body.published ? 
            <span uk-icon="unlock" className="uk-button uk-button-default unlock" onClick = {this.handlePublished}>공개</span>
            : <span uk-icon="lock" className="uk-button uk-button-default lock" onClick = {this.handlePublished}>비공개</span>}
            <button className ="uk-button uk-button-default"onClick={this.clickPostSubmit}>등록</button>

            {this.state.colorPicker ? 
              <TwitterPicker
                color={this.state.body.thumbnail}
                onChangeComplete={this.handleChangeComplete} 
              /> : null }
            
          </div>
        </div>

        <div className ="rating-box">
          {this.props.bookTitle} : 
          평점을 입력해주세요
          <input type="number" onChange={this.handleChangeRating}></input> /10
        </div>

        <div className="write-post">
          <ReactQuill
            value={this.state.body.contents}
            onChange={this.handleChangePost}
          />
        </div>
        <Route path="/review/:id" component={ReadReview} />
      </div>
    );
  }
}

export default WritePost;
