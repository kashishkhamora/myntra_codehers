import React from 'react'
import { createAppContainer } from 'react-navigation'
import AppNavigator from './components/navigation/Navigator'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


const AppContainer = createAppContainer(AppNavigator)

const App = () => <AppContainer />

export default App
