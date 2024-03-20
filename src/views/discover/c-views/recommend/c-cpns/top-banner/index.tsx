import React, { ReactNode, memo } from 'react'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { Carousel } from 'antd'

interface IProps {
  children?: ReactNode
}

const TopBanner: React.FC<IProps> = () => {
  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel></Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl></BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
