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

  return <div>推荐吖</div>
}

export default memo(Recommend)
