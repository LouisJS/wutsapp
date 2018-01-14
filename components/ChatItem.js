import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Touchable from 'react-native-platform-touchable';

const ChatItem = ({profile, name, lastmessage, onClick}) => {
  return (
    <Touchable
      onPress={onClick}
      background={Touchable.Ripple('blue')}>
      <View
        style={chat.container}
      >
        <Image
          style={chat.profile}
          source={{uri: profile}}
        />
        <View>
          <Text style={chat.name}> { name } </Text>
          <Text> { lastmessage} </Text>
        </View>
      </View>
    </Touchable>
  );
}

ChatItem.defaultProps = {
  onClick: () => null,
};

ChatItem.propTypes = {
  profile: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastmessage: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

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

export default ChatItem;