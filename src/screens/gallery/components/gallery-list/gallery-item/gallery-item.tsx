import { useState } from 'react'

import { Text, TouchableOpacity, View } from 'react-native'

import { NavigationProp, useNavigation } from '@react-navigation/native'

import FastImage from 'react-native-fast-image'

import Animated, { FadeIn } from 'react-native-reanimated'

import { Photo } from '@core/types'
import { useBaseStyles } from '@core/theme'
import { hapticFeedback } from '@core/utils'

import { NavigationMainStack } from '@navigation'

interface GalleryItemProps {
  data: Photo
  index: number
}

export const GalleryItem = (props: GalleryItemProps) => {
  const { data, index } = props

  const [isLoaded, setLoaded] = useState(false)

  const navigation = useNavigation<NavigationProp<NavigationMainStack>>()

  const s = useBaseStyles()

  const onPress = () => {
    hapticFeedback()
    navigation.navigate('Details', { data })
  }

  return (
    <View
      style={[
        s.width('100%'),
        s.minHeight(150),
        s.mb(4),
        index % 2 ? s.pl(2) : s.pr(2),
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[
          s.width('100%'),
          s.height('100%'),
          s.cssShadow('0px 9px 10px 0px rgba(0, 0, 0, 0.3)'),
        ]}
      >
        <View
          style={[
            s.relative,
            s.width('100%'),
            s.height('100%'),
            s.bg(data.avg_color || 'placeholder'),
            s.rounded(12),
            s.overflow('hidden'),
          ]}
        >
          <FastImage
            style={[
              s.width('100%'),
              s.height(150),
              s.bg(data.avg_color || 'placeholder'),
            ]}
            source={{
              uri: data.src.medium,
              priority: FastImage.priority.high,
              cache: FastImage.cacheControl.immutable,
            }}
            onLoadEnd={() => setLoaded(true)}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View
            style={[
              s.fullWidth,
              s.absolute,
              s.bottom(0),
              s.left(0),
              s.p(2),
              s.bg('rgba(0,0,0,0.3)'),
              s.z(10),
            ]}
          >
            <Text
              numberOfLines={1}
              style={[s.fontMedium, s.fontSize(16), s.color('white')]}
            >
              {data.photographer}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
