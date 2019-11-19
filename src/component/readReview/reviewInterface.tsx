export interface IAuthor {
  id: string;
  image: string;
  name: string;
  profile: string;
}

export interface IReview {
  id: string;
  author: IAuthor;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}
