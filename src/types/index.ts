export interface Product {
  id: string;
  brand: string;
  name: string;
  size: string;
  color: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Category = 
  | "Lip Gloss"
  | "Lip Stain"
  | "Lip Care"
  | "Contour"
  | "Mascara"
  | "Eyeliner"
  | "Blush"
  | "Foundation"
  | "Body Care"
  | "Fragrance"
  | "Accessories"
  | "Apparel"
  | "Gift Set";
