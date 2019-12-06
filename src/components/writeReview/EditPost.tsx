import * as React from "react";
import { Redirect, Route } from "react-router-dom";
import ReactQuill, { Quill } from "react-quill";
import { TwitterPicker } from "react-color";
import "react-quill/dist/quill.snow.css";
import "./writePost.css";
import { fetchPostReview, fetchBookRating, fetchEditReview } from "./fetchWrite";
import { RouteComponentProps } from "react-router";
import { fetchReview, fetchReviewBook, fetchBookReviewList } from "../readReview/fetchReview";
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

interface IMatchParams {
  id: string;
}

class EditPost extends React.Component<RouteComponentProps<IMatchParams>, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      body: {
        books: [], // book id 목록
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
    this.clickPostEdit = this.clickPostEdit.bind(this);
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


  public clickPostEdit(): void {
    const redirectReview = (id : string) : any =>{
      this.setState({reviewId : id})
      this.setState({redirect: true })
    }
    const postRating: any ={
      book : this.state.body.books[0],
      rating: this.state.rating
    }
    fetchEditReview(redirectReview, this.state.body, this.state.reviewId)
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

  public componentDidMount(): void {
    const setStateEditReview = (res: any): void => {
      this.setState({
        body: {
          ...this.state.body,
          contents: res.contents,
          title: res.title,
          published: res.published,
          thumbnail: res.thumbnail,       
        },
        reviewId: res._id
      });
    };
    fetchReview(setStateEditReview, this.props.match.params.id);

    const setStateBook = (res: any): void => {
      res.map((book: any)=>{
        this.setState({ 
          body: {
            ...this.state.body,
            books : [book._id]
          }
        })
      })
    }
    fetchReviewBook(setStateBook, this.props.match.params.id);
  }


  public render(): any {
    const style: any = {
      backgroundColor : this.state.body.thumbnail
    }

    return (
      <div className="write-area">
        {this.state.redirect ? (
          <Redirect to={`/review/${this.state.reviewId}`} />
        ) : null}

        <div className="write-title-area" style={style}>
          

          <div className="submit">
            
            <button     
              className="paint-bucket" 
              onClick = {this.clickPaintBucket}
            >색선택</button>
            
            <button 
              className =""
              onClick={this.clickPostEdit}
            >등록</button>  

            {this.state.body.published ? (
              <label className="unlock">
                <input
                  className="uk-checkbox" 
                  type="checkbox" 
                  onChange={this.handlePublished}
                /> 
                비공개</label>            
            ) : (
              <label className="unlock">
                <input 
                  className="uk-checkbox" 
                  type="checkbox" 
                  onChange={this.handlePublished}
                  checked
                /> 
                비공개</label> 
            )}           
          </div>

          {this.state.colorPicker ? 
            <div className="twitter-picker-area">
              <TwitterPicker
                color={this.state.body.thumbnail}
                onChangeComplete={this.handleChangeComplete}
                width="300px"
                triangle="top-right"
              /> </div>: 
              <div className="color-picker-area"></div> 
          } 
          <input
            type="text"
            className="write-title"
            placeholder="제목을 입력하세요"
            value={this.state.body.title}
            onChange={this.handleChangeTitle}
          ></input>     
        </div>

        {/* <div className ="rating-box">
          <input 
            type="number" 
            min="0"
            max="10"
            onChange={this.handleChangeRating}
            onKeyPress={(e: any): void=>this.isNumberKey(e)}
            onInput={(e: any): void=>this.numberMaxLength(e)}></input> /10
        </div> */}

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

export default EditPost;
