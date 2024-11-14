import { Platform, TextStyle, ViewStyle } from 'react-native'

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
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    color: '#1B1756',
    paddingHorizontal: 32,
    maxWidth: 300,
  },
  detailButton: {
    marginTop: 20,
    marginBottom: 12,
    borderBottomWidth: 0.25,
    borderBottomColor: '#3E35B2',
  },
  detailButtonText: {
    paddingBottom: 2,
    color: '#3E35B2',
  },
  errorTextWrapper: {
    marginTop: 20,
  },
  errorText: {
    textAlign: 'left',
  },
} as Styles
