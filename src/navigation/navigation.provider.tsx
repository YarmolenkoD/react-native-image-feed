import { NavigationContainer } from '@react-navigation/native'

import { MainNavigator } from './navigators'

export const NavigationProvider = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
}
