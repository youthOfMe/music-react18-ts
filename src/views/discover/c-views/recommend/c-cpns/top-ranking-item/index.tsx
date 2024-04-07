import React, { ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}

const TopRankingItem: React.FC<IProps> = () => {
  return <div>TopRankingItem</div>
}

export default memo(TopRankingItem)
