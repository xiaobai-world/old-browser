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
    return <div></div>
  }

  const { version, name } = browser

  const current = BrowserMap.get(name)?.get(version)
  const latest = Array.from(BrowserMap.get(name)?.entries() || []).pop()

  if (!latest || !current) {
    return <div></div>
  }

  const num = dayjs(latest[1]).diff(current, 'month')

  return (
    <div className="how-old-browser">
      <div className="browser">
        <h1>Your use {name || 'Unknow'} <sup>{version}</sup> </h1>
        {name === 'Chrome' && <img src={Chrome} />}
        {name === 'Firefox' && <img src={Firefox} />}
        {name === 'Safari' && <img src={Safari} />}
      </div>

      <div className="level">
        Your browser version:
        {
          name !== 'Safari' &&
          (num <= 1 ? <span className="very-new">very new</span>
            : num <= 2 ? <span className="relatively-new">relatively new</span>
              : num <= 5 ? <span className="older">older</span>
                : <span className="very-old">very old</span>
          )
        }
        {
          name === 'Safari' && (
            num ===0 ? <span className="very-new">very new</span>
              : num <= 1 ? <span className="relatively-new">relatively new</span>
                : num <= 2 ? <span className="older">older</span>
                  : <span className="very-old">very old</span>
          )
        }
      </div>
      <div className="version">
        <span>current: {version}, latest: {latest[0]}</span>
      </div>
    </div>
  )
}

export default App
