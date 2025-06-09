import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, isSeller: boolean) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  
  login: async (email, password) => {
    set({ isLoading: true });
    
    try {
      // Mock login - in a real app, this would call an API
      // Simulating API response delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock user data
      const user: User = {
        id: '1',
        name: 'John Doe',
        email,
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
        isSeller: false,
        location: 'Paris, France',
        createdAt: new Date().toISOString()
      };
      
      set({
        user,
        isAuthenticated: true,
        isLoading: false
      });
      
      // Store in localStorage for persistence
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Login failed:', error);
      set({ isLoading: false });
    }
  },
  
  signup: async (name, email, password, isSeller) => {
    set({ isLoading: true });
    
    try {
      // Mock signup - in a real app, this would call an API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const user: User = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email,
        isSeller,
        location: 'Paris, France',
        createdAt: new Date().toISOString()
      };
      
      set({
        user,
        isAuthenticated: true,
        isLoading: false
      });
      
      // Store in localStorage for persistence
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Signup failed:', error);
      set({ isLoading: false });
    }
  },
  
  logout: () => {
    // Clear user data
    localStorage.removeItem('user');
    set({
      user: null,
      isAuthenticated: false
    });
  }
}));