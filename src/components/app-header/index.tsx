import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import { Input } from 'antd'
import HeaderTitles from '@/assets/data/header-titles.json'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

interface TitleType {
  type: string
  title: string
  link: string
}

const AppHerder: React.FC<IProps> = (props) => {
  /** 组件的展示逻辑 */
  function showItem(item: TitleType) {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return isActive ? 'active' : undefined
          }}
        >
          {item.title}
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target="_blink" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }

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
                <div className="item" key={item.link}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户"></Input>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHerder)
