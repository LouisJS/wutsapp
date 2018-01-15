import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, Keyboard, Platform, Dimensions} from 'react-native';
import { data } from '../../helpers/mockData';
import SocketIOClient from 'socket.io-client';

class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user.name}`,
  });

  constructor(props){
    super(props);
    const user = this.props.navigation.state.params.user;

    this.state = {
      me: data.me,
      recipient: user,
      text: null,
      keyboardVisible: false,
      keyboardHeight: 0,
    }

    this.socket = SocketIOClient('http://localhost:3000');
    this.socket.on('message', this.onReceivedMessage);

    this.initMetadata();
  }

  initMetadata = () => {
    const { me, recipient} = this.state;

    this.socket.emit('loadConversation', {
      me: me,
      recipient: recipient
    });
  }

  componentWillMount () {
    const { chats, recipient } = this.state;
    let eventType = 'Did';

    if (Platform.OS === 'ios') {
      eventType = 'Will';
    }

    this.keyboardDidShowListener = Keyboard.addListener(`keyboard${eventType}Show`, this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener(`keyboard${eventType}Hide`, this._keyboardDidHide);

    if (!chats) {
      this.setState({chats: data.chats[recipient.id] });
    }
    
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = (e) => {
    const dim = {
      keyboardHeight: e.endCoordinates.height,
      normalHeight: Dimensions.get('window').height,
      shortHeight: Dimensions.get('window').height - e.endCoordinates.height,
    }

    this.setState({keyboardVisible: true, keyboardHeight: dim.keyboardHeight});
  }

  _keyboardDidHide = () => {
    

    this.setState({keyboardVisible: false});
  }

  renderMessages = () => {
    const { me, chats, recipient } = this.state;

    const messages = chats.map((chat, index) => 
      <View
        key={index}
        style={[
          style.chat,
          chat.sender === me.id ? style.sent : style.received
        ]}
      >
        <Text> { chat.content } </Text>
      </View>
    );

    return (
      <View style={{padding: 10}}>
        { messages }
      </View>
    );
  }

  sendMessage = () => {
    const {me, text, chats} = this.state;

    console.log('sendMessage');
    const newMessage = {
      'sender': me.id,
      'date': '2018-01-13T14:31:54+00:00',
      'content': text
    };

    this.setState({text: '', chats: [...chats, newMessage]});
    this.socket.emit('message', newMessage);
  }

  // Event listeners
  /**
   * When the server sends a message to this.
   */
  onReceivedMessage = (message) => {
    const {chats} = this.state;
    console.log('Received', message);

    this.setState({chats: [...chats, message]});
  }

  render() {
    console.log('Chats', this.state.chats);
    console.log('recipient', this.state.recipient);

    return (
      <View
        style={{
          flex: 1,
          marginBottom: this.state.keyboardVisible ? this.state.keyboardHeight : 0
        }}
      >           
          <ScrollView>
            { this.renderMessages() }
          </ScrollView>
          <TextInput
            style={{height: 50, paddingHorizontal: 15,backgroundColor: '#eee', borderTopWidth: StyleSheet.hairlineWidth}}
            onChangeText={text => this.setState({text})}
            value={this.state.text}
            onSubmitEditing={() => this.sendMessage()}
            placeholder="Send your message"
            returnKeyType="send"
          />
        </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  chat: {
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#eee',
    marginBottom: 5,
    maxWidth: '75%',
    padding: 5,
  },
  sent: {
    
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    
  },
  received: {
    
    alignSelf: 'flex-start',
    backgroundColor: 'white',
  }
}); 

export default Chat;