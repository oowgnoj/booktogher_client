module.exports = {
  fakeReviews: [
    {
      _id: "ObjectId",
      author: {
        _id: "ObjectId",
        image: "http://...",
        name: "심경주",
        profile: "저는 심경주라고 합니다."
      },
      contents: "<p>...</p>",
      likes: ["user-id1", "user-id2"],
      published: true,
      thumbnail: "black",
      title: "오늘의 일탈"
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
  fakeCuration: [
    {
      _id: "ObjectId",
      author: {
        _id: "ObjectId",
        image: "http://...",
        name: "박종우",
        profile: "저는 박종우라고 합니다."
      },
      contents: "이 큐레이션은...",
      likes: ["user-id1", "user-id2"],
      title: "가을바람 쐬며 읽기 좋은 책"
    },
    {
      _id: "ObjectId",
      author: {
        _id: "ObjectId",
        image: "http://...",
        name: "박종우",
        profile: "저는 박종우라고 합니다."
      },
      contents: "이 큐레이션은...",
      likes: ["user-id1", "user-id2"],
      title: "가을바람 쐬며 읽기 좋은 책"
    }
  ],

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
    _id: "oowgonj",
    email: "mangtaob@gmail.com",
    image:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiHqoKV4f3lAhVZMd4KHY-MAiEQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F605945324846073971%2F&psig=AOvVaw2K-NK1ZXpu-ttRUYny7nDQ&ust=1574510049145968",
    name: "oowgonj",
    profile: "안녕하세요 박종우입니다.  반갑습니다",
    to_read: [
      {
        book: {
          _id: "1",
          authors: ["john stuart mill"],
          thumbnail:
            "https://search1.kakaocdn.net/thumb/C116x164.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1588054%3Ftimestamp%3D20190131031131%3Fmoddttm=201911222058",
          title: "자유론"
        }
      }
    ],
    reading: [
      {
        book: {
          _id: "2",
          authors: ["도스토예프스키"],
          thumbnail:
            "https://search1.kakaocdn.net/thumb/C116x164.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1365326%3Ftimestamp%3D20190128032600%3Fmoddttm=201911222059",
          title: "카라마조프 가의 형제들"
        },
        start: "10/29/2019",
        goal: "12/13/2019"
      },
      {
        book: {
          _id: "3",
          authors: ["톨스토이"],
          thumbnail:
            "https://search1.kakaocdn.net/thumb/C116x164.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1110505%3Ftimestamp%3D20190126204227%3Fmoddttm=201911222100",
          title: "안나 카레리나"
        },
        start: "",
        goal: ""
      }
    ],
    finished: [
      {
        book: {
          _id: "4",
          authors: ["프란츠 카프카"],
          thumbnail:
            "https://search1.kakaocdn.net/thumb/C116x164.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F540770%3Ftimestamp%3D20190123173006%3Fmoddttm=201911222101",
          title: "변신"
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
