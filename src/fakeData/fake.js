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
      contents:
        "오스카리아나는 명언, 경구, 아포리즘의 대명사처럼 여겨지는 오스카 와일드의 수많은 말들을 가리킨다. 이 책은 우리에게 더없이 익숙하면서도 낯선 ‘오스카리아나’를 한데 모아 제자리를 찾아 주고자 하는, 때늦은 그러나 꼭 필요한 시도의 결과물이다. —「들어가는 말」에서 나는 와일드의 단점에도 불구하고 그의 위대함을 단 한순간도 의심해 본 적이 없다. — 앙드레 지드오스카 와일드는 의심할 여지없이 그의 시대, 어쩌면 모든 시대를 통틀어 가장 위대한 이야기꾼이다. —조지 버나드 쇼와일드로 하여금 ‘예술의 비밀들’을 간파하게 한 것은 고통의 발견이었다. —알베르 카뮈오스카 와일드는 오랫동안 고통과 불운을 겪었음에도 그 누구도 빼앗아 갈 수 없는 순수함을 여전히 간직하고 있다. —호르헤 루이스 보르헤스",
      likes: ["user-id1", "user-id2"],
      published: true,
      thumbnail: "black",
      title: "오스카리아나"
    },
    {
      _id: "ObjectId",
      author: {
        _id: "ObjectId",
        image: "http://...",
        name: "심경주",
        profile: "저는 심경주라고 합니다."
      },
      contents:
        "고등학교때이던가..언젠가 반쯤 읽었다 놓았던 책이다. 달과 6펜스라는 제목에 끌려 무슨 책인가 궁금했었다. 잘 알려져있듯이 이 소설은 프랑스 화가 폴 고갱을 모델로 씌여진 소설이다. 화가를 비롯한 예술가들의 삶은 보통의 우리네 삶과 그 결이 달라서 크게 공감할 수 없는 경우가 많다. 뭔가 호기심은 가지만, 영혼을 사로잡는 예술적 영감같은 것은 범인(凡人)인 내가 경험할 수 없는 것이기 때문일거다. 그런데 뭘까.. 중년이 되어 다시 만난 스트릭랜드는 내가 고민하고 있던 그 지점에 딱 서있다 자기의 길을 찾아 떠나버리는거다. 이제는 뭔가 진정 내가 하고 싶은 걸 깨달아 훌훌 털고 길을 나서고 싶어도, 지켜내야 할 것들이 많아져 버려 그냥 그 자리에 머물수 밖에 없는 것이 중년의 삶 아닌가 말이다. 그런데 주인공은 이렇다 할 설명도 없이 그 모든걸 팽개쳐버리고 자신이 원하는 삶을 찾아 맹렬히 떠나버린다. 그토록 이기적인 주인공을 이토록 응원하며 읽게 될 줄은 몰랐다. 남에게 친절하지 않으면 어떤가. 자기가 바라는 일을 한다는 것, 자기가 좋아하는 조건에서 살아간다는 것이 중요한 것 아닌가 말이다. 현실에 없을 그런 무모함이 매력적이었다. 물론 주인공은 단죄를 받듯 병에 걸려 생을 비참하게 끝내고 만다. 무모함의 끝이란 그런거라고 알려주듯 말이다.'나는 이런 생각이 든다. 어떤 사람들은 자기가 태어날 곳이 아닌 데서 태어나기도 한다고. 그런 사람들은 비록 우연에 의해 엉뚱한 환경에 던져지긴 하였지만 늘 어딘지 모를 고향에 대한 그리움을 가지고 산다.'열심히 배우고 자라 내가 원한다고 생각했던 것을 이루어냈는데, 막상 그것이 진정 내가 원하던 것과는 다르다는 것을 어느 순간 깨닫게 된다면 우리는 어떤 선택을 해야할까. 아니라는 것을 알게되었음에도 선택한 길을 끝까지 가는 것이 책임있는 성인인걸까.. 나만의 고향을 찾아 뒤늦게라도 떠나는 것이 한 번 뿐인 내 인생을 의미있게 하는 것일까.. 작가도 이런 고민에 닿아있어 고갱의 삶에 매력을 느낀 것이 아니었을까 생각해본다.",
      likes: ["user-id1", "user-id2"],
      published: true,
      thumbnail: "black",
      title: "달과 6펜스를 읽고"
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
