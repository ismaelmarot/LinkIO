import { useThemeMode } from '@/store/themeStore'

export const useSettings = () => {
  const mode = useThemeMode((s) => s.mode)
  const toggle = useThemeMode((s) => s.toggle)

  return {
    mode,
    handleToggleTheme: toggle,
  }
}