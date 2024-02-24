import React, { ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Songs: React.FC<IProps> = () => {
  return (
    <div>Songs</div>
  )
}

export default memo(Songs)
