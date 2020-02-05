import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store/store'
import AppNavigator from './src/components/Navigation/Navigation'

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}
