import React, { ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Discover: React.FC<IProps> = () => {
  return (
    <div>Discover</div>
  )
}

export default memo(Discover)
