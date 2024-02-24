import React, { ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Ranking: React.FC<IProps> = () => {
  return (
    <div>Ranking</div>
  )
}

export default memo(Ranking)
