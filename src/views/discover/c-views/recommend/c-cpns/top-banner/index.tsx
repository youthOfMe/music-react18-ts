import React, { ElementRef, ReactNode, memo, useCallback, useRef, useState } from 'react'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { Carousel } from 'antd'
import { shallowEqualApp, useAppSelector } from '@/store'
import classNames from 'classnames'

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

  /**
   * 事件处理函数
   */
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  function changeActiveBannerItem(index: number) {
    bannerRef.current?.goTo(index)
    setCurrentIndex(index)
  }

  /** 事件监听的方法 */
  const handleAfterChange = useCallback(
    (current: number) => {
      setCurrentIndex(current)
    },
    [currentIndex],
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
          <Carousel
            autoplay
            autoplaySpeed={2000}
            effect="fade"
            ref={bannerRef}
            afterChange={handleAfterChange}
            dots={false}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl} onClick={() => changeActiveBannerItem(index)}>
                  <span
                    className={classNames('item', {
                      active: index === currentIndex,
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
