import { useContext } from 'react'

import { Theme, ThemeContext } from '@core/theme'

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext)

  return context.theme
}
