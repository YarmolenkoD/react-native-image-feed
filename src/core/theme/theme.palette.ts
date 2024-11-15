export const lightPalette: ThemePalette = {
  white: '#ffffff',
  background: '#f3f2f2',
  main: '#5532fa',
  blue: '#0082f3',
  placeholder: '#e3e3e3',
}

export const darkPalette: ThemePalette = {
  white: '#ffffff',
  background: '#fbfbfb',
  main: '#5532fa',
  blue: '#0082f3',
  placeholder: '#e3e3e3',
}

export const defaultPalette = lightPalette

export type ThemePaletteKeys = keyof typeof darkPalette

export interface ThemePalette {
  white: string
  background: string
  main: string
  blue: string
  placeholder: string
}
