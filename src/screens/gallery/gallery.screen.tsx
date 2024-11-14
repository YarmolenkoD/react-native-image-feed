import React from 'react'

import { View } from 'react-native'

import { useBaseStyles } from '@core/theme'

import { GalleryList } from './components/gallery-list'

export const GalleryScreen = () => {
  const s = useBaseStyles()

  return (
    <View style={[s.flex(1), s.bg('background')]}>
      <GalleryList />
    </View>
  )
}
