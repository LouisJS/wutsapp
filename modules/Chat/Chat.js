import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { data } from '../../helpers/mockData';

class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user.name}`,
  });

  constructor(props){
    super(props);
    this.state = {
      chats: data.chats,
      recipient: this.props.navigation.state.params.user
    }
  }

  render() {
    return (
      <View>
        <Text>Hello there { this.state.recipient.name } </Text>
      </View>
    );
  }
}

export default Chat;