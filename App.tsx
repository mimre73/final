import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {NativeBaseProvider} from 'native-base';
import './src/localization/i18n.config';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/Store';
import theme from './src/Theme';
import MainNavigator from './src/Navigation/MainNavigator';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <GestureHandlerRootView style={styles.container}>
            <MainNavigator />
          </GestureHandlerRootView>
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
});
export default App;
