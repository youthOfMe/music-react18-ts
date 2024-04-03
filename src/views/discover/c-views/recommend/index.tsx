import React, { ReactNode, memo, useEffect, useState } from 'react'
import { RecommendWrapper } from './style'
import TopBanner from './c-cpns/top-banner'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction, fetchHotRecommendAction } from './store/recommend'
import HotRecommend from './c-cpns/hot-recommend'

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
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
  })

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend></HotRecommend>
        </div>
        <div className="right"></div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
