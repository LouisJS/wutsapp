import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { data } from '../../helpers/mockData';

class ChatList extends Component {
  static navigationOptions = {
    title: 'Chat List'
  };

  constructor(props){
    super(props);

    this.state = {
      contacts: data.contacts,
      chats: data.chats,
    }
  }

  renderChatPreviews = () => {
    const { contacts, chats } = this.state;

    const userIds = Object.keys(chats);
    const chatPreviews = userIds.map((userId) => {
      const contact = contacts.find((contact) => contact.id === userId);

      const lastIndex = chats[userId].length - 1;

      return (
        <View
          key={{userId}}
          style={chat.container}
        >
          <Image
            style={chat.profile}
            source={{uri: contact.profile}}
          />
          <View>
            <Text style={chat.name}> { contact.name } </Text>
            <Text> { chats[userId][lastIndex].content} </Text>
          </View>
        </View>
      );
    });

    return (
      <View>
        { chatPreviews }
      </View>
    );
  }

  render() {
    return (
      <View>
        { this.renderChatPreviews() }
      </View>
    );
  }
}

const chat = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#888888',
    paddingHorizontal: 16,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 18,
    paddingBottom: 5,
  },
});

const style = StyleSheet.create({
});

export default ChatList;