import React from 'react'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import { useScreens } from 'react-native-screens';
useScreens();

export default class App extends React.Component {
  render() {
    return (
        <Provider store={Store}>
          <Navigation/>
        </Provider>
    )
  }
}