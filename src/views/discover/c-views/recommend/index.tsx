import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'
import React, { ReactNode, memo, useEffect, useState } from 'react'
import { RecommendWrapper } from './style'
import TopBanner from './c-cpns/top-banner'

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

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
