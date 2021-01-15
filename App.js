import React from 'react';

// Custom Fonts
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font'

// Redux State Management
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import root from './store/reducers/root'

// Navigation
import AuthStack from './navigation/AuthStack'


// Redux Store Construction
const store = createStore(root)

export default function App() {

  const [fontsLoaded] = useFonts({
    "schwifty": require('./fonts/get-schwifty.ttf'),
    'adult-swim': require('./fonts/adult_swim.ttf'),
    "cartoon": require('./fonts/cartoon.ttf'),
    "shrill": require('./fonts/shrill.ttf'),
    "scribble": require('./fonts/scribble.ttf')
  })

  if (!fontsLoaded){
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <AuthStack />
   </Provider>
  );
}
