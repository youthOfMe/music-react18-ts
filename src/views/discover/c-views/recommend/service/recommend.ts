import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

export function getBanners() {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/banner',
  })
}

export function getHotRecommend(limit = 30) {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/personalized',
    params: {
      limit,
    },
  })
}

export function getNewAlbum() {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/album/newest',
  })
}

export function getPlaylistDetail(id: number) {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/playlist/detail',
    params: {
      id,
    },
  })
}
