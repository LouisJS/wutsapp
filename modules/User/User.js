import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { data } from '../../helpers/mockData';

class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `My Profile`,
  });

  constructor(props){
    super(props);
    this.state = {
      me: data.me,
    }
  }

  render() {
    const { profile, phone, name } = this.state.me;

    return (
      <View>
        <Image
          style={user.profile}
          source={{uri: profile}}
        />
        <View style={user.informations}>
          <View style={user.section}>
            <Text style={user.text}>
              { name }
            </Text>
          </View>
          <View style={user.section}>
            <Text style={user.text}>
              { phone }
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const user = StyleSheet.create({
  profile: {
    alignSelf: 'center',
    width: 140,
    height: 140,
    borderRadius: 70,
    marginVertical: 20,
  },
  informations: {
    borderTopWidth: 1,
    borderColor: 'black',
  },
  section: {
    height: 35,
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 16,
    paddingVertical: 5,
    justifyContent: 'center'
  },
  text: {
    fontSize: 22,
    lineHeight: 22,
    fontWeight: '300',
  },
});

export default User;