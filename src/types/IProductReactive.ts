import { IReview } from "./IReviewArray";

interface IVariant {
  id: number;
  color: string;
  image: string;
  quantity: number;
}

export default interface IProductReactive {
  product: string;
  brand: string;
  selectedVariant: number;
  details: Array<string>;
  variants: Array<IVariant>;
  reviews: Array<IReview>;
}
