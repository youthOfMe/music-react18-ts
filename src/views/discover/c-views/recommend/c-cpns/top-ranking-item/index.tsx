import React, { ReactNode, memo } from 'react'
import { RankingItemWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData?: any
}

const TopRankingItem: React.FC<IProps> = (props) => {
  const { itemData } = props
  const { tracks = [] } = itemData

  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getImageSize(itemData.coverImge, 80, 80)} alt="" />
          <a href="" className="sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="item" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="operator">
                  <button className="btn sprite_02 play"></button>
                  <button className="btn sprite_icon2 play"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">
        <a href="/dicover/niubi">查看全部 &gt;</a>
      </div>
    </RankingItemWrapper>
  )
}

export default memo(TopRankingItem)
