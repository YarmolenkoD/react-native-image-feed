export const lightPalette: ThemePalette = {
  background: '#f3f2f2',
  main: '#5532fa',
  blue: '#0082f3',
  placeholder: '#e3e3e3',
}

export const darkPalette: ThemePalette = {
  background: '#fbfbfb',
  main: '#5532fa',
  blue: '#0082f3',
  placeholder: '#e3e3e3',
}

export type ThemePaletteKeys = keyof typeof darkPalette

export interface ThemePalette {
  background: string
  main: string
  blue: string
  placeholder: string
}
