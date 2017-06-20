import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Prelodr from '../'

class App extends Component {
  onClick () {
    const pre = this.refs.myRef

    pre
      .show('Starting...')
      .hide()
      .show('Processing...')
      .hide()
      .show('Finishig...')
      .hide()
  }

  onShown () {
    console.log('When component is shown!')
  }

  onHidden () {
    console.log('When component is hidden!')
  }

  render () {
    return (
      <div>
        <button onClick={this.onClick.bind(this)}>Start</button>

        <Prelodr
          ref='myRef'
          prefixClass='prelodr'
          duration={900}
          onShown={this.onShown}
          onHidden={this.onHidden}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
