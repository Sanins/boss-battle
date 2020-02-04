import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/counterReducer'
import AppNavigator from './components/Navigation/Navigation'

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}
