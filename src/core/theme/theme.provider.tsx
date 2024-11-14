import { createContext, PropsWithChildren } from 'react'

import { useColorScheme } from 'react-native'

import { dark, light, Theme } from '@core/theme'

interface IThemeContext {
  theme: Theme
}

const defaultValue: IThemeContext = {
  theme: light,
}

export const ThemeContext = createContext<IThemeContext>(defaultValue)

export const ThemeProvider = (props: PropsWithChildren) => {
  const scheme = useColorScheme()

  const currentTheme = scheme === 'light' ? light : dark

  const context = { theme: currentTheme }

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  )
}
