import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'
import React, { ReactNode, memo, useEffect, useState } from 'react'

interface IProps {
  children?: ReactNode
}

interface IBannerData {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  scm: string
  bannerBizType: string
}

const Recommend: React.FC<IProps> = () => {
  const [banners, setBanners] = useState<IBannerData[]>([])

  useEffect(() => {
    xhRequest
      .get({
        headers: new AxiosHeaders(),
        url: '/banner',
      })
      .then((res) => {
        console.log(res)
        setBanners(res.banners)
      })
  }, [])

  return (
    <div>
      推荐吖
      {banners.map((item, index) => {
        return (
          <div key={index} style={{ color: 'red' }}>
            {item.imageUrl}
          </div>
        )
      })}
    </div>
  )
}

export default memo(Recommend)
