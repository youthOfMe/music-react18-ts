import React, { ReactNode, memo } from 'react'
import { RecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import SongsMenuItem from '@/components/songs-menu-item'

interface IProps {
  children?: ReactNode
}

const PersonalRecommend: React.FC<IProps> = () => {
  const { personalRecommends } = useAppSelector((state) => ({
    personalRecommends: state.recommmend.personalRecommends,
  }))

  return (
    <RecommendWrapper>
      <AreaHeaderV1 title="个性推荐" keywords={[]}></AreaHeaderV1>
      <div className="recommend-list">
        {personalRecommends.map((item) => {
          return <SongsMenuItem key={item.id} itemData={item}></SongsMenuItem>
        })}
      </div>
    </RecommendWrapper>
  )
}
export default memo(PersonalRecommend)
