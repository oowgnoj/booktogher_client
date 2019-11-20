import * as React from "react";
import { render } from "react-dom";
import ReactQuill, { Quill } from "react-quill";
import { TwitterPicker } from 'react-color';
import "react-quill/dist/quill.snow.css";
import "./writePost.css";


//const WritePost = () => <ReactQuill />;

interface IWrite {
  books: [ string ]; // book id 목록
  contents: string;
  published: boolean;
  thumbnail: string;
  title: string;
  color: string;
}

class WritePost extends React.Component<{}, IWrite> {
  constructor({}) {
    super({})
    this.state = { 
      books: [''], // book id 목록
      contents: '',
      published: false,
      thumbnail: '',
      title: '',
      color: '#eeeeee' 
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
    this.setState({ color: color.hex });
  };
 
  public render() {
    const publishedFalse : string = '공개'
    const publishedTrue : string = '비공개'
    const style = {
      backgroundColor : this.state.color
    }
    
    return (
      <div className ="write-area">
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
              color={ this.state.color }
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