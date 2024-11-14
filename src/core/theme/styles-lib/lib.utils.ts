import { Platform } from 'react-native'

export const convertCssToReactNativeShadow = (
  cssShadow: string,
  androidShadow?: number,
) => {
  // Split the CSS box shadow string into its individual properties
  const shadowProperties = parseCssShadow(cssShadow)

  // Extract values for each property
  const [hOffset, vOffset, blurRadius, spreadRadius, color] = shadowProperties

  let formattedColor = color
  let colorOpacity = 1

  if (isRgba(color)) {
    const { red, green, blue, alpha } = parseRGBAString(color)
    formattedColor = rgbaToHex(red, green, blue)
    colorOpacity = alpha
  }

  // Convert values to React Native shadow properties
  const reactNativeShadow = Platform.select({
    ios: {
      shadowOffset: {
        width: hOffset ? parseFloat(hOffset) : 0,
        height: vOffset ? parseFloat(vOffset) : 0,
      },
      shadowOpacity: colorOpacity,
      shadowRadius: blurRadius ? parseFloat(blurRadius) : 0,
      shadowColor: formattedColor || '#000000',
    },
    android: {
      elevation: androidShadow ?? 1,
    },
    default: {},
  })

  // If there is a spreadRadius, include it in the elevation property
  if (spreadRadius) {
    reactNativeShadow.elevation = parseFloat(spreadRadius) || 0
  }

  return reactNativeShadow
}

export const parseCssShadow = (cssShadow: string) => {
  return (
    cssShadow.match(
      /(-?\d+px|-?\d+\.?\d*px|rgba?\(\d+,\s*\d+,\s*\d+(?:,\s*[\d.]+)?\))/g,
    ) || []
  )
}

const isRgba = (color: string) => {
  const rgbaPattern = /^rgba\(\d+,\s*\d+,\s*\d+,\s*[\d.]+\)$/
  return rgbaPattern.test(color)
}

const rgbaToHex = (red: number, green: number, blue: number) => {
  // Ensure the values are within the valid range
  red = Math.min(255, Math.max(0, red))
  green = Math.min(255, Math.max(0, green))
  blue = Math.min(255, Math.max(0, blue))

  // Convert RGB to hexadecimal
  const hexRed = red.toString(16).padStart(2, '0')
  const hexGreen = green.toString(16).padStart(2, '0')
  const hexBlue = blue.toString(16).padStart(2, '0')

  // Concatenate the values
  const hexColor = `#${hexRed}${hexGreen}${hexBlue}`

  return hexColor.toUpperCase() // Convert to uppercase for consistency
}

const parseRGBAString = (rgba: string) => {
  const match = rgba.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/)

  if (!match) {
    throw new Error('Invalid RGBA string format')
  }

  const red = parseInt(match[1], 10)
  const green = parseInt(match[2], 10)
  const blue = parseInt(match[3], 10)
  const alpha = parseFloat(match[4])

  return { red, green, blue, alpha }
}
