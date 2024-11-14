import ReactNativeHapticFeedback from 'react-native-haptic-feedback'

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
}

export const hapticFeedback = () => {
  ReactNativeHapticFeedback.trigger('impactLight', options)
}
