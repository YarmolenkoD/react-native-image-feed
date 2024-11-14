import { ImageStyle, TextStyle, ViewStyle } from 'react-native'

import { Theme } from '@core/theme'

export type Styles = ViewStyle | TextStyle | ImageStyle
export type NamedStyles<T> = { [P in keyof T]: Styles }
export type StyleSheetType = NamedStyles<(...args: any[]) => Styles>
export type StyleSheetWithThemeType = (params: {
  theme: Theme
  baseStyles?: StyleSheetType
}) => StyleSheetType

export const createStyleSheet = (
  styleSheet: StyleSheetType | StyleSheetWithThemeType,
) => {
  return styleSheet
}
