import React, { ReactElement } from "react";
import { IReviewState, IReview } from "./reviewInterface";
import RecoReviewCard from "./RecoReviewCard";
import "./RecoReview.css";
import { fetchBookReviewList } from "./fetchReview";

interface IProps {
  _id: string;
}

class RecoReview extends React.Component<IProps, IReviewState> {
  constructor(props: any) {
    super(props);
    this.state = {
      reviewList: [
        {
          _id: "11",
          author: {
            _id: "user-id2",
            image:
              "https://images.unsplash.com/photo-1564650211163-21049f1b683a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            name: "정혜경",
            profile: "저는 정혜경이라고 합니다."
          },
          contents:
            "<p>혜경님의 서평이 여기에 들어갈거에요. 혜경님은 어떤 책으로 서평을 쓰실까. 코드를 쳐야하는데 코드보다 가짜 데이터 만드는게 더 오래 걸리는 기분이네요. 이정도면 충분히 길겠죠. 충분히 길어야 자르는것도 연습할텐데.</p>",
          likes: ["user-id1", "user-id2"],
          published: true,
          thumbnail:
            "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
          title: "혜경님 추궁하는건 아니고요 지금 뭐하세요"
        },
        {
          _id: "12",
          author: {
            _id: "user-id3",
            image:
              "https://paisaboltahai.rbi.org.in/images/2000-note-front.png",
            name: "정승권",
            profile: "저는 정승권이라고 합니다."
          },
          contents:
            "<p>승권님의 서평은 여기. 여기는 위보다 조금 더 짧게 쓸거에요. 지금은 너무 짧을까요.</p>",
          likes: ["user-id1", "user-id2"],
          published: true,
          thumbnail:
            "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
          title: "승권님 노래 궁금해요"
        },
        {
          _id: "13",
          author: {
            _id: "user-id1",
            image:
              "http://www.wooripuppy.co.kr/data/file/puppy1/1218445154_8or5cmN7_BBFEC6E4C0CCBAD0BEE704.jpg",
            name: "박종우",
            profile: "저는 박종우라고 합니다."
          },
          contents:
            "<p>대충 손짓만해도 다 알아들으시는 종우님. 알고리즘 성공하셔서 꼭 백엔드 이력을 얻어가셨으면 하는 작은 소망이 있다. 여기서는 긴 글을 테스트해봐야하는데. 아까 tslint 가 배열 길이 10 넘는다고 간섭하던게 생각나서 황당하다. 그 때 tslint rules 몇 개를 그냥 날렸는데 그렇게 날려도 되는거였을까? 대충 기억하기로 디스트럭쳐링 관련되었던 것 같은데. 괜찮을거야. 뭣하면 다시 추가하면 되니까.</p>",
          likes: ["user-id1", "user-id2"],
          published: true,
          thumbnail:
            "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
          title: "이렇게 이렇게 해서 이렇게 "
        },
        {
          _id: "14",
          author: {
            _id: "user-id4",
            image:
              "https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            name: "심경주",
            profile: "저는 심경주라고 합니다."
          },
          contents: "<p>난 제일 짧게</p>",
          likes: ["user-id1", "user-id2"],
          published: true,
          thumbnail:
            "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
          title: "짧은 제목"
        }
      ]
    };
  }
  /* public componentDidMount(): void {
    const setStateReviewList = (res: any): void => {
      this.setState({ reviewList: res });
    };
    fetchBookReviewList(setStateReviewList, "1");
  }
 */
  public render(): ReactElement {
    const reviewCard: ReactElement[] | string = this.state.reviewList
      ? this.state.reviewList.map((info: IReview) => (
          <RecoReviewCard review={info} />
        ))
      : "빈값";
    return (
      <div className="recoReview-area">
        <h4>이 책의 다른 서평들</h4>
        <div className="recoReview">{reviewCard}</div>
      </div>
    );
  }
}

export default RecoReview;
