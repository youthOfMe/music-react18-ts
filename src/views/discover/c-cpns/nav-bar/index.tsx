import React, { ReactNode, memo } from 'react'
import { NavWrapper } from './style'
import { discoverMenu } from '@/assets/data/local-data'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const NavBar: React.FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.link}>
              <NavLink to={item.link} className={({ isActive }) => (isActive ? 'active' : '')}>
                {item.title}
              </NavLink>
            </div>
          )
        })}
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
