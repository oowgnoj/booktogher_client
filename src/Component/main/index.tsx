import React, { ReactElement } from "react";
import Slider from "./RecoReviewSlider/index";
import RecoReviewList from "./RecoReviewList";
import RecoCollectionList from "./RecoCollectionList";

/*
(서버) 
[1단계] 2개 endpoint 로의 fetch 가 예정되어있음 
reviews?list_type=recommended
collections?list_type=recommended
[2단계]
collection 받은 다음 books?collection_id=각 recommended collection 으로

(스토어)
fetch 받은 데이터를 store.dispatch 로 state 에 반영할 예정
*/

interface IAuthor {
  id: string;
  image: string;
  name: string;
  profile: string;
}

interface IReview {
  id: string;
  author: IAuthor;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}

interface ICollection {
  id: string;
  author: IAuthor;
  content: string;
  likes: string[];
  published: boolean;
  title: string;
}

interface IState {
  selectedCollection: number;
  selectedReview: number;
}
/* 
interface IProps {
  review: IReview;
} */

class Main extends React.Component {
  public state: IState = {
    selectedCollection: 0,
    selectedReview: 1
  };

  public fReviews: IReview[] = [
    {
      author: {
        id: "user-id2",
        image: "https://i-love-png.com/images/profile-417-1163876.png",
        name: "정혜경",
        profile: "저는 정혜경이라고 합니다."
      },
      contents:
        "<p>혜경님의 서평이 여기에 들어갈거에요. 혜경님은 어떤 책으로 서평을 쓰실까. 코드를 쳐야하는데 코드보다 가짜 데이터 만드는게 더 오래 걸리는 기분이네요. 이정도면 충분히 길겠죠. 충분히 길어야 자르는것도 연습할텐데.</p>",
      id: "11",
      likes: ["user-id1", "user-id2"],
      published: true,
      thumbnail:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      title: "혜경님"
    },
    {
      author: {
        id: "user-id3",
        image: "https://i-love-png.com/images/profile-417-1163876.png",
        name: "정승권",
        profile: "저는 정승권이라고 합니다."
      },
      contents:
        "<p>승권님의 서평은 여기. 여기는 위보다 조금 더 짧게 쓸거에요. 지금은 너무 짧을까요.</p>",
      id: "12",
      likes: ["user-id1", "user-id2"],
      published: true,
      thumbnail:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      title: "승권님 테스트 일이삼사오"
    },
    {
      author: {
        id: "user-id1",
        image: "https://i-love-png.com/images/profile-417-1163876.png",
        name: "박종우",
        profile: "저는 박종우라고 합니다."
      },
      contents:
        "<p>길이가 좀 더 긴 서평 길이가 긴 서평 길이가 길어서 유사시엔 잘라버려야하는 서평 얼만큼 길어야 하는지 확인해야하는 서평 서평 서평 긴 서평 긴 서평 길이가 좀 더 긴 서평 길이가 긴 서평 길이가 길어서 유사시엔 잘라버려야하는 서평 얼만큼 길어야 하는지 확인해야하는 서평 서평 서평 긴 서평 긴 서평 </p>",
      id: "13",
      likes: ["user-id1", "user-id2"],
      published: true,
      thumbnail:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      title: "이렇게 이렇게 해서"
    },
    {
      author: {
        id: "user-id4",
        image: "https://i-love-png.com/images/profile-417-1163876.png",
        name: "심경주",
        profile: "저는 심경주라고 합니다."
      },
      contents: "<p>난 제일 짧게</p>",
      id: "14",
      likes: ["user-id1", "user-id2"],
      published: true,
      thumbnail:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      title: "짧은 제목"
    }
  ];

  public fCollections: ICollection[] = [
    {
      author: {
        id: "user-id1",
        image: "https://i-love-png.com/images/profile-417-1163876.png",
        name: "박종우",
        profile: "저는 박종우라고 합니다."
      },
      content: "이 컬렉션은...",
      id: "111",
      likes: ["user-id2", "user-id3"],
      published: true,
      title: "봄볕 쐬며"
    },
    {
      author: {
        id: "user-id2",
        image: "https://i-love-png.com/images/profile-417-1163876.png",
        name: "정혜경",
        profile: "저는 정혜경이라고 합니다."
      },
      content: "이 컬렉션은...",
      id: "112",
      likes: ["user-id1", "user-id3"],
      published: false,
      title: "여름바람 쐬며 읽기 좋은 책"
    },
    {
      author: {
        id: "user-id3",
        image: "https://i-love-png.com/images/profile-417-1163876.png",
        name: "정승권",
        profile: "저는 정승권이라고 합니다."
      },
      content: "이 컬렉션은...",
      id: "113",
      likes: ["user-id1", "user-id4"],
      published: false,
      title: "가을볕 쐬며 읽기 좋은 책 가을바람도 추가함 컬렉션 제목 길게"
    },
    {
      author: {
        id: "user-id4",
        image: "https://i-love-png.com/images/profile-417-1163876.png",
        name: "심경주",
        profile: "저는 심경주라고 합니다."
      },
      content: "이 컬렉션은...",
      id: "114",
      likes: ["user-id1", "user-id2"],
      published: false,
      title: "겨울에 읽기 좋은"
    }
  ];

  public render(): ReactElement {
    return (
      <div className="main">
        <Slider review={this.fReviews[0]} />
        <RecoReviewList reviews={this.fReviews} />
        <div className="main_recocollection_title">
          서로모임에 오신 분들께서 작성해주신 컬렉션입니다.
        </div>
        <RecoCollectionList collections={this.fCollections} />
      </div>
    );
  }
}

// 사이드바 div 가장 상단에 넣을 것

export default Main;
