import { api } from '../index.ts'

import { PaginationResponse, Photo } from '../../types'

interface GetPhotosParams {
  page: number
  perPage?: number
}

const getPhotos = async (params: GetPhotosParams) => {
  const result = await api.get<GetPhotosResponse>(
    `/curated?page=${params.page}&per_page=${params.perPage || 15}`,
  )

  return result.data
}

export interface GetPhotosResponse extends PaginationResponse {
  photos: Photo[]
}

export const PexelsApiService = {
  getPhotos,
}
