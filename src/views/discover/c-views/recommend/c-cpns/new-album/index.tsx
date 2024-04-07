import React, { ElementRef, ReactNode, memo, useRef } from 'react'
import { AlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { Carousel } from 'antd'
import { shallowEqualApp, useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'

interface IProps {
  children?: ReactNode
}

const NewAblums: React.FC<IProps> = () => {
  /** 进行定义内部数据 */
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  /** 从redux中获取数据 */
  const { newAlbums } = useAppSelector(
    (state) => ({
      newAlbums: state.recommmend.newAlbums,
    }),
    shallowEqualApp,
  )

  /** 时间处理函数 */
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }

  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟商家" moreLink="/discover/album"></AreaHeaderV1>
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={handlePrevClick}></button>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  {/* 必须进行嵌套一层 Carousel会给一个内联样式 inline-block(直接子集) 是希望可以沾满父元素 */}
                  <div className="album-list">
                    {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <NewAlbumItem key={album.id} itemData={album}></NewAlbumItem>
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={handleNextClick}></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAblums)
