import { create } from "zustand";

type ThemeMode = "light" | "dark";

interface ThemeModeState {
  mode: ThemeMode;
  toggle: () => void;
  setMode: (mode: ThemeMode) => void;
}

export const useThemeMode = create<ThemeModeState>((set) => ({
  mode: (localStorage.getItem("theme-mode") as ThemeMode) || "dark",
  toggle: () =>
    set((state) => {
      const next = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("theme-mode", next);
      return { mode: next };
    }),
  setMode: (mode) => {
    localStorage.setItem("theme-mode", mode);
    set({ mode });
  },
}));
