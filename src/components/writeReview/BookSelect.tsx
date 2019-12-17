import React, { ReactElement } from "react";
import { IBookState, IBook } from "./writeInterface";
import { IBookReading } from "../shared/Types";
import { fetchBookSearch } from "./fetchWrite";
import { connect } from 'react-redux';
import WritePost from "./WritePost";
import "./Modal.scss";

interface IState {
  books: IBook[];
  title: string;
  selectBooksId: string[];
  selectBooksTitle: string[];
  isOpen: boolean;
  reading: IBookReading[];
  to_read: IBookReading[];
  finished: any;
}


interface IProps {
  reading: IBookReading[];
  to_read: IBookReading[];
  finished: any;
}

class BookSelect extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      books :[{
        _id: "",
        authors: [ "" ],
        contents: "",
        thumbnail: "",
        title: ""
        }
      ],
      isOpen: true,
      reading: this.props.reading,
      selectBooksId: [""],
      selectBooksTitle: [""],
      title: "",
      to_read: this.props.to_read,
      finished: this.props.finished
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.clickSearchButton = this.clickSearchButton.bind(this);
    this.clickSelectedBook = this.clickSelectedBook.bind(this);
    this.clickConfirm = this.clickConfirm.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.clickClose = this.clickClose.bind(this)
  }

  public handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ title: e.target.value });
  }

  public clickSearchButton(): void {
    const setStateBook = (res: any): void => {
      this.setState({ books: res });
    };
    fetchBookSearch(setStateBook, this.state.title);
  }

  public clickSelectedBook(e:any): void{
    const idTitle: any = e.target.alt.split(":")

    this.setState({
      selectBooksId: this.state.selectBooksId.concat([idTitle[0]]),
      selectBooksTitle: this.state.selectBooksTitle.concat([idTitle[1]])
    });
    this.setState({
      isOpen: !this.state.isOpen
    });
    alert(`${idTitle[1]}을 선택하셨습니다.`)
  }

  public clickClose(): void { 
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  public clickConfirm(): void {
    if(this.state.selectBooksId[0] !== ""){
      this.setState({
        isOpen: !this.state.isOpen
      });
    } else {
      alert("책을 선택해주세요")
    }
  }

  public handleKeyPress(e: any): void{
    if(e.key === 'Enter'){
      if(this.state.title !== ""){
        const setStateBook = (res: any): void => {
          this.setState({ books: res });
        };
        fetchBookSearch(setStateBook, this.state.title);
        e.preventDefault();
      }
      else {
        alert("검색어를 입력해주세요")
      } 
    }
  }


  public render() : ReactElement{
    const searchBookList: ReactElement[]= this.state.books.map((info: IBook)=>{
      return(
        <div className ="book-select" key ={info._id}>
          <img 
            src = {info.thumbnail}
            width ="100px" 
            alt ={`${info._id}:${info.title}`}
            onClick = {(e): void=> this.clickSelectedBook(e)}/>
          <div>{info.title}</div>
        </div>
      )
    })

    const selectBookId :string[] = this.state.selectBooksId.slice(1)
    const selectBookTitle :string[] = this.state.selectBooksTitle.slice(1)

    const readingBook:ReactElement[] = this.state.finished.map(
      (info: IBookReading) => {
        return (
          <div className="book-select" key ={info.book._id}>           
            <img
              src={info.book.thumbnail}
              width="100px"
              alt ={`${info.book._id}:${info.book.title}`}
              onClick = {(e): void=> this.clickSelectedBook(e)}
            />
            <div>{info.book.title}</div>
          </div>
        )
      })

    return (
      <div>
        {this.state.isOpen ? (
          <div className="Modal-overlay uk-animation-slide-top-small">
            <div className="Modal">
              {/* <div className="button-wrap">
                <button onClick={this.clickConfirm}> 완료 </button>
              </div> */}
              <p className="title">
                <button 
                    uk-icon="close"
                    type="button" 
                    onClick={this.clickClose}></button>
                <input
                  type="text"
                  className="search-box"
                  placeholder="책 제목을 입력해 주세요"
                  value={this.state.title}
                  onChange={this.handleChangeTitle}
                  onKeyPress ={this.handleKeyPress}
                ></input>
              </p>
              {/* {this.state.selectBooksTitle.length === 1 ? (
                  <h5>책을 선택해주세요.</h5>        
              ) : (
                <h5>[{selectBookRender}]를 선택하셨습니다.</h5>
              )} */}
              <div className="content">
                {this.state.books.length > 0
                  ? this.state.books[0]._id === ""
                    ? readingBook.length !== 0 ? 
                    <div>다 읽은 책 목록
                    <div>{readingBook}</div> </div> : "서평을 쓸 책을 검색해주세요."
                    : searchBookList
                  : "책 검색 결과가 없습니다."}
              </div>             
            </div>
          </div>
        ) : null}
        <WritePost bookId={selectBookId} bookTitle={selectBookTitle} />
      </div>
    );
  }
}

const mapStateToProps = (state :any) :any => {
  return {
      reading: state.user.User.reading,
      to_read: state.user.User.to_read,
      finished: state.user.User.finished
  };
}

export default connect(mapStateToProps)(BookSelect);
