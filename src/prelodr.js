/* global module */

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Prelodr from 'prelodr'

export default class ReactPrelodr extends Component {

  static propTypes = {
    container: PropTypes.string,
    duration: PropTypes.number,
    prefixClass: PropTypes.string
  }

  static defaultProps = {
    container: 'span',
    duration: 750,
    prefixClass: 'prelodr'
  }

  render () {
    const Container = this.props.container
    return <Container ref={node => this.container = node} />
  }

  componentDidMount () {
    if (!this.pre) {
      this.pre = Prelodr({
        container: this.container,
        duration: this.props.duration,
        prefixClass: this.props.prefixClass
      })
    }
  }

  show (str) {
    this.setState({ active: true })
    this.pre.show(str)
    return this.pre
  }

  hide () {
    this.setState({ active: false })
    this.pre.hide()
    return this.pre
  }

  text (str) {
    this.pre.text(str)
    return this.pre
  }

  getInstance () {
    return this.pre
  }

  onShown (fn) {
    this.pre.on('shown', fn)
    return this.pre
  }

  onHidden (fn) {
    this.pre.on('hidden', fn)
    return this.pre
  }
}
