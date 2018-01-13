import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { data } from '../../helpers/mockData';
import ChatItem from '../../components/ChatItem';

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
        <ChatItem
          key={userId}
          name={contact.name}
          profile={contact.profile}
          lastmessage={chats[userId][lastIndex].content}
        />
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



const style = StyleSheet.create({
});

export default ChatList;