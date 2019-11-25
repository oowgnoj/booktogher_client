import React, { ReactElement } from "react";
import { IReviewState, IReview } from "./reviewInterface";
import RecoReviewCard from "./RecoReviewCard";
import "./RecoReview.css";
import { fetchBookReviewList } from "./fetchReview";

interface IProps {
  id: string[];
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
        }
      ]
    };
  }
    public componentDidMount(): void {
    const setStateReviewList = (res: any): void => {
      this.setState({ reviewList: res });
    };
    fetchBookReviewList(setStateReviewList, this.props.id[0]);
  }
 
  public render(): ReactElement {
    console.log(this.state.reviewList)
    const reviewCard = this.state.reviewList.map((info: IReview) => {
      console.log(info)
      return (
        <RecoReviewCard review={info} />
      )
    })
    return (
      <div className="recoReview-area">
        <h4>이 책의 다른 서평들</h4>
        <div className="recoReview">{reviewCard}</div>
      </div>
    );
  }
}

export default RecoReview;
