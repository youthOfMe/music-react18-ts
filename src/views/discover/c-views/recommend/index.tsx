import React, { ReactNode, memo, useEffect, useState } from 'react'
import { RecommendWrapper } from './style'
import TopBanner from './c-cpns/top-banner'
import { useAppDispatch } from '@/store'
import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumsAction,
  fetchPersonalRecommendAction,
  fetchRankingDataAction,
} from './store/recommend'
import HotRecommend from './c-cpns/hot-recommend'
import PersonalRecommend from './c-cpns/personal-recommend'
import NewAlbum from './c-cpns/new-album'

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
    dispatch(fetchPersonalRecommendAction())
    dispatch(fetchNewAlbumsAction())
    dispatch(fetchRankingDataAction())
  })

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend></HotRecommend>
          <PersonalRecommend></PersonalRecommend>
          <NewAlbum></NewAlbum>
        </div>
        <div className="right"></div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
