import { Platform, TextStyle, ViewStyle, ImageStyle } from 'react-native'

import { Theme, ThemePaletteKeys } from '@core/theme'

import { deviceSizes } from '@core/utils'

import { createStyleSheet } from './lib.style-sheet.ts'

import { convertCssToReactNativeShadow } from './lib.utils.ts'

export const baseStyles = createStyleSheet(({ theme }) => ({
  theme,
  resizeContain: {
    objectFit: 'contain',
  },
  resizeCover: {
    objectFit: 'cover',
  },
  resizeStretch: {
    objectFit: 'stretch',
  },
  resizeCenter: {
    objectFit: 'center',
  },
  resizeRepeat: {
    objectFit: 'repeat',
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
  hidden: {
    position: 'absolute',
    ...Platform.select({
      ios: {
        height: 0,
        width: 0,
        opacity: 0,
      },
      android: {
        left: -99999,
        top: -99999,
      },
    }),
  },
  zIndex: (value: number) => ({
    zIndex: value,
  }),
  z: (value: number) => ({
    zIndex: value,
  }),
  top: (value: number | 'auto') => ({
    top: value,
  }),
  right: (value: number | 'auto') => ({
    right: value,
  }),
  bottom: (value: number | 'auto') => ({
    bottom: value,
  }),
  left: (value: number | 'auto') => ({
    left: value,
  }),
  flex: (value: number = 1) => ({
    flex: value,
  }),
  flexGrow: (value: number = 1) => ({
    flexGrow: value,
  }),
  flexRow: {
    flexDirection: 'row',
  },
  flexCol: {
    flexDirection: 'column',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  itemsStart: {
    alignItems: 'flex-start',
  },
  itemsEnd: {
    alignItems: 'flex-end',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  selfStart: {
    alignSelf: 'flex-start',
  },
  selfEnd: {
    alignSelf: 'flex-end',
  },
  selfStretch: {
    alignSelf: 'stretch',
  },
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  fontWeight: (value: FontWeight) => ({
    fontWeight: value,
  }),
  fontSize: (value: number | string) => ({
    fontSize: value,
  }),
  lineHeight: (value: number | string) => ({
    lineHeight: value,
  }),
  fontBold: {
    fontWeight: '700',
  },
  fontSemiBold: {
    fontWeight: '600',
  },
  fontMedium: {
    fontWeight: '500',
  },
  fontRegular: {
    fontWeight: '400',
  },
  roundedFull: {
    borderRadius: 9999,
  },
  border: (width: number, color?: ThemePaletteKeys) => ({
    borderWidth: width,
    ...(color ? { borderColor: theme.palette[color] || color } : {}),
  }),
  borderColor: (color: ThemePaletteKeys) => ({
    borderColor: theme.palette[color] || color,
  }),
  deviceWidth: {
    width: deviceSizes.width,
  },
  deviceHeight: {
    height: deviceSizes.height,
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  shadowNone: {
    shadowColor: 'transparent',
    shadowRadius: 0,
    elevation: 0,
  },
  maxHeight: (maxHeight: number | string) => ({
    maxHeight,
  }),
  maxH: (maxHeight: number) => ({
    maxHeight: theme.spacing(maxHeight),
  }),
  minHeight: (minHeight: number | string) => ({
    minHeight,
  }),
  minH: (minHeight: number) => ({
    minHeight: theme.spacing(minHeight),
  }),
  maxWidth: (maxWidth: number | string) => ({
    maxWidth,
  }),
  maxW: (maxWidth: number) => ({
    maxWidth: theme.spacing(maxWidth),
  }),
  minWidth: (minWidth: number | string) => ({
    minWidth,
  }),
  minW: (minWidth: number) => ({
    minWidth: theme.spacing(minWidth),
  }),
  size: (size: number) => ({
    width: theme.spacing(size),
    height: theme.spacing(size),
  }),
  height: (height: number | string) => ({
    height,
  }),
  width: (width: number | string) => ({
    width,
  }),
  h: (size: number) => ({
    height: theme.spacing(size),
  }),
  w: (size: number) => ({
    width: theme.spacing(size),
  }),
  overflow: (value: 'visible' | 'hidden' | 'scroll' | undefined) => ({
    overflow: value,
  }),
  bg: (bg: ThemePaletteKeys) => ({
    backgroundColor: theme.palette[bg] || bg,
  }),
  rounded: (radius: number = 12) => ({
    borderRadius: radius,
  }),
  roundedTop: (radius: number = 12) => ({
    borderTopStartRadius: radius,
    borderTopEndRadius: radius,
  }),
  roundedBottom: (radius: number = 12) => ({
    borderBottomStartRadius: radius,
    borderBottomEndRadius: radius,
  }),
  color: (color: ThemePaletteKeys) => ({
    color: theme.palette[color] || color,
  }),
  textTransform: (
    value: 'none' | 'uppercase' | 'lowercase' | 'capitalize',
  ) => ({
    textTransform: value,
  }),
  p: (size: number) => ({
    padding: theme.spacing(size),
  }),
  pt: (size: number) => ({
    paddingTop: theme.spacing(size),
  }),
  pr: (size: number) => ({
    paddingRight: theme.spacing(size),
  }),
  pb: (size: number) => ({
    paddingBottom: theme.spacing(size),
  }),
  pl: (size: number) => ({
    paddingLeft: theme.spacing(size),
  }),
  px: (size: number) => ({
    paddingHorizontal: theme.spacing(size),
  }),
  py: (size: number) => ({
    paddingVertical: theme.spacing(size),
  }),
  padding: (vertical: number, horizontal?: number) => ({
    padding: vertical,
    ...(horizontal ? { paddingHorizontal: horizontal } : {}),
  }),
  paddingLeft: (size: number) => ({
    paddingLeft: size,
  }),
  paddingRight: (size: number) => ({
    paddingRight: size,
  }),
  paddingTop: (size: number) => ({
    paddingTop: size,
  }),
  paddingBottom: (size: number) => ({
    paddingBottom: size,
  }),
  m: (size: number) => ({
    margin: theme.spacing(size),
  }),
  mt: (size: number) => ({
    marginTop: theme.spacing(size),
  }),
  mr: (size: number) => ({
    marginRight: theme.spacing(size),
  }),
  mb: (size: number) => ({
    marginBottom: theme.spacing(size),
  }),
  ml: (size: number) => ({
    marginLeft: theme.spacing(size),
  }),
  mx: (size: number) => ({
    marginHorizontal: theme.spacing(size),
  }),
  my: (size: number) => ({
    marginVertical: theme.spacing(size),
  }),
  margin: (size: number) => ({
    margin: size,
  }),
  marginLeft: (size: number) => ({
    marginLeft: size,
  }),
  marginRight: (size: number) => ({
    marginRight: size,
  }),
  marginTop: (size: number) => ({
    marginTop: size,
  }),
  marginBottom: (size: number) => ({
    marginBottom: size,
  }),
  gap: (value: number) => ({
    gap: theme.spacing(value),
  }),
  opacity: (value: number = 1) => ({
    opacity: value,
  }),
  cssShadow: (shadow: string, androidShadow?: number) => ({
    ...convertCssToReactNativeShadow(shadow, androidShadow),
  }),
  spacing: (size: number) => theme.spacing(size),
}))

type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined

export interface LibBaseStyles {
  theme: Theme
  resizeContain: ViewStyle | ImageStyle
  resizeCover: ViewStyle | ImageStyle
  resizeStretch: ViewStyle | ImageStyle
  resizeCenter: ViewStyle | ImageStyle
  resizeRepeat: ViewStyle | ImageStyle
  absoluteFill: ViewStyle | ImageStyle
  relative: ViewStyle | ImageStyle
  absolute: ViewStyle | ImageStyle
  hidden: ViewStyle | ImageStyle
  z: (value: number) => ViewStyle | ImageStyle
  zIndex: (value: number) => ViewStyle | ImageStyle
  top: (value: number | 'auto') => ViewStyle | ImageStyle
  right: (value: number | 'auto') => ViewStyle | ImageStyle
  bottom: (value: number | 'auto') => ViewStyle | ImageStyle
  left: (value: number | 'auto') => ViewStyle | ImageStyle
  flex: (value: number) => ViewStyle | ImageStyle
  flexGrow: (value: number) => ViewStyle | ImageStyle
  flexRow: ViewStyle | ImageStyle
  flexCol: ViewStyle | ImageStyle
  justifyCenter: ViewStyle | ImageStyle
  justifyStart: ViewStyle | ImageStyle
  justifyEnd: ViewStyle | ImageStyle
  justifyBetween: ViewStyle | ImageStyle
  justifySpaceEvenly: ViewStyle | ImageStyle
  itemsCenter: ViewStyle | ImageStyle
  itemsStart: ViewStyle | ImageStyle
  itemsEnd: ViewStyle | ImageStyle
  selfCenter: ViewStyle | ImageStyle
  selfStart: ViewStyle | ImageStyle
  selfEnd: ViewStyle | ImageStyle
  selfStretch: ViewStyle | ImageStyle
  textCenter: ViewStyle | ImageStyle | TextStyle
  textLeft: ViewStyle | ImageStyle | TextStyle
  textRight: ViewStyle | ImageStyle | TextStyle
  fontBold: ViewStyle | ImageStyle | TextStyle
  fontSemiBold: ViewStyle | ImageStyle | TextStyle
  fontMedium: ViewStyle | ImageStyle | TextStyle
  fontRegular: ViewStyle | ImageStyle | TextStyle
  fontWeight: (value: FontWeight) => TextStyle
  fontSize: (value: number | string) => TextStyle
  lineHeight: (value: number | string) => TextStyle
  roundedFull: ViewStyle | ImageStyle
  border: (
    width: number,
    color?: ThemePaletteKeys | string,
  ) => ViewStyle | ImageStyle
  borderColor: (color: ThemePaletteKeys | string) => ViewStyle | ImageStyle
  deviceWidth: ViewStyle | ImageStyle
  deviceHeight: ViewStyle | ImageStyle
  fullWidth: ViewStyle | ImageStyle
  fullHeight: ViewStyle | ImageStyle
  shadowNone: ViewStyle | ImageStyle
  maxHeight: (maxHeight: number | string) => ViewStyle
  maxH: (maxHeight: number) => ViewStyle
  minHeight: (minHeight: number | string) => ViewStyle
  minH: (minHeight: number) => ViewStyle
  maxWidth: (maxWidth: number | string) => ViewStyle
  maxW: (maxWidth: number) => ViewStyle
  minWidth: (minWidth: number | string) => ViewStyle
  minW: (minWidth: number) => ViewStyle
  overflow: (value: 'visible' | 'hidden' | 'scroll' | undefined) => ViewStyle
  bg: (bg: ThemePaletteKeys | string) => ViewStyle | ImageStyle
  rounded: (radius: number) => ViewStyle | ImageStyle
  roundedTop: (radius: number) => ViewStyle | ImageStyle
  roundedBottom: (radius: number) => ViewStyle | ImageStyle
  color: (
    color: ThemePaletteKeys | string,
  ) => ViewStyle | ImageStyle | TextStyle
  textTransform: (
    value: 'uppercase' | 'none' | 'capitalize' | 'lowercase' | undefined,
  ) => TextStyle
  size: (size: number) => ViewStyle | ImageStyle
  height: (height: number | string) => any
  width: (width: number | string) => any
  h: (size: number) => ViewStyle | ImageStyle | any
  w: (size: number) => ViewStyle | ImageStyle | any
  p: (size: number) => ViewStyle | ImageStyle
  pt: (size: number) => ViewStyle | ImageStyle
  pr: (size: number) => ViewStyle | ImageStyle
  pb: (size: number) => ViewStyle | ImageStyle
  pl: (size: number) => ViewStyle | ImageStyle
  px: (size: number) => ViewStyle | ImageStyle
  py: (size: number) => ViewStyle | ImageStyle
  padding: (vertical: number, horizontal?: number) => ViewStyle | ImageStyle
  paddingLeft: (size: number) => ViewStyle | ImageStyle
  paddingRight: (size: number) => ViewStyle | ImageStyle
  paddingTop: (size: number) => ViewStyle | ImageStyle
  paddingBottom: (size: number) => ViewStyle | ImageStyle
  m: (size: number) => ViewStyle | ImageStyle
  mt: (size: number) => ViewStyle | ImageStyle
  mr: (size: number) => ViewStyle | ImageStyle
  mb: (size: number) => ViewStyle | ImageStyle
  ml: (size: number) => ViewStyle | ImageStyle
  mx: (size: number) => ViewStyle | ImageStyle
  my: (size: number) => ViewStyle | ImageStyle
  margin: (size: number) => ViewStyle | ImageStyle
  marginLeft: (size: number) => ViewStyle | ImageStyle
  marginRight: (size: number) => ViewStyle | ImageStyle
  marginTop: (size: number) => ViewStyle | ImageStyle
  marginBottom: (size: number) => ViewStyle | ImageStyle
  gap: (value: number) => ViewStyle | ImageStyle
  cssShadow: (shadow: string, androidShadow?: number) => ViewStyle | ImageStyle
  opacity: (size: number) => ViewStyle | ImageStyle
  spacing: (size: number) => number
}
