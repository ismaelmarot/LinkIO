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
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

const mockUser: User = {
  id: "mock-1",
  email: "demo@gotrack.app",
  name: "Ismael Marot",
};

export const useAuthStore = create<AuthState>((set) => ({
  user: mockUser,
  token: "mock-token",
  isLoading: false,

  login: async () => {
    set({ user: mockUser, token: "mock-token" });
  },

  register: async () => {
    set({ user: mockUser, token: "mock-token" });
  },

  logout: () => {
    set({ user: null, token: null });
  },

  checkAuth: async () => {
    set({ user: mockUser, isLoading: false });
  },
}));
