import React, { ReactElement } from "react";
import Review from "./Review";
import BookInfo from "./BookInfo";
import RecoReview from "./RecoReview";
import UserInfo from "./UserInfo";
import { IProps } from './reviewInterface'
import { fetchReview, fetchReviewBook  } from './fetchReview'


class ReadReview extends React.Component<{}, IProps>{
  constructor({}){
    super({})
    this.state ={
      review : {
        id: "11",
        author: {
          id: "user-id2",
          image:
            "https://images.unsplash.com/photo-1564650211163-21049f1b683a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          name: "정혜경",
          profile: "저는 정혜경이라고 합니다."
        },
        contents:
          `<p>혜경님의 서평이 여기에 들어갈거에요. 혜경님은 어떤 책으로 서평을 쓰실까. 
          코드를 쳐야하는데 코드보다 가짜 데이터 만드는게 더 오래 걸리는 기분이네요. 
          이정도면 충분히 길겠죠. 충분히 길어야 자르는것도 연습할텐데.</p>
          <p>혜경님의 서평이 여기에 들어갈거에요. 혜경님은 어떤 책으로 서평을 쓰실까. 
          코드를 쳐야하는데 코드보다 가짜 데이터 만드는게 더 오래 걸리는 기분이네요. 이정도면 충분히 길겠죠. 
          충분히 길어야 자르는것도 연습할텐데.</p>
          <p>혜경님의 서평이 여기에 들어갈거에요. 혜경님은 어떤 책으로 서평을 쓰실까. 
          코드를 쳐야하는데 코드보다 가짜 데이터 만드는게 더 오래 걸리는 기분이네요. 
          이정도면 충분히 길겠죠. 충분히 길어야 자르는것도 연습할텐데.</p>
          <p>혜경님의 서평이 여기에 들어갈거에요. 혜경님은 어떤 책으로 서평을 쓰실까. 
          코드를 쳐야하는데 코드보다 가짜 데이터 만드는게 더 오래 걸리는 기분이네요. 
          이정도면 충분히 길겠죠. 충분히 길어야 자르는것도 연습할텐데.</p>
          <p>국가는 개인이 가지는 불가침의 기본적 인권을 확인하고 이를 보장할 의무를 진다. 
          공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다. 모든 국민은 학문과 예술의 자유를 가진다. 
          모든 국민은 인간다운 생활을 할 권리를 가진다. 여자의 근로는 특별한 보호를 받으며, 
          고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.</p>
          <p>누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 
          차별을 받지 아니한다. 모든 국민의 재산권은 보장된다. 모든 국민은 직업선택의 자유를 가진다. 
          모든 국민의 재산권은 보장된다. 국가는 법률이 정하는 바에 의하여 재외국민을 보호할 의무를 진다.</p>
          <p>신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다. 
          모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다. 
          주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 
          누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 
          대한민국은 통일을 지향하며, 자유민주적 기본질서에 입각한 평화적 통일 정책을 수립하고 이를 추진한다</p>`,
        likes: ["user-id1", "user-id2"],
        published: true,
        thumbnail:
          "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        title: "혜경님 지금 뭐하세요 : css 어려워"
      },
      bookList : [{
        authors: [ "로라 오웬" ],
        contents: "난 책읽기가 좋아 제2단계, 제36권 『마녀 워니 학교에 가다』. 그림책을 통해 유아들의 마음을 사로잡아온 마녀 위니가 동화를 통해 아이들에게 찾아왔다. 아이들의 심리를 코믹하고 엉뚱하며 따뜻한 상상력으로 풀어낸 총4편의 동화가 흥미진진하면서도 아슬아슬한 마법과 모헙의 세계로 아이들을 초대한다. 생동감과 박진감이 넘치는 유쾌하고 발랄한 그림이 곁들어져 흥겨움을 불러일으키고 있다. 아이들에게 공감을 자아내면서, 책 읽기의 즐거움을 느끼게 해준다.",
        id: "book-id1",
        rating: 3,
        thumbnail: "http://image.kyobobook.co.kr/images/book/large/259/l9788949161259.jpg",
        title: "마녀 위니 학교에 가다"
      }]
    } 
  }
  public componentDidMount() : void {
    const setStateReview = (res: any) : void=> {
      this.setState({review : res})
    }
    const setStateBook = (res: any) : void=> {
      this.setState({bookList : res})
    }
    fetchReview(setStateReview, '1');
    fetchReviewBook(setStateBook,'1')
  }
  
  public render() : ReactElement{
    return (
      <div>
        <Review review ={this.state.review} bookList={this.state.bookList}/>
        <BookInfo bookList ={this.state.bookList}/>
        <RecoReview id ={this.state.review.id}/>
        <UserInfo review ={this.state.review}/>
      </div>
    )
  }
};

export default ReadReview;