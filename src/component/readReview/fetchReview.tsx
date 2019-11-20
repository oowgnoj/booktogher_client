import { IReview, IBook } from './reviewInterface';

export const fetchReview = (callback: any, id : string): any =>{
  fetch(`https://localhost:3000/reviews/${id}`)
  .then((res :Response) => res.json())
  .then((res :IReview) => {
    callback(res)
  })
}

export const fetchReviewBook = (callback: any, id : string): any =>{
  fetch(`https://localhost:3000/books?review_id=${id}`)
  .then((res :Response) => res.json())
  .then((res :IBook[]) => {
    callback(res)
  })
}

export const fetchBookReviewList = (callback: any, id : string): any =>{
  fetch(`https://localhost:3000/reviews?book_id=${id}`)
  .then((res :Response) => res.json())
  .then((res :IReview[]) => {
    callback(res)
  })
}
