import React, { ReactNode, memo } from 'react'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const TopBanner: React.FC<IProps> = () => {
  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft></BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl></BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
