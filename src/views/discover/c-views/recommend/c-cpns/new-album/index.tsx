import React, { ReactNode, memo } from 'react'
import { AlbumWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const NewAblums: React.FC<IProps> = () => {
  return <AlbumWrapper></AlbumWrapper>
}

export default memo(NewAblums)
