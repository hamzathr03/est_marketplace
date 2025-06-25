import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, isSeller: boolean) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email, password) => {
        set({ isLoading: true });

        try {
          const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });

          if (!response.ok) throw new Error('Login failed');

          const data = await response.json();
          const user = data.user;
          const token = data.access_token;

          // ✅ Store token
          localStorage.setItem('token', token);

          set({
            user,
            isAuthenticated: true,
            isLoading: false
          });
        } catch (error) {
          console.error('Login error:', error);
          set({ isLoading: false });
          throw error;
        }
      },

      signup: async (name, email, password, isSeller) => {
        set({ isLoading: true });

        try {
          const response = await fetch('http://localhost:8000/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name,
              email,
              password,
              role: isSeller ? 'seller' : 'user'
            }),
          });

          if (!response.ok) throw new Error('Signup failed');

          const data = await response.json();
          const user = data.user;
          const token = data.access_token;

          // ✅ Store token
          localStorage.setItem('token', token);

          set({
            user,
            isAuthenticated: true,
            isLoading: false
          });
        } catch (error) {
          console.error('Signup error:', error);
          set({ isLoading: false });
          throw error;
        }
      },

      logout: () => {
        const token = localStorage.getItem('token');

        fetch('http://localhost:8000/api/logout', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ${token}'
          }
        }).catch(console.error);

        localStorage.removeItem('token');
        localStorage.removeItem('auth'); // clear persist

        set({
          user: null,
          isAuthenticated: false
        });
      }
    }),
    {
      name: 'auth',
    }
  )
);
