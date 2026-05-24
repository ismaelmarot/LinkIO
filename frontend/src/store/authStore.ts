import { create } from "zustand";

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isSignedIn: boolean;
  syncFromClerk: (user: User | null, token: string | null) => void;
  login: () => void;
  register: () => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoading: true,
  isSignedIn: false,

  syncFromClerk: (user, token) =>
    set({ user, token, isLoading: !user, isSignedIn: !!user }),

  login: async () => {},
  register: async () => {},
  logout: () => set({ user: null, token: null, isSignedIn: false }),

  checkAuth: async () => {
    set({ isLoading: false });
  },
}));
