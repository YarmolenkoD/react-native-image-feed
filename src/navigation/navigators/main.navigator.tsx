import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { GalleryScreen, DetailsScreen } from '@screens'

import { Photo } from '@core/types'

export type NavigationMainStack = {
  Gallery: undefined
  Details: { data: Photo }
}

export const MainStack = createNativeStackNavigator<NavigationMainStack>()

export const MAIN_NAVIGATOR_OPTIONS = {
  gestureEnabled: true,
}

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={MAIN_NAVIGATOR_OPTIONS}
      initialRouteName="Gallery"
    >
      <MainStack.Screen name="Gallery" component={GalleryScreen} />
      <MainStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  )
}
