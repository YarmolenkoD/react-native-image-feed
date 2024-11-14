import { ColorValue } from 'react-native'

export interface ParsedGradient {
  colors: string[]
  start: { x: number; y: number }
  end: { x: number; y: number }
}

const parseRGBAColors = (gradient = '') => {
  const regex = /rgba\((\d+), (\d+), (\d+), ([0-9.]+)\)/g
  const colors = []

  let match = regex.exec(gradient)
  while (match) {
    const [r, g, b, a] = match.slice(1).map(parseFloat)
    colors.push(`rgba(${r}, ${g}, ${b}, ${a})`)
    match = regex.exec(gradient)
  }

  if (colors.length > 0) return colors

  return null
}

export const parseGradient = (
  gradient: ColorValue | string = '',
): ParsedGradient | null => {
  if (!gradient) return null

  const regex = /linear-gradient\((.*)\)/

  if (typeof gradient !== 'string') return null

  const match = gradient.match(regex)

  const RGBAColors = parseRGBAColors(gradient)

  if (!match) return null

  const gradientParams = match[1]?.split?.(',') ?? []

  if (!gradientParams) return null

  const direction = gradientParams?.shift?.()?.trim?.()
  const colors = RGBAColors || gradientParams.map(param => param.trim())

  const start = { x: 0, y: 0 }
  const end = { x: 1, y: 0 }

  switch (direction) {
    case 'to top':
      end.y = 1
      break
    case 'to bottom':
      start.y = 1
      break
    case 'to left':
      end.x = 1
      break
    case 'to right':
      start.x = 1
      break
    default:
      return null
  }

  return {
    colors: colors,
    start,
    end,
  }
}
