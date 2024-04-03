import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

export function getBanners() {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/banner',
  })
}

export function getHomeRecommend(limit = 30) {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/personalized',
    params: {
      limit,
    },
  })
}
