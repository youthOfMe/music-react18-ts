import React, { ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Album: React.FC<IProps> = () => {
  return (
    <div>Album</div>
  )
}

export default memo(Album)
