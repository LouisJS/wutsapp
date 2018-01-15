import React from 'react';
import { View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ChatList from './modules/ChatList';
import Chat from './modules/Chat';
import User from './modules/User';

const Routes = {
  ChatList: {
     name: 'ChatList screen',
     description: 'List the conversations with other users',
     screen: ChatList
  },
  Chat: {
     name: 'Chat screen',
     description: 'Screen to chat with someone',
     screen: Chat
  },
  User: {
     name: 'User screen',
     description: 'Screen to see your profile',
     screen: User
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
      },
      headerTintColor: 'white',
      headerBackTitle: null,
    }),
    cardStyle: { backgroundColor: '#F9F9FB' },
  }
);

export default App;
