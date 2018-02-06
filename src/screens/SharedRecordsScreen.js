import React from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { List, ListItem } from 'react-native-elements';

import { CoralHeader, colors } from '../ui.js';

const friendList = [
  {
    name: 'Dr. Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    records: {value: "2 records"}
  },
  {
    name: 'Dr. Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    records: {value: "1 record"}
  }
];
export class SharedRecordsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.bg }}>
        <CoralHeader title='Shared Medical Records' subtitle='You have shared your records with the people below.'/>
        <ScrollView style={{ flex: 1}}>
          <List containerStyle={{marginTop: 0, marginBottom: 20, borderTopWidth: 0, borderBottomWidth: 0}}>
            {
              friendList.map((l, i) => (
                <ListItem
                  roundAvatar
                  avatar={{uri:l.avatar_url}}
                  key={i}
                  title={l.name}
                  badge={l.records}
                  chevronColor={colors.red}
                />
              ))
            }
          </List>
          <View style={{ flex: 1, marginBottom: 20}}>
            <Button
              backgroundColor={colors.red}
              icon={{name: 'qrcode', type: 'font-awesome'}}
              title='Receive Records From Others'
              onPress={() => this.props.navigation.navigate('QRCode')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
