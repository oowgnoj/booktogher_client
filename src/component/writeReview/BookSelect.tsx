import React, { ReactElement } from "react";
import { IBookState, IBook } from './writeInterface'

class BookSelect extends React.Component<{},IBookState>{
  constructor({}){
    super({})
    this.state = {
      bookList :[{
        id: 'book-id1',
        authors: [ '이모양' ],
        contents: '타입스크립트와의 싸움을 펼치는 이야기이다',
        rating: 3,
        thumbnail: 'http://sungsan.info/wp-content/uploads/2018/06/%EB%8F%99%EC%A0%84-%ED%95%98%EB%82%98-%EC%B1%85%ED%91%9C%EC%A7%80.jpg',
        title: '타입스트립트'
      },
      {
        id: 'book-id2',
        authors: [ '이기기' ],
        contents: '리액크 퀼에 대하여 공부해봅시다',
        rating: 4,
        thumbnail: 'http://sungsan.info/wp-content/uploads/2018/06/%EB%8F%99%EC%A0%84-%ED%95%98%EB%82%98-%EC%B1%85%ED%91%9C%EC%A7%80.jpg',
        title: '리액트 퀼 사용법'
      }
    ]

    }
    //this.handleSearchBook = this.handleSearchBook.bind(this)
  }

  // handleSearchBook(e: string){
  //   var keyWord = e.target.value;

  // }

  // searchBooks(){
  //   fetch('')
  //   .then()
  // }

  public render() : ReactElement{
    const searchBookList: ReactElement[]= this.state.bookList.map((info: IBook)=>{
      return(
        <div>
          <img src = {info.thumbnail} width ="80px" height ="120px"/>
          <div>{info.title}</div>
        </div>
      )
    })

    return (
      <div>
        <input type = "text" placeholder = "책 제목을 입력해 주세요"></input>
        <div>{searchBookList}</div>      
      </div>
    ) 
  }
};

export default BookSelect;