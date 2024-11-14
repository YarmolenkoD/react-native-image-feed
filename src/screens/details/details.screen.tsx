import { Linking, Text, TouchableOpacity, View } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useRoute } from '@react-navigation/native'

import FastImage from 'react-native-fast-image'

import { useBaseStyles } from '@core/theme'

export const DetailsScreen = () => {
  const { bottom } = useSafeAreaInsets()

  const route = useRoute<any>()

  const data = route?.params?.data ?? {}

  const s = useBaseStyles()

  return (
    <View style={[s.relative, s.flex(1)]}>
      <FastImage
        style={[
          s.width('100%'),
          s.height('100%'),
          s.bg(data.avg_color || 'placeholder'),
        ]}
        source={{
          uri: data.src.original,
          priority: FastImage.priority.high,
          cache: FastImage.cacheControl.immutable,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View
        style={[
          s.absolute,
          s.bottom(0),
          s.left(0),
          s.width('100%'),
          s.px(4),
          s.py(4),
          s.paddingBottom(bottom),
          s.bg('rgba(0,0,0,0.3)'),
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => Linking.openURL(data.photographer_url)}
        >
          <Text style={[s.fontSize(20), s.fontBold, s.color('white')]}>
            {data.photographer}
          </Text>
        </TouchableOpacity>
        {data.alt && (
          <Text
            style={[s.mt(3), s.fontSize(20), s.fontMedium, s.color('white')]}
          >
            {data.alt}
          </Text>
        )}
      </View>
    </View>
  )
}
