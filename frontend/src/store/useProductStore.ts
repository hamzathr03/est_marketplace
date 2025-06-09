import { create } from 'zustand';
import { Product, Category } from '../types';

// Mock data
import { products, categories } from '../data/mockData';

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  categories: Category[];
  selectedCategory: string | null;
  searchQuery: string;
  isLoading: boolean;
  error: string | null;
  
  fetchProducts: () => Promise<void>;
  fetchProductById: (id: string) => Promise<Product | undefined>;
  fetchCategories: () => Promise<void>;
  
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (categoryId: string | null) => void;
  filterProducts: () => void;
  toggleFavorite: (productId: string) => void;
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  filteredProducts: [],
  categories: [],
  selectedCategory: null,
  searchQuery: '',
  isLoading: false,
  error: null,
  
  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 800));
      
      set({
        products,
        filteredProducts: products,
        isLoading: false
      });
    } catch (error) {
      console.error('Error fetching products:', error);
      set({
        error: 'Failed to fetch products',
        isLoading: false
      });
    }
  },
  
  fetchProductById: async (id: string) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const product = products.find(p => p.id === id);
      set({ isLoading: false });
      
      return product;
    } catch (error) {
      console.error('Error fetching product:', error);
      set({
        error: 'Failed to fetch product details',
        isLoading: false
      });
    }
  },
  
  fetchCategories: async () => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 500));
      
      set({
        categories,
        isLoading: false
      });
    } catch (error) {
      console.error('Error fetching categories:', error);
      set({
        error: 'Failed to fetch categories',
        isLoading: false
      });
    }
  },
  
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    get().filterProducts();
  },
  
  setSelectedCategory: (categoryId: string | null) => {
    set({ selectedCategory: categoryId });
    get().filterProducts();
  },
  
  filterProducts: () => {
    const { products, searchQuery, selectedCategory } = get();
    
    let filtered = [...products];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        product => product.category === selectedCategory
      );
    }
    
    set({ filteredProducts: filtered });
  },
  
  toggleFavorite: (productId: string) => {
    // In a real app, this would call an API to toggle favorite status
    console.log(`Toggled favorite for product ${productId}`);
  }
}));