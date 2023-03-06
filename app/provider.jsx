// provider.tsx
import { theme, themeDark, themeLight } from './theme'
import { DripsyProvider } from 'dripsy'
import { useColorScheme } from 'react-native'
export function AppProvider({ children }) {
  const colorMode = useColorScheme()
  return (
    <DripsyProvider theme={colorMode === 'dark' ? themeDark : themeLight}>
      {children}
    </DripsyProvider>
  )
}