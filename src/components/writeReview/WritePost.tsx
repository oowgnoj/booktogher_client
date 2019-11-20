import * as React from "react";
import { Redirect, Route } from "react-router-dom";
import { render } from "react-dom";
import ReactQuill, { Quill } from "react-quill";
import { TwitterPicker } from 'react-color';
import "react-quill/dist/quill.snow.css";
import "./writePost.css";
import { fetchPostReview } from './fetchWrite'
import ReadReview from "../readReview/ReadReview";


interface IState {
  body : IWrite,
  redirect : boolean,
  reviewId : string
}
interface IWrite {
  books: string[]; // book id 목록
  contents: string;
  published: boolean;
  thumbnail: string;
  title: string;
}

interface IProps {
  bookId : string[]
  bookTitle : string[]
}

class WritePost extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { 
      body :{
        books: this.props.bookId, // book id 목록
        contents: '',
        published: true,
        thumbnail: '#eeeeee',
        title: '',
      },
      redirect: false,
      reviewId : ''     
    } 
    this.handleChangePost = this.handleChangePost.bind(this)
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleClickPublished = this.handleClickPublished.bind(this)
    this.clickPostSubmit = this.clickPostSubmit.bind(this)
  }
 
  public handleChangePost(value: string): void {
    this.setState({ body : {...this.state.body, contents: value }})
  }

  public handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>): void{
    this.setState({ body : {...this.state.body, title: e.target.value, books:this.props.bookId }})
  }

  public handleClickPublished(): void {
    this.setState({ body : {...this.state.body, published: !this.state.body.published }})
  }

  public handleChangeComplete = (color : any) => {
    this.setState({ body : {...this.state.body, thumbnail: color.hex }});
  };

  public clickPostSubmit() :any {
    const redirectReview = (id : string) : any =>{
      this.setState({reviewId : id})
      this.setState({redirect: true})
    }
    fetchPostReview(redirectReview, this.state.body)  
  }
  
  

  public render() {
    const publishedFalse : string = '공개'
    const publishedTrue : string = '비공개'
    const style = {
      backgroundColor : this.state.body.thumbnail
    }
    return (
      <div className ="write-area">
        {this.state.redirect ? <Redirect to = {`/review/${this.state.reviewId}`}/> : null}
        <div>{this.props.bookTitle}</div>
        <div className ="write-title-area" style ={style}>            
          <input 
            type ="text"
            className ="write-title"
            placeholder="제목을 입력하세요"
            value={this.state.body.title}
            onChange ={this.handleChangeTitle}
          ></input>
          
          <div className="submit">
            <button>비공개</button>
            <button onClick = {this.clickPostSubmit}>등록</button>
            <TwitterPicker 
              color={ this.state.body.thumbnail }
              onChangeComplete={ this.handleChangeComplete }/>   
          </div>
         </div>
         
        <div className ="write-post">
          <ReactQuill 
            value={this.state.body.contents}
            onChange={this.handleChangePost} 
            />
        </div>  
        <Route path ="/review/:id" component = {ReadReview}/>      
      </div>      
    )
  }
}

export default WritePost