import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'

import HeaderTitles from '@/assets/data/header-titles.json'

interface IProps {
  children?: ReactNode
}

const AppHerder: React.FC<IProps> = (props) => {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="title-list">
            {HeaderTitles.map((item) => {
              return (
                <div className="item active" key={item.link}>
                  <a href="">{item.title}</a>
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHerder)
