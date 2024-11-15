import { useCallback, useId } from 'react'

import { RefreshControl } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { FlashList } from '@shopify/flash-list'

import { useTheme } from '@core/theme'
import { Photo } from '@core/types'
import { hapticFeedback } from '@core/utils'

import { usePhotos } from '@hooks'

import { GalleryItem } from './gallery-item'

export const GalleryList = () => {
  const uniqKey = useId()

  const theme = useTheme()

  const { bottom } = useSafeAreaInsets()

  const { data: photos, isRefetching, fetchNextPage, refetch } = usePhotos()

  const renderItem = useCallback(
    ({ item, index }: { item: Photo; index: number }) => {
      return <GalleryItem data={item} index={index} />
    },
    [],
  )

  const keyExtractor = useCallback(
    (item: Photo, index: number) => `${uniqKey}-${index}-${item.id}`,
    [],
  )

  const onRefetch = useCallback(async () => {
    hapticFeedback()
    const res = await refetch()
  }, [])

  return (
    <FlashList<Photo>
      numColumns={2}
      data={photos}
      extraData={photos.length}
      estimatedItemSize={100}
      onEndReached={fetchNextPage}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReachedThreshold={1}
      refreshControl={
        <RefreshControl
          tintColor={theme.palette.main}
          refreshing={isRefetching}
          onRefresh={onRefetch}
        />
      }
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: bottom ? bottom + 16 : 24,
      }}
    />
  )
}
