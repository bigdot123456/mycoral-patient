import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import QRCode from 'react-native-qrcode';
import { CoralHeader, colors } from '../ui.js';
import { NavigationActions } from 'react-navigation';

const address = '0x1234567896d4a755815f9cb19e1acc8565a0c2ac';

const backAction = NavigationActions.back();

export class QRCodeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.bg  }}>
        <CoralHeader title='Account QR Code' subtitle='Share this with labs, doctors, and friends.'/>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <QRCode
            value={address}
            size={300}
            bgColor='#333'
            fgColor={colors.bg}/>
          <Text style={{ margin: 20, fontSize: 12, color: 'rgba(0, 0, 0, 0.6)' }}>{address}</Text>
        </View>
        <Button
          style={{ marginBottom: 20 }}
          backgroundColor={colors.red}
          icon={{name: 'ios-arrow-back', type: 'ionicon'}}
          title='Back'
          onPress={() => this.props.navigation.dispatch(backAction)}
        />

      </View>
    );
  }
}