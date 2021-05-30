import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Router } from 'react-router-dom'
import Nav from './components/Nav'
import AppRoutes from './components/AppRoutes'
import './styles.css'

const Warning = React.lazy(() => import('./components/Testing'))

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    this.add = this.add.bind(this)
    this.minus = this.minus.bind(this)
  }

  add() {
    this.setState(state => ({ count: this.state.count + 1 }))
  }
  minus() {
    this.setState(state => ({ count: this.state.count - 1 }))
  }
  render() {
    const { count } = this.state
    // debugger
    return (
      <div>
        <Nav />
        <AppRoutes />
        <h1>React Starter</h1>
        <p>Simple alternative to the awesome create-react-app</p>
        <p>
          {count > 5 ? (
            <React.Suspense fallback={null}>
              <Warning />
            </React.Suspense>
          ) : null}
          Count {count}
        </p>
        <div className="buttons">
          <button onClick={this.add}> + </button>
          <button onClick={this.minus}> - </button>
        </div>
      </div>
    )
  }
}
// call to hot receives arg called 'module', which returns function, we then call that function, passing in App
export default hot(module)(App)

// same as
// const hotFunction = hot(module)
// export default hotFunction(App)
