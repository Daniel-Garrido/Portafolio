import { ref, computed } from 'vue'

// Clave de localStorage donde se guarda la preferencia del usuario
const STORAGE_KEY = 'theme'

// Lee el tema que el script de index.html ya aplicó al <html> antes de montar Vue
const getInitialTheme = () =>
  document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light'

// Estado compartido entre todos los componentes que usen el composable
const theme = ref(getInitialTheme())

// Aplica el tema usando el modo de color nativo de Bootstrap 5.3
const applyTheme = (value) => {
  document.documentElement.setAttribute('data-bs-theme', value)
}

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark')

  const setTheme = (value) => {
    theme.value = value
    applyTheme(value)
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch (e) {
      // localStorage puede no estar disponible (modo privado); el tema igual se aplica
    }
  }

  const toggleTheme = () => setTheme(isDark.value ? 'light' : 'dark')

  return { theme, isDark, setTheme, toggleTheme }
}
