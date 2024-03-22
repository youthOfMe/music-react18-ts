import React, { Suspense, memo } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'
import { useAppSelector, useAppDispatch, shallowEqualApp } from './store'
import { changeMessageAction } from './store/modules/counter'
import AppHeader from './components/app-header'
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

  const { count, message } = useAppSelector(
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
      <AppHeader></AppHeader>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default memo(App)
