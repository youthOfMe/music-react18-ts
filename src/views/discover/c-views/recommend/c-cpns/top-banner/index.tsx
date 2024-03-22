import React, { ReactNode, memo } from 'react'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { Carousel } from 'antd'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const TopBanner: React.FC<IProps> = () => {
  /**
   * 从store中获取数据
   */
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommmend.banners,
    }),
    shallowEqualApp,
  )

  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay autoplaySpeed={2000} effect="fade">
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl></BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
