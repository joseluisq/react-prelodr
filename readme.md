# react-prelodr [![Build Status](https://travis-ci.org/joseluisq/react-prelodr.svg?branch=master)](https://travis-ci.org/joseluisq/react-prelodr) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
> A [React](https://github.com/facebook/react) component based on [Prelodr](https://github.com/joseluisq/prelodr).

## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Prelodr from 'prelodr'

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
```

Check out [Prelodr](https://github.com/joseluisq/prelodr) for more details.

## License
MIT license

© 2017 [José Luis Quintana](http://git.io/joseluisq)
