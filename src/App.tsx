import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  return (
    <div className="App">
      <div>1</div>
      <Suspense fallback="">
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default memo(App)
