import React, { ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommend: React.FC<IProps> = () => {
  return (
    <div>Recommend</div>
  )
}

export default memo(Recommend)
