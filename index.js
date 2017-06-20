import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Prelodr from 'prelodr'

export default class ReactPrelodr extends Component {
  static propTypes = {
    container: PropTypes.string,
    duration: PropTypes.number,
    prefixClass: PropTypes.string,
    zIndex: PropTypes.number,
    auto: PropTypes.bool,
    text: PropTypes.string,
    onShown: PropTypes.func,
    onHidden: PropTypes.func
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

    return <Container ref={node => (this.container = node)} />
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
    this.prelodr.on('shown', () => {
      this.setState({ active: true })

      if (this.props.onShown && typeof this.props.onShown === 'function') {
        this.props.onShown()
      }
    })
  }

  addEventHidden () {
    this.prelodr.on('hidden', () => {
      this.setState({ active: false })

      if (this.props.onHidden && typeof this.props.onHidden === 'function') {
        this.props.onHidden()
      }
    })
  }
}
