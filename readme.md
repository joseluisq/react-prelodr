# react-prelodr [![Build Status](https://travis-ci.org/joseluisq/react-prelodr.svg?branch=master)](https://travis-ci.org/joseluisq/react-prelodr) [![Coverage Status](https://coveralls.io/repos/github/joseluisq/react-prelodr/badge.svg?branch=master)](https://coveralls.io/github/joseluisq/react-prelodr?branch=master) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
> A [React](https://github.com/facebook/react) component based on [Prelodr](https://github.com/joseluisq/prelodr).

## Install

```sh
npm install react-prelodr --save-dev
```

## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Prelodr from 'react-prelodr'

class App extends React.Component {

  onClick () {
    // Get the wrapper component reference
    const pre = this.refs.myRef

    // You can also get the Prelodr instance for access to API (optional)
    const PrelodrInstance = pre.getPrelodr()

    // Play
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
    return <div>
      <button onClick={this.onClick.bind(this)}>Show Prelodr</button>

      <Prelodr ref='myRef'
        prefixClass='prelodr'
        duration={800}
        onShown={this.onShown}
        onHidden={this.onHidden}
      />
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
