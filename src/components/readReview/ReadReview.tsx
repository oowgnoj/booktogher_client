import React, { ReactElement } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import Review from "./Review";
import BookInfo from "./BookInfo";
import RecoReview from "./RecoReview";
import UserInfo from "./UserInfo";
import { IProps } from "./reviewInterface";
import { fetchReview, fetchReviewBook } from "./fetchReview";

interface IMatchParams {
  id: string;
}

class ReadReview extends React.Component<
  RouteComponentProps<IMatchParams>,
  IProps
> {
  constructor(props: any) {
    super(props);
    this.state = {
      review: {
        _id: "11",
        author: {
          _id: "user-id2",
          image:
            "https://images.unsplash.com/photo-1564650211163-21049f1b683a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          name: "정혜경",
          profile: "저는 정혜경이라고 합니다."
        },
        contents: ``,
        likes: ["user-id1", "user-id2"],
        published: true,
        thumbnail:
          "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        title: ""
      },
      bookList: [
        {
          authors: ["로라 오웬"],
          contents:
            "난 책읽기가 좋아 제2단계, 제36권 『마녀 워니 학교에 가다』. 그림책을 통해 유아들의 마음을 사로잡아온 마녀 위니가 동화를 통해 아이들에게 찾아왔다. 아이들의 심리를 코믹하고 엉뚱하며 따뜻한 상상력으로 풀어낸 총4편의 동화가 흥미진진하면서도 아슬아슬한 마법과 모헙의 세계로 아이들을 초대한다. 생동감과 박진감이 넘치는 유쾌하고 발랄한 그림이 곁들어져 흥겨움을 불러일으키고 있다. 아이들에게 공감을 자아내면서, 책 읽기의 즐거움을 느끼게 해준다.",
          _id: "book-id1",
          rating: 3,
          thumbnail:
            "http://image.kyobobook.co.kr/images/book/large/259/l9788949161259.jpg",
          title: "마녀 위니 학교에 가다"
        }
      ]
    };
  }
  public componentDidMount(): void {
    const setStateReview = (res: any): void => {
      this.setState({ review: res });
    };
    const setStateBook = (res: any): void => {
      this.setState({ bookList: res });
    };
    fetchReview(setStateReview, this.props.match.params.id);
    fetchReviewBook(setStateBook, this.props.match.params.id);
  }

  public render(): ReactElement {
    return (
      <div>
        <Review review={this.state.review} bookList={this.state.bookList} />
        <BookInfo bookList={this.state.bookList} />
        {/*  <RecoReview _id={this.state.review._id} />
        <UserInfo review={this.state.review} /> */}
      </div>
    );
  }
}

export default ReadReview;
