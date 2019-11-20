import React from 'react';
import './Modal.scss';
import { IBookState, IBook } from './writeInterface'

const state = {
  bookList: [{
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
},
{
  id: 'book-id3',
  authors: [ '이야야' ],
  contents: '리액크 모달은?에 대하여 공부해봅시다',
  rating: 4,
  thumbnail: 'http://sungsan.info/wp-content/uploads/2018/06/%EB%8F%99%EC%A0%84-%ED%95%98%EB%82%98-%EC%B1%85%ED%91%9C%EC%A7%80.jpg',
  title: '리액크 모달'
}]}


const searchBookList = state.bookList.map((info)=>{
  return(
    <div>
      <img src = {info.thumbnail} width ="80px" height ="120px"/>
      <div>{info.title}</div>
    </div>
  )
})

const Modal = () => {
  
  
  return (
    <React.Fragment>
         <div className="Modal-overlay" />
      <div className="Modal">
        <p className="title"><input type = "text" placeholder = "책 제목을 입력해 주세요"></input></p>
        <div className="content">
          <p>
            {searchBookList}
          </p>
        </div>
        <div className="button-wrap">
          <button> Confirm </button>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Modal;