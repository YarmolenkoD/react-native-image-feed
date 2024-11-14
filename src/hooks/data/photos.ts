import { useMemo } from 'react'

import { useInfiniteQuery } from 'react-query'

import { GetPhotosResponse, PexelsApiService } from '@core/services'

import { Photo } from '@core/types'

export const usePhotos = () => {
  const {
    data: result,
    ...rest
  } = useInfiniteQuery({
    queryKey: ['photos'],
    queryFn: async ({ pageParam }) =>
      await PexelsApiService.getPhotos({ page: pageParam }),
    getNextPageParam: (lastPage: GetPhotosResponse, allPages) => {
      return lastPage?.page ? lastPage?.page + 1 : allPages.length + 1
    },
    enabled: true,
    refetchOnMount: true,
  })

  const photos = useMemo(() => {
    return (
      result?.pages?.reduce?.((acc: Photo[], data) => {
        const photos = data.photos ?? []
        return [...acc, ...photos]
      }, []) ?? []
    )
  }, [result?.pages?.length])

  return {
    data: photos,
    ...rest,
  }
}
