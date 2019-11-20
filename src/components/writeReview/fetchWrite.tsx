import { IBook } from './writeInterface';

interface ISearchBook {
    results_count: number,
    pageable_count: number,
    current_page: number,
    is_end: boolean,
    books: [{
      _id: string,
      authors: [ string ],
      contents: string,
      thumbnail: string,
      title: string
    }]
}

const url : string = "http://booktogether.ap-northeast-2.elasticbeanstalk.com"

export const fetchBookSearch = (callback: any, title : string): any =>{
  fetch(`${url}/books/search?query=${title}`)
  .then((res :Response) => res.json())
  .then((res :ISearchBook) => {
    console.log(res)
    callback(res.books)
  })
}


