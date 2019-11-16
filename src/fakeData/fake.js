module.exports = {
  fakeReviews: [
    {
      id: 1,
      author: {
        id: 2,
        image: "http://...",
        name: "심경주",
        profile: "저는 심경주라고 합니다."
      },
      contents: "<p>...</p>",
      likes: ["user-id1", "user-id2"],
      published: true,
      thumbnail: "http://...",
      title: "오늘의 일탈"
    },
    {
      id: 1,
      author: {
        id: 2,
        image: "http://...",
        name: "심경주",
        profile: "저는 심경주라고 합니다."
      },
      contents: "<p>...</p>",
      likes: ["user-id1", "user-id2"],
      published: true,
      thumbnail: "http://...",
      title: "오늘의 일탈"
    }
  ],

  fakeUser: {
    id: 1,
    email: "aaa@gmail.com",
    image: "http://...",
    name: "정혜경",
    profile: "저는 말이죠...",
    to_read: [
      {
        id: 1,
        authors: ["도스토예프스키"],
        thumbnail: "http://...",
        title: "죄와 벌"
      }
    ],
    reading: [
      {
        id: 1,
        authors: ["톨스토이"],
        thumbnail: "http://...",
        title: "안나 카레리나",
        start: "10/29/2019",
        goal: "12/13/2019"
      }
    ],
    finished: [
      {
        id: 1,
        authors: ["단테"],
        thumbnail: "http://...",
        title: "신곡",
        start: "11/15/2019",
        end: "11/24/2019"
      }
    ],
    numBooksGoal: 10,
    numReviewsGoal: 10
  },
  fakeUser2: {
    id: 2,
    email: "aaa@gmail.com",
    image: "http://...",
    name: "박종우",
    profile: "저는 말이죠...",
    to_read: [
      {
        id: 1,
        authors: ["도스토예프스키"],
        thumbnail: "http://...",
        title: "죄와 벌"
      }
    ],
    reading: [
      {
        id: 1,
        authors: ["톨스토이"],
        thumbnail: "http://...",
        title: "안나 카레리나",
        start: "10/29/2019",
        goal: "12/13/2019"
      }
    ],
    finished: [
      {
        id: 1,
        authors: ["단테"],
        thumbnail: "http://...",
        title: "신곡",
        start: "11/15/2019",
        end: "11/24/2019"
      }
    ],
    numBooksGoal: 10,
    numReviewsGoal: 10
  }
};
