import * as React from 'react'
import { render, cleanup } from 'react-testing-library'
import Home from '../home'

afterEach(cleanup)

describe('<Home />', () => {
  test('rendered', () => {
    const rendered = render(<Home />)
    expect(rendered).toBeTruthy()
  })
})
