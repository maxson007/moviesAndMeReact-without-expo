import React from 'react'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import { useScreens } from 'react-native-screens';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import { YellowBox } from 'react-native';
useScreens();

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['RCTRootView cancelTouches']);

export default class App extends React.Component {
  render() {
      let persistor = persistStore(Store)

      return (
          <Provider store={Store}>
              <PersistGate persistor={persistor}>
                  <Navigation />
              </PersistGate>
          </Provider>
    )
  }
}
