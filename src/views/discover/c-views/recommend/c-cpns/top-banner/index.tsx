import React, { ElementRef, ReactNode, memo, useRef, useState } from 'react'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { Carousel } from 'antd'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const TopBanner: React.FC<IProps> = () => {
  /**
   * 定义内部的数据
   */
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  /**
   * 从store中获取数据
   */
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommmend.banners,
    }),
    shallowEqualApp,
  )

  /** 获取背景图片 */
  let bgImage = ''
  if (currentIndex >= 0 && banners.length > 0) {
    bgImage = banners[currentIndex] && banners[currentIndex].imageUrl + '?imageView&blur=40x20'
  }

  return (
    <BannerWrapper bgImage={bgImage}>
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
        <BannerControl>
          <button className="btn left"></button>
          <button className="btn right"></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
