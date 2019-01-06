import React from 'react'
import { render } from 'react-dom'

import './styles.scss'

import App from '~components/App'

import { store } from '~store/createStore'
import { Provider } from 'react-redux'

const renderRoot = Component => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('app')
  )
}

renderRoot(App)
