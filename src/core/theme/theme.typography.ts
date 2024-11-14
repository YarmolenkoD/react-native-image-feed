import { Platform } from 'react-native'

export interface ThemeTypography {
  primary: string
  secondary: string
}

const DEFAULT_FONT = 'Inter'

export const typography: ThemeTypography = {
  /**
   * The primary font.  Used in most places.
   */
  primary: Platform.select({ ios: 'Inter', android: 'Inter' }) || DEFAULT_FONT,

  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary:
    Platform.select({ ios: 'Inter', android: 'Inter' }) || DEFAULT_FONT,
}
