import React from 'react'
import Prelodr from 'prelodr'

export default class ReactPrelodr extends React.Component {

  static propTypes = {
    container: React.PropTypes.string,
    duration: React.PropTypes.number,
    prefixClass: React.PropTypes.string,
    zIndex: React.PropTypes.number,
    auto: React.PropTypes.bool,
    text: React.PropTypes.string,
    onShown: React.PropTypes.func,
    onHidden: React.PropTypes.func
  }

  static defaultProps = {
    container: 'span',
    duration: 750,
    prefixClass: 'prelodr',
    zIndex: 100,
    auto: false,
    text: 'Loading...',
    onShown: null,
    onHidden: null
  }

  render () {
    const Container = this.props.container

    return <Container ref={ node => this.container = node } />
  }

  componentDidMount () {
    if (!this.prelodr) {
      this.prelodr = Prelodr({
        container: this.container,
        duration: this.props.duration,
        prefixClass: this.props.prefixClass,
        zIndex: this.props.zIndex,
        auto: this.props.auto,
        text: this.props.text
      })
    }

    this.addEventShown()
    this.addEventHidden()
  }

  show = str => this.prelodr.show(str)

  hide = () => this.prelodr.hide()

  getPrelodr = () => this.prelodr

  addEventShown () {
    if (!typeof this.props.onShown === 'function') return

    this.prelodr.on('shown', () => {
      this.setState({ active: true })
      this.props.onShown()
    })
  }

  addEventHidden () {
    if (!typeof this.props.onHidden === 'function') return

    this.prelodr.on('hidden', () => {
      this.setState({ active: false })
       this.props.onHidden()
    })
  }
}
