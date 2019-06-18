import * as React from 'react'
import { render, cleanup } from 'react-testing-library'
import NotFound from '../not-found'

afterEach(cleanup)

describe('<NotFound />', () => {
  test('rendered', () => {
    const rendered = render(<NotFound />)
    expect(rendered).toBeTruthy()
  })
})
