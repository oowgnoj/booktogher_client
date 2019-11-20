import * as React from "react";
import { render } from "react-dom";
import ReactQuill, { Quill } from "react-quill";
import { TwitterPicker } from 'react-color';
import "react-quill/dist/quill.snow.css";
import "./writePost.css";

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

class WritePost extends React.Component<IProps, IWrite> {
  constructor(props: IProps) {
    super(props)
    this.state = { 
      books: this.props.bookId, // book id 목록
      contents: '',
      published: false,
      thumbnail: '#eeeeee',
      title: '',
    } 
    this.handleChangePost = this.handleChangePost.bind(this)
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleClickPublished = this.handleClickPublished.bind(this)
  }
 
  public handleChangePost(value: string): void {
    this.setState({ contents: value })
  }

  public handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>): void{
    this.setState({ title: e.target.value })
  }

  public handleClickPublished(): void {
    this.setState({ published: !this.state.published })
  }

  public handleChangeComplete = (color : any) => {
    this.setState({ thumbnail: color.hex });
  };
 
  public render() {
    const publishedFalse : string = '공개'
    const publishedTrue : string = '비공개'
    const style = {
      backgroundColor : this.state.thumbnail
    }
    
    return (
      <div className ="write-area">
        <div>{this.props.bookTitle}</div>
        <div className ="write-title-area" style ={style}>            
          <input 
            type ="text"
            className ="write-title"
            placeholder="제목을 입력하세요"
            value={this.state.title}
            onChange ={this.handleChangeTitle}
          ></input>
          
          <div className="submit">
            <button>비공개</button>
            <button>등록</button>
            <TwitterPicker 
              color={ this.state.thumbnail }
              onChangeComplete={ this.handleChangeComplete }/>   
          </div>
         </div>
         
        <div className ="write-post">
          <ReactQuill 
            value={this.state.contents}
            onChange={this.handleChangePost} 
            />
        </div>        
      </div>      
    )
  }
}

export default WritePost