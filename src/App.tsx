import React, { useState, version } from 'react'
import Chrome from './icon/Chrome.svg'
import Firefox from './icon/Firefox.svg'
import Safari from './icon/Safari.svg'
import './App.less'
import { getCurrentBrowserVersion, BrowserMap } from './browser'
import * as dayjs from 'dayjs'

function App() {
  const [count, setCount] = useState(0)
  const [browser] = useState(getCurrentBrowserVersion())
  const currentDate = new Date()

  if (!browser) {
    return
  }

  const { version, name } = browser

  const latestVersion = BrowserMap.get(name)?.get(version)

  return (
    <div className="how-old-browser">
      <div className="browser">
        <h1>Your use {name || 'Unknow'} <sup>{version}</sup> </h1>
        {name === 'Chrome' && <img src={Chrome} />}
        {name === 'Firefox' && <img src={Firefox} />}
        {name === 'Safari' && <img src={Safari} />}
      </div>
      <div className="version">
        {name} - {version}
      </div>
      {latestVersion} - {dayjs(currentDate).format('YYYY-MM-DD')}
    </div>
  )
}

export default App
