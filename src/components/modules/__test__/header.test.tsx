import * as React from 'react'
import { MemoryRouter } from 'react-router'
import { render, cleanup } from 'react-testing-library'
import Header from '../header'

afterEach(cleanup)

describe('<Header />', () => {
  test('rendered', () => {
    const rendered = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    expect(rendered).toBeTruthy()
  })
})
