import './index.css'
import { useEffect, useLayoutEffect, useState } from 'react'
import Sidebar from './components/sidebar/sidebar'
import Feed from './components/feed/feed'
import Widgets from './components/widgets/widgets'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  )
}

export default App
