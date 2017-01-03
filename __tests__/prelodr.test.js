/* global describe, it, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import Prelodr from '../src/prelodr'

function createNodeMock (element) {
  if (element.type === 'span') {
    return document.body
  }

  return null
}

describe('Test suite', function () {
  it('should render without throwing an error', () => {
    const options = {createNodeMock}
    const component = renderer.create(
      <Prelodr prefixClass='prelodr' duration={900} />,
      options
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
