import { darkPalette, lightPalette, ThemePalette } from './theme.palette.ts'

import { ThemeTypography, typography } from './theme.typography.ts'

import {
  moderateScale as scale,
  verticalScale,
  spacing,
  deviceSizes,
} from '../utils'

export interface Theme {
  palette: ThemePalette
  typography: ThemeTypography
  scale: (size: number) => number
  spacing: (size: number) => number
  verticalScale: (size: number) => number
  deviceSizes: { width: number; height: number }
}

const commonBase: Omit<Theme, 'palette' | 'colors'> = {
  scale,
  verticalScale,
  spacing,
  typography,
  deviceSizes,
}

export const light: Theme = {
  palette: lightPalette,
  ...commonBase,
}

export const dark: Theme = {
  palette: darkPalette,
  ...commonBase,
}
