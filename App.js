import React from 'react';
import { View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ChatList from './modules/ChatList';

const Routes = {
  ChatList: {
     name: 'ChatList screen',
     description: 'List the conversations with other users',
     screen: ChatList
  }
}

/* DEBUG SETTINGS */

console.disableYellowBox = true;

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
       barStyle="light-content"
      />
      <AppNavigator />
    </View>
  );
}

const AppNavigator = StackNavigator(
  {
    ...Routes,
    Index: {
      screen: ChatList
    }
  },
  {
    initialRouteName: 'Index',
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: 'teal',
      },
      headerTitleStyle: {
        color: 'white',
      }
    }),
    cardStyle: { backgroundColor: '#F9F9FB' },
  }
);

export default App;
