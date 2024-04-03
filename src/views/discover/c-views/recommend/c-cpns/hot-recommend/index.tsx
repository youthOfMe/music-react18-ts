import React, { ReactNode, memo } from 'react'
import { RecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const HotRecommend: React.FC<IProps> = () => {
  // const { hotRecommends } = useAppSelector((state) => ({
  //   hotRecommends: state.recommmend.hotRecommends,
  // }))

  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      ></AreaHeaderV1>
      <div className="recommend-list"></div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
