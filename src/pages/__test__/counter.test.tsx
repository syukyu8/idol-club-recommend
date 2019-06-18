import * as React from 'react'
import { render, cleanup } from 'react-testing-library'
import { StoreContext } from 'redux-react-hook'
import Counter from '../counter'
import store from '../../store'

afterEach(cleanup)

describe('<Counter />', () => {
  test('rendered', () => {
    const rendered = render(
      <StoreContext.Provider value={store}>
        <Counter />
      </StoreContext.Provider>
    )
    expect(rendered).toBeTruthy()
  })

  // test('click `+1`, then counter-count is 1', () => {
  //   const rendered = render(
  //     <StoreContext.Provider value={store}>
  //       <Counter />
  //     </StoreContext.Provider>
  //   )
  //   fireEvent.click(rendered.getByText('+1'))
  //   expect(rendered.getByTestId('counter-count').textContent).toBe('1')
  // })

  // test('click `clear`, then counter-count is 0', () => {
  //   const rendered = render(
  //     <StoreContext.Provider value={store}>
  //       <Counter />
  //     </StoreContext.Provider>
  //   )
  //   fireEvent.click(rendered.getByText('clear'))
  //   expect(rendered.getByTestId('counter-count').textContent).toBe('0')
  // })
})
