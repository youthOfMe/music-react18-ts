import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import { shallowEqual, useSelector } from 'react-redux'

interface IStoreState {
  counter: {
    count: number
    message: string
  }
}

function App() {
  const { count, message } = useSelector(
    (state: IStoreState) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )

  return (
    <div className="App">
      <h2>当前计数: {count}</h2>
      <h2>当前消息: {message}</h2>
      <Suspense fallback="">
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default memo(App)
