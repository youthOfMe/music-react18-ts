import React, { ReactNode, memo } from 'react'
import { AlbumItemWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const NewAlbumItem: React.FC<IProps> = () => {
  return <AlbumItemWrapper></AlbumItemWrapper>
}

export default memo(NewAlbumItem)
