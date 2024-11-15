import { Platform, TextStyle, ViewStyle } from 'react-native'

import { defaultPalette } from '@core'

interface Styles {
  wrapper: ViewStyle
  title: TextStyle
  detailButton: ViewStyle
  detailButtonText: TextStyle
  errorTextWrapper: ViewStyle
  errorText: TextStyle
}

export default {
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 65 : 45,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: defaultPalette.white,
  },
  title: {
    textAlign: 'center',
    color: defaultPalette.main,
    paddingHorizontal: 32,
    maxWidth: 300,
  },
  detailButton: {
    marginTop: 20,
    marginBottom: 12,
    borderBottomWidth: 0.25,
    borderBottomColor: defaultPalette.blue,
  },
  detailButtonText: {
    paddingBottom: 2,
    color: defaultPalette.blue,
  },
  errorTextWrapper: {
    marginTop: 20,
  },
  errorText: {
    textAlign: 'left',
  },
} as Styles
