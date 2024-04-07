import React, { ReactNode, memo } from 'react'
import { RankingWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const TopRanking: React.FC<IProps> = () => {
  return <RankingWrapper></RankingWrapper>
}

export default memo(TopRanking)
