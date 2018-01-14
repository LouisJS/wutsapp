import React, {Component} from 'react';
import {View} from 'react-native';
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
    const { navigate } = this.props.navigation;

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
          onClick={() => navigate('Chat', { user: contact })}
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

export default ChatList;