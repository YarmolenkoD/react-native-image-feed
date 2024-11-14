import { useMemo } from 'react'

import {
  baseStyles,
  LibBaseStyles,
  StyleSheetType,
  StyleSheetWithThemeType,
  Theme,
  useTheme,
} from '@core/theme'

export const useBaseStyles = (): LibBaseStyles => {
  const theme: Theme = useTheme()

  return useMemo(() => {
    if (typeof baseStyles === 'function') {
      return baseStyles({ theme }) as LibBaseStyles
    }

    return baseStyles as LibBaseStyles
  }, [theme])
}

export const useStyles = (
  styleSheet: StyleSheetType | StyleSheetWithThemeType,
): any => {
  const theme: Theme = useTheme()

  const baseStyles = useBaseStyles()

  return useMemo(() => {
    const createdStyles =
      typeof styleSheet === 'function'
        ? styleSheet({ theme, baseStyles })
        : styleSheet

    type Keys = keyof typeof createdStyles
    type RecordType = Record<Keys, any>

    return createdStyles as Awaited<RecordType>
  }, [theme])
}
