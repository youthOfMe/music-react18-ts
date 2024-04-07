import React, { ReactNode, memo } from 'react'
import { RankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const TopRanking: React.FC<IProps> = () => {
  const { rankings } = useAppSelector((state) => ({
    rankings: state.recommmend.rankings,
  }))

  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking"></AreaHeaderV1>
      <div className="content">
        {rankings.map((item: any) => {
          return <div className="item" key={item.id}></div>
        })}
      </div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
