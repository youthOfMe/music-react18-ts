import React, { Suspense, memo } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'
import { useHYSelector, useAppDispatch, shallowEqualApp } from './store'
import { changeMessageAction } from './store/modules/counter'
// import type { IRootState } from './store'

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
  const dispatch = useAppDispatch()

  const { count, message } = useHYSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message,
    }),
    shallowEqualApp,
  )

  /** 时间处理函数 */
  function handleChangeMessage() {
    // console.log('handleChangeMessage')
    dispatch(changeMessageAction('555'))
  }

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">我得关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>当前计数: {count}</h2>
      <h2>当前消息: {message}</h2>
      <button onClick={handleChangeMessage}>改变消息</button>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default memo(App)
