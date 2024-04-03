import React, { ReactNode, memo } from 'react'
import { RecommendWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const HotRecommend: React.FC<IProps> = () => {
  return <RecommendWrapper></RecommendWrapper>
}

export default memo(HotRecommend)
