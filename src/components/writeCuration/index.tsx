import React, { ReactElement } from "react";
import BooksList from "./BooksList";
import "./index.css";
import Books from "../mypage/books";

interface IBook {
  _id: string;
  thumbnail: string;
  authors: string[];
  title: string;
  contents: string;
}

interface IState {
  title: string;
  contents: string;
  books: IBook[];
  reviews: string[];
}

class WriteCuration extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      books: [
        {
          _id: "ObjectId",
          authors: ["기시미 이치로", "고가 후미타케"],
          contents: "인간은 변할 수 있고, 누구나 행복해 질 수 있다.",
          thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nsiRPD1GSnN9voD1VogKW3DMaXRw75zwAcW5DBQ61RULlwkR&s",
          title: "미움받을 용기"
        },
        {
          _id: "ObjectId2",
          authors: ["기시미 이치로", "고가 후미타케"],
          contents: "인간은 변할 수 있고, 누구나 행복해 질 수 있다.",
          thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZLIBvKXxJ4Wq23MgmMC2bCCKadPlRbCtgS-8aDuxAMqG0EZhiw&s",
          title: "미움받을 용기"
        }
      ],
      contents: "",
      reviews: [],
      title: ""
    };
    this.bookDelete = this.bookDelete.bind(this);
  }

  public bookDelete(bookId: string): void {
    console.log("index 에서 아이디 찍어보기 : ", bookId);
    const currentBookList: IBook[] = this.state.books.slice();
    for (let i: number = 0; i < currentBookList.length; i++) {
      console.log("currentBookList[i] :", currentBookList[i]);
      if (currentBookList[i]._id === bookId) {
        console.log("일치하니?");
        currentBookList.splice(i, 1);
        console.log("일치하고 잘라낸 currentBookList?", currentBookList);
      }
    }
    this.setState({ books: currentBookList });
    console.log(this.state.books);
    setTimeout(() => console.log(this.state.books));
  }

  public render(): ReactElement {
    return (
      <div className="writecuration">
        <div className="writecuration_header">
          <span className="writecuration_header_title">
            <input
              type="text"
              name="title"
              placeholder="큐레이션의 제목을 입력해주세요"
              style={{
                height: "150px",
                width: "100%",
                border: "none",
                fontSize: "50px"
              }}
            />
          </span>
          <span className="writecuration_header_btn"></span>
        </div>
        <div className="writecuration_contents">
          <textarea
            name="contents"
            placeholder="큐레이션의 내용을 입력해주세요"
            style={{
              height: "300px",
              width: "100%",
              border: "none",
              fontSize: "20px"
            }}
          />
        </div>
        <div className="writecuration_books">
          <span className="writecuration_books_btn"></span>
          <BooksList books={this.state.books} deleteEvent={this.bookDelete} />
        </div>
        <div className="writecuration_review">
          <span className="writecuration_review_btn"></span>
          <span className="writecuration_review_reviewlist">
            <div className="writecuration_review_reviewentry"></div>
          </span>
        </div>
      </div>
    );
  }
}

export default WriteCuration;
