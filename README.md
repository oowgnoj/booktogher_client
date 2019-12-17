# Booktogether.org

> 서(書)로모임은 서평 / 큐레이션을 작성하고 다른 유저들과 공유할 수 있는 플랫폼 입니다.

![Alt text](src/Asset/images/main.png "Main")

## Service Detail

- 검색 책 / 서평 검색을 통해 책 상세 정보, 해당 책에 대한 서평, 해당 책이 포함된 큐레이션을 확인할 수 있습니다. 제목, 저자 순으로 가중치를 둔 검색 결과를 제공합니다.
- 서평 책을 선택한 후 해당 책에 대한 서평을 작성할 수 있습니다. 책에 대한 평점을 부여할 수 있습니다.
- 큐레이션 책과 서평으로 이루어진 큐레이션을 유저가 직접 등록할 수 있습니다.
- 서재 읽고 싶은 책, 현재 읽고 있는 책, 다 읽은 책을 등록할 수 있으며 독서 목표 및 독서 현황 통계를 확인할 수 있는 서재 기능을 제공합니다. 유저가 작성하거나 좋아요를 클릭한 서평 / 큐레이션 목록을 확인할 수 있습니다.

## Stacks

| Type             | Stacks                    |
| ---------------- | ------------------------- |
| Library          | React                     |
| State Management | Redux, Redux-thunk        |
| editor           | React-Quill               |
| Other            | Typescript , Immutable.js |

## Folder Structure

```
my-app/
├──README.md
├──node_modules/
├──package.json
├──Redux/
├──Modules/
├──configureStore
├──public/
   ├──index.html
   ├──favicon.ico
├──src/
   ├──components/
      ├──BookDetail/
      ├──EditCuration/
      ├──FindPassword/
      ├──Footer/
      ├──Main/
      ├──MyBook/
      ├──MyCuration/
      ├──MyLikes/
      ├──MyPage/
      ├──MyReview/
      ├──ReadCuration/
      ├──ReadReview/
      ├──Search/
      ├──Shared/
      ├──SideBar/
      ├──Signin/
      ├──Signup/
      ├──WriteCuration/
      ├──WriteReview/
```
