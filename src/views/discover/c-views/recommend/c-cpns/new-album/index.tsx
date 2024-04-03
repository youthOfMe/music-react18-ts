import React, { ReactNode, memo } from 'react'
import { AlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { Carousel } from 'antd'
import { useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const NewAblums: React.FC<IProps> = () => {
  /** 从redux中获取数据 */
  const { newAlbums } = useAppSelector((state) => ({
    newAlbums: state.recommmend.newAlbums,
  }))

  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟商家" moreLink="/discover/album"></AreaHeaderV1>
      <div className="content">
        <button className="arrow arrow-left sprite_02"></button>
        <div className="banner">
          <Carousel dots={false} speed={2000}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  {/* 必须进行嵌套一层 Carousel会给一个内联样式 inline-block(直接子集) 是希望可以沾满父元素 */}
                  <div className="album-list">
                    {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                      return 1
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAblums)
