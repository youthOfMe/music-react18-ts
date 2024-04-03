import React, { ReactNode, memo } from 'react'
import { MenuItemWrapper } from './style'

interface IProps {
  children?: ReactNode
  itemData: any
}

const SongMenuItem: React.FC<IProps> = (props) => {
  const { itemData } = props

  return (
    <MenuItemWrapper>
      <div className="top"></div>
    </MenuItemWrapper>
  )
}

export default memo(SongMenuItem)
