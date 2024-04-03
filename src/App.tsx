import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'

function App() {
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
