import * as React from 'react'
import { render, cleanup } from 'react-testing-library'
import Loading from '../loading'

afterEach(cleanup)

describe('<Loading />', () => {
  test('rendered with loading', () => {
    const rendered = render(<Loading loading={true} />)
    expect(rendered).toBeTruthy()
  })

  test('rendered with not loading', () => {
    const rendered = render(<Loading loading={false} />)
    expect(rendered).toBeTruthy()
  })
})
