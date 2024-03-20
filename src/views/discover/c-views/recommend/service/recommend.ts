import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

export function getBanners() {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/banner',
  })
}
