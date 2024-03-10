import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import { shallowEqual, useSelector } from 'react-redux'
import store from './store'
import type { IRootState } from './store'

// interface IStoreState {
//   counter: {
//     count: number
//     message: string
//   }
// }

// const state = store.getState()
// type GetStatenType = typeof store.getState
// type IRootState = ReturnType<GetStatenType>

function App() {
  const { count, message } = useSelector(
    (state: IRootState) => ({
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
