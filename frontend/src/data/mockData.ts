import { Product, Category, Seller, Review, User } from '../types';

const mockUsers: User[] = [
  {
    id: 'user1',
    name: 'Maria Lopez',
    email: 'maria@example.com',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    isSeller: false,
    location: 'Lyon, France',
    createdAt: '2023-01-15T09:24:00Z'
  },
  {
    id: 'user2',
    name: 'Thomas Dubois',
    email: 'thomas@example.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    isSeller: false,
    location: 'Bordeaux, France',
    createdAt: '2023-02-05T14:30:00Z'
  }
];

export const mockSellers: Seller[] = [
  {
    id: 'seller1',
    name: 'Ferme des Quatre Saisons',
    email: 'contact@quatresaisons.fr',
    avatar: 'https://images.pexels.com/photos/2382222/pexels-photo-2382222.jpeg',
    isSeller: true,
    location: 'Provence, France',
    description: 'We grow organic vegetables and fruits using traditional farming methods passed down through generations.',
    rating: 4.8,
    products: [],
    followers: 245,
    createdAt: '2022-05-12T08:10:00Z'
  },
  {
    id: 'seller2',
    name: 'Fromagerie Artisanale',
    email: 'info@fromagerie-artisanale.fr',
    avatar: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
    isSeller: true,
    location: 'Normandie, France',
    description: 'Our family has been making artisanal cheese for over 50 years using milk from our own farm.',
    rating: 4.9,
    products: [],
    followers: 189,
    createdAt: '2022-03-24T11:15:00Z'
  },
  {
    id: 'seller3',
    name: 'Miel des Cévennes',
    email: 'apiculteur@mielcevennes.fr',
    avatar: 'https://images.pexels.com/photos/1289845/pexels-photo-1289845.jpeg',
    isSeller: true,
    location: 'Cévennes, France',
    description: 'We produce a variety of honey from our bee farms located in the pristine mountains of Cévennes.',
    rating: 4.7,
    products: [],
    followers: 120,
    createdAt: '2022-08-17T16:45:00Z'
  }
];

const mockReviews: Review[] = [
  {
    id: 'review1',
    user: mockUsers[0],
    rating: 5,
    comment: 'The quality is exceptional! Very fresh and tasty.',
    createdAt: '2023-05-15T10:30:00Z'
  },
  {
    id: 'review2',
    user: mockUsers[1],
    rating: 4,
    comment: 'Great product, but delivery took a bit longer than expected.',
    createdAt: '2023-06-02T16:45:00Z'
  }
];

export const categories: Category[] = [
  {
    id: 'category1',
    name: 'Fruits & Vegetables',
    icon: 'apple',
    description: 'Fresh, locally grown fruits and vegetables.'
  },
  {
    id: 'category2',
    name: 'Dairy & Eggs',
    icon: 'milk',
    description: 'Farm-fresh dairy products and eggs.'
  },
  {
    id: 'category3',
    name: 'Bakery',
    icon: 'croissant',
    description: 'Artisanal bread, pastries, and baked goods.'
  },
  {
    id: 'category4',
    name: 'Meat & Fish',
    icon: 'fish',
    description: 'Locally sourced meat and fresh seafood.'
  },
  {
    id: 'category5',
    name: 'Honey & Jams',
    icon: 'cookie',
    description: 'Artisanal honey, jams, and preserves.'
  },
  {
    id: 'category6',
    name: 'Beverages',
    icon: 'wine',
    description: 'Local wines, juices, and other beverages.'
  }
];

export const products: Product[] = [
  {
    id: 'product1',
    name: 'Organic Strawberries',
    description: 'Sweet and juicy organic strawberries, freshly picked from our farm. Perfect for desserts or a healthy snack.',
    price: 4.99,
    images: [
      'https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg',
      'https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg'
    ],
    category: 'category1',
    seller: mockSellers[0],
    rating: 4.8,
    reviews: [mockReviews[0]],
    stock: 50,
    isOrganic: true,
    isLocal: true,
    location: 'Provence, France',
    distance: 15,
    createdAt: '2023-04-12T09:30:00Z'
  },
  {
    id: 'product2',
    name: 'Artisanal Camembert',
    description: 'Traditional Camembert cheese made with raw milk from grass-fed cows using age-old techniques.',
    price: 8.50,
    images: [
      'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg',
      'https://images.pexels.com/photos/4087609/pexels-photo-4087609.jpeg'
    ],
    category: 'category2',
    seller: mockSellers[1],
    rating: 4.9,
    reviews: [mockReviews[1]],
    stock: 25,
    isOrganic: true,
    isLocal: true,
    location: 'Normandie, France',
    distance: 28,
    createdAt: '2023-04-10T14:15:00Z'
  },
  {
    id: 'product3',
    name: 'Wildflower Honey',
    description: 'Pure, unfiltered honey collected from wildflower meadows in the mountains. Rich in flavor and natural enzymes.',
    price: 12.75,
    images: [
      'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      'https://images.pexels.com/photos/2516423/pexels-photo-2516423.jpeg'
    ],
    category: 'category5',
    seller: mockSellers[2],
    rating: 4.7,
    reviews: [],
    stock: 40,
    isOrganic: true,
    isLocal: true,
    location: 'Cévennes, France',
    distance: 35,
    createdAt: '2023-04-15T11:45:00Z'
  },
  {
    id: 'product4',
    name: 'Fresh Farm Eggs',
    description: 'Free-range eggs from hens raised on organic feed with access to outdoor pastures.',
    price: 5.25,
    images: [
      'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
      'https://images.pexels.com/photos/7728345/pexels-photo-7728345.jpeg'
    ],
    category: 'category2',
    seller: mockSellers[0],
    rating: 4.6,
    reviews: [],
    stock: 60,
    isOrganic: true,
    isLocal: true,
    location: 'Provence, France',
    distance: 15,
    createdAt: '2023-04-11T08:20:00Z'
  },
  {
    id: 'product5',
    name: 'Sourdough Bread',
    description: 'Artisanal sourdough bread made with organic flour and traditional fermentation methods.',
    price: 6.50,
    images: [
      'https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg',
      'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg'
    ],
    category: 'category3',
    seller: mockSellers[0],
    rating: 4.8,
    reviews: [],
    stock: 20,
    isOrganic: true,
    isLocal: true,
    location: 'Provence, France',
    distance: 15,
    createdAt: '2023-04-13T07:30:00Z'
  },
  {
    id: 'product6',
    name: 'Fresh Caught Trout',
    description: 'Sustainably caught mountain trout, cleaned and ready to cook. Perfect for grilling or pan-frying.',
    price: 14.99,
    images: [
      'https://images.pexels.com/photos/3296432/pexels-photo-3296432.jpeg',
      'https://images.pexels.com/photos/8951558/pexels-photo-8951558.jpeg'
    ],
    category: 'category4',
    seller: mockSellers[2],
    rating: 4.7,
    reviews: [],
    stock: 15,
    isOrganic: false,
    isLocal: true,
    location: 'Cévennes, France',
    distance: 35,
    createdAt: '2023-04-14T16:40:00Z'
  }
];

// Update sellers with their products
mockSellers[0].products = products.filter(p => p.seller.id === 'seller1');
mockSellers[1].products = products.filter(p => p.seller.id === 'seller2');
mockSellers[2].products = products.filter(p => p.seller.id === 'seller3');