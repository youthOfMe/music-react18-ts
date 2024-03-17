import React, { ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Download: React.FC<IProps> = () => {
  return <div>Download</div>
}

export default memo(Download)
