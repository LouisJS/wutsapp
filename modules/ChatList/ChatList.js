import React, {Component} from 'react';
import {View, ScrollView, Image} from 'react-native';
import { data } from '../../helpers/mockData';
import ChatItem from '../../components/ChatItem';
import Touchable from 'react-native-platform-touchable';

class ChatList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Chat List',
    headerRight: 
      <Touchable onPress={() => navigation.navigate('User')}>
        <Image
          source={require('./user.png')}
          style={[{height: 24, width: 24, marginRight: 16}]}
        />
      </Touchable>
  });

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
      <ScrollView>
        { this.renderChatPreviews() }
      </ScrollView>
    );
  }
}

export default ChatList;