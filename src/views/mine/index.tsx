import React, { ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Mine: React.FC<IProps> = () => {
  return <div>Mine</div>
}

export default memo(Mine)
