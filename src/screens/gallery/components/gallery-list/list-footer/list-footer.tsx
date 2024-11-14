import { Text, View } from 'react-native'

import { useBaseStyles } from '@core/theme'

interface ListFooterProps {
  loading: boolean
}

export const ListFooter = (props: ListFooterProps) => {
  const s = useBaseStyles()

  if (props.loading) {
    return (
      <View style={[s.width('100%'), s.itemsCenter]}>
        <Text style={[s.fontSize(16), s.color('black')]}>Loading more...</Text>
      </View>
    )
  }

  return null
}
