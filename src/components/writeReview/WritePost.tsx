import * as React from "react";
import { Redirect, Route, Link } from "react-router-dom";
import ReactQuill, { Quill } from "react-quill";
import { TwitterPicker } from "react-color";
import "react-quill/dist/quill.snow.css";
import "./writePost.css";
import { fetchPostReview, fetchBookRating } from "./fetchWrite";
import ReadReview from "../readReview/ReadReview";
import Modal from "../writeCuration/BookSelect";

interface IState {
  body: IWrite;
  bookModal: boolean;
  colorPicker: boolean;
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

interface ISelectedBook {
  _id: string;
  title: string;
  authors: string;
  thumbnail: string;
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
      bookModal: false,
      colorPicker: false,
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
    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.handleBookSelect = this.handleBookSelect.bind(this);
    this.addBooks = this.addBooks.bind(this);
  }

  public handleChangePost(value: string): void {
    this.setState({ body: { ...this.state.body, contents: value } });
  }

  public handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      body: {
        ...this.state.body,
        books: this.props.bookId,
        title: e.target.value,       
      }
    });
  }

  public handleClickPublished(): void {
    this.setState({
      body: { ...this.state.body, published: !this.state.body.published }
    });
  }

  public handleChangeComplete = (color: any): void => {
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
    if(this.state.body.books.length !== 0){
      const redirectReview = (id : string) : any =>{
        this.setState({reviewId : id})
        this.setState({redirect: true })
      }
      const postRating: any ={
        book : this.state.body.books[0],
        rating: this.state.rating
      }
      fetchPostReview(redirectReview, this.state.body)
      fetchBookRating(postRating)
    } else {
      alert("책을 선택해주세요")
    }
  }

  public isNumberKey(e:any): any { 
    const value: any = e.target.value;
    const charCode: any = (e.which) ? e.which : e.keyCode;
    const pattern1: any = /^\d{1}$/; // 현재 value값이 1자리 숫자이면 0 만 입력가능
    if (pattern1.test(value)) {
      if (charCode !== 48) {
        alert("10 이하의 숫자만 입력가능합니다");
        return false;
      }
    }
  }
  public numberMaxLength(e:any): void {
    if(e.target.value !== "10"){
      if(e.target.value.length > 1){
        e.target.value = e.target.value.slice(0, 1);
      }
    } 
  }

  public handleBookSelect(): void {
    this.setState({ bookModal: true });
  }

  public addBooks = (selectedBooks: ISelectedBook): any => {
    // const newBooks: ISelectedBook[] =
    //   this.state.body.books.length !== 0 && this.state.body.books[0]
    //     ? this.state.body.books.concat(selectedBooks)
    //     : this.state.body.books.slice(1).concat(selectedBooks);
    // this.setState({ books: newBooks, bookModal: false });
  };

  public render(): any {
    const style: any = {
      backgroundColor : this.state.body.thumbnail
    }

    return (
      <div className="write-area">
        {this.state.redirect ? (
          <Redirect to={`/review/${this.state.reviewId}`} />
        ) : null}
        {this.state.bookModal ? <Modal addBooks={this.addBooks} /> : null}

        <div className="write-title-area" style={style}>
          <input
            type="text"
            className="write-title"
            placeholder="제목을 입력하세요"
            value={this.state.body.title}
            onChange={this.handleChangeTitle}
          ></input>

          <div className="submit">
            <button 
                className ="uk-button uk-button-default"
                onClick ={this.handleBookSelect}
              >책선택</button>
            <span 
              uk-icon="paint-bucket" 
              className="uk-button uk-button-default paint-bucket" 
              onClick = {this.clickPaintBucket}
            ></span>
              
            {this.state.body.published ? 
            <span 
              uk-icon="unlock" 
              className="uk-button uk-button-default unlock" 
              onClick = {this.handlePublished}
            >공개</span>
            : 
            <span 
              uk-icon="lock" 
              className="uk-button uk-button-default lock" 
              onClick = {this.handlePublished}
            >비공개</span>}

            <button 
              className ="uk-button uk-button-default"
              onClick={this.clickPostSubmit}
            >등록</button>

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
          <input 
            type="number" 
            min="0"
            max="10"
            onChange={this.handleChangeRating}
            onKeyPress={(e: any): void=>this.isNumberKey(e)}
            onInput={(e: any): void=>this.numberMaxLength(e)}></input> /10
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
