export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isSeller: boolean;
  location: string;
  createdAt: string;
}

export interface Seller extends User {
  description: string;
  rating: number;
  products: Product[];
  followers: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  seller: Seller;
  rating: number;
  reviews: Review[];
  stock: number;
  isOrganic: boolean;
  isLocal: boolean;
  location: string;
  distance?: number;
  createdAt: string;
}

export interface Review {
  id: string;
  user: User;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}