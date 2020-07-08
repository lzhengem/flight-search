import React from 'react'
import { Provider } from 'react-redux'
import TestRenderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import App from './App'

const mockStore = configureStore([])

describe('My Connected React-Redux Component', () => {
  let store
  let component
  let wrapper
  beforeEach(() => {
    store = mockStore({
      flights: []
    })

    component = TestRenderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    )

    wrapper = component.root.findByProps({ className: 'App' })
  })

  it('should render with given state from Redux store', () => {
    expect(wrapper).toBeTruthy()
  })
})
