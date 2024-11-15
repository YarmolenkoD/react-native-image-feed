import { api } from '@core/services'

import { PaginationResponse, Photo } from '@core/types'

interface GetPhotosParams {
  page: number
  perPage?: number
}

const getPhotos = async (params: GetPhotosParams) => {
  const result = await api.get<GetPhotosResponse>(
    `/curated?page=${params.page}&per_page=${params.perPage || 16}`,
  )

  return result.data
}

export interface GetPhotosResponse extends PaginationResponse {
  photos: Photo[]
}

export const PexelsApiService = {
  getPhotos,
}
