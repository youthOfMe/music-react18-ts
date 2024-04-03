import React, { ReactNode, memo } from 'react'
import { AlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

interface IProps {
  children?: ReactNode
}

const NewAblums: React.FC<IProps> = () => {
  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟商家" moreLink="/discover/album"></AreaHeaderV1>
      <div className="content">
        <button className="arrow arrow-left sprite_02"></button>
        <div className="banner"></div>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAblums)
