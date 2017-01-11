/* global describe, it, expect, jest */

import React from 'react'
import Prelodr from '../src/prelodr'
import { mount } from 'enzyme'

jest.useFakeTimers()

const myShowMock = jest.fn()
const myHideMock = jest.fn()
const wrapper = mount(
  <Prelodr
    prefixClass='prelodr'
    duration={900}
    zIndex={200}
    text='Reacting...'
    onShown={myShowMock}
    onHidden={myHideMock}
  />
)

describe('react-prelodr test suite', () => {
  it('should render without throwing an error', () => {
    expect(wrapper.props()).toMatchObject({
      prefixClass: 'prelodr',
      duration: 900,
      zIndex: 200,
      text: 'Reacting...',
      auto: false,
      container: 'span'
    })
  })

  const str = 'Changing...'
  const node = wrapper.getNode()

  it('api should be defined', () => {
    expect(node.getPrelodr()).toBeDefined()
  })

  it('api should be defined', () => {
    node.show(str).hide()
    expect(wrapper.text()).toContain(str)
  })

  it('mock `shown` event', () => {
    jest.runAllTimers()
    expect(myShowMock).toBeCalled()
    expect(myShowMock.mock.calls.length).toBe(1)
  })

  it('mock `hidden` event', () => {
    expect(myHideMock).toBeCalled()
    expect(myHideMock.mock.calls.length).toBe(1)
  })
})
