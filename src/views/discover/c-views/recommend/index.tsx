import React, { ReactNode, memo, useEffect, useState } from 'react'
import { RecommendWrapper } from './style'
import TopBanner from './c-cpns/top-banner'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction } from './store/recommend'

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
  })

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
