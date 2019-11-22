module.exports = {
  fakeReviews: [
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
        id: "user-id3",
        image: "https://paisaboltahai.rbi.org.in/images/2000-note-front.png",
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
        id: "user-id1",
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
      title: "이렇게 이렇게 해서 이렇게 이렇게 전까지 잘라주세요 뭔지 아시죠"
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
  ],
  fakeUser: {
    _id: "ObjectId",
    email: "aaa@gmail.com",
    image: "http://...",
    name: "정혜경",
    profile: "저는 말이죠...",
    to_read: [
      {
        book: {
          _id: "ObjectId",
          authors: ["도스토예프스키"],
          thumbnail: "http://...",
          title: "죄와 벌"
        }
      }
    ],
    reading: [
      {
        book: {
          _id: "ObjectId",
          authors: ["톨스토이"],
          thumbnail: "http://...",
          title: "안나 카레리나"
        },
        start: "10/29/2019",
        goal: "12/13/2019"
      }
    ],
    finished: [
      {
        book: {
          _id: "ObjectId",
          authors: ["단테"],
          thumbnail: "http://...",
          title: "신곡"
        },
        start: "11/15/2019",
        end: "11/24/2019"
      }
    ],
    numBooksGoal: 10,
    numReviewsGoal: 10
  },
  fakeUser2: {
    id: "2",
    email: "aaa@gmail.com",
    image: "http://...",
    name: "박종우",
    profile: "저는 말이죠...",
    to_read: [
      {
        id: "1",
        authors: ["도스토예프스키"],
        thumbnail:
          "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F230FDC34545EE81632",
        title: "죄와 벌"
      }
    ],
    reading: [
      {
        id: "1",
        authors: ["톨스토이"],
        thumbnail:
          "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F230FDC34545EE81632",

        title: "안나 카레리나",
        start: "10/29/2019",
        goal: "12/13/2019"
      }
    ],
    finished: [
      {
        id: "1",
        authors: ["단테"],
        thumbnail:
          "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F230FDC34545EE81632",

        title: "신곡",
        start: "11/15/2019",
        end: "11/24/2019"
      }
    ],
    numBooksGoal: 10,
    numReviewsGoal: 10
  },
  userBookData: {
    to_read: [
      {
        book: {
          _id: "ObjectId",
          authors: ["도스토예프스키"],
          thumbnail: "http://...",
          title: "죄와 벌"
        }
      },
      {
        book: {
          _id: "ObjectId",
          authors: ["도스토예프스키"],
          thumbnail: "http://...",
          title: "죄와 벌"
        }
      }
    ],
    reading: [
      {
        book: {
          _id: "ObjectId",
          authors: ["톨스토이"],
          thumbnail: "http://...",
          title: "안나 카레리나"
        },
        start: "10/29/2019",
        goal: "12/13/2019"
      }
    ],
    finished: [
      {
        book: {
          _id: "ObjectId",
          authors: ["단테"],
          thumbnail: "http://...",
          title: "신곡"
        },
        start: "11/15/2019",
        end: "11/24/2019"
      }
    ]
  },
  UserDB: {
    _id: "",
    email: "",
    image: "",
    name: "",
    profile: "",
    to_read: [
      {
        book: {
          _id: "ObjectId",
          authors: ["도스토예프스키"],
          thumbnail:
            "https://search1.kakaocdn.net/thumb/C116x164.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F540827%3Ftimestamp%3D20190123173021%3Fmoddttm=201911201710",
          title: "죄와 벌"
        }
      }
    ],
    reading: [
      {
        book: {
          _id: "ObjectId",
          authors: ["톨스토이"],
          thumbnail:
            "https://search1.kakaocdn.net/thumb/C116x164.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F540827%3Ftimestamp%3D20190123173021%3Fmoddttm=201911201704",
          title: "안나 카레리나"
        },
        start: "10/29/2019",
        goal: "12/13/2019"
      },
      {
        book: {
          _id: "ObjectId",
          authors: ["톨스토이"],
          thumbnail:
            "https://search1.kakaocdn.net/thumb/C116x164.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5103586%3Fmoddttm=201911201745",
          title: "안나 카레리나"
        },
        start: "",
        goal: ""
      }
    ],
    finished: [
      {
        book: {
          _id: "ObjectId",
          authors: ["단테"],
          thumbnail:
            "https://search1.kakaocdn.net/thumb/C116x164.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F521168%3Ftimestamp%3D20190807120942%3Fmoddttm=201911201701",
          title: "신곡"
        },
        start: "",
        end: ""
      }
    ],
    numBooksGoal: 10,
    numReviewsGoal: 10
  },
  isLoggedIn: false,
  pending: false,
  error: ""
};
