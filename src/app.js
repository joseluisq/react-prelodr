import React from 'react'
import ReactDOM from 'react-dom'
import Prelodr from './prelodr'

class App extends React.Component {

  onClick () {
    const pre = this.refs.prelodr

    pre
    .show('Starting...').hide()
    .show('Processing...').hide()
    .show('Finishig...').hide()

    pre.onShown(() => {
      console.log('Shown!')
    })

    pre.onHidden(() => {
      console.log('Hidden!')
    })
  }

  render () {
    return <div>
      <button onClick={this.onClick.bind(this)}>Start</button>
      <Prelodr ref='prelodr' prefixClass='prelodr' duration={900} />
    </div>
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
