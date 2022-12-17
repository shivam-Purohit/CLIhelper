import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import MacBookPro141 from './views/mac-book-pro141'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={MacBookPro141} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
