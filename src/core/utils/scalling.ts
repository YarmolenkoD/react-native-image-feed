import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const guidelineBaseWidth = 375
const guidelineBaseHeight = 812
const spacingBase = 4

const scale = (size: number) => (width / guidelineBaseWidth) * size
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size
const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor

const spacing = (size: number) => moderateScale(size * spacingBase)

const deviceSizes = { width, height }

export {
  scale,
  verticalScale,
  horizontalScale,
  moderateScale,
  spacing,
  deviceSizes,
}
