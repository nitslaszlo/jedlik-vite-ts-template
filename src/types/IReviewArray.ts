// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IReviewArray extends Array<IReview> {}
export interface IReview {
  name: string;
  review: string;
  rating: number;
  recommend: string;
}
